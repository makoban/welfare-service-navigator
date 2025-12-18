import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, User, Loader2, Sparkles } from "lucide-react";
import { CHAT_SCENARIOS, MessageType, ScenarioType } from "@/data/chatScenarios";
import { motion, AnimatePresence } from "framer-motion";

export function AIChatDemo() {
  const [activeScenario, setActiveScenario] = useState<ScenarioType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom (チャットエリア内のみ - ページ全体はスクロールしない)
  useEffect(() => {
    if (scrollAreaRef.current && activeScenario) {
      // ScrollArea内のスクロール可能な要素を取得してスクロール
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping, activeScenario]);

  const startScenario = (scenario: ScenarioType) => {
    setActiveScenario(scenario);
    setMessages([
      {
        id: "init",
        role: "user",
        content: scenario.initialMessage,
        timestamp: "Now",
        status: "sent",
      },
    ]);
    setIsTyping(true);
    
    // Simulate AI thinking delay
    setTimeout(() => {
      const nextMessages = scenario.steps["start"]();
      processMessages(nextMessages);
    }, 1500);
  };

  const processMessages = async (newMessages: MessageType[]) => {
    setIsTyping(true);
    
    for (const msg of newMessages) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate typing speed
      setMessages(prev => [...prev, msg]);
    }
    
    setIsTyping(false);
  };

  const handleAction = (nextScenarioId: string, label: string) => {
    if (!activeScenario || !nextScenarioId) return;

    // Add user selection as message
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: label,
        timestamp: "Now",
        status: "read",
      }
    ]);

    setIsTyping(true);

    // Fetch next steps
    setTimeout(() => {
      const nextStep = activeScenario.steps[nextScenarioId];
      if (nextStep) {
        const nextMessages = nextStep();
        processMessages(nextMessages);
      }
    }, 1200);
  };

  const resetChat = () => {
    setActiveScenario(null);
    setMessages([]);
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-yellow-400 fill-yellow-400" />
          AIコンシェルジュ・デモ
        </h2>
        <p className="text-muted-foreground">
          「5000円以内のプレゼント」「空席のある宿」など、具体的な要望を伝えるだけで、<br />
          AIが最適なサービスを提案し、予約や連絡まで自動で行います。
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Scenario Selector */}
        <Card className="lg:col-span-1 bg-white/50 backdrop-blur-sm border-none shadow-lg h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">相談内容を選ぶ</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3 p-4">
            {CHAT_SCENARIOS.map((scenario) => {
              const Icon = scenario.icon;
              const isActive = activeScenario?.id === scenario.id;
              return (
                <button
                  key={scenario.id}
                  onClick={() => startScenario(scenario)}
                  disabled={!!activeScenario}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3 border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                      : "bg-white hover:bg-secondary border-border hover:border-primary/30 shadow-sm"
                  } ${!!activeScenario && !isActive ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <div className={`p-2 rounded-full ${isActive ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-sm">{scenario.title}</span>
                </button>
              );
            })}
            
            {activeScenario && (
              <Button variant="outline" className="w-full mt-4" onClick={resetChat}>
                他の相談をする
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-2 border-none shadow-2xl bg-white overflow-hidden flex flex-col h-full relative">
          {/* Chat Header */}
          <div className="bg-primary/5 p-4 border-b border-border/50 flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-md">
                <Bot className="h-6 w-6" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-sm">AI コンシェルジュ</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online - 24時間対応中
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 bg-slate-50/50">
            <div className="space-y-6 pb-4">
              {!activeScenario && (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground space-y-4 opacity-50">
                  <Bot className="h-16 w-16" />
                  <p>左のメニューから相談内容を選んでください</p>
                </div>
              )}

              <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role !== "user" && (
                      <Avatar className="h-8 w-8 border border-border shadow-sm bg-white">
                        {msg.role === "system" ? (
                          <div className="h-full w-full flex items-center justify-center bg-slate-100">
                            <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
                          </div>
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary to-purple-600 text-white">
                            <Bot className="h-5 w-5" />
                          </div>
                        )}
                      </Avatar>
                    )}

                    <div className={`max-w-[80%] space-y-2`}>
                      {/* Message Bubble */}
                      <div
                        className={`p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-tr-none"
                            : msg.role === "system"
                            ? "bg-slate-100 text-slate-600 text-xs py-2 px-4 rounded-full border border-slate-200 flex items-center gap-2"
                            : "bg-white border border-border text-foreground rounded-tl-none"
                        }`}
                      >
                        {msg.content}
                      </div>

                      {/* External App Integration Badge */}
                      {msg.externalApp && (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200 w-fit"
                        >
                          <msg.externalApp.icon className="h-3 w-3" />
                          <span className="font-bold">{msg.externalApp.name}</span>
                          <span>
                            {msg.externalApp.status === "connecting" && "に接続中..."}
                            {msg.externalApp.status === "connected" && "と連携しました"}
                            {msg.externalApp.status === "completed" && "での処理が完了"}
                          </span>
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      {msg.actions && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {msg.actions.map((action) => (
                            <Button
                              key={action.id}
                              size="sm"
                              variant="outline"
                              onClick={() => handleAction(action.nextScenarioId!, action.label)}
                              className="bg-white hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors text-xs h-auto py-2 px-3 rounded-xl shadow-sm"
                            >
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>

                    {msg.role === "user" && (
                      <Avatar className="h-8 w-8 border border-border shadow-sm">
                        <AvatarFallback className="bg-slate-200 text-slate-600">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="flex gap-3 justify-start"
                >
                  <Avatar className="h-8 w-8 border border-border shadow-sm">
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary to-purple-600 text-white">
                      <Bot className="h-5 w-5" />
                    </div>
                  </Avatar>
                  <div className="bg-white border border-border p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area (Mock) */}
          <div className="p-4 bg-white border-t border-border/50">
            <div className="relative">
              <input
                type="text"
                disabled
                placeholder={activeScenario ? "AIが対応中です..." : "左のメニューから相談内容を選んでください"}
                className="w-full bg-secondary/30 border border-border rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 h-8 w-8 rounded-full" 
                disabled
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
