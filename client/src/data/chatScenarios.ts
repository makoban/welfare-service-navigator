import { MessageCircle, Phone, MapPin, Gift, Calendar, Car } from "lucide-react";

export type MessageType = {
  id: string;
  role: "user" | "ai" | "system";
  content: string;
  timestamp: string;
  actions?: ActionType[];
  status?: "sending" | "sent" | "read" | "typing";
  externalApp?: {
    name: "LINE" | "Mail" | "Phone";
    icon: any;
    status: "connecting" | "connected" | "completed";
  };
};

export type ActionType = {
  id: string;
  label: string;
  nextScenarioId?: string;
  type: "button" | "link";
};

export type ScenarioType = {
  id: string;
  title: string;
  icon: any;
  initialMessage: string;
  steps: Record<string, (prevInput?: string) => MessageType[]>;
};

export const CHAT_SCENARIOS: ScenarioType[] = [
  {
    id: "gift",
    title: "プレゼント相談",
    icon: Gift,
    initialMessage: "5000円以内で60代の女性が喜ぶプレゼント",
    steps: {
      start: () => [
        {
          id: "g1",
          role: "ai",
          content: "承知いたしました。60代の女性向けで5,000円以内ですね。福利厚生割引が適用できる、評価の高いアイテムをいくつかピックアップしました。",
          timestamp: "Now",
          status: "sent",
          actions: [
            { id: "g_sweets", label: "高級フルーツゼリー詰め合わせ (4,800円)", nextScenarioId: "select_sweets", type: "button" },
            { id: "g_bath", label: "温泉入浴剤＆タオルセット (4,500円)", nextScenarioId: "select_bath", type: "button" },
            { id: "g_flower", label: "プリザーブドフラワー (4,980円)", nextScenarioId: "select_flower", type: "button" },
          ],
        },
      ],
      select_sweets: () => [
        {
          id: "g2",
          role: "user",
          content: "高級フルーツゼリー詰め合わせがいいな。",
          timestamp: "Now",
          status: "read",
        },
        {
          id: "g3",
          role: "ai",
          content: "かしこまりました。「千疋屋総本店」のギフトセットですね。提携ショップの担当者に、在庫確認と最短の配送日をLINEで問い合わせています...",
          timestamp: "Now",
          status: "typing",
          externalApp: { name: "LINE", icon: MessageCircle, status: "connecting" },
        },
        {
          id: "g4",
          role: "system",
          content: "提携ショップ「千疋屋」と接続しました",
          timestamp: "Now",
        },
        {
          id: "g5",
          role: "ai",
          content: "担当者より返信がありました。『在庫ございます。本日中のご注文で、明後日の配送が可能です。熨斗（のし）もお付けできます』とのことです。注文手続きを進めますか？",
          timestamp: "Now",
          status: "sent",
          externalApp: { name: "LINE", icon: MessageCircle, status: "connected" },
          actions: [
            { id: "g_order", label: "注文をお願いする", nextScenarioId: "order_complete", type: "button" },
            { id: "g_cancel", label: "他のものを見る", nextScenarioId: "start", type: "button" },
          ],
        },
      ],
      order_complete: () => [
        {
          id: "g6",
          role: "user",
          content: "注文をお願いする。熨斗もつけて。",
          timestamp: "Now",
          status: "read",
        },
        {
          id: "g7",
          role: "ai",
          content: "承知しました。ショップに注文確定と熨斗の依頼を送信しました。決済は登録済みのカードで行います。完了通知が届くまで少々お待ちください。",
          timestamp: "Now",
          status: "sent",
          externalApp: { name: "LINE", icon: MessageCircle, status: "completed" },
        },
      ],
    },
  },
  {
    id: "travel",
    title: "宿探し",
    icon: Calendar,
    initialMessage: "年末年始に北関東で空席がある宿",
    steps: {
      start: () => [
        {
          id: "t1",
          role: "ai",
          content: "年末年始（12/30〜1/3）の北関東エリアですね。大人2名様でよろしいでしょうか？提携旅行代理店のリアルタイム空室状況を確認します。",
          timestamp: "Now",
          status: "sent",
        },
        {
          id: "t2",
          role: "system",
          content: "JTB・楽天トラベル・じゃらんのAPIに接続中...",
          timestamp: "Now",
        },
        {
          id: "t3",
          role: "ai",
          content: "お待たせしました。キャンセルが出たばかりの宿を含め、2件見つかりました。",
          timestamp: "Now",
          status: "sent",
          actions: [
            { id: "t_hotel1", label: "鬼怒川温泉 あさや (残り1室・52,000円)", nextScenarioId: "book_hotel1", type: "button" },
            { id: "t_hotel2", label: "草津温泉 ホテル櫻井 (残り2室・68,000円)", nextScenarioId: "book_hotel2", type: "button" },
          ],
        },
      ],
      book_hotel1: () => [
        {
          id: "t4",
          role: "user",
          content: "鬼怒川温泉 あさやの詳細を教えて。",
          timestamp: "Now",
          status: "read",
        },
        {
          id: "t5",
          role: "ai",
          content: "「あさや」はブッフェが有名で、空中庭園露天風呂も人気です。残り1室のため、すぐに埋まる可能性があります。宿の予約担当にチャットで仮押さえを依頼しますか？",
          timestamp: "Now",
          status: "sent",
          externalApp: { name: "LINE", icon: MessageCircle, status: "connecting" },
          actions: [
            { id: "t_reserve", label: "仮押さえを依頼する", nextScenarioId: "reserve_done", type: "button" },
          ],
        },
      ],
      reserve_done: () => [
        {
          id: "t6",
          role: "user",
          content: "仮押さえお願いします！",
          timestamp: "Now",
          status: "read",
        },
        {
          id: "t7",
          role: "ai",
          content: "了解しました。宿の予約デスクに自動コールを行っています... 確保できました！予約番号は「#8823」です。詳細はメールにお送りしました。",
          timestamp: "Now",
          status: "sent",
          externalApp: { name: "Phone", icon: Phone, status: "completed" },
        },
      ],
    },
  },
  {
    id: "car",
    title: "車のトラブル",
    icon: Car,
    initialMessage: "車をぶつけたのですぐに対応してくれるところ",
    steps: {
      start: () => [
        {
          id: "c1",
          role: "ai",
          content: "大変です！お怪我はありませんか？現在地（GPS）から、最寄りの提携修理工場とロードサービスを検索します。",
          timestamp: "Now",
          status: "sent",
        },
        {
          id: "c2",
          role: "system",
          content: "位置情報：東京都港区芝公園 付近を取得",
          timestamp: "Now",
        },
        {
          id: "c3",
          role: "ai",
          content: "半径3km以内に「麻布オートサービス」が見つかりました。評価4.8の優良提携店です。すぐに担当者に連絡を取り、レッカーの手配と修理の相談を行いますか？",
          timestamp: "Now",
          status: "sent",
          actions: [
            { id: "c_call", label: "すぐに連絡して！", nextScenarioId: "calling", type: "button" },
          ],
        },
      ],
      calling: () => [
        {
          id: "c4",
          role: "user",
          content: "すぐに連絡して！動かせないかも。",
          timestamp: "Now",
          status: "read",
        },
        {
          id: "c5",
          role: "ai",
          content: "承知しました。麻布オートサービスの緊急対応窓口とLINE WORKSで接続しました。状況を伝えています...",
          timestamp: "Now",
          status: "typing",
          externalApp: { name: "LINE", icon: MessageCircle, status: "connecting" },
        },
        {
          id: "c6",
          role: "ai",
          content: "担当者より返信：『すぐにレッカー車で向かいます。到着まで約15分です。安全な場所でお待ちください』とのことです。位置情報は共有済みです。",
          timestamp: "Now",
          status: "sent",
          externalApp: { name: "LINE", icon: MessageCircle, status: "connected" },
        },
      ],
    },
  },
];
