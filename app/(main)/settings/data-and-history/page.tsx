'use client';

import { Calendar, ChevronRight, Clock, Download, Trash2 } from 'lucide-react';

export default function DataHistoryPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Data and history</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Data management</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Download your data</h3>
                  <p className="text-sm text-muted-foreground">Get a copy of your information</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <Trash2 className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Delete your account</h3>
                  <p className="text-sm text-muted-foreground">Permanently remove your account</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Browsing history</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div>
                <h3 className="font-medium text-foreground">Clear browsing history</h3>
                <p className="text-sm text-muted-foreground">Remove your browsing activity</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div>
                <h3 className="font-medium text-foreground">Pause history</h3>
                <p className="text-sm text-muted-foreground">Temporarily stop saving activity</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <div className="block overflow-hidden h-6 rounded-full bg-muted"></div>
                <div className="dot absolute left-1 top-1 bg-foreground w-4 h-4 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Search history</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div>
                <h3 className="font-medium text-foreground">Clear search history</h3>
                <p className="text-sm text-muted-foreground">Remove your search activity</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div>
                <h3 className="font-medium text-foreground">Pause search history</h3>
                <p className="text-sm text-muted-foreground">Stop saving search activity</p>
              </div>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <div className="block overflow-hidden h-6 rounded-full bg-muted"></div>
                <div className="dot absolute left-1 top-1 bg-foreground w-4 h-4 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Activity log</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">View activity log</h3>
                  <p className="text-sm text-muted-foreground">See your account activity</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex justify-between items-center p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Download activity log</h3>
                  <p className="text-sm text-muted-foreground">Export your activity history</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}