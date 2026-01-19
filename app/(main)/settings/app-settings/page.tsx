'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight, Download, Globe, Moon, RotateCcw, Sun, Volume2 } from 'lucide-react';

export default function AppSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">App settings</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Appearance</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sun className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Theme</h3>
                  <p className="text-sm text-muted-foreground">Light, dark, or system</p>
                </div>
              </div>
              <span className="text-muted-foreground text-sm">System</span>
            </button>
            
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Moon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Dark mode</h3>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Language</h3>
                  <p className="text-sm text-muted-foreground">Choose your language</p>
                </div>
              </div>
              <span className="text-muted-foreground text-sm">English</span>
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Media settings</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Volume2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Mute video sound</h3>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Auto-download</h3>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <RotateCcw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Clear cache</h3>
                  <p className="text-sm text-muted-foreground">Free up storage space</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Privacy settings</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Analytics</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Ad preferences</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Connected apps</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">App info</h2>
          </div>
          
          <div className="divide-y divide-border p-4 space-y-4">
            <div>
              <h3 className="font-medium text-foreground">Version</h3>
              <p className="text-sm text-muted-foreground">1.0.0</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Storage</h3>
              <p className="text-sm text-muted-foreground">120 MB used</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Last updated</h3>
              <p className="text-sm text-muted-foreground">October 28, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}