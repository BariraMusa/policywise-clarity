import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  Shield, 
  Users, 
  BarChart3, 
  Bell,
  LogOut
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Claims",
    icon: FileText,
    href: "/claims",
  },
  {
    title: "Fraud Monitoring",
    icon: Shield,
    href: "/fraud",
  },
  {
    title: "Staff Management",
    icon: Users,
    href: "/staff",
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/reports",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
];

export const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">InsureCore</h1>
        <p className="text-sm text-muted-foreground">Claims Management</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Button
              key={item.href}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                isActive && "bg-primary text-primary-foreground"
              )}
              onClick={() => navigate(item.href)}
            >
              <Icon size={18} />
              {item.title}
            </Button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </div>
  );
};