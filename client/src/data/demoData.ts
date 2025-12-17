import { Heart, Home, Plane, ShoppingBag, Smile, Users, Wallet, Briefcase, GraduationCap, Gift } from "lucide-react";

export type TagType = {
  id: string;
  label: string;
  icon: any;
  color: string;
};

export type CategoryType = {
  id: string;
  label: string;
};

export type ServiceType = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  discountType: "割引" | "特典" | "給付金";
  discountValue?: string;
  image: string;
};

export const TAGS: TagType[] = [
  { id: "childcare", label: "子育て", icon: Users, color: "text-pink-500" },
  { id: "saving", label: "節約", icon: Wallet, color: "text-green-500" },
  { id: "moving", label: "引っ越し", icon: Home, color: "text-blue-500" },
  { id: "health", label: "健康維持", icon: Heart, color: "text-red-500" },
  { id: "travel", label: "旅行・レジャー", icon: Plane, color: "text-sky-500" },
  { id: "celebration", label: "お祝い", icon: Gift, color: "text-yellow-500" },
  { id: "learning", label: "自己啓発", icon: GraduationCap, color: "text-purple-500" },
];

export const CATEGORIES: CategoryType[] = [
  { id: "all", label: "すべて" },
  { id: "life_support", label: "くらしのサポート" },
  { id: "housing", label: "住まい" },
  { id: "health", label: "健康・医療" },
  { id: "leisure", label: "レジャー・旅行" },
  { id: "celebration", label: "お祝い金" },
];

export const SERVICES: ServiceType[] = [
  {
    id: "1",
    title: "ベビー用品レンタル",
    description: "ベビーベッドやベビーカーなど、必要な期間だけお得にレンタル。",
    category: "life_support",
    tags: ["childcare", "saving"],
    discountType: "割引",
    discountValue: "20%OFF",
    image: "/images/icon-family.png",
  },
  {
    id: "2",
    title: "全国レジャー施設優待",
    description: "全国の遊園地や水族館、動物園などが会員特別価格で利用可能。",
    category: "leisure",
    tags: ["childcare", "travel", "saving"],
    discountType: "割引",
    discountValue: "最大50%OFF",
    image: "/images/icon-family.png",
  },
  {
    id: "3",
    title: "引っ越し一括見積もり＆割引",
    description: "提携引っ越し業者の基本料金が割引に。新生活をお得にスタート。",
    category: "housing",
    tags: ["moving", "saving", "housing"],
    discountType: "割引",
    discountValue: "30%OFF",
    image: "/images/icon-house.png",
  },
  {
    id: "4",
    title: "人間ドック・健康診断補助",
    description: "年に一度の健康チェックをサポート。提携医療機関で受診可能。",
    category: "health",
    tags: ["health", "saving"],
    discountType: "給付金",
    discountValue: "5,000円補助",
    image: "/images/icon-health.png",
  },
  {
    id: "5",
    title: "オンライン英会話",
    description: "自宅で気軽に英会話レッスン。ビジネス英語から日常会話まで。",
    category: "life_support",
    tags: ["learning", "saving"],
    discountType: "特典",
    discountValue: "初月無料",
    image: "/images/icon-family.png",
  },
  {
    id: "6",
    title: "出産お祝い金",
    description: "会員様または配偶者様が出産された際にお祝い金をお贈りします。",
    category: "celebration",
    tags: ["childcare", "celebration"],
    discountType: "給付金",
    discountValue: "10,000円",
    image: "/images/icon-family.png",
  },
  {
    id: "7",
    title: "新電力切り替えサービス",
    description: "電気代を見直して毎月の固定費を削減。手続きも簡単。",
    category: "housing",
    tags: ["saving", "housing"],
    discountType: "割引",
    discountValue: "基本料3ヶ月無料",
    image: "/images/icon-money.png",
  },
  {
    id: "8",
    title: "国内ホテル宿泊優待",
    description: "全国の提携ホテル・旅館が会員限定価格で宿泊可能。",
    category: "leisure",
    tags: ["travel", "saving"],
    discountType: "割引",
    discountValue: "会員限定価格",
    image: "/images/icon-house.png",
  },
];
