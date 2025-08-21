import React from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Shield,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Eye,
  Filter,
  Search,
  MoreVertical
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const summaryCards = [
  {
    title: "Total Claims",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: FileText,
    color: "primary"
  },
  {
    title: "Pending Review",
    value: "124",
    change: "-8.2%",
    trend: "down",
    icon: Clock,
    color: "pending"
  },
  {
    title: "Approved Today",
    value: "89",
    change: "+15.3%",
    trend: "up",
    icon: CheckCircle,
    color: "success"
  },
  {
    title: "Fraud Detected",
    value: "7",
    change: "+2 from yesterday",
    trend: "neutral",
    icon: Shield,
    color: "fraud"
  }
];

const recentClaims = [
  {
    id: "CLM-2025-001",
    policyNumber: "POL-VEH-8847",
    type: "Vehicle Accident",
    amount: "$12,500",
    status: "pending",
    date: "2 hours ago",
    risk: "low"
  },
  {
    id: "CLM-2025-002",
    policyNumber: "POL-HOM-3912",
    type: "Fire Damage",
    amount: "$45,000",
    status: "review",
    date: "5 hours ago",
    risk: "medium"
  },
  {
    id: "CLM-2025-003",
    policyNumber: "POL-VEH-7234",
    type: "Theft",
    amount: "$8,750",
    status: "approved",
    date: "1 day ago",
    risk: "low"
  },
  {
    id: "CLM-2025-004",
    policyNumber: "POL-HOM-5678",
    type: "Water Damage",
    amount: "$22,300",
    status: "fraud",
    date: "2 days ago",
    risk: "high"
  },
  {
    id: "CLM-2025-005",
    policyNumber: "POL-VEH-9123",
    type: "Collision",
    amount: "$15,200",
    status: "rejected",
    date: "3 days ago",
    risk: "medium"
  }
];

export function DashboardOverview() {
  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "status-pending",
      review: "status-review", 
      approved: "status-approved",
      rejected: "status-rejected",
      fraud: "status-fraud"
    };
    return variants[status as keyof typeof variants] || "status-pending";
  };

  const getRiskBadge = (risk: string) => {
    const variants = {
      low: "bg-green-100 text-green-700",
      medium: "bg-yellow-100 text-yellow-700", 
      high: "bg-red-100 text-red-700"
    };
    return variants[risk as keyof typeof variants] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground">Monitor claims and system performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="btn-interactive">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="btn-interactive bg-gradient-primary">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            New Claim
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card) => (
          <Card key={card.title} className="card-hover bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-${card.color}-light`}>
                <card.icon className={`w-4 h-4 text-${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">{card.value}</div>
              <div className="flex items-center text-xs">
                {card.trend === "up" && <TrendingUp className="w-3 h-3 text-success mr-1" />}
                {card.trend === "down" && <TrendingDown className="w-3 h-3 text-destructive mr-1" />}
                <span className={`${card.trend === "up" ? "text-success" : card.trend === "down" ? "text-destructive" : "text-muted-foreground"}`}>
                  {card.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Claims */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Recent Claims</CardTitle>
              <p className="text-sm text-muted-foreground">Latest claim submissions and updates</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search claims..." 
                  className="pl-9 w-64"
                />
              </div>
              <Button variant="outline" size="icon" className="btn-interactive">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentClaims.map((claim) => (
              <div 
                key={claim.id} 
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{claim.id}</span>
                      <Badge variant="outline" className="text-xs">
                        {claim.policyNumber}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{claim.type}</span>
                      <span className="text-sm font-medium text-foreground">{claim.amount}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`status-badge ${getStatusBadge(claim.status)}`}>
                        {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskBadge(claim.risk)}`}>
                        {claim.risk} risk
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{claim.date}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity btn-interactive"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-border">
            <Button variant="outline" className="w-full btn-interactive">
              View All Claims
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}