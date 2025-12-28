"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Hire() {
  const categories = [
    { name: "Music & Audio", checked: true },
    { name: "Dance & Performance", checked: false },
    { name: "Visual Arts", checked: false },
    { name: "Tech & Development", checked: false },
    { name: "Lifestyle & Model", checked: false },
  ];

  const talents = [
    {
      name: "GuitarMaster",
      username: "@guitarmaster",
      role: "Musician",
      rating: 4.9,
      jobs: 120,
      rate: "$80/hr",
      bio: "Professional session guitarist with 10+ years of experience. I can...",
      tags: ["Music", "Guitarist", "Composer"],
      image:
        "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100&h=100", // Guitarist
      followers: "45.2k",
    },
    {
      name: "Sarah_S",
      username: "@sarahdance",
      role: "Dancer",
      rating: 5.0,
      jobs: 45,
      rate: "$120/hr",
      bio: "Contemporary dancer and choreographer. Available for music...",
      tags: ["Dance", "Choreography"],
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100", // Girl
      followers: "128k",
    },
    {
      name: "Jenny_Art",
      username: "@jennycolors",
      role: "Artist",
      rating: 4.8,
      jobs: 82,
      rate: "$95/hr",
      bio: "Digital illustrator specializing in character design and concept art. ...",
      tags: ["Art", "Digital", "NFT"],
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100", // Girl 2
      followers: "67.5k",
    },
    {
      name: "Tom_Tech",
      username: "@tomcodes",
      role: "Reviewer",
      rating: 5.0,
      jobs: 210,
      rate: "$250/hr",
      bio: "Tech enthusiast and reviewer. I create high-quality unboxing and...",
      tags: ["Tech", "Reviewer"],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100", // Guy
      followers: "240k",
    },
    {
      name: "CreativeAgency",
      username: "@creative_hq",
      role: "Agency",
      rating: 4.7,
      jobs: "300+",
      rate: "$150/hr",
      bio: "Full-service creative design agency. We handle branding, logo design,...",
      tags: ["Design", "Branding"],
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100", // Logo placeholder
      followers: "15.4k",
    },
    {
      name: "Anna K.",
      username: "@annadance",
      role: "Dancer",
      rating: 4.6,
      jobs: 28,
      rate: "$75/hr",
      bio: "Classical ballet dancer available for artistic photoshoots, music videos,...",
      tags: ["Dance", "Ballet"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100", // Girl 3
      followers: "8.2k",
    },
  ];

  return (
    <div className="flex h-full">
      {/* Left Filters Sidebar (Simulated as typical sidebar in this view, based on Image 2 structure)
          Image 2 shows:
          Left: "Filters", Categories (Checkbox), Price Range, Rating, Location, Availability, "Apply Filters".
          Right: Main Content "Hire Talented Creators" + Search Bar + Talent Grid.
          Since MainLayout sidebar is already there, I assume this filter sidebar is an *inner* sidebar?
          Wait, MainLayout sidebar is the APP sidebar.
          In Image 2, there is an APP sidebar on the far left (Icons only in that view? No, standard sidebar).
          So this "Filters" column is part of the PAGE content.
      */}

      {/* Inner Filter Sidebar */}
      <div className="w-64 p-6 border-r border-border-dark/30 hidden lg:block overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg">Filters</h2>
          <button className="text-primary text-sm hover:underline">
            Reset
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      cat.checked
                        ? "bg-primary border-primary"
                        : "border-gray-500 group-hover:border-primary"
                    }`}
                  >
                    {cat.checked && (
                      <div className="w-2 h-2 bg-white rounded-sm" />
                    )}
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-white font-semibold mb-3">Price Range / Hr</h3>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>$10</span>
              <span>$500+</span>
            </div>
            <div className="h-1 bg-[#2a2330] rounded-full relative">
              <div className="absolute left-[30%] right-[40%] bg-primary h-full rounded-full" />
              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-surface-dark cursor-pointer shadow-lg" />
            </div>
            <div className="mt-2 text-center text-primary font-bold text-sm">
              $150/hr
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-white font-semibold mb-3">Availability</h3>
            <select className="w-full bg-[#1b1121] border border-border-dark/30 rounded-lg h-10 px-3 text-sm text-white focus:outline-none focus:border-primary">
              <option>Anytime</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-semibold mb-3">Location</h3>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="City or Country"
                className="w-full bg-[#1b1121] border border-border-dark/30 rounded-lg h-10 pl-9 pr-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Verified toggle */}
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold">Verified Only</span>
            <div className="w-10 h-6 bg-[#2a2330] rounded-full p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full ml-auto" />
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-4">
            Apply Filters
          </Button>
          <Button
            variant="outline"
            className="w-full border-border-dark text-white hover:bg-[#2a2330] mt-2"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Gradient Hero Header */}
        <div className="bg-gradient-to-r from-primary to-[#5b21b6] rounded-2xl p-8 mb-8 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

          <h1 className="text-3xl font-bold text-white mb-2 relative z-10">
            Hire Talented Creators
          </h1>
          <p className="text-white/80 mb-8 max-w-lg mx-auto relative z-10">
            Connect with top-tier musicians, dancers, artists, and influencers
            for your next campaign or project.
          </p>

          <div className="relative max-w-xl mx-auto z-10">
            <input
              type="text"
              placeholder="Search for skills (e.g. 'Guitarist', 'Video Editor')..."
              className="w-full h-12 rounded-full pl-6 pr-32 bg-white text-black placeholder:text-gray-500 focus:outline-none shadow-xl"
            />
            <Button className="absolute right-1 top-1 bottom-1 rounded-full bg-purple-900 hover:bg-purple-950 text-white px-6 font-semibold">
              Search
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-6 mb-6 border-b border-border-dark/30 pb-2">
          <button className="text-primary font-semibold border-b-2 border-primary pb-2 px-2">
            Available for Hire
          </button>
          <button className="text-gray-400 font-medium hover:text-white pb-2 px-2 transition-colors">
            My Hiring Requests
          </button>
          <button className="text-gray-400 font-medium hover:text-white pb-2 px-2 transition-colors">
            My Active Hires
          </button>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {talents.map((talent, i) => (
            <div
              key={i}
              className="bg-surface-dark rounded-xl p-5 border border-border-dark/30 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2a2330]">
                      <Image
                        src={talent.image || ""}
                        alt={talent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-dark rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="text-white font-bold">{talent.name}</h3>
                      <div className="bg-blue-500 p-0.5 rounded-full">
                        <div className="w-2 h-2 text-white">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs">{talent.username}</p>
                    <div className="flex items-center gap-1 text-xs mt-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-white font-bold">
                        {talent.rating}
                      </span>
                      <span className="text-gray-500">
                        ({talent.jobs} jobs)
                      </span>
                    </div>
                  </div>
                </div>
                <Bookmark className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              </div>

              <div className="flex gap-2 mb-4">
                {talent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#2a2330] text-gray-300 text-xs px-2 py-1 rounded border border-border-dark/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {talent.bio}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border-dark/30">
                <div className="text-center">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                    Followers
                  </p>
                  <p className="text-white font-bold">{talent.followers}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                    Starting At
                  </p>
                  <p className="text-white font-bold">{talent.rate}</p>
                </div>
              </div>

              <Button className="w-full mt-4 bg-[#2a2330] hover:bg-primary text-white border border-border-dark/50 hover:border-primary transition-all font-semibold">
                Hire Now
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 pb-8">
          <Button
            variant="outline"
            className="rounded-full px-6 border-border-dark text-white hover:bg-surface-dark"
          >
            Load More Talents
          </Button>
        </div>
      </div>
    </div>
  );
}
