import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  MessageSquare,
  Star,
  Send,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FeedbackData {
  type: 'bug' | 'feature' | 'data_quality' | 'general';
  rating: number;
  message: string;
  email?: string;
  page?: string;
}

interface UserFeedbackProps {
  variant?: 'button' | 'card' | 'inline';
  currentPage?: string;
}

export default function UserFeedback({ variant = 'button', currentPage }: UserFeedbackProps) {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackData>({
    type: 'general',
    rating: 0,
    message: '',
    email: '',
    page: currentPage || window.location.pathname,
  });

  const t = {
    title: isArabic ? 'أرسل ملاحظاتك' : 'Send Feedback',
    subtitle: isArabic ? 'ساعدنا في تحسين المنصة' : 'Help us improve the platform',
    feedbackType: isArabic ? 'نوع الملاحظة' : 'Feedback Type',
    bug: isArabic ? 'خطأ تقني' : 'Bug Report',
    feature: isArabic ? 'اقتراح ميزة' : 'Feature Request',
    dataQuality: isArabic ? 'جودة البيانات' : 'Data Quality',
    general: isArabic ? 'ملاحظة عامة' : 'General Feedback',
    rating: isArabic ? 'تقييمك للمنصة' : 'Rate the Platform',
    message: isArabic ? 'رسالتك' : 'Your Message',
    messagePlaceholder: isArabic ? 'اكتب ملاحظاتك هنا...' : 'Write your feedback here...',
    email: isArabic ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)',
    emailPlaceholder: isArabic ? 'للرد عليك' : 'For follow-up',
    submit: isArabic ? 'إرسال' : 'Submit',
    submitting: isArabic ? 'جاري الإرسال...' : 'Submitting...',
    success: isArabic ? 'شكراً لملاحظاتك!' : 'Thank you for your feedback!',
    successDesc: isArabic ? 'سنراجع ملاحظاتك قريباً' : 'We will review your feedback soon',
    error: isArabic ? 'حدث خطأ' : 'Error occurred',
    required: isArabic ? 'الرسالة مطلوبة' : 'Message is required',
    feedbackButton: isArabic ? 'ملاحظات' : 'Feedback',
    dataAccuracy: isArabic ? 'دقة البيانات' : 'Data Accuracy',
    helpful: isArabic ? 'هل كانت هذه المعلومات مفيدة؟' : 'Was this information helpful?',
    yes: isArabic ? 'نعم' : 'Yes',
    no: isArabic ? 'لا' : 'No',
  };

  const handleSubmit = async () => {
    if (!feedback.message.trim()) {
      toast.error(t.required);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store feedback locally for demo
      const existingFeedback = JSON.parse(localStorage.getItem('user_feedback') || '[]');
      existingFeedback.push({
        ...feedback,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      });
      localStorage.setItem('user_feedback', JSON.stringify(existingFeedback));
      
      setSubmitted(true);
      toast.success(t.success);
      
      // Reset after delay
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setFeedback({
          type: 'general',
          rating: 0,
          message: '',
          email: '',
          page: currentPage || window.location.pathname,
        });
      }, 2000);
    } catch (error) {
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarRating = () => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setFeedback(prev => ({ ...prev, rating: star }))}
          className={`p-1 transition-colors ${
            star <= feedback.rating 
              ? 'text-yellow-500' 
              : 'text-gray-300 hover:text-yellow-400'
          }`}
        >
          <Star className={`w-6 h-6 ${star <= feedback.rating ? 'fill-current' : ''}`} />
        </button>
      ))}
    </div>
  );

  const FeedbackForm = () => (
    <div className="space-y-4">
      {submitted ? (
        <div className="text-center py-8">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t.success}</h3>
          <p className="text-muted-foreground">{t.successDesc}</p>
        </div>
      ) : (
        <>
          {/* Feedback Type */}
          <div className="space-y-2">
            <Label>{t.feedbackType}</Label>
            <Select 
              value={feedback.type} 
              onValueChange={(value: FeedbackData['type']) => 
                setFeedback(prev => ({ ...prev, type: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">{t.general}</SelectItem>
                <SelectItem value="bug">{t.bug}</SelectItem>
                <SelectItem value="feature">{t.feature}</SelectItem>
                <SelectItem value="data_quality">{t.dataQuality}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rating */}
          <div className="space-y-2">
            <Label>{t.rating}</Label>
            <StarRating />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label>{t.message} *</Label>
            <Textarea
              value={feedback.message}
              onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
              placeholder={t.messagePlaceholder}
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>{t.email}</Label>
            <Input
              type="email"
              value={feedback.email}
              onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
              placeholder={t.emailPlaceholder}
            />
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t.submitting}
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {t.submit}
              </>
            )}
          </Button>
        </>
      )}
    </div>
  );

  // Button variant - floating feedback button
  if (variant === 'button') {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="fixed bottom-6 right-6 z-50 shadow-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            {t.feedbackButton}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              {t.title}
            </DialogTitle>
            <DialogDescription>{t.subtitle}</DialogDescription>
          </DialogHeader>
          <FeedbackForm />
        </DialogContent>
      </Dialog>
    );
  }

  // Card variant - embedded feedback card
  if (variant === 'card') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            {t.title}
          </CardTitle>
          <CardDescription>{t.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <FeedbackForm />
        </CardContent>
      </Card>
    );
  }

  // Inline variant - quick helpful/not helpful buttons
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
      <span className="text-sm text-muted-foreground">{t.helpful}</span>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            toast.success(t.success);
            // Track positive feedback
          }}
        >
          <ThumbsUp className="w-4 h-4 mr-1" />
          {t.yes}
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsOpen(true)}
        >
          <ThumbsDown className="w-4 h-4 mr-1" />
          {t.no}
        </Button>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.title}</DialogTitle>
            <DialogDescription>{t.subtitle}</DialogDescription>
          </DialogHeader>
          <FeedbackForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
