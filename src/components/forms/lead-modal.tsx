"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { LeadForm } from "./lead-form";
import { cn } from "@/lib/utils";

interface LeadModalProps {
  trigger: React.ReactNode;
  courseId?: string;
  branchId?: string;
}

export function LeadModal({ trigger, courseId, branchId }: LeadModalProps) {
  const t = useTranslations("cta");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>

      {/* Backdrop + Dialog */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal content */}
          <div
            className={cn(
              "relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6",
              "animate-in fade-in zoom-in-95 duration-200"
            )}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="size-5 text-gray-500" />
            </button>

            <h2 className="text-xl font-heading font-bold text-gray-900 mb-1">
              {t("title")}
            </h2>
            <p className="text-sm text-gray-500 mb-6">{t("subtitle")}</p>

            <LeadForm
              courseId={courseId}
              branchId={branchId}
              onSuccess={() => {
                setTimeout(() => setOpen(false), 3000);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
