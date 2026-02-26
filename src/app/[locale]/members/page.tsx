// src/app/members/page.tsx
import FadeIn from "@/components/FadeIn";

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* ページタイトル */}
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-brand-black">
              メンバー紹介
            </h1>
            <span className="block text-sm font-sans text-brand-red tracking-widest mt-4 font-medium">
              MEMBERS
            </span>
          </div>
        </FadeIn>

        {/* 代表理事の紹介セクション */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-24">
            <div className="flex flex-col md:flex-row">
              
              {/* 写真エリア（正方形比率を維持） */}
              <div className="md:w-2/5 relative bg-gray-100 aspect-square md:aspect-auto">
                {/* ※ここに実際の写真を配置します。
                  Next.jsの <Image /> コンポーネントを使用するか、imgタグで src="/images/ceo.jpg" のように指定します。
                  現在は写真の代わりとなるプレースホルダーです。
                */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-20 h-20 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="absolute bottom-4 text-sm font-bold tracking-widest text-gray-400">PHOTO</span>
                </div>
              </div>

              {/* プロフィール＆メッセージエリア */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <p className="text-brand-red font-bold text-sm tracking-widest mb-2">代表理事 / Representative Director</p>
                  <h2 className="text-3xl font-serif font-bold tracking-widest">
                    山田 泰（やまだ たい）
                  </h2>
                </div>

                {/* メッセージ */}
                <div className="mb-8 pl-4 border-l-4 border-gray-200">
                  <p className="font-serif text-lg leading-relaxed text-gray-800 italic">
                    「技術は、高度な戦略と結びついて初めて社会を変革する力となります。次世代の国益を担うプラットフォームとして、私たちは学問の枠を超えた実践的なソリューションを提示し続けます。」
                  </p>
                </div>

                {/* プロフィール（経歴） */}
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed text-justify">
                  <p>
                    岡山県出身。東京大学前期教養学部理科二類2年。
                  </p>
                  <p>
                    内政・外交における政府戦略を最先端のAI技術の目線から立案し、産学官の連携を見据えた新たなルールメイキングを推進すべく、一般社団法人 右合の衆（JAST）を設立。
                  </p>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* その他のボードメンバー・運営陣（写真なしリスト） */}
        <FadeIn delay={0.4}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-center border-b-2 border-brand-red pb-4 mb-12 inline-block relative left-1/2 -translate-x-1/2">
              理事・運営メンバー
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              {/* メンバー1 */}
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs text-brand-red font-bold tracking-widest mb-1">理事 / Director</p>
                <h4 className="text-lg font-bold tracking-wider mb-2">山田 太郎</h4>
                <p className="text-sm text-gray-500">東京大学 法学部在学 / 〇〇専門</p>
              </div>
              {/* メンバー2 */}
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs text-brand-red font-bold tracking-widest mb-1">理事 / Director</p>
                <h4 className="text-lg font-bold tracking-wider mb-2">佐藤 花子</h4>
                <p className="text-sm text-gray-500">慶應義塾大学 経済学部在学 / 〇〇専門</p>
              </div>
              {/* メンバー3 */}
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs text-gray-500 font-bold tracking-widest mb-1">運営 / Operator</p>
                <h4 className="text-lg font-bold tracking-wider mb-2">鈴木 一郎</h4>
                <p className="text-sm text-gray-500">東京大学 工学部在学</p>
              </div>
              {/* メンバー4 */}
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs text-gray-500 font-bold tracking-widest mb-1">運営 / Operator</p>
                <h4 className="text-lg font-bold tracking-wider mb-2">高橋 次郎</h4>
                <p className="text-sm text-gray-500">東京大学 理学部在学</p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}