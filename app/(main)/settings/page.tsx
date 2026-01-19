import {
    Camera,
    ChevronRight,
    LogOut
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settings | Talenzy",
  description: "Manage your account settings, privacy, and preferences on Talenzy.",
  openGraph: {
    title: "Settings | Talenzy",
    description: "Manage your account settings, privacy, and preferences on Talenzy.",
    type: "website",
    url: "https://www.talenzy.com/settings",
  },
  twitter: {
    card: "summary",
    title: "Settings | Talenzy",
    description: "Manage your account settings, privacy, and preferences on Talenzy.",
  },
};

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground text-center">Settings</h1>
      </div>
      
      {/* Profile Section - TikTok Style */}
      <div className="mb-6 bg-background border border-border rounded-xl overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="size-24 rounded-full bg-gradient-to-br from-primary to-purple-800 p-1">
              <div className="size-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-foreground font-bold text-2xl">
                  SJ
                </span>
              </div>
            </div>
            <button className="absolute bottom-0 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <h2 className="text-xl font-bold text-foreground">Sarah Jenkins</h2>
          <p className="text-muted-foreground">@sarahcreative</p>
          <div className="mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center gap-1">
            <span className="size-2 bg-primary rounded-full"></span>
            Verified
          </div>
        </div>
        
        <div className="border-t border-border">
          <Link href="/settings/edit-profile" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Edit Profile</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>
      
      {/* Settings Options - TikTok Style */}
      <div className="bg-background border border-border rounded-xl overflow-hidden mb-6">
        <div className="border-b border-border">
          <h3 className="p-4 text-sm font-bold text-foreground uppercase tracking-wider">Account</h3>
        </div>
        
        <div className="divide-y divide-border">
          <Link href="/settings/privacy-and-safety" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Privacy and safety</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="/settings/content-preferences" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Content preferences</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="/settings/family-pairing" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Family pairing</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="/settings/data-and-history" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Data and history</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="/settings/two-factor-auth" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Two-factor authentication</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>
      
      <div className="bg-background border border-border rounded-xl overflow-hidden mb-6">
        <div className="border-b border-border">
          <h3 className="p-4 text-sm font-bold text-foreground uppercase tracking-wider">Notifications</h3>
        </div>
        
        <div className="divide-y divide-border">
          <Link href="/settings/notification-settings" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Notification settings</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="#" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Email notifications</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>
      
      <div className="bg-background border border-border rounded-xl overflow-hidden mb-6">
        <div className="border-b border-border">
          <h3 className="p-4 text-sm font-bold text-foreground uppercase tracking-wider">App settings</h3>
        </div>
        
        <div className="divide-y divide-border">
          <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Dark mode</span>
            <div className="w-10 h-6 bg-primary/20 rounded-full relative">
                        <div className="w-5 h-5 bg-primary rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
          </button>
          
          <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Language</span>
            <span className="text-muted-foreground text-sm">English</span>
          </button>
          
          <Link href="/settings/app-settings" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Accessibility</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="/settings/app-settings" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Data usage</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>
      
      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="border-b border-border">
          <h3 className="p-4 text-sm font-bold text-foreground uppercase tracking-wider">Support</h3>
        </div>
        
        <div className="divide-y divide-border">
          <Link href="#" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Help center</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="#" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Contact us</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <Link href="#" className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
            <span className="text-foreground font-medium">Report a problem</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          
          <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors text-destructive">
            <span className="font-medium">Log out</span>
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}