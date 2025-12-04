import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Briefcase, GraduationCap, TrendingUp, AlertCircle } from "lucide-react";

export default function YouthEconomy() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const metrics = [
    { icon: Users, label: "Youth Population (15-29)", value: "7.2M", change: "+15% since 2015", color: "text-blue-600" },
    { icon: Briefcase, label: "Youth Unemployment", value: "24.5%", change: "Double pre-war rate", color: "text-red-600" },
    { icon: GraduationCap, label: "Out of School", value: "2M+", change: "40% increase", color: "text-orange-600" },
    { icon: TrendingUp, label: "Youth Entrepreneurs", value: "12%", change: "Growing despite crisis", color: "text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic ? "اقتصاد الشباب في اليمن" : "Yemen Youth Economy"}
          </h1>
          <p className="text-lg text-muted-foreground" dir={isArabic ? "rtl" : "ltr"}>
            {isArabic 
              ? "تحليل شامل لوضع الشباب الاقتصادي في اليمن (2010-2025)" 
              : "Comprehensive analysis of youth economic conditions in Yemen (2010-2025)"}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => (
            <Card key={idx}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{metric.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">{isArabic ? "نظرة عامة" : "Overview"}</TabsTrigger>
            <TabsTrigger value="employment">{isArabic ? "التوظيف" : "Employment"}</TabsTrigger>
            <TabsTrigger value="education">{isArabic ? "التعليم" : "Education"}</TabsTrigger>
            <TabsTrigger value="entrepreneurship">{isArabic ? "ريادة الأعمال" : "Entrepreneurship"}</TabsTrigger>
            <TabsTrigger value="recommendations">{isArabic ? "التوصيات" : "Recommendations"}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "الوضع الحالي" : "Current Situation"}</CardTitle>
                <CardDescription>
                  {isArabic 
                    ? "تحليل شامل لوضع الشباب الاقتصادي في اليمن" 
                    : "Comprehensive analysis of youth economic conditions"}
                </CardDescription>
              </CardHeader>
              <CardContent className="prose max-w-none" dir={isArabic ? "rtl" : "ltr"}>
                <p>
                  {isArabic
                    ? "يمثل الشباب (15-29 عامًا) أكثر من 30% من سكان اليمن، مع تقديرات تشير إلى 7.2 مليون شاب. منذ بداية الصراع في 2015، تدهورت الفرص الاقتصادية للشباب بشكل كبير، مع ارتفاع معدلات البطالة إلى 24.5% - ضعف ما كانت عليه قبل الحرب."
                    : "Youth (ages 15-29) represent over 30% of Yemen's population, with estimates of 7.2 million young people. Since the conflict began in 2015, economic opportunities for youth have deteriorated significantly, with unemployment rates rising to 24.5% - double pre-war levels."}
                </p>
                <p>
                  {isArabic
                    ? "انهيار النظام التعليمي، مع خروج أكثر من 2 مليون طفل من المدارس، يهدد رأس المال البشري في اليمن للأجيال القادمة. في الوقت نفسه، يظهر الشباب اليمني مرونة ملحوظة، مع نمو ريادة الأعمال الشبابية رغم الأزمة."
                    : "The collapse of the education system, with over 2 million children out of school, threatens Yemen's human capital for generations. At the same time, Yemeni youth show remarkable resilience, with youth entrepreneurship growing despite the crisis."}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التوظيف والبطالة" : "Employment & Unemployment"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">{isArabic ? "التحديات الرئيسية" : "Key Challenges"}</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>{isArabic ? "معدل بطالة الشباب: 24.5% (2025)" : "Youth unemployment rate: 24.5% (2025)"}</li>
                      <li>{isArabic ? "انهيار القطاع العام (توقف الرواتب منذ 2016)" : "Public sector collapse (salary suspensions since 2016)"}</li>
                      <li>{isArabic ? "فرص محدودة في القطاع الخاص" : "Limited private sector opportunities"}</li>
                      <li>{isArabic ? "هجرة الكفاءات الشبابية" : "Youth brain drain"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التعليم والمهارات" : "Education & Skills"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-2">
                          {isArabic ? "أزمة التعليم" : "Education Crisis"}
                        </h4>
                        <ul className="text-sm space-y-1 text-orange-800">
                          <li>• {isArabic ? "2+ مليون طفل خارج المدرسة" : "2+ million children out of school"}</li>
                          <li>• {isArabic ? "تدمير 2,500+ مدرسة" : "2,500+ schools damaged/destroyed"}</li>
                          <li>• {isArabic ? "توقف رواتب 170,000 معلم" : "170,000 teachers unpaid"}</li>
                          <li>• {isArabic ? "انخفاض جودة التعليم بشكل حاد" : "Sharp decline in education quality"}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="entrepreneurship" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "ريادة الأعمال الشبابية" : "Youth Entrepreneurship"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-2">{isArabic ? "قصص نجاح" : "Success Stories"}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {isArabic
                        ? "رغم التحديات، يظهر الشباب اليمني مرونة ملحوظة في ريادة الأعمال"
                        : "Despite challenges, Yemeni youth show remarkable entrepreneurial resilience"}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>{isArabic ? "12% من الشباب يديرون مشاريعهم الخاصة" : "12% of youth run their own businesses"}</li>
                      <li>{isArabic ? "نمو في التجارة الإلكترونية والعمل الحر" : "Growth in e-commerce and freelancing"}</li>
                      <li>{isArabic ? "مبادرات دعم ريادة الأعمال من المنظمات الدولية" : "Entrepreneurship support from international organizations"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? "التوصيات السياسية" : "Policy Recommendations"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "قصيرة المدى" : "Short-term"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "برامج تدريب مهني عاجلة" : "Urgent vocational training programs"}</li>
                      <li>{isArabic ? "دعم مشاريع الشباب الصغيرة" : "Support for youth micro-enterprises"}</li>
                      <li>{isArabic ? "استئناف رواتب المعلمين" : "Resume teacher salaries"}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "متوسطة المدى" : "Medium-term"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "إصلاح النظام التعليمي" : "Education system reform"}</li>
                      <li>{isArabic ? "برامج تمويل ريادة الأعمال" : "Entrepreneurship financing programs"}</li>
                      <li>{isArabic ? "تطوير المهارات الرقمية" : "Digital skills development"}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{isArabic ? "طويلة المدى" : "Long-term"}</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>{isArabic ? "استراتيجية وطنية للشباب" : "National youth strategy"}</li>
                      <li>{isArabic ? "إصلاح سوق العمل" : "Labor market reform"}</li>
                      <li>{isArabic ? "استثمار في التعليم العالي" : "Higher education investment"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
