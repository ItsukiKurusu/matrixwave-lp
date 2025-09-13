import React from "react"

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* 背景動画のみ */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/matrixwave-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>
      {/* CTAボタンを動画の下に配置 */}
      <div className="w-full flex justify-center mt-8">
        <a
          href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow text-lg md:text-xl transition-colors text-center"
        >
          無料相談・デモ予約
        </a>
      </div>
    </>
  )
}
