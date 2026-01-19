"use client";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import DiscoverPeopleCard from "./DiscoverPeopleCard";

const DiscoverPeople = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const profiles = [
    {
      id: "1",
      name: "GuitarMaster",
      username: "@guitarmaster",
      avatar:
        "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100&h=100", // Guitarist
      role: "Musician",
      location: "Los Angeles",
      bio: "Creating soulful riffs and melodies. Open for...",
      followers: "45.2k",
      posts: "128",
      verified: true,
      isFollowing: false,
      online: true,
    },
    {
      id: "2",
      name: "Sarah Sterling",
      username: "@sarah_dance",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100", // Girl
      role: "Dancer",
      location: "New York",
      bio: "Contemporary dancer & choreographer. Movin...",
      followers: "18.4k",
      posts: "342",
      verified: false,
      isFollowing: true,
      online: false,
    },
    {
      id: "3",
      name: "Davide Rossi",
      username: "@davide_design",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100", // Guy
      role: "Designer",
      location: "Milan",
      bio: "Visual storyteller and brand identity speciali...",
      followers: "8.2k",
      posts: "56",
      projects: true, // Label switch
      verified: true,
      isFollowing: false,
      online: true,
    },
    {
      id: "4",
      name: "Anna Klein",
      username: "@annak_photo",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100", // Girl 3
      role: "Photographer",
      location: "Berlin",
      bio: "Capturing moments that last forever. Portrait &...",
      followers: "15.9k",
      posts: "890",
      label: "SHOTS",
      verified: false,
      isFollowing: false,
      online: false,
    },
    {
      id: "5",
      name: "James Lee",
      username: "@james_dev",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100",
      role: "Developer",
      location: "San Francisco",
      bio: "Full-stack wizard building the future of...",
      followers: "5.3k",
      posts: "42",
      label: "REPOS",
      verified: false,
      isFollowing: false,
      online: true,
    },
    {
      id: "6",
      name: "Jenny Art",
      username: "@jenny_art",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100",
      role: "Artist",
      location: "Paris",
      bio: "Exploring colors and emotions through digit...",
      followers: "22.1k",
      posts: "105",
      label: "WORKS",
      verified: true,
      isFollowing: true,
      online: false,
    },
    {
      id: "7",
      name: "Mike Motion",
      username: "@mike_motion",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100",
      role: "Videographer",
      location: "Toronto",
      bio: "Cinematic storytelling through lens....",
      followers: "9.8k",
      posts: "64",
      label: "VIDEOS",
      verified: false,
      isFollowing: false,
      online: false,
    },
    {
      id: "8",
      name: "Lisa M.",
      username: "@lisa_model",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100",
      role: "Model",
      location: "Tokyo",
      bio: "Fashion and commercial model. Passionate abo...",
      followers: "30.5k",
      posts: "450",
      label: "PHOTOS",
      verified: false,
      isFollowing: false,
      online: true,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-32">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-foreground  tracking-tight mb-1">
            Discover <span className="text-primary">Talent</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Connect with incredible creators around the globe
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-background/50 p-4 sm:p-5 rounded-lg border border-border mb-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1 relative group">
            <Input
              type="text"
              placeholder="Search by name or username"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="musician">Musicians</SelectItem>
                <SelectItem value="dancer">Dancers</SelectItem>
                <SelectItem value="designer">Designers</SelectItem>
                <SelectItem value="photographer">Photographers</SelectItem>
                <SelectItem value="artist">Artists</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger>
                <SelectValue placeholder="Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="guitar">Guitar</SelectItem>
                <SelectItem value="piano">Piano</SelectItem>
                <SelectItem value="vocals">Vocals</SelectItem>
                <SelectItem value="production">Production</SelectItem>
                <SelectItem value="mixing">Mixing</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedExperience}
              onValueChange={setSelectedExperience}
            >
              <SelectTrigger className="min-w-37.5">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                <SelectItem value="intermediate">
                  Intermediate (2-5 years)
                </SelectItem>
                <SelectItem value="advanced">Advanced (5-10 years)</SelectItem>
                <SelectItem value="expert">Expert (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {profiles.map((profile) => (
          <DiscoverPeopleCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverPeople;