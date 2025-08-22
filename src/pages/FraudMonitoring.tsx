import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  TrendingUp,
  Users,
  FileText,
  Search
} from "lucide-react";

const fraudStats = [
  {
    title: "High Risk Claims",
    value: "12",
    percentage: 85,
    icon: AlertTriangle,
    color: "text-red-500"
  },
  {
    title: "Medium Risk Claims", 
    value: "34",
    percentage: 60,
    icon: Shield,
    color: "text-yellow-500"
  },
  {
    title: "Claims Reviewed",
    value: "156",
    percentage: 92,
    icon: FileText,
    color: "text-green-500"
  },
  {
    title: "Fraud Investigators",
    value: "8",
    percentage: 100,
    icon: Users,
    color: "text-blue-500"
  },
];

const flaggedClaims = [
  {
    id: "CLM-2025-003",
    policyholder: "Mike Wilson",
    type: "Theft",
    amount: "$15,200",
    riskScore: 89,
    flags: ["Duplicate photos", "Inconsistent metadata", "Late submission"],
    priority: "High",
    assignedTo: "Fraud Team A"
  },
  {
    id: "CLM-2025-007",
    policyholder: "Tom Davis", 
    type: "Auto Accident",
    amount: "$22,500",
    riskScore: 76,
    flags: ["Photo manipulation detected", "Suspicious timing"],
    priority: "High",
    assignedTo: "Fraud Team B"
  },
  {
    id: "CLM-2025-011",
    policyholder: "Anna White",
    type: "Property Damage",
    amount: "$9,800",
    riskScore: 65,
    flags: ["Similar claim history", "Fast submission"],
    priority: "Medium",
    assignedTo: "Unassigned"
  },
];

const FraudMonitoring = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Fraud Monitoring</h1>
            <p className="text-muted-foreground">AI-powered fraud detection and investigation</p>
          </div>
          <Button>
            <Search size={16} className="mr-2" />
            Advanced Search
          </Button>
        </div>

        {/* Fraud Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fraudStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon size={18} className={stat.color} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                  <Progress value={stat.percentage} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.percentage}% capacity
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Flagged Claims */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-500" />
                High Priority Flagged Claims
              </CardTitle>
              <Badge variant="destructive">
                {flaggedClaims.filter(c => c.priority === 'High').length} High Risk
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {flaggedClaims.map((claim) => (
                <div key={claim.id} className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium text-foreground">{claim.id}</span>
                        <Badge variant={claim.priority === 'High' ? 'destructive' : 'secondary'}>
                          {claim.priority} Priority
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{claim.policyholder} • {claim.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-foreground">{claim.amount}</div>
                      <div className="text-sm text-muted-foreground">Claim Amount</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Fraud Risk Score</span>
                      <span className="text-sm font-bold text-red-500">{claim.riskScore}%</span>
                    </div>
                    <Progress value={claim.riskScore} className="h-2" />
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm font-medium text-foreground mb-2">AI Detected Flags:</p>
                    <div className="flex flex-wrap gap-2">
                      {claim.flags.map((flag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {flag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Assigned to: </span>
                      <span className="font-medium text-foreground">{claim.assignedTo}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye size={14} className="mr-1" />
                        Review
                      </Button>
                      <Button size="sm" variant="outline">
                        Assign
                      </Button>
                      <Button size="sm" variant="default">
                        Investigate
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FraudMonitoring;