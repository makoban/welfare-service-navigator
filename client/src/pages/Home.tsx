import { ProposalContent } from "@/components/ProposalContent";
import { SearchDemo } from "@/components/SearchDemo";
import { AIChatDemo } from "@/components/AIChatDemo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 -z-10">
          <img 
            src="./images/hero-bg.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>
        
        <div className="container px-4 mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary text-sm font-bold shadow-sm mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4 fill-primary" />
            <span>New Solution Proposal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-sm mb-6 animate-fade-in-up delay-100">
            Prime Smart Navigator<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 text-4xl md:text-6xl block mt-2">福利厚生の「新しいあたりまえ」へ</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            AI秘書ボットとマルチタグサーチで、サービスの利用率を劇的に向上。<br />
            既存システムを活かしたまま導入できる、次世代ナビゲーションシステム。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">

            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm border-white/40 hover:bg-white/80"
              onClick={() => document.getElementById('ai-concierge')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Search className="mr-2 h-4 w-4" /> AIコンシェルジュを試す
            </Button>
          </div>

          {/* Floating Icons Decoration */}
          <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block animate-float-slow">
            <img src="./images/icon-family.png" alt="Family" className="w-24 h-24 drop-shadow-xl opacity-90 hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute top-1/3 right-10 hidden lg:block animate-float-slower">
            <img src="./images/icon-house.png" alt="House" className="w-20 h-20 drop-shadow-xl opacity-90 hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute bottom-10 left-1/4 hidden lg:block animate-float">
            <img src="./images/icon-money.png" alt="Money" className="w-16 h-16 drop-shadow-xl opacity-80 hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute top-20 right-1/4 hidden lg:block animate-float-slow">
            <img src="./images/icon-health.png" alt="Health" className="w-18 h-18 drop-shadow-xl opacity-80 hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 mx-auto pb-24 space-y-24">
        <ProposalContent />
        
        {/* Interactive Demo Section */}
        <section id="demo" className="scroll-mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 rounded-3xl -z-10 blur-3xl opacity-50" />
            <SearchDemo />
          </div>
        </section>

        {/* AI Concierge Demo Section */}
        <section id="ai-concierge" className="scroll-mt-24 pb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-yellow-50/50 via-orange-50/50 to-red-50/50 rounded-3xl -z-10 blur-3xl opacity-50" />
            <AIChatDemo />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-white/50 backdrop-blur-sm py-12">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p className="mb-4">© 2025 Welfare Service Navigator Proposal. Created by Manus.</p>
          <p className="text-sm">This is a conceptual proposal website.</p>
        </div>
      </footer>
    </div>
  );
}
