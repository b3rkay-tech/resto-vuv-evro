"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 relative z-10">
      <div className="max-w-2xl w-full text-center px-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-10">
            <div className="text-5xl opacity-80">
              🏦
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-[var(--text)]"
          >
            Ресто в евро
          </motion.h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] mb-3 sm:mb-4 font-medium">
            Калкулатор за ресто
          </p>
          <p className="text-base sm:text-lg text-[var(--text-muted)] mb-3 sm:mb-4 max-w-xl mx-auto">
            България прие еврото на 1 януари 2026
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-8 sm:mb-12 max-w-xl mx-auto">
            Поддръжка на лева за преходен период (исторически курс: 1 EUR = 1.95583 BGN)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {[
            { icon: "🏛️", title: "Официално", desc: "Точни банкови данни" },
            { icon: "🇪🇺", title: "Евро зона", desc: "Присъединяване 2026" },
            { icon: "📉", title: "Прозрачно", desc: "Ясно разбиване на рестото" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-glass)] text-left"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <div className="text-base font-bold text-[var(--text)] mb-1">{feature.title}</div>
              <div className="text-xs text-[var(--text-muted)] leading-relaxed">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/calculator"
            className="
              inline-flex items-center justify-center gap-3
              rounded-lg
              bg-[var(--primary)]
              px-10 py-4
              text-base font-bold
              text-white
              shadow-lg
              transition-all duration-300
              hover:bg-[var(--accent-secondary)]
              hover:-translate-y-0.5
              active:translate-y-0
              focus:outline-none focus:ring-4 focus:ring-[var(--ring)]
            "
          >
            <span>Към калкулатора</span>
            <span className="text-xl">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4 text-xs sm:text-sm text-[var(--text-muted)]"
        >
          <p>
            Създадено от <Link href="https://root.surf" target="_blank" className="font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors underline decoration-[var(--accent)]/30 underline-offset-4">Berkay</Link>
          </p>
          <Link
            href="https://github.com/b3rkay-tech"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--text-muted)] hover:text-[var(--text)] transition-all bg-[var(--surface-glass)]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-[10px] sm:text-xs">GitHub</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
