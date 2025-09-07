import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield, Users, TrendingUp, Award, AlertTriangle, History } from "lucide-react"

export default function MatrixWaveLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600 text-white hover:bg-blue-700">プロスポーツチーム公認</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            ひとりの男の挑戦が生んだ
            <br />
            <span className="text-blue-600">電気治療の歴史を変えた1台</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto text-pretty">
            整形外科・スポーツ・美容分野に応用できる
            <br />
            これまでにない新たな治療コンセプト
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
                無料相談・デモ予約
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              asChild>
              <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
                詳細資料をダウンロード
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              最初に言っておきますが、これからお話しする電気治療機器は、あなたの治療院の未来を変えます。
            </p>
            <p className="text-lg font-semibold text-red-600 mb-8 max-w-4xl mx-auto">
              なぜなら、これまでに多くの治療院が導入したことで他にはない強みを手に入れ、売上・リピート率アップにつながっているからです。
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              電気治療の歴史を変える開発の裏に、ひとりの男の挑戦があった
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <History className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1950年代：直流電流が主流の時代</h3>
                    <p className="text-gray-700">
                      国内で低周波治療器が誕生した1950年代、国内での主流治療器は「直流電流」でした。
                      直流電流はその治療効果の高さで注目されていました。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">しかし、あるリスクが存在していた...</h3>
                    <p className="text-gray-700">
                      実は直流電流は、その治療効果の高さで注目されましたが、やけどや皮膚への深刻なダメージなど、高いリスクも伴っていました。
                      治療現場では、そのリスクが問題視され実際に治療中の事故が相次いで発生しました。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">交流電流が主流に、直流電流は追いやられていく</h3>
                    <p className="text-gray-700">
                      この問題が深刻化する中、国内のほとんどのメーカーは、直流電流の危険性を避けるためより安全で扱いやすい交流電流にシフトしていったのです。
                      治療機器の95%が交流電流、残り5%が直流電流という状況が現在もなお続いています。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <img
                    src="/omg-chairman-takahashi.png"
                    alt="株式会社OMGコーポレーション 会長 髙橋 眞"
                    className="w-40 h-40 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs text-gray-500 mb-4">株式会社OMGコーポレーション　会長　髙橋 眞</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-center">私たちは疑問に思いました</h4>
                  <blockquote className="text-lg font-semibold text-blue-600 text-center mb-4">
                    「この微弱電流に意味はあるのか？」
                  </blockquote>
                  <p className="text-gray-700 text-center">
                    時間稼ぎやマッサージ効果、気持ちいいけど治らない...この状況をなんとか変える手段はないのか？
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">その中でひとりの男が挑戦を続けた</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              世界的なエビデンスはあるものの、火傷リスクはある...その葛藤で、どうすれば患者さんへ効果を還元できるのか。
              直流電流を治療機器としてどう使えるのか、開発と改良を続けてきました。
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <p className="text-lg text-gray-700 mb-6 text-center">
              そうして何度も失敗と小さな成功を繰り返し、完成したのが...
            </p>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <p className="text-lg font-semibold text-gray-900 text-center">
                用途別の3種類のモードを搭載することで、直流電流の治療効果を保ちながらも、そのリスクを最小限に抑える
                <span className="text-blue-600 font-bold">マトリクスウェーブ</span>でした。
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">努力が実を結び新聞にも掲載された革新技術</h3>
            <p className="text-lg text-gray-700 mb-4">
              直流式は火傷のリスクは避けられない。そんな、従来の常識に反して、発売から10年間でやけどの事故はゼロ。
            </p>
            <p className="text-lg text-gray-700 mb-8">新聞でも、安全性・専門性が評価されています。</p>

            <div className="max-w-4xl mx-auto mb-8">
              <img
                src="/newspaper-article.png"
                alt="日刊工業新聞 2019年12月12日 - 筑波大とOMGコーポ 直流で多全に炎症改善 携帯型の筋肉刺激装置"
                className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
              />
              <p className="text-sm text-gray-600 mt-2">日刊工業新聞 2019年12月12日掲載</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            業界のトップパートナーが選んだ理由とは？
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            プロ野球チーム、Jリーグクラブ、強豪ラグビークラブチーム、競技団体など、各界の有名団体がパートナーシップを結ぶ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">プロスポーツチーム</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">選手たちのパフォーマンス向上に大きく貢献</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">外傷治療促進</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">捻挫の回復が通常の1/4の期間で完了する驚くべきスピード</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">疲労回復促進</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">激しいトレーニングや試合後のリカバリーに効果的</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Innovation Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">「革新を超えた、進化した治療機器」</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              本機器と他の治療機器との最大の違いは、最先端の直流電位刺激技術を駆使し、神経・筋肉・関節への深層ケアを実現している点です。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  従来の常識に反して、発売から10年間でやけどの事故はゼロ
                </h3>
                <p className="text-gray-700">
                  直流式は火傷のリスクは避けられない。そんな従来の常識を覆し、安全性・専門性が評価されています。
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">3種類のモード搭載</h4>
                    <p className="text-gray-700">用途別の3種類のモードで直流電流の治療効果を最大化</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">炎症部位への安全なアプローチ</h4>
                    <p className="text-gray-700">従来機器では禁忌とされていた炎症部位への使用も可能</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">深層筋肉への効果的アプローチ</h4>
                    <p className="text-gray-700">
                      従来機器とは電流の強さが根本的に異なり、深層まで届く効果的な筋収縮を実現
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="/matrixwave.png"
                alt="マトリクスウェーブ治療器"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Reasons Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">マトリクスウェーブが選ばれる5つの理由</h2>
            <p className="text-xl text-blue-600 font-semibold mb-8">高い効果と安全性で選ばれる院に</p>
          </div>

          {/* Photo Placeholder - 写真挿入場所 */}
          <div className="space-y-12">
            {/* Reason 01 */}
            <div>
              <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">01</Badge>
                    <CardTitle className="text-xl text-gray-900">多用途対応で1台で複数メニューが可能</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      従来の電気機器と異なり、整形外科やスポーツ治療に加え、美容分野でも効果
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">1台で様々なメニュー作成ができ、売り上げ効果が見込める</p>
                  </div>
                </CardContent>
              </Card>
              {/* Photo Placeholder 1 */}
              <div className="mt-6 text-center">
                <div className="max-w-2xl mx-auto">
                  <img
                    src="/treatment-collage.png"
                    alt="多用途対応の治療風景や機器の写真のコラージュ"
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                  <p className="text-gray-500 text-sm mt-2">多用途対応の治療風景や機器の写真</p>
                </div>
              </div>
            </div>

            {/* Reason 02 */}
            <div>
              <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">02</Badge>
                    <CardTitle className="text-xl text-gray-900">即効性と深層アプローチで高い効果</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">筋緊張の緩和のみでなく、イオン効果により自然治癒の促進</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">神経の促通により、筋力低下からの回復をサポート</p>
                  </div>
                </CardContent>
              </Card>
              {/* Photo Placeholder 2 */}
              <div className="mt-6 text-center">
                <div className="max-w-2xl mx-auto">
                  <img
                    src="/deep-approach-collage.jpg"
                    alt="深層アプローチの効果を示す疾患・炎症部位のコラージュ画像"
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                  <p className="text-gray-500 text-sm mt-2">深層アプローチの効果を示す疾患・炎症部位の写真</p>
                </div>
              </div>
            </div>

            {/* Reason 03 */}
            <div>
              <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">03</Badge>
                    <CardTitle className="text-xl text-gray-900">急性疾患への使用も可能</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">足関節捻挫や膝の靭帯損傷などの炎症期にも使用可能</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">炎症軽減効果により、治癒期間の短縮が可能</p>
                  </div>
                </CardContent>
              </Card>
              {/* Photo Placeholder 3 */}
              <div className="mt-6 text-center">
                <div className="max-w-2xl mx-auto">
                  <img
                    src="/ultrasound-before-after.png"
                    alt="超音波画像による治療前後の比較と回復期間の短縮を示す写真"
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                  <p className="text-gray-500 text-sm mt-2">急性疾患治療の様子・効果（超音波画像による比較）</p>
                </div>
              </div>
            </div>

            {/* Reason 04 */}
            <div>
              <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">04</Badge>
                    <CardTitle className="text-xl text-gray-900">従来の電気治療機器とは異なる5つの機能</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">筋緊張緩和効果だけでなく、細胞への働きかけで促通が可能</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">神経への働きかけで筋力増強、神経ブロックによる疼痛抑制効果</p>
                  </div>
                </CardContent>
              </Card>
              {/* Photo Placeholder 4 */}
              <div className="mt-6 text-center">
                <div className="max-w-2xl mx-auto">
                  <img
                    src="/matrixwave-5features.png"
                    alt="MATRIX WAVEの5つの働きを説明する図表"
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                  <p className="text-gray-500 text-sm mt-2">MATRIX WAVEの5つの働き（機能説明図表）</p>
                </div>
              </div>
            </div>

            {/* Reason 05 */}
            <div>
              <Card className="border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">05</Badge>
                    <CardTitle className="text-xl text-gray-900">グランプリを獲得！美容メニューにも対応</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">フェイシャル〜ボディトリートメントまで幅広いメニュー展開が可能</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">エステグランプリ「エスグラ」でグランプリを獲得</p>
                  </div>
                </CardContent>
              </Card>
              {/* Photo Placeholder 5 */}
              <div className="mt-6 text-center">
                <div className="max-w-2xl mx-auto">
                  <img
                    src="/esthetic-grandprix-results.png"
                    alt="エステグランプリ受賞と美容メニューのビフォーアフター結果写真"
                    className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                  <p className="text-gray-500 text-sm mt-2">エステグランプリ受賞・美容メニューの結果</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              進化した治療機器で治療院経営が変わる
              <br />
              マトリクスウェーブ導入のメリット
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              治療院経営において、「治療効果」と「患者さんの満足度」は、売上を左右する最も重要な要素です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">治療の質が大きく向上</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  従来の治療法では実現できなかった深層筋肉へのアプローチが可能になり、他院と一線を画すことができます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">患者満足度の向上</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  高い治療効果により患者さんの満足度が向上し、リピート率アップと口コミによる新規患者獲得につながります。
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">競合との差別化</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  革新的な治療技術により、他院では提供できない高品質な治療サービスを提供できます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">経営の安定化</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  治療効果の向上により患者さんのリピート率が上がり、安定した経営基盤を築くことができます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            今こそ、新しい治療法を取り入れ、経営を一新する時です
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            マトリクスウェーブの導入により、従来の治療法では実現できなかった深層筋肉へのアプローチが可能になります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
                無料相談・デモ予約
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
                資料請求はこちら
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">お問い合わせはこちら</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              ご質問・ご相談はお気軽にお問い合わせください。
              <br />
              専門スタッフが丁寧にご対応いたします。
            </p>
            <Button size="lg" className="text-lg px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="https://www.secure-cloud.jp/sf/business/1741055101GfdWoZwC" target="_blank" rel="noopener noreferrer">
                お問い合わせフォームへ
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
