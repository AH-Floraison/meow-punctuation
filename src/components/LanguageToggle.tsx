"use client";

import { Locale } from "@/data/siteContent";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  onChange: (locale: Locale) => void;
  className?: string;
};

export function LanguageToggle({ locale, onChange, className }: Props) {
  const nextLocale: Locale = locale === "zh" ? "en" : "zh";
  return (
    <button
      type="button"
      onClick={() => onChange(nextLocale)}
      className={cn(
        "flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/80 backdrop-blur",
        "hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/90",
        className,
      )}
    >
      <span role="img" aria-label="paw" className="text-slate-700">
        🐾
      </span>
      <span className={locale === "zh" ? "text-slate-900" : "text-slate-400"}>
        中文
      </span>
      <span className="text-slate-300">/</span>
      <span className={locale === "en" ? "text-slate-900" : "text-slate-400"}>
        EN
      </span>
    </button>
  );
}



