// src/app/[locale]/philosophy/page.tsx
import FadeIn from "@/components/FadeIn";
import { useTranslations } from 'next-intl';

export default function PhilosophyPage() {
  // 'Philosophy' カテゴリの翻訳データを取得
  const t = useTranslations('Philosophy');

  return (
    <div className="min-h-screen bg-brand-white text-brand-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ページタイトル */}
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-brand-black">
              {t('title')}
            </h1>
            <span className="block text-sm font-sans text-brand-red tracking-widest mt-4 font-medium">
              {t('subtitle')}
            </span>
          </div>
        </FadeIn>

        {/* キャッチコピー */}
        <FadeIn delay={0.2}>
          <div className="py-16 md:py-24 text-center border-y border-gray-100 my-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-relaxed tracking-widest">
              {t('catchphrase1')}
              <span className="text-brand-red">{t('catchphrase2')}</span>
              {t('catchphrase3')}
            </h2>
          </div>
        </FadeIn>

        {/* 本文 */}
        <div className="space-y-16 mt-16">
          
          <FadeIn delay={0.3}>
            <section>
              <h3 className="text-2xl font-serif font-bold border-l-4 border-brand-red pl-4 mb-6">
                {t('backgroundTitle')}
              </h3>
              {/* 改行（\n）を反映させるためのCSS (whitespace-pre-wrap) を追加 */}
              <p className="leading-loose text-gray-700 text-justify whitespace-pre-wrap">
                {t('backgroundText')}
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
            <section>
              <h3 className="text-2xl font-serif font-bold border-l-4 border-brand-red pl-4 mb-6">
                {t('missionTitle')}
              </h3>
              <p className="leading-loose text-gray-700 text-justify whitespace-pre-wrap">
                {t('missionText')}
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.5}>
            <section>
              <h3 className="text-2xl font-serif font-bold border-l-4 border-brand-red pl-4 mb-6">
                {t('valueTitle')}
              </h3>
              <ul className="list-disc list-inside leading-loose text-gray-700 space-y-2">
                <li>{t('value1')}</li>
                <li>{t('value2')}</li>
                <li>{t('value3')}</li>
              </ul>
            </section>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}