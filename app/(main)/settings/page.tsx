import {
  Camera,
  ChevronRight,
  User,
  Lock,
  Bell,
  Shield,
  Users,
  History,
  Moon,
  Globe,
  HelpCircle,
  Mail,
  AlertCircle,
  LogOut,
  Eye,
  UserX,
  MapPin,
  MessageSquare
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 border-r border-border min-h-screen p-4">
          <h1 className="text-xl font-semibold mb-6 px-3">Settings</h1>
          
          <div className="space-y-1">
            {/* Meta Accounts Center */}
            <div className="bg-accent rounded-lg p-3 mb-4 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">M</div>
                <span className="font-semibold text-sm">Meta</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">Accounts Center</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Manage your connected experiences and account settings across Meta technologies.
              </p>
              <div className="space-y-2 text-sm">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground w-full">
                  <User className="w-4 h-4" />
                  <span>Personal details</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground w-full">
                  <Lock className="w-4 h-4" />
                  <span>Password and security</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground w-full">
                  <Bell className="w-4 h-4" />
                  <span>Ad preferences</span>
                </button>
              </div>
              <button className="text-primary text-sm mt-3 hover:text-primary/80">
                See more in Accounts Center
              </button>
            </div>

            {/* How you use Instagram */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground px-3 mb-2">How you use Instagram</p>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <User className="w-5 h-5" />
                <span className="text-sm">Edit profile</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <Bell className="w-5 h-5" />
                <span className="text-sm">Notifications</span>
              </button>
            </div>

            {/* For professionals */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground px-3 mb-2">For professionals</p>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Professional account</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <Users className="w-5 h-5" />
                <span className="text-sm">Business tools and controls</span>
              </button>
            </div>

            {/* Who can see your content */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground px-3 mb-2">Who can see your content</p>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <Lock className="w-5 h-5" />
                <span className="text-sm">Account privacy</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left bg-accent">
                <Users className="w-5 h-5" />
                <span className="text-sm">Close Friends</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <UserX className="w-5 h-5" />
                <span className="text-sm">Blocked</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Story and location</span>
              </button>
            </div>

            {/* How others can interact with you */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground px-3 mb-2">How others can interact with you</p>
              <button className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-lg w-full text-left">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm">Messages and story replies</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-semibold mb-6">Edit profile</h2>
          
          {/* Profile Photo */}
          <div className="bg-accent border border-border rounded-2xl p-6 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center overflow-hidden">
                  <span className="text-primary-foreground font-semibold text-lg">SJ</span>
                </div>
                <div>
                  <p className="font-semibold">sarahcreative</p>
                  <p className="text-sm text-muted-foreground">Sarah Jenkins</p>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                Change photo
              </button>
            </div>
          </div>

          {/* Website */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Website</h3>
            <div className="bg-accent border border-border rounded-xl p-4">
              <input
                type="text"
                placeholder="Website"
                className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Bio</h3>
            <div className="bg-accent border border-border rounded-xl p-4">
              <textarea
                placeholder="Bio"
                className="w-full bg-transparent border-none outline-none text-sm resize-none text-foreground placeholder:text-muted-foreground"
                rows={3}
                defaultValue="Front-End Developer | MERN Stack Developer | React Developer | Web Developer"
              />
              <div className="text-xs text-muted-foreground text-right mt-1">76 / 150</div>
            </div>
          </div>

          {/* Show Threads badge */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Show Threads badge</h3>
            <div className="bg-accent border border-border rounded-xl p-4 flex items-center justify-between">
              <span className="text-sm">Show Threads badge</span>
              <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-primary rounded-full absolute top-0.5 right-0.5 transition-all"></div>
              </div>
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Gender</h3>
            <div className="bg-accent border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer">
              <span className="text-sm">Male</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This won't be part of your public profile.
            </p>
          </div>

          {/* Show account suggestions */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Show account suggestions on profiles</h3>
            <div className="bg-accent border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Show account suggestions on profiles</span>
                <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-primary rounded-full absolute top-0.5 right-0.5 transition-all"></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}