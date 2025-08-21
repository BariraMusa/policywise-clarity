import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-6 bg-card border-b border-border shadow-card">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="btn-interactive" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">IC</span>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">InsureCore Dashboard</h1>
                  <p className="text-xs text-muted-foreground">Claims Management System</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-lg">
                Online
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">JD</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}