import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users, DollarSign, TrendingUp, TrendingDown, Building2, AlertTriangle } from "lucide-react";

interface CityData {
  id: string;
  name_ar: string;
  name_en: string;
  control: "houthi" | "irg" | "stc" | "contested";
  population: number;
  gdp_contribution: number;
  unemployment_rate: number;
  inflation_rate: number;
  poverty_rate: number;
  key_industries: string[];
  strategic_importance: string;
  economic_status: "growing" | "stable" | "declining" | "crisis";
}

const cities: CityData[] = [
  {
    id: "sanaa",
    name_ar: "صنعاء",
    name_en: "Sana'a",
    control: "houthi",
    population: 5700000,
    gdp_contribution: 25,
    unemployment_rate: 48,
    inflation_rate: 12,
    poverty_rate: 76,
    key_industries: ["Government", "Services", "Trade", "Manufacturing"],
    strategic_importance: "Capital city, political and administrative center",
    economic_status: "declining"
  },
  {
    id: "aden",
    name_ar: "عدن",
    name_en: "Aden",
    control: "stc",
    population: 2000000,
    gdp_contribution: 18,
    unemployment_rate: 42,
    inflation_rate: 35,
    poverty_rate: 68,
    key_industries: ["Port", "Oil Refining", "Banking", "Trade"],
    strategic_importance: "Main port, temporary capital, financial hub",
    economic_status: "stable"
  },
  {
    id: "taiz",
    name_ar: "تعز",
    name_en: "Taiz",
    control: "contested",
    population: 3200000,
    gdp_contribution: 12,
    unemployment_rate: 55,
    inflation_rate: 40,
    poverty_rate: 82,
    key_industries: ["Agriculture", "Light Manufacturing", "Trade"],
    strategic_importance: "Strategic crossroads, contested territory",
    economic_status: "crisis"
  },
  {
    id: "hodeidah",
    name_ar: "الحديدة",
    name_en: "Hodeidah",
    control: "houthi",
    population: 3100000,
    gdp_contribution: 15,
    unemployment_rate: 51,
    inflation_rate: 15,
    poverty_rate: 79,
    key_industries: ["Port", "Fishing", "Agriculture", "Trade"],
    strategic_importance: "Major port for humanitarian aid and imports",
    economic_status: "declining"
  },
  {
    id: "marib",
    name_ar: "مأرب",
    name_en: "Marib",
    control: "irg",
    population: 400000,
    gdp_contribution: 20,
    unemployment_rate: 28,
    inflation_rate: 32,
    poverty_rate: 45,
    key_industries: ["Oil & Gas", "Energy", "Trade"],
    strategic_importance: "Oil and gas production center",
    economic_status: "growing"
  },
  {
    id: "mukalla",
    name_ar: "المكلا",
    name_en: "Mukalla",
    control: "irg",
    population: 500000,
    gdp_contribution: 8,
    unemployment_rate: 38,
    inflation_rate: 33,
    poverty_rate: 62,
    key_industries: ["Fishing", "Port", "Oil Services", "Trade"],
    strategic_importance: "Hadramawt capital, oil export route",
    economic_status: "stable"
  }
];

export default function MainCities() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const getControlColor = (control: string) => {
    const colors = {
      houthi: "bg-red-600",
      irg: "bg-blue-600",
      stc: "bg-green-600",
      contested: "bg-yellow-600",
    };
    return colors[control as keyof typeof colors] || "bg-gray-600";
  };

  const getControlLabel = (control: string) => {
    const labels = {
      houthi: isArabic ? "الحوثيون" : "Houthis",
      irg: isArabic ? "الحكومة" : "IRG",
      stc: isArabic ? "المجلس الانتقالي" : "STC",
      contested: isArabic ? "متنازع عليها" : "Contested",
    };
    return labels[control as keyof typeof labels] || control;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      growing: "text-green-600",
      stable: "text-blue-600",
      declining: "text-orange-600",
      crisis: "text-red-600",
    };
    return colors[status as keyof typeof colors] || "text-gray-600";
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      growing: isArabic ? "نمو" : "Growing",
      stable: isArabic ? "مستقر" : "Stable",
      declining: isArabic ? "تراجع" : "Declining",
      crisis: isArabic ? "أزمة" : "Crisis",
    };
    return labels[status as keyof typeof labels] || status;
  };

  const getStatusIcon = (status: string) => {
    if (status === "growing") return <TrendingUp className="h-5 w-5" />;
    if (status === "declining" || status === "crisis") return <TrendingDown className="h-5 w-5" />;
    return <DollarSign className="h-5 w-5" />;
  };

  const selectedCityData = selectedCity ? cities.find(c => c.id === selectedCity) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">
            {isArabic ? "التحليل الجغرافي" : "Geographic Analysis"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic 
              ? "المدن الرئيسية" 
              : "Main Cities"}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {isArabic
              ? "تحليل معمق للوضع الاقتصادي والاجتماعي في المدن اليمنية الرئيسية"
              : "In-depth analysis of economic and social conditions in Yemen's major cities"}
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Building2 className="h-8 w-8 text-teal-600" />
                <Badge className="bg-teal-600">6</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "مدن رئيسية" : "Major Cities"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "تحت التحليل" : "Under Analysis"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-blue-600" />
                <Badge className="bg-blue-600">14.9M</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "إجمالي السكان" : "Total Population"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "في المدن المحللة" : "In analyzed cities"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-8 w-8 text-green-600" />
                <Badge className="bg-green-600">98%</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "المساهمة في الناتج المحلي" : "GDP Contribution"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "من إجمالي الاقتصاد" : "Of total economy"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <Badge variant="destructive">3</Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {isArabic ? "سلطات مختلفة" : "Different Authorities"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isArabic ? "تسيطر على المدن" : "Controlling cities"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cities.map((city) => (
            <Card 
              key={city.id} 
              className={`cursor-pointer hover:shadow-xl transition-all ${selectedCity === city.id ? 'ring-2 ring-teal-600' : ''}`}
              onClick={() => setSelectedCity(city.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">
                    {isArabic ? city.name_ar : city.name_en}
                  </CardTitle>
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <Badge className={getControlColor(city.control)}>
                  {getControlLabel(city.control)}
                </Badge>
              </CardHeader>
              <CardContent dir={isArabic ? "rtl" : "ltr"}>
                <div className="space-y-4">
                  {/* Population */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {isArabic ? "السكان" : "Population"}
                    </span>
                    <span className="font-bold">{(city.population / 1000000).toFixed(1)}M</span>
                  </div>

                  {/* GDP Contribution */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">
                        {isArabic ? "المساهمة في الناتج المحلي" : "GDP Contribution"}
                      </span>
                      <span className="font-bold">{city.gdp_contribution}%</span>
                    </div>
                    <Progress value={city.gdp_contribution * 4} className="h-2" />
                  </div>

                  {/* Economic Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {isArabic ? "الحالة الاقتصادية" : "Economic Status"}
                    </span>
                    <span className={`font-bold flex items-center gap-1 ${getStatusColor(city.economic_status)}`}>
                      {getStatusIcon(city.economic_status)}
                      {getStatusLabel(city.economic_status)}
                    </span>
                  </div>

                  {/* Key Metric */}
                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {isArabic ? "معدل الفقر" : "Poverty Rate"}
                      </span>
                      <span className="font-bold text-red-600">{city.poverty_rate}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed View */}
        {selectedCityData && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl">
                  {isArabic ? selectedCityData.name_ar : selectedCityData.name_en}
                </CardTitle>
                <Button variant="outline" onClick={() => setSelectedCity(null)}>
                  {isArabic ? "إغلاق" : "Close"}
                </Button>
              </div>
            </CardHeader>
            <CardContent dir={isArabic ? "rtl" : "ltr"}>
              <div className="space-y-6">
                {/* Control & Status */}
                <div className="flex flex-wrap gap-3">
                  <Badge className={`${getControlColor(selectedCityData.control)} text-base px-4 py-2`}>
                    {getControlLabel(selectedCityData.control)}
                  </Badge>
                  <Badge variant="outline" className={`text-base px-4 py-2 ${getStatusColor(selectedCityData.economic_status)}`}>
                    {getStatusLabel(selectedCityData.economic_status)}
                  </Badge>
                </div>

                {/* Strategic Importance */}
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    {isArabic ? "الأهمية الاستراتيجية" : "Strategic Importance"}
                  </h4>
                  <p className="text-gray-700">{selectedCityData.strategic_importance}</p>
                </div>

                {/* Key Industries */}
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    {isArabic ? "الصناعات الرئيسية" : "Key Industries"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCityData.key_industries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary">{industry}</Badge>
                    ))}
                  </div>
                </div>

                {/* Economic Indicators */}
                <div>
                  <h4 className="font-bold text-lg mb-4">
                    {isArabic ? "المؤشرات الاقتصادية" : "Economic Indicators"}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Unemployment */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">
                          {isArabic ? "معدل البطالة" : "Unemployment Rate"}
                        </span>
                        <span className="font-bold text-xl text-red-600">{selectedCityData.unemployment_rate}%</span>
                      </div>
                      <Progress value={selectedCityData.unemployment_rate} className="h-3" />
                    </div>

                    {/* Inflation */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">
                          {isArabic ? "معدل التضخم" : "Inflation Rate"}
                        </span>
                        <span className="font-bold text-xl text-orange-600">{selectedCityData.inflation_rate}%</span>
                      </div>
                      <Progress value={selectedCityData.inflation_rate} className="h-3" />
                    </div>

                    {/* Poverty */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">
                          {isArabic ? "معدل الفقر" : "Poverty Rate"}
                        </span>
                        <span className="font-bold text-xl text-red-600">{selectedCityData.poverty_rate}%</span>
                      </div>
                      <Progress value={selectedCityData.poverty_rate} className="h-3" />
                    </div>

                    {/* GDP Contribution */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">
                          {isArabic ? "المساهمة في الناتج المحلي" : "GDP Contribution"}
                        </span>
                        <span className="font-bold text-xl text-green-600">{selectedCityData.gdp_contribution}%</span>
                      </div>
                      <Progress value={selectedCityData.gdp_contribution * 4} className="h-3" />
                    </div>
                  </div>
                </div>

                {/* Population Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Users className="h-12 w-12 text-teal-600" />
                    <div>
                      <h4 className="font-bold text-lg">
                        {isArabic ? "عدد السكان" : "Population"}
                      </h4>
                      <p className="text-3xl font-bold text-teal-600">
                        {(selectedCityData.population / 1000000).toFixed(2)} {isArabic ? "مليون" : "million"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
