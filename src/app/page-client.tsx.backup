"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const copy = locale;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">
      <header className="relative isolate overflow-hidden bg-gradient-to-r from-slate-50 via-slate-100 to-zinc-200 text-slate-900">
        <div className="absolute inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#c2a8b5]/40 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
              The Punctuation Mark
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              喵标点喵屋 · Meow Punctuation Cattery
            </h1>
          </motion.div>
          <motion.nav
            className="flex flex-wrap items-center gap-3 text-sm text-slate-700"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                {item.label[copy]}
              </Link>
            ))}
            <LanguageToggle locale={locale} onChange={setLocale} />
          </motion.nav>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-6 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-slate-500">
                {hero.title[copy]}
              </p>
              <p className="mt-3 text-3xl font-semibold leading-tight">
                {hero.subtitle[copy]}
              </p>
              <p className="mt-4 text-base text-slate-600">
                {hero.description[copy]}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full border border-sky-200 bg-sky-300/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-200/80 backdrop-blur transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                {hero.ctas.primary[copy]}
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-500/40 px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-900 hover:text-slate-50"
              >
                {hero.ctas.secondary[copy]}
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="absolute inset-y-0 left-6 hidden w-px bg-slate-200 lg:block" />
            <div className="grid gap-6 rounded-3xl bg-white/70 p-6 shadow-lg shadow-slate-200/60">
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
          </motion.div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16" id="about">
        <motion.section
          className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {storyCallouts.map((callout) => (
            <motion.div
              key={callout.title.en}
              className="rounded-2xl border border-white/30 bg-white/10 p-6 text-slate-900 shadow-lg shadow-slate-200/60"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          id="contact-card"
          className="grid gap-10 rounded-3xl bg-white/80 p-10 shadow-2xl shadow-slate-200/60 lg:grid-cols-[1.2fr_0.8fr]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
              {brandStory.headline[copy]}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
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
              <p>
                {locale === "zh"
                  ? "欢迎随时与我们联系。"
                  : "Bilingual (ZH/EN) support with one-tap language switch."}
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="strengths"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "我们的优势" : "Our Strengths"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>

        <motion.section
          id="breeds"
          className="rounded-3xl bg-gradient-to-br from-white to-slate-100 p-10 shadow-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "主要品种" : "Signature Breeds"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>

        <motion.section
          id="kittens"
          className="space-y-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "精选小猫" : "Featured Kittens"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>

        <motion.section
          className="grid gap-8 rounded-3xl bg-gradient-to-br from-sky-100 via-sky-200 to-slate-100 p-10 text-slate-900 shadow-2xl shadow-slate-200/70 lg:grid-cols-2"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-600">
              {locale === "zh" ? "VIP 安家礼包" : "VIP Welcome Kit"}
            </p>
            <h2 className="text-3xl font-semibold">
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
                ? "添加微信 “Katieb07455403442”，备注您喜欢猫咪的类型，可第一时间收到宝宝开放名单与礼包权益。"
                : 'Add WeChat “Katieb07455403442” with a note about your preferred kitten type to get the latest openings and perks.'}
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
        </motion.section>

        <motion.section
          id="process"
          className="space-y-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "领养流程" : "Adoption Journey"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>

        <motion.section
          id="faq"
          className="rounded-3xl border border-slate-100 bg-white/70 p-10 shadow-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>

        <motion.section
          id="testimonials"
          className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "口碑" : "Testimonials"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>

        <motion.section
          className="rounded-3xl bg-gradient-to-br from-slate-50 via-slate-100 to-zinc-100 p-10 text-slate-900"
          id="contact"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
              {locale === "zh" ? "联系我们" : "Get in Touch"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
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
        </motion.section>
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

