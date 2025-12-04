"use client";

import Link from "next/link";
import { useState } from "react";
import {
  adoptionSteps,
  brandStory,
  breeds,
  contact,
  faq,
  hero,
  Locale,
  strengths,
  storyCallouts,
  kittens,
  testimonials,
} from "@/data/siteContent";
import { LanguageToggle } from "@/components/LanguageToggle";

const navItems = [
  { id: "about", label: { zh: "关于猫舍", en: "About" } },
  { id: "strengths", label: { zh: "优势", en: "Strengths" } },
  { id: "breeds", label: { zh: "品种", en: "Breeds" } },
  { id: "process", label: { zh: "领养流程", en: "Adoption" } },
  { id: "faq", label: { zh: "常见问题", en: "FAQ" } },
  { id: "contact", label: { zh: "联系", en: "Contact" } },
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = locale;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">
      <header className="relative isolate overflow-hidden bg-gradient-to-r from-slate-50 via-slate-100 to-zinc-200 text-slate-900">
        <div className="absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#c2a8b5]/40 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-white/60 rounded-lg transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
                The Punctuation Mark
              </p>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                喵标点喵屋 · Meow Punctuation Cattery
              </h1>
            </div>
          </div>
          <nav className="hidden lg:flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-slate-700 transition hover:bg-white/60 hover:text-slate-900"
              >
                {item.label[copy]}
              </Link>
            ))}
            <LanguageToggle locale={locale} onChange={setLocale} />
          </nav>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`absolute inset-y-0 left-0 w-3/4 bg-gradient-to-br from-sky-200/90 via-sky-300/85 to-sky-200/90 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full p-6 pt-12">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-slate-800 p-2 hover:bg-white/40 rounded-lg transition"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col gap-1 mt-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-800 text-lg font-medium py-4 px-4 border-b border-slate-300/40 hover:bg-white/50 transition-all duration-200"
                    style={{
                      animation: isMenuOpen
                        ? `slideInLeft 0.3s ease-out ${index * 0.05 + 0.2}s both`
                        : "none",
                    }}
                  >
                    {item.label[copy]}
                  </Link>
                ))}
                <div
                  className="mt-4 pt-4 border-t border-slate-300/40"
                  style={{
                    animation: isMenuOpen
                      ? `slideInLeft 0.3s ease-out ${navItems.length * 0.05 + 0.2}s both`
                      : "none",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
                    className="flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/60 backdrop-blur px-5 py-2 text-sm font-medium text-slate-800 hover:bg-white/80 transition shadow-sm"
                  >
                    <span role="img" aria-label="paw">
                      🐾
                    </span>
                    <span className={locale === "zh" ? "text-slate-900 font-semibold" : "text-slate-600"}>
                      中文
                    </span>
                    <span className="text-slate-400">/</span>
                    <span className={locale === "en" ? "text-slate-900 font-semibold" : "text-slate-600"}>
                      EN
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10 px-4 sm:px-6 pb-12 sm:pb-20 pt-4 sm:pt-6 lg:flex-row lg:items-start lg:justify-center">
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:flex-1 lg:max-w-xl lg:mx-auto">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-slate-500">
                {hero.title[copy]}
              </p>
              <p className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight">
                {hero.subtitle[copy]}
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                {hero.description[copy]}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="rounded-full border border-sky-200 bg-sky-300/70 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-sky-200/80 backdrop-blur transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                {hero.ctas.primary[copy]}
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-500/40 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-slate-800 transition hover:bg-slate-900 hover:text-slate-50"
              >
                {hero.ctas.secondary[copy]}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:flex-1 lg:max-w-md lg:mx-auto">
            <div className="grid gap-6 rounded-3xl bg-white/70 p-6 shadow-lg shadow-slate-200/60 w-full">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-2xl shadow-slate-200/70">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
                  🐾 {locale === "zh" ? "官方简介" : "Cattery Intro"}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                  {brandStory.intro[copy]}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 text-slate-900">
                <p className="text-sm font-semibold text-slate-800">
                  CFA · TICA · WCF
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  {brandStory.certifications[copy]}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-700">
                  <span className="rounded-full bg-white/80 px-3 py-1">
                    Minuet
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1">
                    Munchkin
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1">
                    Boutique Scale
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16 lg:gap-20 px-4 sm:px-6 py-8 sm:py-12 lg:py-16" id="about">
        <section className="grid gap-4 rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm lg:grid-cols-3">
          {storyCallouts.map((callout) => (
            <div
              key={callout.title.en}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-slate-900 shadow-lg shadow-slate-200/60 transition hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
                {callout.title[copy]}
              </p>
              <p className="mt-3 text-base text-slate-600">
                {callout.description[copy]}
              </p>
              <p className="mt-4 text-sm font-medium text-slate-900">
                {callout.action[copy]} →
              </p>
            </div>
          ))}
        </section>

        <section
          id="contact-card"
          className="grid gap-6 sm:gap-10 rounded-2xl sm:rounded-3xl bg-white/80 p-6 sm:p-10 shadow-2xl shadow-slate-200/60 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
              {brandStory.headline[copy]}
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">
              1 the punctuation mark
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {brandStory.intro[copy]}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {brandStory.certifications[copy]}
            </p>
            <p className="mt-6 text-base text-slate-500">
              {brandStory.closing[copy]}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-inner">
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
              Contact
            </h3>
            <div className="mt-6 space-y-4 text-sm text-slate-500">
              <p className="font-medium text-slate-700">
                {locale === "zh" ? "电话" : "Phone"} · {contact.phone}
              </p>
              <p className="font-medium text-slate-700">
                WeChat · {contact.wechat}
              </p>
              <p className="text-sm sm:text-base">
                {locale === "zh"
                  ? "欢迎随时与我们联系。"
                  : "Feel free to contact us anytime."}
              </p>
            </div>
          </div>
        </section>

        <section id="strengths">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "我们的优势" : "Our Strengths"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {locale === "zh"
                ? "用科学、温柔与透明，育出最温柔的标点"
                : "Science, kindness, and transparency for the gentlest punctuation"}
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {strengths.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-4xl font-serif text-slate-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title[copy]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description[copy]}
                </p>
                {item.bullets && (
                  <ul className="mt-4 space-y-1 text-sm text-slate-500">
                    {item.bullets.map((bullet) => (
                      <li key={bullet.en} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c2a8b5]" />
                        {bullet[copy]}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section
          id="breeds"
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-slate-100 p-6 sm:p-10 shadow-inner"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "主要品种" : "Signature Breeds"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Minuet & Munchkin
            </h2>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {breeds.map((breed) => (
              <div
                key={breed.name.en}
                className="rounded-2xl border border-slate-200 bg-white/70 p-8"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {breed.name[copy]}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {breed.focus[copy]}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {breed.temperament[copy]}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  CFA / TICA / WCF
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="kittens" className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "精选小猫" : "Featured Kittens"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {locale === "zh"
                ? "当前开放预约 / 领养名单"
                : "Currently Accepting Reservations"}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {kittens.map((kitten) => (
              <div
                key={kitten.id}
                className="flex flex-col rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-200 to-white">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-500">
                    {locale === "zh" ? "等待上传猫咪照片" : "Image coming soon"}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
                    <span>{kitten.status[copy]}</span>
                    <span>VIP</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {kitten.name[copy]}
                  </h3>
                  <p className="text-sm text-slate-600">{kitten.description[copy]}</p>
                  <ul className="space-y-1 text-sm text-slate-500">
                    {kitten.traits.map((trait) => (
                      <li key={trait.en} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c2a8b5]" />
                        {trait[copy]}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                      {locale === "zh" ? "含健康套件" : "Health bundle included"}
                    </p>
                    <a
                      href="#contact"
                      className="rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
                    >
                      {locale === "zh" ? "预约" : "Reserve"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-sky-100 via-sky-200 to-slate-100 p-6 sm:p-10 text-slate-900 shadow-2xl shadow-slate-200/70 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-600">
              {locale === "zh" ? "VIP 安家礼包" : "VIP Welcome Kit"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {locale === "zh"
                ? "预约猫咪，尊享安家组合"
                : "Reserve a kitten, receive a welcome bundle"}
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                •{" "}
                {locale === "zh"
                  ? "定制航空箱 + 安抚毯 + 气味适应包"
                  : "Custom carrier + comfort blanket + scent kit"}
              </li>
              <li>
                •{" "}
                {locale === "zh"
                  ? "双语护猫手册 + 训练卡片"
                  : "Bilingual care handbook + training cards"}
              </li>
              <li>
                •{" "}
                {locale === "zh"
                  ? "前三个月健康保险指引"
                  : "Insurance guidance for first 3 months"}
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-white/70 p-6">
            <p className="text-sm text-slate-700">
              {locale === "zh"
                ? "添加微信 \"Katieb07455403442\"，备注您喜欢猫咪的类型，可第一时间收到宝宝开放名单与礼包权益。"
                : 'Add WeChat "Katieb07455403442" with a note about your preferred kitten type to get the latest openings and perks.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-600">
              <span className="rounded-full border border-slate-400/70 px-4 py-1">
                CFA
              </span>
              <span className="rounded-full border border-slate-400/70 px-4 py-1">
                TICA
              </span>
              <span className="rounded-full border border-slate-400/70 px-4 py-1">
                WCF
              </span>
            </div>
          </div>
        </section>

        <section id="process" className="space-y-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "领养流程" : "Adoption Journey"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {locale === "zh"
                ? "透明、负责、被爱的每一步"
                : "Transparent, responsible steps into love"}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {adoptionSteps.map((step, index) => (
              <div
                key={step.title.en}
                className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-[#c2a8b5]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {step.title[copy]}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description[copy]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white/70 p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {locale === "zh" ? "常见问题" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details
                key={item.question.en}
                className="rounded-2xl border border-slate-100 bg-white px-6 py-4 text-slate-600"
              >
                <summary className="cursor-pointer text-base font-semibold text-slate-900">
                  {item.question[copy]}
                </summary>
                <p className="mt-3 text-sm leading-relaxed">
                  {item.answer[copy]}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "口碑" : "Testimonials"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {locale === "zh"
                ? "喵标点喵屋家庭的真实分享"
                : "Stories from Meow Punctuation Families"}
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.author.en}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-inner"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {item.quote[copy]}
                </p>
                <p className="mt-4 text-sm text-slate-500">{item.detail[copy]}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-400">
                  {item.author[copy]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-slate-100 to-zinc-100 p-6 sm:p-10 text-slate-900"
          id="contact"
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "联系我们" : "Get in Touch"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              {locale === "zh"
                ? "让生活里多一个温柔的标点"
                : "Add a gentle punctuation to your life"}
            </h2>
            <p className="text-sm text-slate-700">
              {locale === "zh"
                ? "电话、微信与邮件皆可联系，咨询全程双语支持。"
                : "Reach us via phone, WeChat, or email—bilingual support throughout."}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Phone
              </p>
              <Link
                href={`tel:${contact.phone}`}
                className="mt-3 block text-xl font-semibold text-slate-900"
              >
                {contact.phone}
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                WeChat
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-900">
                {contact.wechat}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Email
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-900">
                hello@meowpunctuation.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} 1 the punctuation mark · 喵标点喵屋
          </p>
          <p>
            {locale === "zh"
              ? "CFA / TICA / WCF 注册 · Minuet & Munchkin 猫舍"
              : "CFA / TICA / WCF registered · Minuet & Munchkin cattery"}
          </p>
          <p>
            {locale === "zh"
              ? "地址：48A Eagle Wharf Rd, London N1 7ED · hello@meowpunctuation.com"
              : "48A Eagle Wharf Rd, London N1 7ED · hello@meowpunctuation.com"}
          </p>
        </div>
      </footer>
    </div>
  );
}
