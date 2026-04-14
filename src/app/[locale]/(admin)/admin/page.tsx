import { setRequestLocale } from "next-intl/server";
import { ClipboardList, BookOpen, Users, MessageSquare } from "lucide-react";

export default async function AdminDashboard({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const stats = [
    { label: "Новые заявки", value: "—", icon: ClipboardList, color: "bg-blue-50 text-blue-600" },
    { label: "Активные курсы", value: "7", icon: BookOpen, color: "bg-green-50 text-green-600" },
    { label: "Преподаватели", value: "2", icon: Users, color: "bg-purple-50 text-purple-600" },
    { label: "Отзывы", value: "2", icon: MessageSquare, color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-gray-900 mb-6">
        Дашборд
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="size-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Быстрые действия
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="/ru/admin/leads"
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-200 hover:bg-brand-50 transition-colors"
          >
            <ClipboardList className="size-5 text-brand-500" />
            <span className="text-sm font-medium">Просмотр заявок</span>
          </a>
          <a
            href="/ru/admin/courses"
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-200 hover:bg-brand-50 transition-colors"
          >
            <BookOpen className="size-5 text-brand-500" />
            <span className="text-sm font-medium">Управление курсами</span>
          </a>
          <a
            href="/ru/admin/posts"
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-200 hover:bg-brand-50 transition-colors"
          >
            <MessageSquare className="size-5 text-brand-500" />
            <span className="text-sm font-medium">Написать статью</span>
          </a>
        </div>
      </div>
    </div>
  );
}
