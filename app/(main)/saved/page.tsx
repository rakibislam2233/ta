import { Bookmark, Lock, Play } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved | Talenzy",
  description: "Access your saved posts and content on Talenzy. Keep track of your favorite creative content.",
  openGraph: {
    title: "Saved | Talenzy",
    description: "Access your saved posts and content on Talenzy. Keep track of your favorite creative content.",
    type: "website",
    url: "https://www.talenzy.com/saved",
  },
  twitter: {
    card: "summary",
    title: "Saved | Talenzy",
    description: "Access your saved posts and content on Talenzy. Keep track of your favorite creative content.",
  },
};

export default function SavedPage() {
  const savedItems = [
    { id: 1, type: "video", title: "Guitar Tutorial", thumbnail: "GM", pinned: false },
    { id: 2, type: "image", title: "Design Inspiration", thumbnail: "DI", pinned: false },
    { id: 3, type: "video", title: "Dance Performance", thumbnail: "DP", pinned: true },
    { id: 4, type: "image", title: "Art Collection", thumbnail: "AC", pinned: false },
    { id: 5, type: "video", title: "Music Production", thumbnail: "MP", locked: true },
    { id: 6, type: "image", title: "Branding Guide", thumbnail: "BG", pinned: false },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bookmark className="h-6 w-6 text-[#9419e6]" />
        <h1 className="text-2xl font-bold text-foreground">Saved Posts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="bg-background rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-colors cursor-pointer group"
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-primary/10">
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                    <Play className="h-8 w-8 text-foreground ml-1" />
                  </div>
                </div>
              )}
              {item.pinned && (
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                  PINNED
                </div>
              )}
              {item.locked && (
                <div className="absolute top-3 right-3 bg-background text-foreground p-2 rounded-full">
                  <Lock className="h-4 w-4" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">Saved 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

