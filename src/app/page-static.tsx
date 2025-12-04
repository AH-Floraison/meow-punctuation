// 完全静态的服务器端渲染版本 - 用于测试
import Link from "next/link";

export default function StaticHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">
      <header className="relative isolate overflow-hidden bg-gradient-to-r from-slate-50 via-slate-100 to-zinc-200 text-slate-900">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
              The Punctuation Mark
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              喵标点喵屋 · Meow Punctuation Cattery
            </h1>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-slate-500">
                喵标点喵屋 · The Punctuation Mark
              </p>
              <p className="mt-3 text-3xl font-semibold leading-tight">
                Minuet & Munchkin 的精品之家
              </p>
              <p className="mt-4 text-base text-slate-600">
                猫咪是生活里最温柔的标点，让日常有了节奏与暖意。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full border border-sky-200 bg-sky-300/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-200/80 backdrop-blur transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                联系我们
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-500/40 px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-900 hover:text-slate-50"
              >
                了解猫舍
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16" id="about">
        <section className="grid gap-10 rounded-3xl bg-white/80 p-10 shadow-2xl shadow-slate-200/60 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              1 the punctuation mark
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              喵标点喵屋（The Punctuation Cattery）是一家致力于繁育 Minuet（米努特）的精品猫舍。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-inner">
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
              Contact
            </h3>
            <div className="mt-6 space-y-4 text-sm text-slate-500">
              <p className="font-medium text-slate-700">
                电话 · 07455403442
              </p>
              <p className="font-medium text-slate-700">
                WeChat · Katieb07455403442
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

