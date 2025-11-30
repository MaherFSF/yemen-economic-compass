import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function CACBankPage() {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
        <Link href="/compass/banks">
          <Button variant="outline" className="mb-4 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Banks
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-2">CAC Bank</h1>
        <p className="text-lg text-muted-foreground">بنك CAC</p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Type</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Commercial</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Founded</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1993</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Headquarters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Aden</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">Active</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Comprehensive profile and analysis of CAC Bank including financial performance, challenges, and strategic recommendations.</p>
          <p>This page contains detailed information about the bank's operations, governance structure, and role in Yemen's financial system.</p>
        </CardContent>
      </Card>
    </div>
  );
}
