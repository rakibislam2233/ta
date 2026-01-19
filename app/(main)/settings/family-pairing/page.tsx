'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight, Shield, UserPlus, Users } from 'lucide-react';

export default function FamilyPairingPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Family pairing</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Family group</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Create a family group</h3>
                  <p className="text-sm text-muted-foreground">Add family members to your group</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <UserPlus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Invite to family group</h3>
                  <p className="text-sm text-muted-foreground">Send invitations to join your group</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Parental controls</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-medium text-foreground">Screen time limits</h3>
                <p className="text-sm text-muted-foreground">Set daily usage limits</p>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-medium text-foreground">Content restrictions</h3>
                <p className="text-sm text-muted-foreground">Filter inappropriate content</p>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-medium text-foreground">Communication limits</h3>
                <p className="text-sm text-muted-foreground">Control who can contact your children</p>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Safety features</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-medium text-foreground">Safe search</h3>
                <p className="text-sm text-muted-foreground">Filter search results</p>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-medium text-foreground">Location sharing</h3>
                <p className="text-sm text-muted-foreground">Control location sharing</p>
              </div>
              <Checkbox />
            </div>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Review safety settings</h3>
                  <p className="text-sm text-muted-foreground">Check your safety preferences</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Family insights</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">View activity reports</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Usage statistics</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}