import React from "react"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 背景動画 */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/matrixwave-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* オーバーレイとテキスト */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40">
        <h1 className="text-white font-bold text-3xl md:text-5xl text-center mb-6 drop-shadow-lg">
          電気治療の新時代 MatrixWave
        </h1>
        <p className="text-white text-base md:text-xl text-center mb-8 max-w-xl drop-shadow">
          プロスポーツ・美容・整形外科で選ばれる革新技術
        </p>
        <a
          href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow text-lg md:text-xl transition-colors text-center"
        >
          無料相談・デモ予約
        </a>
      </div>
    </section>
  )
}
