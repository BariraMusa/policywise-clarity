import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  AlertTriangle 
} from "lucide-react";

const claims = [
  {
    id: "CLM-2025-001",
    policyholder: "John Smith",
    policy: "POL-456789",
    type: "Auto Accident",
    amount: "$12,500",
    filed: "2025-01-15",
    status: "Under Review",
    fraudScore: "Low",
    priority: "Medium"
  },
  {
    id: "CLM-2025-002",
    policyholder: "Sarah Johnson", 
    policy: "POL-123456",
    type: "Property Damage",
    amount: "$8,750",
    filed: "2025-01-14",
    status: "Approved",
    fraudScore: "Low",
    priority: "Low"
  },
  {
    id: "CLM-2025-003",
    policyholder: "Mike Wilson",
    policy: "POL-789012", 
    type: "Theft",
    amount: "$15,200",
    filed: "2025-01-14",
    status: "Flagged",
    fraudScore: "High",
    priority: "High"
  },
  {
    id: "CLM-2025-004",
    policyholder: "Lisa Brown",
    policy: "POL-345678",
    type: "Fire Damage", 
    amount: "$25,000",
    filed: "2025-01-13",
    status: "Pending",
    fraudScore: "Medium",
    priority: "High"
  },
];

const Claims = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Claims Management</h1>
            <p className="text-muted-foreground">Review and process insurance claims</p>
          </div>
          <Button>New Claim</Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search by claim ID, policy number, or name..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Claims Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {claims.map((claim) => (
                <div 
                  key={claim.id} 
                  className="grid grid-cols-12 gap-4 p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors items-center"
                >
                  <div className="col-span-2">
                    <div className="font-medium text-foreground">{claim.id}</div>
                    <div className="text-sm text-muted-foreground">{claim.filed}</div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="font-medium text-foreground">{claim.policyholder}</div>
                    <div className="text-sm text-muted-foreground">{claim.policy}</div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="text-foreground">{claim.type}</div>
                    <div className="text-sm text-muted-foreground">{claim.amount}</div>
                  </div>
                  
                  <div className="col-span-1">
                    <Badge 
                      variant={
                        claim.status === 'Approved' ? 'default' : 
                        claim.status === 'Flagged' ? 'destructive' : 'secondary'
                      }
                    >
                      {claim.status}
                    </Badge>
                  </div>
                  
                  <div className="col-span-1">
                    <Badge 
                      variant={
                        claim.fraudScore === 'High' ? 'destructive' : 
                        claim.fraudScore === 'Medium' ? 'secondary' : 'outline'
                      }
                    >
                      {claim.fraudScore}
                    </Badge>
                  </div>
                  
                  <div className="col-span-1">
                    <Badge 
                      variant={
                        claim.priority === 'High' ? 'destructive' : 
                        claim.priority === 'Medium' ? 'secondary' : 'outline'
                      }
                    >
                      {claim.priority}
                    </Badge>
                  </div>
                  
                  <div className="col-span-3 flex gap-2 justify-end">
                    <Button size="sm" variant="outline">
                      <Eye size={14} className="mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <CheckCircle size={14} className="mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      <XCircle size={14} className="mr-1" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline">
                      <AlertTriangle size={14} className="mr-1" />
                      Flag
                    </Button>
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

export default Claims;