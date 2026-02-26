"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Philosophy");
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. 日の丸の縦の動き
  const sunY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.605, 0.73, 0.79],
    ["60vh", "30vh", "10vh", "-10vh", "-30vh", "-33vh"]
  );

  // 2. 日の丸の透明度
  // 0.7から消え始め、0.95で完全に消える
  const sunOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.55, 0.75],
    [0, 1, 1, 0]
  );

  // 3. メインタイトル（右合の衆）の透明度
  const titleY = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-10vh"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // 4. キャッチコピーのY座標と透明度
  const messageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1.0],
    ["-10vh", "0vh", "5vh"]
  );
  const messageOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.9, 1.0],
    [0, 1, 1, 0]
  );

  // 5. 「人材」の文字色
  const jinzaColor = useTransform(
    scrollYProgress,
    [0.65, 0.75],
    ["#111111", "#D42E12"]
  );

  return (
    <div className="bg-brand-white">
      
      {/* ヒーローセクションの高さを 150vh まで削ぎ落としました */}
      <section ref={containerRef} className="relative h-[240vh] bg-brand-white">
        
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6">
          
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="absolute z-20 text-center">
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-[0.3em] text-brand-black mb-4">
              右合の衆
            </h1>
            <p className="text-[10px] md:text-xs tracking-[0.6em] text-gray-400 font-medium ml-[0.6em]">
              JAPAN ASSOCIATION OF STRATEGY AND TECHNOLOGY
            </p>
          </motion.div>

          <motion.div
            style={{ y: sunY, opacity: sunOpacity }}
            className="absolute z-10 w-64 h-64 md:w-[480px] md:h-[480px] bg-brand-red rounded-full shadow-[0_0_80px_rgba(212,46,18,0.15)]"
          />

          {/* C. キャッチコピー */}
          <motion.div 
            style={{ y: messageY, opacity: messageOpacity }}
            className="absolute z-30 text-center px-4 md:px-6 w-full pointer-events-none"
          >
            {/* text-3xl -> text-2xl に変更し、スマホのみ字間を 0.15em に微調整 */}
            <h2 className="text-2xl md:text-5xl font-serif font-bold leading-relaxed tracking-[0.15em] md:tracking-[0.2em] text-brand-black whitespace-nowrap">
              {t('catchphrase1')}
              <motion.span style={{ color: jinzaColor }}>
                {t('catchphrase2')}
              </motion.span>
              {t('catchphrase3')}
            </h2>
          </motion.div>

        </div>
      </section>

      {/* 理念詳細セクション */}
      <section className="relative z-40 bg-brand-white pt-16 pb-32 px-6 -mt-[20vh] border-t border-gray-100 shadow-[0_-20px_50px_rgba(255,255,255,0.9)]">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-12">
            
            {/* 1. 赤い線 */}
            {/* motion.div を直接使い、y: 20 という短い距離を指定して、中央寄りから現れるようにします */}
            <motion.div
              initial={{ opacity: 0, y: 0 }} // 開始状態: 透明＆10px下
              whileInView={{ opacity: 1, y: 0 }} // 表示状態: 不透明＆元の位置
              viewport={{ once: true, margin: "-50px" }} // 画面に少し入ったら発火
              transition={{ duration: 0.6, ease: "easeOut" }} // アニメーション設定
            >
              <div className="h-[1px] w-12 bg-brand-red mb-12"></div>
            </motion.div>
            
            {/* 2. メインの使命文 (delay 0.2s) */}
            <motion.h3
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-2xl md:text-3xl font-serif font-bold leading-loose text-brand-black text-justify"
            >
              知性と責任をもって日本を牽引する人材の育成を使命とする。
            </motion.h3>

            {/* 3. 背景テキスト (delay 0.4s) */}
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-gray-600 leading-loose text-justify whitespace-pre-wrap text-sm md:text-base"
            >
              {t('backgroundText')}
            </motion.p>

            {/* 4. ミッションテキスト (delay 0.6s) */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-gray-600 leading-loose text-justify whitespace-pre-wrap text-sm md:text-base">
                {t('missionText')}
              </p>
            </motion.div>

          </div>
          
        </div>
      </section>

    </div>
  );
}