import { setRequestLocale } from "next-intl/server";

export default async function AdminBranchesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-gray-900 mb-6">
        Управление филиалами
      </h1>
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
        <p className="text-gray-500">
          CRUD-интерфейс для филиалов. Подключите Supabase для работы с данными.
        </p>
      </div>
    </div>
  );
}
