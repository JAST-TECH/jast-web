// src/components/FadeIn.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // 初期状態：透明かつ30px下に配置
      whileInView={{ opacity: 1, y: 0 }} // 画面に入った時の状態：不透明かつ元の位置
      viewport={{ once: true, margin: "-100px" }} // 一度だけ実行、画面に100px入ったら発火
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // アニメーションの設定
    >
      {children}
    </motion.div>
  );
}