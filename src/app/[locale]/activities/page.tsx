// src/app/[locale]/activities/page.tsx
import FadeIn from "@/components/FadeIn";
import { useTranslations } from 'next-intl';

// ※タイムラインのデータは将来的にCMS等から取得することを想定し、一旦ここに残しています。
// 実際の運用では、これもJSON辞書に入れるかデータベースから引っ張ります。
const timelineData = [
  { date: "2026.02", title: "第1回「戦略と技術のオープンフォーラム」主催", type: "event" },
  { date: "2026.01", title: "「一般社団法人 右合の衆（JAST）」として法人化", type: "milestone" },
  { date: "2025.11", title: "Webメディアにて代表インタビュー掲載", type: "media" },
  { date: "2025.08", title: "次世代テクノロジーと安全保障カンファレンス登壇", type: "lecture" },
  { date: "2025.05", title: "政治勉強サークル「右合の衆」設立", type: "milestone" }
];

export default function ActivitiesPage() {
  const t = useTranslations('Activities');

  return (
    <div className="min-h-screen bg-brand-white text-brand-black pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ページタイトル */}
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-brand-black">
              {t('title')}
            </h1>
            <span className="block text-sm font-sans text-brand-red tracking-widest mt-4 font-medium">
              {t('subtitle')}
            </span>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('intro')}
            </p>
          </div>
        </FadeIn>

        {/* 活動内容の3本柱（カードグリッド） */}
        <div className="space-y-20 mb-32">
          
          {/* Pillar 1: 研鑽と検証 */}
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-2xl font-serif font-bold border-b-2 border-brand-red pb-2 mb-8 inline-block">
                {t('pillar1Title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                  <div key={`1_${num}`} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all border-t-4 border-t-brand-black">
                    <h3 className="font-bold text-lg mb-4">{t(`item1_${num}Title` as any)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{t(`item1_${num}Desc` as any)}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Pillar 2: 実践と発信 */}
          <FadeIn delay={0.3}>
            <div>
              <h2 className="text-2xl font-serif font-bold border-b-2 border-brand-red pb-2 mb-8 inline-block">
                {t('pillar2Title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                  <div key={`2_${num}`} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all border-t-4 border-t-brand-red">
                    <h3 className="font-bold text-lg mb-4">{t(`item2_${num}Title` as any)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{t(`item2_${num}Desc` as any)}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Pillar 3: 交流と組織強化 */}
          <FadeIn delay={0.4}>
            <div>
              <h2 className="text-2xl font-serif font-bold border-b-2 border-brand-red pb-2 mb-8 inline-block">
                {t('pillar3Title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {[1, 2].map((num) => (
                  <div key={`3_${num}`} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:bg-white transition-all">
                    <h3 className="font-bold text-lg mb-4">{t(`item3_${num}Title` as any)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{t(`item3_${num}Desc` as any)}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

        {/* タイムライン（これまでの歩み） */}
        <FadeIn delay={0.5}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-16 tracking-widest">
              {t('historyTitle')}
            </h2>
            <div className="relative border-l-2 border-gray-100 ml-4 md:ml-8 py-8">
              {timelineData.map((activity, index) => (
                <div key={index} className="mb-12 relative pl-8 md:pl-12">
                  <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${activity.type === 'milestone' ? 'bg-brand-red' : 'bg-brand-black'}`}></span>
                  <p className="text-brand-red font-bold text-sm tracking-widest mb-2 font-sans">{activity.date}</p>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg md:text-xl font-serif font-bold leading-tight">{activity.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}