'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AtSign, Camera, Globe, Hash, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function EditProfilePage() {
  const [profileData, setProfileData] = useState({
    displayName: 'Sarah Jenkins',
    username: '@sarahcreative',
    bio: 'Digital artist and content creator passionate about bringing imagination to life. Open for collaborations!',
    website: 'https://sarahjenkins.com',
    location: 'Los Angeles, CA',
    email: 'sarah.jenkins@example.com',
    phone: '+1 (555) 000-1234',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
    // Handle profile update logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Edit Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-background border border-border rounded-xl p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="size-24 rounded-full bg-gradient-to-br from-primary to-purple-800 p-1">
                <div className="size-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-foreground font-bold text-2xl">
                    SJ
                  </span>
                </div>
              </div>
              <button type="button" className="absolute bottom-0 right-4 bg-primary text-primary-foreground rounded-full p-2">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground">{profileData.displayName}</h2>
              <p className="text-muted-foreground">{profileData.username}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="displayName" className="text-muted-foreground">Display Name</Label>
              <div className="relative mt-1">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="displayName"
                  name="displayName"
                  value={profileData.displayName}
                  onChange={handleChange}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="username" className="text-muted-foreground">Username</Label>
              <div className="relative mt-1">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="bio" className="text-muted-foreground">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows={4}
                className="mt-1 bg-background border-border text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="website" className="text-muted-foreground">Website</Label>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  name="website"
                  value={profileData.website}
                  onChange={handleChange}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-muted-foreground">Location</Label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-muted-foreground">Email</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-muted-foreground">Phone</Label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={handleChange}
                  className="pl-10 bg-background border-border text-foreground"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="outline" className="flex-1 border-border text-foreground hover:bg-accent">
            Cancel
          </Button>
          <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}