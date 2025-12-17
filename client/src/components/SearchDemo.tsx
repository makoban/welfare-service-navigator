import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X, Filter, ArrowRight } from "lucide-react";
import { TAGS, CATEGORIES, SERVICES, TagType, ServiceType } from "@/data/demoData";
import { motion, AnimatePresence } from "framer-motion";

export function SearchDemo() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter Logic
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      // Category Filter
      if (selectedCategory !== "all" && service.category !== selectedCategory) {
        return false;
      }
      // Tag Filter (AND condition: must have all selected tags)
      if (selectedTags.length > 0) {
        const hasAllTags = selectedTags.every((tagId) => service.tags.includes(tagId));
        if (!hasAllTags) return false;
      }
      // Search Query Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          service.title.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedTags, selectedCategory, searchQuery]);

  // Handlers
  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">スマート・ナビゲーター体験デモ</h2>
        <p className="text-muted-foreground">
          実際にタグやカテゴリを選択して、サービスの絞り込みを体験してみてください。
        </p>
      </div>

      <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md overflow-hidden">
        <CardHeader className="bg-secondary/30 border-b border-border/50 pb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="キーワードで探す（例：ホテル、祝い金）"
                className="pl-10 bg-white border-none shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="text-muted-foreground hover:text-destructive"
                disabled={selectedTags.length === 0 && selectedCategory === "all" && !searchQuery}
              >
                <X className="mr-2 h-4 w-4" /> 条件をクリア
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 overflow-x-auto pb-2">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="bg-transparent p-0 h-auto gap-2">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=inactive]:bg-white data-[state=inactive]:border-border shadow-sm transition-all"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Tag Selection */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex items-center mr-2 text-sm font-bold text-muted-foreground">
              <Filter className="mr-2 h-4 w-4" />
              タグで絞り込む:
            </div>
            {TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag.id);
              const TagIcon = tag.icon;
              return (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                    ${isSelected 
                      ? "bg-primary/10 border-primary text-primary shadow-inner" 
                      : "bg-white border-border text-muted-foreground hover:bg-secondary hover:border-primary/30 shadow-sm"
                    }
                  `}
                >
                  <TagIcon className={`h-3.5 w-3.5 ${isSelected ? "text-primary" : tag.color}`} />
                  {tag.label}
                </button>
              );
            })}
          </div>
        </CardHeader>

        <CardContent className="p-6 min-h-[400px] bg-secondary/10">
          <div className="mb-4 text-sm text-muted-foreground font-medium">
            検索結果: {filteredServices.length} 件
          </div>
          
          {filteredServices.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
              <Search className="h-12 w-12 mb-4 opacity-20" />
              <p>条件に一致するサービスが見つかりませんでした。</p>
              <Button variant="link" onClick={clearFilters}>条件をリセットする</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none bg-white overflow-hidden group">
        <div className="relative h-32 overflow-hidden bg-secondary/20">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={service.discountType === "給付金" ? "default" : "secondary"} className="shadow-sm">
              {service.discountType}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-xs mt-1">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex flex-wrap gap-1 mb-3">
            {service.tags.map(tagId => {
              const tag = TAGS.find(t => t.id === tagId);
              if (!tag) return null;
              return (
                <span key={tagId} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                  #{tag.label}
                </span>
              );
            })}
          </div>
          <div className="font-bold text-accent text-lg">
            {service.discountValue}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button size="sm" className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
            詳細を見る <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
