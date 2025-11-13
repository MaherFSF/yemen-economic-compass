import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  const services = [
    {
      category: "Full System Development & Integration",
      items: [
        "Design and development of specialized software",
        "Enterprise systems and mobile applications",
        "Digital wallets for banking, financial, and microfinance sectors"
      ]
    },
    {
      category: "Core Banking & Technical Transformation",
      items: [
        "Modernization of legacy financial systems",
        "Migration to flexible cloud-based platforms",
        "Comprehensive technical and strategic consulting"
      ]
    },
    {
      category: "Regulatory & Organizational Compliance",
      items: [
        "IFRS-9 and Expected Credit Loss (ECL) model implementation",
        "Credit risk modeling frameworks",
        "Anti-money laundering (AML) and contract due diligence frameworks",
        "Central bank and international regulatory compliance"
      ]
    },
    {
      category: "Financial Standards & Risk Advisory",
      items: [
        "IFRS-9 compliance consulting and reporting standards",
        "Credit risk model design and validation",
        "Comprehensive risk assessment frameworks"
      ]
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-4xl">C</span>
            </div>
            <div className="text-right">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Causeway Consultancies
              </h1>
              <p className="text-xl text-muted-foreground mt-1">by Maher F.S. Farea</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            استشارات متخصصة في التحليل الاقتصادي والمالي والاستراتيجي مع خبرة عميقة في الأسواق الناشئة والبيئات المعقدة
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Empowering financial institutions and organizations with cutting-edge solutions, 
                strategic insights, and technical expertise to navigate complex economic environments 
                and achieve sustainable growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Award className="h-6 w-6 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading consultancy partner for financial transformation in emerging markets, 
                recognized for delivering innovative, compliant, and impactful solutions that drive 
                economic resilience and institutional excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Services */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Our Core Services</h2>
            <p className="text-muted-foreground">
              Comprehensive financial and technical solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{service.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Geographic Scope */}
        <Card className="mb-12 border-2 bg-gradient-to-br from-background to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Building2 className="h-7 w-7 text-primary" />
              Geographic Scope & Expertise
            </CardTitle>
            <CardDescription className="text-base">
              Specialized focus on Yemen and regional financial institutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our services are exclusively provided to <strong>financial institutions, banks, 
              and microfinance organizations</strong> operating in Yemen. We bring deep local market 
              knowledge combined with international best practices to address the unique challenges 
              of operating in complex and fragmented financial environments.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">Yemen Market Specialist</Badge>
              <Badge variant="secondary" className="text-sm">Banking Sector</Badge>
              <Badge variant="secondary" className="text-sm">Microfinance</Badge>
              <Badge variant="secondary" className="text-sm">Regulatory Compliance</Badge>
              <Badge variant="secondary" className="text-sm">Digital Transformation</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Legal Notice */}
        <Card className="border-l-4 border-l-primary bg-accent/10">
          <CardHeader>
            <CardTitle className="text-lg">Legal Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Causeway Consultancies</strong> does not engage in licensed financial activities 
              within Egypt in accordance with Law No. 159 of 1981. Our services are strictly consultative 
              and technical in nature, focused on capacity building, system development, and strategic 
              advisory for financial institutions in Yemen only.
            </p>
          </CardContent>
        </Card>

        {/* About This Report */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">About This Report</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This comprehensive analysis of Yemen's parallel financial system represents years of 
            research, field work, and data synthesis. It aims to provide policymakers, international 
            organizations, and financial institutions with actionable insights into one of the world's 
            most complex monetary environments.
          </p>
        </div>
      </div>
    </div>
  );
}
