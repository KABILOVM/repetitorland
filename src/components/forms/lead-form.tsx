"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { leadSchema, type LeadFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  courseId?: string;
  branchId?: string;
  className?: string;
  onSuccess?: () => void;
}

export function LeadForm({
  courseId,
  branchId,
  className,
  onSuccess,
}: LeadFormProps) {
  const t = useTranslations("form");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      course_id: courseId || "",
      branch_id: branchId || "",
      message: "",
    },
  });

  async function onSubmit(data: LeadFormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      reset();
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("text-center py-8", className)}>
        <CheckCircle className="size-12 text-green-500 mx-auto mb-4" />
        <p className="text-lg font-semibold text-gray-900">{t("success")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
    >
      <div>
        <Label htmlFor="name">{t("name")}</Label>
        <Input
          id="name"
          placeholder={t("name")}
          {...register("name")}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">{t("phone")}</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+992 ___ ___ ___"
          {...register("phone")}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Hidden fields */}
      <input type="hidden" {...register("course_id")} />
      <input type="hidden" {...register("branch_id")} />

      <div>
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea
          id="message"
          placeholder={t("message")}
          rows={3}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-500 hover:bg-brand-600 text-white h-11 rounded-xl text-base"
      >
        {status === "loading" ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          t("submit")
        )}
      </Button>

      {status === "error" && (
        <p className="text-xs text-red-500 text-center">
          Произошла ошибка. Попробуйте ещё раз.
        </p>
      )}
    </form>
  );
}
