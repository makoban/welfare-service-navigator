import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Search, Tag, Users, Home, Heart, Wallet } from "lucide-react";

export function ProposalContent() {
  return (
    <div className="space-y-12 py-8">
      {/* Introduction Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-primary">現状の課題と解決策</h2>
        <p className="text-muted-foreground text-lg">
          充実した福利厚生サービスを、より多くの従業員様に活用していただくために。
          「探すのが大変」という声を「見つけるのが楽しい」に変えるソリューションをご提案します。
        </p>
      </section>

      {/* Problem & Solution Comparison */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="border-destructive/20 bg-destructive/5 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Search className="h-5 w-5" />
              現状の課題
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">カテゴリ分類の限界</h4>
              <p className="text-sm text-muted-foreground">
                「保険」「トラベル」などの種類別分類のみで、
                「子育て」「引っ越し」などのニーズで横断的に探せない。
              </p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">検索機能の不足</h4>
              <p className="text-sm text-muted-foreground">
                地域、割引率、利用シーンなど、詳細な条件での絞り込みができず、
                膨大なサービスから自分に合うものを見つけにくい。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary/5 shadow-md ring-1 ring-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              提案ソリューション
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white/80 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2 text-primary">スマート・ナビゲーター機能</h4>
              <p className="text-sm text-muted-foreground">
                ユーザーの「目的」や「状況」からサービスにたどり着ける新しい検索体験。
                タグ付け、複合フィルタリング、ライフイベント提案を実現します。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <Tag className="h-6 w-6 mx-auto mb-2 text-accent" />
                <span className="text-xs font-bold">タグ検索</span>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                <span className="text-xs font-bold">ライフイベント提案</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Feature Details */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-center">主な機能詳細</h3>
        
        <Tabs defaultValue="tags" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="tags">タグ付け導入</TabsTrigger>
            <TabsTrigger value="filter">複合フィルタリング</TabsTrigger>
            <TabsTrigger value="scenario">ライフイベント提案</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tags" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>ニーズに合わせたタグ付け</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { tag: "#子育て", desc: "出産、育児、教育費", icon: Users },
                    { tag: "#節約", desc: "日常生活のコスト削減", icon: Wallet },
                    { tag: "#引っ越し", desc: "転居の手続き・費用", icon: Home },
                    { tag: "#健康維持", desc: "メンテナンス・予防", icon: Heart },
                    { tag: "#老後の備え", desc: "終活、相続、介護", icon: Users },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50">
                      <div className="p-2 rounded-full bg-white shadow-sm text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1 text-primary">{item.tag}</Badge>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="filter" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>直感的な複合フィルタリング</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    キーワード検索に加え、複数の条件を組み合わせて、
                    自分にぴったりのサービスを瞬時に絞り込めます。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>タグ複数選択</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>カテゴリ絞り込み</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>地域フィルタ（全国・エリア限定）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>割引・特典タイプ別</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                  {/* Mock UI for Filter */}
                  <div className="space-y-3">
                    <div className="h-8 bg-white rounded shadow-sm w-full animate-pulse" />
                    <div className="flex gap-2">
                      <div className="h-8 bg-white rounded shadow-sm w-1/3 animate-pulse" />
                      <div className="h-8 bg-white rounded shadow-sm w-1/3 animate-pulse" />
                      <div className="h-8 bg-white rounded shadow-sm w-1/3 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-24 bg-white rounded shadow-sm animate-pulse" />
                      <div className="h-24 bg-white rounded shadow-sm animate-pulse" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scenario" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>ライフイベント・シナリオ提案</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm">
                    <h4 className="font-bold text-pink-600 mb-2">結婚が決まったら</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-white/50">#結婚</Badge>
                      <Badge variant="outline" className="bg-white/50">#住まい</Badge>
                      <Badge variant="outline" className="bg-white/50">#節約</Badge>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm">
                    <h4 className="font-bold text-blue-600 mb-2">マイホームを検討</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-white/50">#住まい</Badge>
                      <Badge variant="outline" className="bg-white/50">#引っ越し</Badge>
                      <Badge variant="outline" className="bg-white/50">#保険</Badge>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm">
                    <h4 className="font-bold text-green-600 mb-2">子供が小学校に入学</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="bg-white/50">#子育て</Badge>
                      <Badge variant="outline" className="bg-white/50">#教育</Badge>
                      <Badge variant="outline" className="bg-white/50">#お祝い金</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Expected Effects */}
      <section className="bg-primary/5 rounded-2xl p-8 text-center space-y-6">
        <h3 className="text-2xl font-bold text-primary">導入効果</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto text-primary font-bold text-xl">1</div>
            <h4 className="font-bold">ユーザー満足度向上</h4>
            <p className="text-sm text-muted-foreground">「探すのが大変」という不満を解消し、快適な利用体験を提供</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto text-primary font-bold text-xl">2</div>
            <h4 className="font-bold">利用率の向上</h4>
            <p className="text-sm text-muted-foreground">潜在ニーズへの提案により、サービスの利用機会が増加</p>
          </div>
          <div className="space-y-2">
            <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto text-primary font-bold text-xl">3</div>
            <h4 className="font-bold">サイト価値の向上</h4>
            <p className="text-sm text-muted-foreground">充実したサービスをより分かりやすく提供し、サイトの価値を高める</p>
          </div>
        </div>
      </section>
    </div>
  );
}
