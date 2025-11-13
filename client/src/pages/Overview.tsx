import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, TrendingDown, Users, Building2, Globe, DollarSign } from "lucide-react";

export default function Overview() {
  return (
    <div className="w-full py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            تقرير Benfour Think Tank - نوفمبر 2025
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            النظام المالي الموازي في اليمن
          </h1>
          <p className="text-xl text-muted-foreground">
            عشر سنوات أعادت تشكيل حركة الأموال (2015-2025)
          </p>
        </div>

        {/* Executive Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertCircle className="h-6 w-6 text-primary" />
              الملخص التنفيذي
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              منذ اندلاع الحرب الأهلية في اليمن عام 2015، شهد النظام المالي اليمني تحولاً هيكلياً عميقاً من نظام موحد إلى نظامين متنافسين. 
              يسيطر الحوثيون على البنك المركزي في صنعاء ويخدم شمال البلاد، بينما تدير الحكومة المعترف بها دولياً البنك المركزي في عدن ويخدم الجنوب. 
              هذا الانقسام المؤسسي خلق "حرب عملة" مستمرة، مع تباعد حاد في أسعار الصرف وسياسات نقدية متناقضة.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              التأثير الإنساني كان كارثياً: ارتفع معدل الفقر من 54% في 2014 إلى 76% في 2025، وانهار الريال اليمني في عدن إلى 2,800 ريال/دولار 
              مقابل 650 ريال/دولار في صنعاء. في الوقت نفسه، ظهرت أنظمة مالية بديلة - التمويل الأصغر، الدفع الرقمي، شبكات الصرافة غير الرسمية - 
              لملء الفراغ الذي تركه انهيار النظام المصرفي التقليدي.
            </p>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>معدل الفقر</CardDescription>
              <CardTitle className="text-3xl">76%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingDown className="h-4 w-4 text-destructive" />
                <span>ارتفاع من 54% في 2014</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>سعر الصرف (عدن)</CardDescription>
              <CardTitle className="text-3xl">2,800</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4 text-destructive" />
                <span>ريال/دولار (مقابل 215 في 2014)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>عملاء التمويل الأصغر</CardDescription>
              <CardTitle className="text-3xl">260K</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-accent" />
                <span>نمو من 25,000 في 2010</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Main Narrative Sections */}
        <div className="space-y-12">
          {/* Section 1: Institutional Fracture */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">الانقسام المؤسسي</h2>
                <p className="text-muted-foreground">من بنك مركزي واحد إلى نظامين متنافسين</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-lg leading-relaxed">
                في سبتمبر 2016، اتخذت الحكومة اليمنية المعترف بها دولياً قراراً مصيرياً بنقل البنك المركزي من صنعاء (التي يسيطر عليها الحوثيون) إلى عدن. 
                كان الهدف المعلن هو استعادة السيطرة على السياسة النقدية ومنع الحوثيين من استخدام احتياطيات البنك لتمويل الحرب. لكن النتيجة كانت عكسية: 
                بدلاً من إضعاف الحوثيين، خلق القرار نظامين ماليين متوازيين، كل منهما يدعي الشرعية ويتنافس على الموارد.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg mb-3">البنك المركزي في عدن (CBY-Aden)</h4>
                <ul className="space-y-2 text-base">
                  <li>• <strong>الشرعية:</strong> معترف به دولياً، يتلقى دعماً مالياً من السعودية والإمارات</li>
                  <li>• <strong>السياسة النقدية:</strong> طباعة نقود جديدة (1.7 تريليون ريال حتى 2019)، مما أدى إلى تضخم حاد</li>
                  <li>• <strong>سعر الصرف:</strong> انهيار إلى 2,800 ريال/دولار بسبب الإفراط في الطباعة ونقص الاحتياطيات</li>
                  <li>• <strong>المنطقة:</strong> يخدم الجنوب (عدن، حضرموت، شبوة، أجزاء من مأرب)</li>
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg mb-3">البنك المركزي في صنعاء (CBY-Sana'a)</h4>
                <ul className="space-y-2 text-base">
                  <li>• <strong>السيطرة:</strong> تحت سيطرة الحوثيين، يحتفظ بالموظفين والأرشيفات والبنية التحتية الأصلية</li>
                  <li>• <strong>السياسة النقدية:</strong> حظر الأوراق النقدية المطبوعة في عدن، تعزيز العملة الإلكترونية (e-Rial)</li>
                  <li>• <strong>سعر الصرف:</strong> استقرار نسبي عند 650 ريال/دولار بسبب السيطرة الصارمة على العملة</li>
                  <li>• <strong>المنطقة:</strong> يخدم الشمال (صنعاء، صعدة، حجة، أجزاء من تعز)</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                هذا الانقسام خلق واقعاً اقتصادياً غريباً: اليمنيون في الشمال والجنوب يعيشون في اقتصادات منفصلة، مع عملات مختلفة، أسعار مختلفة، 
                وأنظمة مصرفية لا تتواصل مع بعضها. التحويلات المالية عبر خطوط المواجهة أصبحت مكلفة (رسوم 10-12%)، والتجارة بين المنطقتين تعتمد 
                على الذهب والدولار كوسيط.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 2: Currency War */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">حرب العملة</h2>
                <p className="text-muted-foreground">التباعد الحاد في أسعار الصرف والسياسات النقدية</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-lg leading-relaxed">
                بعد نقل البنك المركزي إلى عدن، بدأت "حرب العملة" الحقيقية. البنك المركزي في عدن، الذي يفتقر إلى احتياطيات النقد الأجنبي الكافية، 
                لجأ إلى طباعة أوراق نقدية جديدة لتمويل عجز الموازنة ودفع الرواتب. بحلول نهاية 2019، طبع عدن 1.7 تريليون ريال - زيادة هائلة في المعروض النقدي 
                دون أي نمو اقتصادي مقابل. النتيجة كانت تضخماً جامحاً وانهياراً في قيمة الريال.
              </p>

              <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg mb-3 text-destructive">الانهيار في عدن</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base">2014 (قبل الحرب):</span>
                    <span className="font-bold text-lg">215 ريال/دولار</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base">2019 (بعد الطباعة المكثفة):</span>
                    <span className="font-bold text-lg">655 ريال/دولار</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base">2025 (الوضع الحالي):</span>
                    <span className="font-bold text-lg text-destructive">2,800 ريال/دولار</span>
                  </div>
                  <div className="pt-3 border-t border-destructive/20">
                    <p className="text-sm text-muted-foreground">
                      انخفاض بنسبة <strong className="text-destructive">1,200%</strong> في قيمة الريال خلال 11 عاماً
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                في المقابل، اتخذ البنك المركزي في صنعاء (تحت سيطرة الحوثيين) نهجاً مختلفاً. بدلاً من طباعة نقود جديدة، حظر الأوراق النقدية المطبوعة 
                في عدن من التداول في المناطق الخاضعة لسيطرته. في ديسمبر 2019، أصدر البنك المركزي في صنعاء توجيهاً يحظر جميع الأوراق النقدية المطبوعة 
                في عدن، ومنح السكان شهراً واحداً لاستبدالها بأوراق نقدية قديمة أو عملة إلكترونية (e-Rial).
              </p>

              <p className="text-lg leading-relaxed">
                هذا الحظر خلق سوقاً سوداء نشطة: الأوراق النقدية الجديدة تُباع بخصم في المناطق الحدودية، والتجار يستخدمون الذهب والدولار لتجنب 
                القيود. الفرق في سعر الصرف بين صنعاء وعدن وصل إلى 11% في يناير 2020، مما خلق فرصاً للمضاربة والتهريب.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 3: Humanitarian Impact */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">الأثر الإنساني</h2>
                <p className="text-muted-foreground">كيف دفع المواطنون العاديون ثمن الانقسام المالي</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-lg leading-relaxed">
                الضحية الحقيقية لحرب العملة هم المواطنون اليمنيون العاديون. انهيار الريال في عدن يعني أن الأسعار تضاعفت أربع مرات منذ 2014، 
                بينما الرواتب (عندما تُدفع) بقيت ثابتة. في الشمال، حظر الأوراق النقدية الجديدة خلق نقصاً حاداً في السيولة، مما جعل المعاملات 
                اليومية صعبة للغاية.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">في الجنوب (عدن)</h4>
                  <ul className="space-y-2 text-base">
                    <li>• تضخم جامح: الأسعار ارتفعت 400% منذ 2014</li>
                    <li>• انقطاع الرواتب: 1.25 مليون موظف حكومي لا يتلقون رواتب منتظمة</li>
                    <li>• نقص الغذاء: اليمن يستورد 90% من غذائه، وانهيار الريال يجعل الواردات باهظة الثمن</li>
                    <li>• فقدان المدخرات: من يملك مدخرات بالريال فقد 92% من قيمتها</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">في الشمال (صنعاء)</h4>
                  <ul className="space-y-2 text-base">
                    <li>• نقص السيولة: حظر الأوراق الجديدة خلق نقصاً في النقد المتداول</li>
                    <li>• انقطاع الرواتب: الحكومة في عدن توقفت عن دفع رواتب موظفي الشمال</li>
                    <li>• صعوبة المعاملات: نقص الفئات الصغيرة (100، 200 ريال) يعيق التجارة اليومية</li>
                    <li>• عزلة مالية: صعوبة التحويلات المالية مع الجنوب (رسوم 12%)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg mb-3 text-destructive">الأرقام المفجعة</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-destructive">76%</div>
                    <div className="text-sm text-muted-foreground">معدل الفقر (2025)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-destructive">21M</div>
                    <div className="text-sm text-muted-foreground">يحتاجون مساعدات إنسانية</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-destructive">17M</div>
                    <div className="text-sm text-muted-foreground">يعانون من انعدام الأمن الغذائي</div>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                الأزمة المالية ليست مجرد أرقام - إنها حياة ملايين اليمنيين الذين يكافحون يومياً لتوفير الغذاء والدواء لعائلاتهم. 
                الانقسام المؤسسي حول اليمن إلى دولتين اقتصاديتين، كل منهما تعاني من أزمة مختلفة، لكن النتيجة واحدة: معاناة إنسانية غير مسبوقة.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 4: Alternative Financial Systems */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-chart-2" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">الأنظمة المالية البديلة</h2>
                <p className="text-muted-foreground">كيف تكيف اليمنيون مع انهيار النظام المصرفي</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-lg leading-relaxed">
                مع انهيار النظام المصرفي التقليدي، ظهرت أنظمة مالية بديلة لملء الفراغ. التمويل الأصغر، الدفع الرقمي، شبكات الصرافة غير الرسمية - 
                كلها نمت بشكل كبير خلال السنوات العشر الماضية، لتصبح شريان الحياة للاقتصاد اليمني.
              </p>

              <div className="bg-accent/5 border border-accent/20 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg mb-3 text-accent">التمويل الأصغر: النمو الاستثنائي</h4>
                <p className="text-base mb-4">
                  مع انهيار البنوك التجارية وعدم قدرتها على تقديم خدمات للمواطنين العاديين، نمت مؤسسات التمويل الأصغر بشكل هائل:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">260,000</div>
                    <div className="text-sm text-muted-foreground">مقترض نشط (2024)</div>
                    <div className="text-xs text-muted-foreground mt-1">مقابل 25,000 في 2010</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">420,000</div>
                    <div className="text-sm text-muted-foreground">مودع نشط (2024)</div>
                    <div className="text-xs text-muted-foreground mt-1">مقابل 30,000 في 2010</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>بنك الكريمي الإسلامي للتمويل الأصغر</strong> أصبح أكبر مؤسسة مالية في اليمن، حيث يخدم ملايين اليمنيين 
                  ويدير التحويلات المالية عبر خطوط المواجهة.
                </p>
              </div>

              <div className="bg-chart-2/5 border border-chart-2/20 p-6 rounded-lg my-6">
                <h4 className="font-bold text-lg mb-3 text-chart-2">الدفع الرقمي: القفزة التكنولوجية</h4>
                <p className="text-base mb-4">
                  جائحة كوفيد-19 أجبرت اليمنيين على تبني الدفع الرقمي بشكل أسرع. رغم ضعف البنية التحتية، نمت خدمات الدفع عبر الهاتف المحمول بشكل ملحوظ:
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base">الأفراد (2019 → 2024):</span>
                    <span className="font-bold">5% → 20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base">الشركات (2019 → 2024):</span>
                    <span className="font-bold">8% → 35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base">الخدمات الحكومية (2019 → 2024):</span>
                    <span className="font-bold">2% → 15%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  منصات مثل <strong>M Floos</strong> و <strong>Mobile Money</strong> و <strong>Quality Connect</strong> 
                  أصبحت أساسية للمعاملات اليومية، خاصة في المناطق التي تعاني من نقص السيولة.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                هذه الأنظمة البديلة ليست مجرد حلول مؤقتة - إنها تعيد تشكيل المشهد المالي اليمني بشكل دائم. حتى لو انتهت الحرب غداً، 
                من المرجح أن تظل هذه الأنظمة جزءاً أساسياً من الاقتصاد اليمني لسنوات قادمة.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
