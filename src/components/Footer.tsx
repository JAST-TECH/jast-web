// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* 組織情報 */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="font-serif font-bold text-2xl tracking-widest">右合の衆</h2>
          <p className="text-xs text-gray-400 tracking-wider">
            Japan Association of Strategy and Technology
          </p>
        </div>
        
        {/* SNSリンク */}
        <div className="flex gap-4">
          
          {/* X (旧Twitter) */}
          <a 
            href="https://x.com/ugonoshu_ut" // ←【※ここにXのプロフィールURLを入れます】
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors duration-300 shadow-sm"
            aria-label="X (Twitter)"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/ut_ugonoshu" // ←【※ここにInstagramのプロフィールURLを入れます】
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors duration-300 shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.355 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>

          {/* note */}
          <a 
            href="https://note.com/ugonoshu" // ←【※ここにnoteのプロフィールURLを入れます】
            target="_blank" 
            rel="noopener noreferrer" 
            // overflow-hiddenを追加して、角丸から画像がはみ出さないようにします
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors duration-300 shadow-sm overflow-hidden relative"
            aria-label="note"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 493 493"
              className="w-8 h-8 fill-current" // ここでサイズと色(親の文字色の白)を指定
            >
              <path d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z" />
            </svg>
          </a>

        </div>
      </div>

      {/* コピーライト */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-8">
        &copy; {new Date().getFullYear()} 一般社団法人 右合の衆 (JAST). All rights reserved.
      </div>
    </footer>
  );
}