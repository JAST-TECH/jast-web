// src/app/contact/page.tsx
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* ページタイトル */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-brand-black">
              お問い合わせ
            </h1>
            <span className="block text-sm font-sans text-brand-red tracking-widest mt-4 font-medium">
              CONTACT
            </span>
          </div>
        </FadeIn>

        {/* フォームエリア */}
        <FadeIn delay={0.2}>
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <p className="mb-10 text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              右合の衆（JAST）への各種お問い合わせ、取材のご依頼はこちらから承っております。
              以下のフォームに必要事項をご記入の上、送信してください。担当者より順次ご返信いたします。
            </p>

            {/* ※現在はUIのみのモックアップです。後日API連携を行います。 */}
            <form className="space-y-8">
              
              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="type" className="block text-sm font-bold text-brand-black mb-3">
                  お問い合わせ種別 <span className="text-brand-red ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="media">メディア・取材に関するお問い合わせ</option>
                    <option value="collaboration">協業・プロジェクトに関するお問い合わせ</option>
                    <option value="recruit">新歓・入会に関するお問い合わせ</option>
                    <option value="other">その他のお問い合わせ</option>
                  </select>
                  {/* カスタム矢印アイコン */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 氏名と貴社名（PCでは横並び、スマホでは縦並び） */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brand-black mb-3">
                    お名前 <span className="text-brand-red ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="山田 太郎"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-brand-black mb-3">
                    貴社名・組織名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="株式会社〇〇 / 〇〇メディア"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors"
                  />
                </div>
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-black mb-3">
                  メールアドレス <span className="text-brand-red ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors"
                  required
                />
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-black mb-3">
                  お問い合わせ内容 <span className="text-brand-red ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="具体的な内容をご記入ください。"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red transition-colors resize-y"
                  required
                ></textarea>
              </div>

              {/* 送信ボタン */}
              <div className="pt-6 text-center">
                <button
                  type="button" // ※現状はモックのためbuttonにしています
                  className="inline-block px-12 py-4 bg-brand-black text-brand-white font-bold tracking-widest rounded-md hover:bg-brand-red transition-colors duration-300 w-full md:w-auto shadow-md"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}