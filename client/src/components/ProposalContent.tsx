import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Search, Layers, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProposalContent() {
  return (
    <div className="space-y-24 py-8">
      {/* Concept Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
          <Sparkles className="h-4 w-4" />
          <span>次世代の福利厚生プラットフォーム</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Prime Smart Navigator<br />
          <span className="text-primary text-3xl md:text-4xl block mt-2">(PSN)</span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          「探す」から「任せる」へ。<br />
          従業員様の満足度と、運営者様の導入しやすさを両立する<br />
          新しいソリューションをご提案します。
        </p>
      </section>

      {/* 3 Key Features */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <Card className="border-none shadow-lg bg-gradient-to-b from-white to-blue-50/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Bot className="h-32 w-32 text-primary" />
          </div>
          <CardHeader>
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Bot className="h-6 w-6" />
            </div>
            <Badge variant="secondary" className="w-fit mb-2">Point 01</Badge>
            <CardTitle className="text-xl font-bold leading-snug">
              AIで予約・連絡まで完結<br />
              <span className="text-primary">「あなたの秘書ボット」</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              検索だけでなく、宿の空室確認やお店の予約、トラブル時のレッカー手配まで、AIがあなたに代わって電話やチャットで交渉・連絡を行います。
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>面倒な電話確認をAIが代行</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>LINE等のチャットで完結</span>
              </li>
            </ul>
            <Button 
              variant="link" 
              className="p-0 h-auto text-primary font-bold group-hover:translate-x-1 transition-transform"
              onClick={() => document.getElementById('ai-concierge')?.scrollIntoView({ behavior: 'smooth' })}
            >
              デモを見る <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="border-none shadow-lg bg-gradient-to-b from-white to-purple-50/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Search className="h-32 w-32 text-purple-500" />
          </div>
          <CardHeader>
            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
              <Search className="h-6 w-6" />
            </div>
            <Badge variant="secondary" className="w-fit mb-2">Point 02</Badge>
            <CardTitle className="text-xl font-bold leading-snug">
              直感的に見つかる<br />
              <span className="text-purple-600">「マルチタグサーチ」</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              「#子育て」「#節約」などのタグを選ぶだけのシンプルデザイン。複雑なカテゴリ階層を意識することなく、目的のサービスに最短距離で到達できます。
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>誰でも使えるシンプルUI</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>目的・シーンから逆引き検索</span>
              </li>
            </ul>
            <Button 
              variant="link" 
              className="p-0 h-auto text-purple-600 font-bold group-hover:translate-x-1 transition-transform"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              デモを見る <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="border-none shadow-lg bg-gradient-to-b from-white to-orange-50/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layers className="h-32 w-32 text-orange-500" />
          </div>
          <CardHeader>
            <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="h-6 w-6" />
            </div>
            <Badge variant="secondary" className="w-fit mb-2">Point 03</Badge>
            <CardTitle className="text-xl font-bold leading-snug">
              導入も運用もかんたん<br />
              <span className="text-orange-600">「既存サイト活用型」</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              現在稼働中のウェブサイトを改修することなく、オーバーレイやAPI連携で導入可能。システム移行のリスクやコストを最小限に抑えます。
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>大規模改修不要でスピード導入</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>既存データベースをそのまま活用</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white/60 rounded-lg border border-orange-100 flex items-center gap-3">
              <Zap className="h-5 w-5 text-orange-500 fill-orange-500" />
              <span className="text-xs font-bold text-orange-800">提供会社様の手間も最小限！</span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Architecture Diagram (Conceptual) */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">既存システムに「知能」をプラス</h3>
            <p className="text-muted-foreground">
              PSNは、貴会の既存ウェブサイトの上に「インテリジェント・レイヤー」として機能します。
              裏側のデータベースや会員管理システムはそのままに、ユーザーインターフェースだけを劇的に進化させることができます。
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="font-bold text-sm w-24 shrink-0">Step 1</div>
                <div className="text-sm">既存サイトのサービス情報をPSNが自動学習</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="font-bold text-sm w-24 shrink-0">Step 2</div>
                <div className="text-sm">ユーザーの要望をAIが解析し、最適なサービスを抽出</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border">
                <div className="font-bold text-sm w-24 shrink-0">Step 3</div>
                <div className="text-sm">予約・申し込み情報を既存システムへ安全に連携</div>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] bg-secondary/10 rounded-2xl flex items-center justify-center p-8">
            {/* Simple Diagram */}
            <div className="relative w-full max-w-xs">
              {/* Base Layer */}
              <div className="bg-slate-200 rounded-lg p-4 text-center text-slate-500 font-bold mb-2">
                既存システム / データベース
              </div>
              {/* Connection Lines */}
              <div className="flex justify-center gap-8 mb-2">
                <div className="w-0.5 h-8 bg-slate-300"></div>
                <div className="w-0.5 h-8 bg-slate-300"></div>
              </div>
              {/* PSN Layer */}
              <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-6 text-center text-white shadow-xl relative z-10">
                <div className="font-bold text-lg mb-1">PSN Core</div>
                <div className="text-xs opacity-90">AI Concierge & Tag Search</div>
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                  Easy Connect
                </div>
              </div>
              {/* User Layer */}
              <div className="flex justify-center mb-2 mt-2">
                <div className="w-0.5 h-8 bg-primary/30"></div>
              </div>
              <div className="bg-white border-2 border-primary rounded-full p-3 text-center text-primary font-bold shadow-sm mx-auto w-32">
                User
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
