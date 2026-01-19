import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    AtSign,
    Camera,
    Lock,
    Mail,
    MapPin,
    Pencil,
    Phone,
} from "lucide-react";
import type { Metadata } from "next";

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
    <div className="flex h-[calc(100vh-80px)] sm:h-full flex-col lg:flex-row bg-background">
      {/* Left Sidebar - Settings Navigation */}
      <div className="w-full lg:w-72 bg-background border-b lg:border-b-0 lg:border-r border-border/30 p-4 sm:p-8 overflow-x-auto lg:overflow-y-auto no-scrollbar">
        <h2 className="text-foreground font-black text-2xl mb-8 uppercase tracking-tighter italic hidden lg:block">
          Settings<span className="text-primary">.</span>
        </h2>

        <nav className="flex lg:flex-col gap-3 min-w-max lg:min-w-0">
          {[
            { label: "My Account", icon: AtSign, active: true },
            { label: "Profile", icon: Pencil },
            { label: "Privacy & Safety", icon: Lock },
            { label: "Notifications", icon: null },
            { label: "Billing", icon: null },
            { label: "Security", icon: Lock },
            { label: "Appearance", icon: null },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all whitespace-nowrap text-xs font-black uppercase tracking-widest ${
                  item.active
                    ? "bg-primary text-primary-foreground scale-[1.02]"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground border border-transparent hover:border-border/5"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-10 pb-32">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3 tracking-tight uppercase">
              My Account
            </h1>
            <p className="text-muted-foreground font-medium text-sm sm:text-base max-w-xl">
              Control your experience and manage your personal data across the
              Talenzy ecosystem.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Profile Card */}
            <div className="bg-background/50 backdrop-blur-xl rounded-[32px] p-6 sm:p-10 border border-border/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative z-10">
                <div className="relative">
                  <div className="size-28 sm:size-32 rounded-[2rem] bg-gradient-to-br from-primary to-purple-800 p-1">
                    <div className="size-full bg-background rounded-[1.8rem] flex items-center justify-center overflow-hidden">
                      <span className="text-foreground font-black text-3xl italic">
                        SJ
                      </span>
                    </div>
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-foreground text-primary p-3 rounded-2xl hover:scale-110 transition-transform active:scale-95">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg mb-4 uppercase tracking-widest border border-primary/20">
                    <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
                    Verified Creator
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2 uppercase tracking-tight">
                    Sarah Jenkins
                  </h3>
                  <p className="text-primary font-bold text-sm mb-6 uppercase tracking-tighter">
                    @sarahcreative
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                    <Button className="bg-foreground text-primary hover:bg-foreground/90 rounded-xl h-12 px-8 font-black uppercase tracking-widest text-xs">
                      Save Profile
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-transparent border-border text-foreground hover:bg-background rounded-xl h-12 px-8 font-black uppercase tracking-widest text-xs"
                    >
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-background/30 rounded-[32px] p-6 sm:p-10 border border-border/40">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h3 className="text-foreground font-black text-xl uppercase tracking-tight">
                    Personal Data
                  </h3>
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">
                    Private Information
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                    Email Address
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                    <Input
                      type="email"
                      value="sarah.jenkins@example.com"
                      className="bg-background/50 border-border text-foreground pl-12 h-14 rounded-2xl focus:border-primary/50 transition-all font-bold"
                      readOnly
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                    Phone Number
                  </Label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                    <Input
                      type="tel"
                      value="+1 (555) 000-1234"
                      className="bg-background/50 border-border text-foreground pl-12 h-14 rounded-2xl focus:border-primary/50 transition-all font-bold"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="bg-background/30 rounded-[32px] p-6 sm:p-10 border border-border/40">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-primary">
                  <Pencil className="size-6" />
                </div>
                <div>
                  <h3 className="text-foreground font-black text-xl uppercase tracking-tight">
                    Public Profile
                  </h3>
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">
                    Displayed to users
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <Label className="text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                    Username
                  </Label>
                  <div className="relative group">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                    <Input
                      type="text"
                      defaultValue="@sarahcreative"
                      className="bg-background/50 border-border text-foreground pl-12 h-14 rounded-2xl focus:border-primary/50 transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                    Your Location
                  </Label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                    <Input
                      type="text"
                      defaultValue="Los Angeles, CA"
                      className="bg-background/50 border-border text-foreground pl-12 h-14 rounded-2xl focus:border-primary/50 transition-all font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-muted-foreground font-black uppercase tracking-widest text-[10px]">
                  About Yourself
                </Label>
                <Textarea
                  defaultValue="Digital artist and content creator passionate about bringing imagination to life. Open for collaborations!"
                  className="bg-background/50 border-border text-foreground min-h-32 rounded-2xl focus:border-primary/50 transition-all p-5 font-medium leading-relaxed resize-none"
                />
                <div className="flex items-center justify-between mt-3">
                  <p className="text-muted-foreground/60 text-[10px] font-black uppercase tracking-widest">
                    Story of your personality
                  </p>
                  <p className="text-muted-foreground/40 text-[10px] font-black uppercase tracking-widest">
                    84 / 200
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}