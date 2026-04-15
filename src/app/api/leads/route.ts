import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { sendTelegramNotification } from "@/lib/telegram";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const { success } = rateLimit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    // Parse and validate
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, course_id, branch_id, message } = result.data;

    // Save to Supabase (graceful — don't fail if DB is not set up yet)
    let leadId: string | null = null;
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("leads")
        .insert({
          name,
          phone,
          course_id: course_id || null,
          branch_id: branch_id || null,
          message: message || null,
          source: "website",
          status: "new",
        })
        .select("id")
        .single();

      if (!error && data) {
        leadId = data.id;
      }
    } catch {
      // Supabase not configured yet — continue to send Telegram
      console.log("Supabase insert skipped (not configured)");
    }

    // Send Telegram notification (graceful)
    try {
      await sendTelegramNotification({
        name,
        phone,
        course: course_id || undefined,
        branch: branch_id || undefined,
        message: message || undefined,
        source: "website",
      });
    } catch {
      console.log("Telegram notification skipped");
    }

    return NextResponse.json({ success: true, id: leadId });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
