// src/components/Header.tsx
"use client";

import { useState } from "react";
// 修正1: useScroll, useMotionValueEvent を追加インポート
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing'; 

const navKeys = [
  { key: "philosophy", href: "/philosophy" },
  { key: "activities", href: "/activities" },
  { key: "members", href: "/members" },
  { key: "recruit", href: "/recruit" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const t = useTranslations('Navigation'); 
  const locale = useLocale(); 
  
  const pathname = usePathname();
  const router = useRouter();

  // 修正2: トップページかどうかの判定 (next-intlのおかげで "/" だけで判定可能)
  const isHomePage = pathname === "/";

  // 修正3: スクロール量とヘッダーの表示状態の管理
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(isHomePage);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHomePage) {
      setHidden(false); // トップページ以外では常に表示
      return;
    }
    
    // トップページの場合：50px以上スクロールしたら表示
    if (latest > 1300) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ja' ? 'en' : 'ja';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    // 修正4: header を motion.header に変更し、アニメーション設定と pointer-events の制御を追加
    <motion.header 
      initial={{ opacity: isHomePage ? 0 : 1, y: isHomePage ? -20 : 0 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? -20 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full bg-brand-white/90 backdrop-blur-md z-50 border-b border-gray-100 ${
        hidden ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ロゴ部分 */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="font-serif font-bold text-xl text-brand-black tracking-widest">
            右合の衆
          </span>
          <span className="text-xs text-brand-red hidden md:block mt-1 font-medium tracking-wider">
            JAST
          </span>
        </Link>

        {/* PC用ナビゲーション */}
        <nav className="hidden md:flex items-center gap-8">
          {navKeys.map((item) => (
            <Link 
              key={item.key} 
              href={item.href} 
              className="text-sm font-medium text-brand-black hover:text-brand-red transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
          
          {/* 言語切り替えボタン */}
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-brand-black border border-brand-black px-2 py-1 hover:bg-brand-black hover:text-brand-white transition-all w-10 text-center"
          >
            {locale === 'ja' ? 'EN' : 'JA'}
          </button>
        </nav>

        {/* スマホ用メニューアイコン */}
        <button 
          className="md:hidden text-brand-black p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* スマホ用ドロップダウンメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 w-full bg-brand-white border-b border-gray-100 shadow-xl"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navKeys.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-base font-medium text-brand-black hover:text-brand-red transition-colors block py-2"
                  onClick={closeMenu}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 pb-2">
                <button 
                  onClick={() => { toggleLanguage(); closeMenu(); }}
                  className="w-full text-sm font-bold text-brand-black border border-brand-black px-4 py-3 hover:bg-brand-black hover:text-brand-white transition-all"
                >
                  {locale === 'ja' ? 'English (EN)' : '日本語 (JA)'}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}