'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { AtSign, Camera, Globe, Hash, Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const profileSchema = z.object({
  displayName: z.string().min(2, 'Display name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  bio: z.string().max(160, 'Bio must be at most 160 characters').optional(),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  location: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
});

export default function EditProfilePage() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: 'Sarah Jenkins',
      username: '@sarahcreative',
      bio: 'Digital artist and content creator passionate about bringing imagination to life. Open for collaborations!',
      website: 'https://sarahjenkins.com',
      location: 'Los Angeles, CA',
      email: 'sarah.jenkins@example.com',
      phone: '+1 (555) 000-1234',
    },
  });

  const onSubmit = (data: z.infer<typeof profileSchema>) => {
    console.log('Profile updated:', data);
    // Handle profile update logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Edit Profile</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                <h2 className="text-xl font-bold text-foreground">{form.getValues('displayName')}</h2>
                <p className="text-muted-foreground">{form.getValues('username')}</p>
              </div>
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Display Name</FormLabel>
                    <FormControl>
                      <div className="relative mt-1">
                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          className="pl-10 bg-background border-border text-foreground"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Username</FormLabel>
                    <FormControl>
                      <div className="relative mt-1">
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          className="pl-10 bg-background border-border text-foreground"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        className="mt-1 bg-background border-border text-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Website</FormLabel>
                    <FormControl>
                      <div className="relative mt-1">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          className="pl-10 bg-background border-border text-foreground"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Location</FormLabel>
                    <FormControl>
                      <div className="relative mt-1">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          className="pl-10 bg-background border-border text-foreground"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="bg-background border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
            
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Email</FormLabel>
                    <FormControl>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          type="email"
                          className="pl-10 bg-background border-border text-foreground"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">Phone</FormLabel>
                    <FormControl>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          {...field}
                          type="tel"
                          className="pl-10 bg-background border-border text-foreground"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
      </Form>
    </div>
  );
}