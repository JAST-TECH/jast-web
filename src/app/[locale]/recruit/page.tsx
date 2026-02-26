// src/app/recruit/page.tsx
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ページタイトル */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-brand-black">
              新歓・参画案内
            </h1>
            <span className="block text-sm font-sans text-brand-red tracking-widest mt-4 font-medium">
              RECRUIT
            </span>
          </div>
        </FadeIn>

        {/* メッセージセクション */}
        <FadeIn delay={0.2}>
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100 mb-16">
            <h2 className="text-2xl font-serif font-bold text-center mb-6 tracking-widest leading-relaxed">
              「知」を蓄積し、「実装」で社会を動かす。
            </h2>
            <div className="space-y-4 text-gray-700 leading-loose text-justify text-sm md:text-base">
              <p>
                一般社団法人 右合の衆（JAST）は、東京大学の学生を中心に設立された、技術と戦略の交差点を追求するプロフェッショナルな頭脳集団です。
              </p>
              <p>
                最先端のテクノロジー（AI、バイオ、情報科学など）をいかにして社会課題の解決や国益に結びつけるか。私たちは、単なる学術的な議論にとどまらず、産学官と連携したルールメイキングや事業化など、リアルな「社会実装」を見据えた活動を行っています。
              </p>
              <p>
                文系・理系といった既存の枠組みを超え、自らの専門性を武器に次世代のリーダーシップを発揮したいと願う、熱意ある学生・若手研究者の参画を心よりお待ちしています。
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 募集要項・求める人物像 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-xl font-serif font-bold border-b-2 border-brand-red pb-3 mb-6 inline-block">
                募集対象
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">■</span>
                  <span>東京大学および他大学の学部生・大学院生（学年不問）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">■</span>
                  <span>文理問わず、技術と社会の接点に強い関心がある方</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">■</span>
                  <span>受け身ではなく、自らプロジェクトを企画・推進できる方</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-xl font-serif font-bold border-b-2 border-brand-red pb-3 mb-6 inline-block">
                得られる経験・環境
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">■</span>
                  <span>多様な専門性（法学、情報科学、生命科学など）を持つ優秀な同世代との議論</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">■</span>
                  <span>有識者（起業家、官僚、研究者など）とのクローズドなネットワーク</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">■</span>
                  <span>法人格を活用した、社会に対するインパクト創出の実践</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* 選考・参画までのフロー */}
        <FadeIn delay={0.5}>
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-center mb-10 tracking-widest">
              参画までのフロー
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative">
              
              {/* PC用の中央線 */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

              {/* STEP 1 */}
              <div className="bg-white px-6 py-8 rounded-lg border border-gray-100 shadow-sm text-center w-full md:w-[30%] relative z-10">
                <span className="text-brand-red font-bold font-sans text-sm tracking-widest block mb-2">STEP 01</span>
                <h4 className="font-bold mb-3">エントリー</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  お問い合わせフォームより「新歓・入会に関するお問い合わせ」を選択し、簡単な自己紹介を添えてご連絡ください。
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-white px-6 py-8 rounded-lg border border-gray-100 shadow-sm text-center w-full md:w-[30%] relative z-10">
                <span className="text-brand-red font-bold font-sans text-sm tracking-widest block mb-2">STEP 02</span>
                <h4 className="font-bold mb-3">カジュアル面談</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  既存メンバーとのオンライン面談（30分程度）を実施します。活動内容のすり合わせや疑問点にお答えします。
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-white px-6 py-8 rounded-lg border border-brand-red/20 shadow-md text-center w-full md:w-[30%] relative z-10">
                <span className="text-brand-red font-bold font-sans text-sm tracking-widest block mb-2">STEP 03</span>
                <h4 className="font-bold mb-3">ジョイン</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  双方の合意が得られれば、正式に参画となります。定例の勉強会やプロジェクトへすぐにご参加いただけます。
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* CTA (Call to Action) */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-sm">
              少しでも興味をお持ちの方は、ぜひお気軽にご連絡ください。
            </p>
            <Link 
              href="/contact"
              className="inline-block px-12 py-4 bg-brand-red text-brand-white font-bold tracking-widest rounded-md hover:bg-brand-black transition-colors duration-300 shadow-md"
            >
              エントリーはこちら
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}