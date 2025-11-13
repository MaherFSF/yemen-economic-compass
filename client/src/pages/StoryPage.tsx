import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, TrendingDown, Building2, Users, AlertTriangle } from "lucide-react";

export default function StoryPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const timelineEvents = [
    {
      year: "2015",
      title: { ar: "الحرب والحصار", en: "War & Blockade" },
      image: "/images/ih54l3zbTX0R.jpg",
      description: {
        ar: "في مارس 2015، تدخّل التحالف بقيادة السعودية لإعادة حكومة هادي بعد سيطرة أنصار الله على صنعاء. خلال أشهر: تعطلت صادرات النفط والغاز، فُرض حصار بحري وجوي، انقطعت الدولة عن معظم مواردها من العملة الصعبة، وبدأت موجات تضخم حادة وارتفاع في أسعار الغذاء والوقود.",
        en: "In March 2015, a Saudi-led coalition intervened to restore President Hadi after Houthi seizure of Sana'a. Within months: oil and gas exports halted, a naval and air blockade was imposed, the state lost most foreign currency resources, and acute inflation waves began with soaring food and fuel prices."
      },
      impact: { ar: "التضخم تجاوز 100%", en: "Inflation exceeded 100%" }
    },
    {
      year: "2016",
      title: { ar: "انقسام البنك المركزي", en: "Central Bank Split" },
      image: "/images/8llDZQWzHROi.jpg",
      description: {
        ar: "في سبتمبر 2016 نُقل المقر الرئيسي للبنك المركزي من صنعاء إلى عدن. عملياً ظهر بنك مركزي في عدن مدعوم بشرعية دولية لكنه فقير بالاحتياطيات والكوادر، مقابل فرع صنعاء الذي يملك المؤسسة والكوادر وشبكة البنوك التجارية لكنه بلا اعتراف دولي.",
        en: "In September 2016, the Central Bank headquarters was moved from Sana'a to Aden. Practically, an Aden-based central bank emerged with international legitimacy but poor in reserves and staff, versus the Sana'a branch which had the institution, staff and commercial bank network but lacked international recognition."
      },
      impact: { ar: "بداية نظامين نقديين متنافسين", en: "Beginning of two competing monetary systems" }
    },
    {
      year: "2017-2018",
      title: { ar: "تعويم الريال والوديعة السعودية", en: "Rial Float & Saudi Deposit" },
      image: "/images/l1N9FU6mgJDB.jpg",
      description: {
        ar: "مع تسارع التراجع في عدن، اتخذت الحكومة قرار تعويم الريال في 2017. تزامن ذلك مع وديعة سعودية بملياري دولار استخدمت لتمويل استيراد السلع الأساسية. أدّى ذلك إلى كبح مؤقت لانهيار العملة، لكنه فتح باباً واسعاً للاتهامات بالمحسوبية وسوء الاستخدام.",
        en: "With accelerating decline in Aden, the government decided to float the rial in 2017. This coincided with a $2 billion Saudi deposit used to finance basic commodity imports. This led to temporary containment of currency collapse, but opened wide doors for nepotism and misuse allegations."
      },
      impact: { ar: "الريال وصل إلى 1,750 ريال/دولار", en: "Rial reached 1,750 YER/USD" }
    },
    {
      year: "2019-2020",
      title: { ar: "حظر العملة الجديدة", en: "New Currency Ban" },
      image: "/images/vX2Vgayixvxw.jpg",
      description: {
        ar: "في نهاية 2019 أعلنت سلطات صنعاء حظر تداول الأوراق النقدية التي طبعها البنك المركزي في عدن منذ 2016. أصبح لدينا عملياً: «ريال عدن» الجديد المتضخم، و«ريال صنعاء» القديم النادر نسبياً. انقسم سوق الصرف إلى منطقتين بسعرين مختلفين.",
        en: "In late 2019, Sana'a authorities announced a ban on banknotes printed by the Aden Central Bank since 2016. We practically had: the new inflated 'Aden rial' and the relatively scarce old 'Sana'a rial'. The exchange market split into two zones with different rates."
      },
      impact: { ar: "تكريس نظامين نقديين منفصلين", en: "Institutionalization of two separate monetary systems" }
    },
    {
      year: "2020-2022",
      title: { ar: "الحرب على الإيرادات", en: "War on Revenues" },
      image: "/images/J6JzzQmtLayd.jpg",
      description: {
        ar: "انتقلت المواجهة من الجبهات إلى ميدان الإيرادات: سيطر أنصار الله على معظم الموانئ الشمالية واستحوذوا على جماركها، بينما ركّزت الحكومة على عائدات النفط. بدأت سلطات صنعاء استخدام الهجمات على منشآت النفط الجنوبية كأداة ضغط؛ فتعطّلت صادرات النفط عملياً منذ 2022.",
        en: "Confrontation shifted from frontlines to revenue field: Houthis controlled most northern ports and seized their customs, while the government focused on oil revenues. Sana'a authorities began using attacks on southern oil facilities as pressure tool; oil exports practically halted since 2022."
      },
      impact: { ar: "الحكومة أصبحت مستورِدة للوقود", en: "Government became fuel importer" }
    },
    {
      year: "2023-2024",
      title: { ar: "محاولات إعادة السيطرة المالية", en: "Financial Control Restoration Attempts" },
      image: "/images/8EnWqA7asn7l.jpg",
      description: {
        ar: "أدركت الحكومة أن استمرار الانهيار النقدي يعني انهياراً سياسياً تاماً. جاءت حزمة خطوات: إنشاء لجنة وطنية لتنظيم الاستيراد، إطلاق شبكة تحويل موحدة، إلزام البنوك بنقل مراكزها إلى عدن، وتفاهمات جديدة مع السعودية. استعاد الريال جزءاً من قيمته وانخفضت أسعار السلة الغذائية.",
        en: "The government realized that continued monetary collapse meant total political collapse. A package of steps came: establishing a national import regulation committee, launching a unified transfer network, obligating banks to relocate to Aden, and new understandings with Saudi Arabia. The rial recovered part of its value and food basket prices decreased."
      },
      impact: { ar: "الريال ارتفع بنسبة 40%", en: "Rial appreciated by 40%" }
    },
    {
      year: "2025",
      title: { ar: "استقرار نسبي على أرضية هشّة", en: "Relative Stability on Fragile Ground" },
      image: "/images/u4V7s3Q3l0M9.jpeg",
      description: {
        ar: "بحلول أواخر 2025: الريال في مناطق الحكومة وصل إلى «استقرار ضعيف» نسبيًا، نتيجة مزيج من القيود على الواردات وتغييرات في إدارة الاحتياطيات ومنح سعودية جديدة. في مناطق أنصار الله، استمر استخدام الأوراق القديمة. في العمق، لم يحدث أي تقارب حقيقي بين النظامين.",
        en: "By late 2025: the rial in government areas reached relatively 'weak stability', resulting from a mix of import restrictions, reserve management changes, and new Saudi grants. In Houthi areas, old notes continued to be used. Fundamentally, no real convergence occurred between the two systems."
      },
      impact: { ar: "الريال استقر عند ~1,700 ريال/دولار", en: "Rial stabilized at ~1,700 YER/USD" }
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              {isArabic ? "القصة الكاملة" : "Full Story"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isArabic 
                ? "عشر سنوات أعادت تشكيل حركة المال"
                : "Ten Years That Rewired How Money Moves"
              }
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isArabic
                ? "قراءة استراتيجية في عقد من التشظّي النقدي والحرب الاقتصادية (2015-2025)"
                : "A strategic reading of a decade of monetary fragmentation and economic warfare (2015-2025)"
              }
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-8 w-8 text-red-500 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">~50%</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "انكماش الناتج المحلي" : "GDP Contraction"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">76%</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "معدل الفقر (2025)" : "Poverty Rate (2025)"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">2</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "بنك مركزي متنافس" : "Competing Central Banks"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">4.3x</div>
                <div className="text-sm text-muted-foreground">
                  {isArabic ? "تباعد سعر الصرف" : "Exchange Rate Divergence"}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "المسار الزمني" : "Timeline"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? "رحلة عقد من التحول الاقتصادي والمالي"
                : "A decade's journey of economic and financial transformation"
              }
            </p>
          </div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={event.image} 
                      alt={event.title[language]}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="text-lg px-4 py-2 bg-black/70 text-white border-none">
                        {event.year}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {event.title[language]}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {event.description[language]}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{event.impact[language]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Actors Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/5">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {isArabic ? "الفاعلون الرئيسيون" : "Key Actors"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "خريطة القوى المالية" : "Financial Power Map"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IRG/PLC */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {isArabic ? "الحكومة المعترف بها دولياً" : "Internationally Recognized Government"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "مجلس القيادة الرئاسي + البنك المركزي في عدن" : "Presidential Leadership Council + Central Bank in Aden"}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic
                    ? "يسعى للحفاظ على الشرعية على \"جنوب\" اليمن. يسيطر على البنك المركزي في عدن الذي يصدر الريال ويدير السياسة المالية. يعتمد بشكل كبير على المنح السعودية/الإماراتية (1-2 مليار دولار/سنة) لتغطية الميزانيات."
                    : "Seeks to maintain legitimacy over 'southern' Yemen. Controls the Aden-based Central Bank which issues the rial and manages fiscal policy. Heavily dependent on Saudi/UAE grants ($1-2 billion/year) to cover budgets."
                  }
                </p>
              </CardContent>
            </Card>

            {/* Houthis */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {isArabic ? "أنصار الله (الحوثيون)" : "Ansar Allah (Houthis)"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "سلطة الأمر الواقع + البنك المركزي في صنعاء" : "De Facto Authority + Central Bank in Sana'a"}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic
                    ? "يسيطرون على المرتفعات الشمالية والمؤسسات. البنك المركزي في صنعاء أعلن بطلان أوراق عدن (ديسمبر 2019) وأصدر لاحقاً عملة رقمية (الريال الإلكتروني) وعملات معدنية. يفرضون ضرائب على الواردات في الحديدة/الصليف."
                    : "Control the northwestern highlands and institutions. The Sana'a Central Bank declared Aden notes invalid (Dec 2019) and later issued digital currency (e-Rial) and coins. Tax imports at Hudaydah/Salif."
                  }
                </p>
              </CardContent>
            </Card>

            {/* Saudi Arabia */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {isArabic ? "المملكة العربية السعودية" : "Saudi Arabia"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "قائد التحالف والداعم الرئيسي" : "Coalition Leader & Main Backer"}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic
                    ? "تقود التحالف منذ 2015 لدعم الحكومة المعترف بها. قدمت معظم المساعدات الخارجية (مليارات الدولارات منحاً ووداائع نفطية) وضغطت على مجلس القيادة للإصلاحات. تأثير الرياض أدى إلى تهدئة جزئية 2023-2025."
                    : "Leads the 2015 coalition backing the IRG. Provided most foreign aid (billions in grants and oil deposits) and pressured the PLC on reforms. Riyadh's influence led to partial de-escalations 2023-2025."
                  }
                </p>
              </CardContent>
            </Card>

            {/* UAE */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {isArabic ? "الإمارات العربية المتحدة" : "United Arab Emirates"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "شريك التحالف ومركز قوة منفصل" : "Coalition Partner & Separate Power Center"}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-muted-foreground leading-relaxed">
                  {isArabic
                    ? "دعمت المجلس الانتقالي الجنوبي والميليشيات المحلية. رسمياً انسحبت القوات البرية 2019، لكنها متجذرة عسكرياً واقتصادياً في سقطرى وأجزاء من أبين/شبوة. شركات مرتبطة بالإمارات تسيطر على سوق الوقود في سقطرى."
                    : "Backed the Southern Transitional Council and local militias. Officially withdrew ground forces in 2019, but militarily and economically entrenched in Socotra and parts of Abyan/Shabwah. UAE-linked firms control Socotra's fuel market."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {isArabic ? "الخلاصة" : "Conclusion"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {isArabic
                  ? "بين 2015 و2025، لم يتعرض الاقتصاد اليمني لـ«أزمة عابرة»، بل لعملية إعادة تشكيل قسرية لمركز الثقل المالي في البلد. انهيار السلطة الموحدة انقلب سريعاً إلى وجود نظامين ماليين متوازيين. الانقسام المالي أصبح جزءاً من الواقع السياسي، وأي تسوية سياسية تحتاج أن تبدأ من إعادة توحيد البنك المركزي، وسوق الصرف، وقواعد اللعبة المالية."
                  : "Between 2015 and 2025, Yemen's economy did not face a 'passing crisis', but rather a forced restructuring of the country's financial center of gravity. The collapse of unified authority quickly turned into two parallel financial systems. Financial division has become part of political reality, and any political settlement needs to start from reunifying the central bank, exchange market, and financial rules of the game."
                }
              </p>
              <Separator className="my-6" />
              <p className="text-center text-sm text-muted-foreground">
                {isArabic
                  ? "تقرير CauseWay Consultancies - تحليل استراتيجي متخصص للاقتصاد اليمني"
                  : "CauseWay Consultancies Report - Specialized Strategic Analysis of Yemen's Economy"
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
