import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  MoreVertical,
  Download,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const claimsData = [
  {
    id: "CLM-2025-001",
    policyNumber: "POL-VEH-8847",
    policyHolder: "John Smith",
    type: "Vehicle Accident",
    incidentDate: "2025-01-15",
    filedDate: "2025-01-16",
    amount: "$12,500",
    status: "pending",
    fraudScore: 15,
    priority: "medium",
    channel: "Mobile App"
  },
  {
    id: "CLM-2025-002", 
    policyNumber: "POL-HOM-3912",
    policyHolder: "Sarah Johnson",
    type: "Fire Damage",
    incidentDate: "2025-01-14",
    filedDate: "2025-01-15",
    amount: "$45,000",
    status: "review",
    fraudScore: 65,
    priority: "high", 
    channel: "WhatsApp"
  },
  {
    id: "CLM-2025-003",
    policyNumber: "POL-VEH-7234", 
    policyHolder: "Mike Davis",
    type: "Theft",
    incidentDate: "2025-01-13",
    filedDate: "2025-01-14",
    amount: "$8,750",
    status: "approved",
    fraudScore: 8,
    priority: "low",
    channel: "USSD"
  },
  {
    id: "CLM-2025-004",
    policyNumber: "POL-HOM-5678",
    policyHolder: "Lisa Wilson", 
    type: "Water Damage",
    incidentDate: "2025-01-12",
    filedDate: "2025-01-13",
    amount: "$22,300",
    status: "fraud",
    fraudScore: 92,
    priority: "critical",
    channel: "Mobile App"
  },
  {
    id: "CLM-2025-005",
    policyNumber: "POL-VEH-9123",
    policyHolder: "Robert Brown",
    type: "Collision", 
    incidentDate: "2025-01-11",
    filedDate: "2025-01-12",
    amount: "$15,200",
    status: "rejected",
    fraudScore: 35,
    priority: "low",
    channel: "Portal"
  }
];

const Claims = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

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

  const getPriorityBadge = (priority: string) => {
    const variants = {
      low: "bg-green-100 text-green-700",
      medium: "bg-yellow-100 text-yellow-700",
      high: "bg-orange-100 text-orange-700",
      critical: "bg-red-100 text-red-700"
    };
    return variants[priority as keyof typeof variants] || "bg-gray-100 text-gray-700";
  };

  const getFraudRiskLevel = (score: number) => {
    if (score < 30) return { level: "Low", color: "text-green-600" };
    if (score < 70) return { level: "Medium", color: "text-yellow-600" };
    return { level: "High", color: "text-red-600" };
  };

  const filteredClaims = claimsData.filter(claim => {
    const matchesSearch = claim.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.policyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.policyHolder.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || claim.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || claim.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Claims Management</h2>
            <p className="text-muted-foreground">Review and process insurance claims efficiently</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="btn-interactive">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" className="btn-interactive">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by Claim ID, Policy Number, or Policy Holder..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="fraud">Fraud Detected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter by Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Claims Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Claims List ({filteredClaims.length} results)</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="btn-interactive">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredClaims.map((claim) => {
                const fraudRisk = getFraudRiskLevel(claim.fraudScore);
                return (
                  <div 
                    key={claim.id}
                    className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {claim.type.split(' ')[0][0]}{claim.type.split(' ')[1]?.[0] || ''}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">{claim.id}</span>
                            <Badge variant="outline">{claim.policyNumber}</Badge>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(claim.priority)}`}>
                              {claim.priority}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">{claim.policyHolder}</span> • {claim.type}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Filed: {new Date(claim.filedDate).toLocaleDateString()} • 
                            Incident: {new Date(claim.incidentDate).toLocaleDateString()} • 
                            Via {claim.channel}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="font-semibold text-lg text-foreground">{claim.amount}</div>
                          <div className="text-xs text-muted-foreground">Claim Amount</div>
                        </div>
                        
                        <div className="text-center">
                          <div className={`text-sm font-medium ${fraudRisk.color}`}>
                            {fraudRisk.level} Risk
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Score: {claim.fraudScore}%
                          </div>
                        </div>

                        <div className="text-center">
                          <span className={`status-badge ${getStatusBadge(claim.status)}`}>
                            {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="btn-interactive">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {claim.status === 'pending' && (
                            <>
                              <Button variant="ghost" size="icon" className="btn-interactive text-success hover:text-success">
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="btn-interactive text-destructive hover:text-destructive">
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          {claim.fraudScore > 70 && (
                            <Button variant="ghost" size="icon" className="btn-interactive text-warning hover:text-warning">
                              <AlertTriangle className="w-4 h-4" />
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="btn-interactive">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Claims;