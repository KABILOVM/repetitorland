"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Lead } from "@/types";

const statusLabels: Record<Lead["status"], string> = {
  new: "Новая",
  contacted: "Связались",
  enrolled: "Записан",
  rejected: "Отказ",
};

const statusColors: Record<Lead["status"], string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  enrolled: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setLeads(data as Lead[]);
      }
    } catch {
      // Supabase not configured
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: Lead["status"]) {
    try {
      const supabase = createClient();
      await supabase.from("leads").update({ status }).eq("id", id);
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status } : l))
      );
    } catch {
      // Handle error
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
        <p className="text-gray-500">Загрузка...</p>
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
        <p className="text-gray-500">
          Заявок пока нет. Они появятся здесь, когда посетители отправят форму на сайте.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                Дата
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                Имя
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                Телефон
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                Комментарий
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">
                Статус
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {lead.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  <a
                    href={`tel:${lead.phone.replace(/\s/g, "")}`}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {lead.phone}
                  </a>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 max-w-[200px] truncate">
                  {lead.message || "—"}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead.id, e.target.value as Lead["status"])
                    }
                    className={cn(
                      "text-xs font-medium rounded-full px-3 py-1 border-0 cursor-pointer",
                      statusColors[lead.status]
                    )}
                  >
                    {Object.entries(statusLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
