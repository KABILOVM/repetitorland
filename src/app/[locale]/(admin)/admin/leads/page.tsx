import { setRequestLocale } from "next-intl/server";
import { LeadsTable } from "@/components/admin/leads-table";

export default async function AdminLeadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading font-bold text-gray-900">
          Заявки
        </h1>
      </div>
      <LeadsTable />
    </div>
  );
}
