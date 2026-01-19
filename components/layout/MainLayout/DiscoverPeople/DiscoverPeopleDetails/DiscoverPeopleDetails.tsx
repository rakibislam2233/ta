"use client";
import HiringRequestModal from "@/components/HiringRequestModal";
import PostViewModal from "@/components/modals/PostViewModal";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { MOCK_POSTS } from "@/lib/data";
import { Post } from "@/lib/types";
import {
  Calendar,
  Gift,
  Link as LinkIcon,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Play,
  Star,
  ThumbsUp,
  UserPlus,
  Verified,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
const getProfileData = (username: string) => {
  const profiles = [
    {
      name: "GuitarMaster",
      username: "guitarmaster",
      avatar: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=400",
      role: "Musician",
      location: "Los Angeles, CA",
      bio: "Creating soulful riffs and melodies. Exploring the boundaries of sound and expression. #guitarist #music #live",
      followers: "45.2k",
      following: "128",
      rating: "4.9",
      verified: true,
      hiring: true,
    },
    {
      name: "Alex Creator",
      username: "alexcreates",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      role: "Digital Artist",
      location: "New York, USA",
      bio: "Digital Artist & 3D Animator 🎨 exploring the boundaries of motion and surrealism. Creating visual experiences for brands and dreamers. #3dart #blender",
      followers: "12.5k",
      following: "842",
      rating: "4.8",
      verified: true,
      hiring: true,
    },
    {
      name: "Sarah Sterling",
      username: "sarah_dance",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
      role: "Dancer",
      location: "New York, USA",
      bio: "Contemporary dancer & choreographer. Moving through life one step at a time. #dance #art #motion",
      followers: "18.4k",
      following: "342",
      rating: "4.7",
      verified: false,
      hiring: false,
    },
  ];
  return (
    profiles.find(
      (p) => p.username.toLowerCase() === username.toLowerCase()
    ) || {
      name: username.charAt(0).toUpperCase() + username.slice(1),
      username: username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      role: "Content Creator",
      location: "Unknown Location",
      bio: `Passionate creator ${username} sharing amazing content on Talenzy.`,
      followers: "0",
      following: "0",
      rating: "0.0",
      verified: false,
      hiring: false,
    }
  );
};

const DiscoverPeopleDetails = () => {
  const params = useParams();
  const usernameParam = params.username as string;
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const profile = useMemo(() => getProfileData(usernameParam), [usernameParam]);

  const userPosts = useMemo(() => {
    // Search both username and lowercase username for safety
    return MOCK_POSTS.filter(
      (p) =>
        p.username.toLowerCase() === usernameParam.toLowerCase() ||
        p.username.toLowerCase() === profile.username.toLowerCase()
    );
  }, [usernameParam, profile.username]);

  // Fallback posts if the user has none
  const displayPosts = useMemo(() => {
    if (userPosts.length > 0) return userPosts;

    // Default fallback for demo - show first 6 posts from MOCK_POSTS
    // This ensures no profile page looks empty
    return MOCK_POSTS.slice(0, 6);
  }, [userPosts]);

  return (
    <div className="max-w-6xl mx-auto pb-32 font-outfit">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-br from-[#2d0845] to-primary overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Profile Header */}
      <div className="px-4 sm:px-6 pb-6 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between -mt-20 sm:-mt-24 mb-6 gap-6 md:gap-4">
          <div className="relative group">
            <div className="size-32 sm:size-40 rounded-full p-1.5 bg-background">
              <div className="w-full h-full rounded-full ring-4 ring-primary">
                <div className="w-full h-full rounded-full bg-card overflow-hidden relative">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 mb-2 text-white w-full md:w-auto">
            <Button
              onClick={() => toast.follow(usernameParam)}
              className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 px-6 font-bold shadow-glow transition-all cursor-pointer hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              Follow
            </Button>
            <Button
              variant="outline"
              className="flex-1 cursor-pointer md:flex-none bg-card border-border text-foreground hover:bg-accent hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all flex items-center justify-center"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsHireModalOpen(true)}
              className="flex-1 cursor-pointer md:flex-none bg-card border-border text-foreground hover:bg-accent hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all flex items-center justify-center"
            >
              <Gift className="h-4 w-4 mr-2" />
              Hire
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/50 rounded-full h-10 w-10 flex items-center justify-center transition-all"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-8 mt-2 md:mt-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
              {profile.name}
            </h1>
            <div className="flex items-center gap-2">
              {profile.verified && (
                <Verified className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              )}
              {profile.hiring && (
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20 uppercase tracking-tighter">
                  AVAILABLE FOR HIRE
                </span>
              )}
            </div>
          </div>
          <p className="text-primary font-medium text-sm sm:text-base mb-4 lowercase tracking-tight">
            @{usernameParam}
          </p>
          <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed text-sm sm:text-base mx-auto md:mx-0">
            {profile.bio}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-muted-foreground text-[13px] mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary/70" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-primary/70" />
              <a href="#" className="hover:text-primary transition-colors">
                {profile.username}.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary/70" />
              <span>Joined March 2024</span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-8 p-4 bg-card/50 sm:p-5 sm:bg-card rounded-2xl border border-border w-full sm:w-fit mx-auto md:mx-0 justify-center sm:justify-start shadow-xl">
            <div className="text-center px-2">
              <p className="text-foreground font-bold text-lg sm:text-xl">
                {profile.followers}
              </p>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-widest ">
                FOLLOWERS
              </p>
            </div>
            <div className="w-px bg-border/50"></div>
            <div className="text-center px-2">
              <p className="text-foreground font-bold text-lg sm:text-xl">
                {profile.following}
              </p>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-widest ">
                FOLLOWING
              </p>
            </div>
            <div className="w-px bg-border/50"></div>
            <div className="text-center flex flex-col items-center px-2">
              <div className="flex items-center gap-1">
                <p className="text-foreground font-bold text-lg sm:text-xl">
                  {profile.rating}
                </p>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-widest ">
                RATING
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 sm:gap-10 border-b border-border mb-8 overflow-x-auto scrollbar-hide scroll-smooth">
          {["Portfolio", "Videos", "About", "Gifts"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`pb-4 px-1 border-b-2 transition-all text-xs sm:text-sm  uppercase tracking-widest whitespace-nowrap ${
                activeTab === tab
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {activeTab === "Portfolio" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
              {displayPosts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPost(item)}
                  className="relative aspect-square bg-card rounded-xl overflow-hidden group cursor-pointer border border-border"
                >
                  <Image
                    src={item.mediaUrl}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center md:gap-2">
                    {item.mediaItems?.some((m) => m.type === "video") && (
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl">
                        ▶
                      </div>
                    )}
                    <p className="text-white font-bold text-sm px-4 text-center line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
              {displayPosts.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-muted-foreground font-medium">
                    No portfolio items yet.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Videos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
              {displayPosts
                .filter(
                  (item) =>
                    item.mediaUrl.endsWith(".mp4") ||
                    item.mediaItems?.some((m) => m.type === "video")
                )
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPost(item)}
                    className="relative aspect-square bg-card rounded-xl overflow-hidden group cursor-pointer border border-border"
                  >
                    <Image
                      src={item.mediaUrl}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Play className="h-6 w-6 fill-white" />
                      </div>
                    </div>
                  </div>
                ))}
              {displayPosts.filter(
                (item) =>
                  item.mediaUrl.endsWith(".mp4") ||
                  item.mediaItems?.some((m) => m.type === "video")
              ).length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-muted-foreground font-medium">No videos found.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "About" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500 text-foreground">
              <div className="col-span-full mb-4">
                <h3 className="text-xl font-bold mb-4">
                  User Experience & Reviews
                </h3>
              </div>
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className="bg-card p-6 rounded-2xl border border-border flex flex-col gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full overflow-hidden relative border border-border bg-muted">
                        <Image
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer${id}`}
                          alt="Reviewer"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold text-sm">
                          Reviewer {id}
                        </h4>
                        <span className="text-muted-foreground text-xs">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < 5 - (id % 2)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Great work by {profile.name}! Very professional and
                    creative. The attention to detail in the work is amazing.
                    Definitely recommend working with them.
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                    <button className="text-xs text-muted-foreground font-medium hover:text-foreground flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" /> Helpful
                    </button>
                    <button className="text-xs text-foreground font-medium hover:text-foreground flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> Reply
                    </button>
                    <button className="ml-auto text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Gifts" && (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
              <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center mb-4">
                <Gift className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-foreground font-bold text-xl mb-2">
                No Gifts Yet
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Send a gift to show your appreciation!
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 px-6 font-bold shadow-glow">
                <Gift className="h-4 w-4 mr-2" />
                Send Gift
              </Button>
            </div>
          )}
        </div>
      </div>

      {selectedPost && (
        <PostViewModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          post={selectedPost}
        />
      )}

      {isHireModalOpen && (
        <HiringRequestModal
          talentName={profile.name}
          talentImage={profile.avatar}
          onClose={() => setIsHireModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DiscoverPeopleDetails;
