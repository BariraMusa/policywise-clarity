import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Shield,
  TrendingUp,
  Search,
  Filter
} from "lucide-react";

const statsCards = [
  {
    title: "Total Claims",
    value: "1,247",
    change: "+12%",
    icon: FileText,
    trend: "up"
  },
  {
    title: "Pending Review",
    value: "89",
    change: "-5%",
    icon: Clock,
    trend: "down"
  },
  {
    title: "Approved Today",
    value: "156",
    change: "+23%",
    icon: CheckCircle,
    trend: "up"
  },
  {
    title: "Fraud Detected",
    value: "12",
    change: "+8%",
    icon: Shield,
    trend: "up"
  },
];

const recentClaims = [
  {
    id: "CLM-2025-001",
    policy: "POL-456789",
    type: "Auto Accident",
    amount: "$12,500",
    status: "Under Review",
    riskScore: "Low",
    date: "2025-01-15"
  },
  {
    id: "CLM-2025-002", 
    policy: "POL-123456",
    type: "Property Damage",
    amount: "$8,750",
    status: "Approved",
    riskScore: "Low",
    date: "2025-01-14"
  },
  {
    id: "CLM-2025-003",
    policy: "POL-789012",
    type: "Theft",
    amount: "$15,200",
    status: "Flagged",
    riskScore: "High",
    date: "2025-01-14"
  },
];

export const DashboardOverview = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Monitor claims and system performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Search size={16} className="mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon size={18} className="text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp size={12} className={`mr-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Claims */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Claims</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentClaims.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-foreground">{claim.id}</span>
                    <Badge variant="outline" className="text-xs">{claim.policy}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{claim.type} • {claim.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium text-foreground">{claim.amount}</span>
                  <Badge 
                    variant={claim.riskScore === 'High' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {claim.riskScore} Risk
                  </Badge>
                  <Badge 
                    variant={
                      claim.status === 'Approved' ? 'default' : 
                      claim.status === 'Flagged' ? 'destructive' : 'secondary'
                    }
                  >
                    {claim.status}
                  </Badge>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};