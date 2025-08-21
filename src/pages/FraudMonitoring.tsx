import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Flag,
  TrendingUp,
  Users,
  Brain,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fraudAlerts = [
  {
    id: "FRD-2025-001",
    claimId: "CLM-2025-002",
    riskScore: 92,
    triggers: ["Image tampering detected", "Duplicate submission", "Suspicious metadata"],
    policyHolder: "Sarah Johnson",
    amount: "$45,000",
    type: "Fire Damage",
    aiConfidence: 94
  },
  {
    id: "FRD-2025-002", 
    claimId: "CLM-2025-007",
    riskScore: 87,
    triggers: ["Unusual claim pattern", "High-value claim", "Recent policy activation"],
    policyHolder: "Mark Thompson",
    amount: "$38,500",
    type: "Theft",
    aiConfidence: 89
  },
  {
    id: "FRD-2025-003",
    claimId: "CLM-2025-012",
    riskScore: 76,
    triggers: ["Metadata inconsistency", "GPS location mismatch"],
    policyHolder: "Jennifer Lee",
    amount: "$22,100",
    type: "Vehicle Accident",
    aiConfidence: 82
  }
];

const fraudStats = [
  {
    title: "Fraud Detected",
    value: "23",
    change: "+4 this week",
    icon: Shield,
    color: "fraud"
  },
  {
    title: "Total Saved",
    value: "$847K",
    change: "+$125K this month",
    icon: TrendingUp,
    color: "success"
  },
  {
    title: "AI Accuracy",
    value: "96.7%",
    change: "+1.2% improvement",
    icon: Brain,
    color: "primary"
  },
  {
    title: "Avg. Detection Time",
    value: "2.3 min",
    change: "-45s faster",
    icon: Zap,
    color: "warning"
  }
];

const FraudMonitoring = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Fraud Monitoring</h2>
            <p className="text-muted-foreground">AI-powered fraud detection and risk assessment</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="btn-interactive">
              <Flag className="w-4 h-4 mr-2" />
              Manual Review
            </Button>
            <Button variant="premium" className="btn-interactive">
              <Shield className="w-4 h-4 mr-2" />
              Fraud Report
            </Button>
          </div>
        </div>

        {/* Fraud Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fraudStats.map((stat) => (
            <Card key={stat.title} className="card-hover bg-gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-${stat.color}-light`}>
                  <stat.icon className={`w-4 h-4 text-${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* High-Risk Claims Alert */}
        <Card className="shadow-card border-l-4 border-l-fraud bg-fraud-light/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-fraud-light rounded-lg">
                <AlertTriangle className="w-5 h-5 text-fraud" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-fraud">High-Risk Claims Detected</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {fraudAlerts.length} claims require immediate attention
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Fraud Alerts */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-fraud" />
              Active Fraud Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fraudAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="p-6 border border-border rounded-lg hover:bg-accent/50 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-fraud-light rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-fraud" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold text-foreground">{alert.id}</span>
                          <Badge variant="outline">{alert.claimId}</Badge>
                          <Badge className="status-fraud">High Risk</Badge>
                          <Badge variant="outline" className="bg-primary-light text-primary">
                            AI Confidence: {alert.aiConfidence}%
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-muted-foreground mb-3">
                          <span className="font-medium">{alert.policyHolder}</span> • 
                          {alert.type} • <span className="font-semibold">{alert.amount}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-foreground">Fraud Indicators:</div>
                          <div className="flex flex-wrap gap-2">
                            {alert.triggers.map((trigger, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-warning-light text-warning text-xs rounded-full"
                              >
                                {trigger}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-fraud">{alert.riskScore}%</div>
                        <div className="text-xs text-muted-foreground">Risk Score</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="btn-interactive">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        <Button variant="outline" size="sm" className="btn-interactive">
                          <Users className="w-4 h-4 mr-2" />
                          Assign
                        </Button>
                        <Button variant="destructive" size="sm" className="btn-interactive">
                          <Flag className="w-4 h-4 mr-2" />
                          Flag Fraud
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-primary" />
              AI Fraud Detection Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">847</div>
                <div className="text-sm font-medium text-foreground">Images Analyzed</div>
                <div className="text-xs text-muted-foreground">This week</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-3xl font-bold text-success mb-2">96.7%</div>
                <div className="text-sm font-medium text-foreground">Accuracy Rate</div>
                <div className="text-xs text-muted-foreground">Last 30 days</div>
              </div>
              
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-3xl font-bold text-warning mb-2">$2.1M</div>
                <div className="text-sm font-medium text-foreground">Potential Fraud Prevented</div>
                <div className="text-xs text-muted-foreground">Year to date</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FraudMonitoring;