import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Input from '@components/atoms/Input';
import Textarea from '@components/atoms/Textarea';
import Select from '@components/atoms/Select';
import Button from '@components/atoms/Button';
import ChipToggle from '@components/atoms/ChipToggle';
import { industries } from '@data/industries';
import appConfig from '@config/appConfig';
import { track } from '@utils/analytics';

const INDUSTRY_OPTIONS = [
  { value: '', label: 'Select your industry' },
  ...industries.map((ind) => ({ value: ind.id, label: ind.name })),
];

const TEAM_SIZES = [
  { value: '1-5',   label: '1 – 5 people' },
  { value: '6-20',  label: '6 – 20 people' },
  { value: '21-100', label: '21 – 100 people' },
  { value: '100+',  label: '100+ people' },
];

const PREFERRED_TIMES = [
  { value: 'morning',   label: 'Morning (9am – 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm – 5pm)' },
  { value: 'evening',   label: 'Evening (5pm – 8pm)' },
];

const WHATSAPP_URL = `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I just submitted the demo request form on callermonkey.in")}`;

/* ── Success state ── */
function SuccessPanel() {
  return (
    <div className="flex flex-col items-center text-center gap-5 py-12">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: 'var(--color-green-50)' }}
      >
        <CheckCircle2 size={36} style={{ color: 'var(--color-green-500)' }} aria-hidden="true" />
      </div>
      <div>
        <h3 className="custom-h3 mb-2">We have received your details.</h3>
        <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
          Someone from our team will call you within one business day to schedule your 30-minute walkthrough. If you would prefer to connect sooner:
        </p>
      </div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-btn custom-btn-whatsapp custom-btn-lg"
      >
        Chat on WhatsApp →
      </a>
    </div>
  );
}

/* ── The form ── */
function GetStartedForm() {
  const mountTime = useRef(Date.now());

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
  } = useForm({
    defaultValues: {
      fullName: '',
      businessName: '',
      phone: '',
      email: '',
      industry: '',
      teamSize: '',
      challenge: '',
      preferredTime: [],
    },
  });

  const challengeVal = watch('challenge', '');

  const onSubmit = async (data) => {
    // Anti-bot: reject if form submitted too quickly
    const elapsed = (Date.now() - mountTime.current) / 1000;
    if (elapsed < appConfig.forms.minTimeOnFormSeconds) {
      return; // silently reject — bot
    }

    try {
      const payload = {
        access_key: appConfig.forms.web3FormsAccessKey,
        subject: `New Demo Request — ${data.businessName} (${data.industry})`,
        from_name: data.fullName,
        ...data,
        preferredTime: Array.isArray(data.preferredTime)
          ? data.preferredTime.join(', ')
          : data.preferredTime,
      };

      const res = await fetch(appConfig.forms.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Submission failed');
      }

      track('demo_form_submit', { industry: data.industry, team_size: data.teamSize });
    } catch (err) {
      setError('root', {
        message: 'Something went wrong. Please try again or chat with us on WhatsApp.',
      });
    }
  };

  return (
    <section
      id="demo-form"
      className="custom-section-alt scroll-mt-24"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — heading + trust points */}
          <div className="flex-1 min-w-0 lg:max-w-xs">
            <FadeIn>
              <p className="custom-eyebrow mb-3">Free Demo</p>
              <h2 className="custom-h2 mb-5">Book Your Free 30-Minute Walkthrough</h2>
              <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                No generic demo. We customise the walkthrough to your industry, your team size, and the specific problems you want to solve.
              </p>

              {/* Trust list */}
              <div className="flex flex-col gap-3">
                {[
                  'No commitment required',
                  'Customised to your industry',
                  'Live, interactive — not a recording',
                  'Response within 1 business day',
                ].map((trust) => (
                  <div key={trust} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--color-green-500)' }} aria-hidden="true" />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-grey-700)' }}>{trust}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <div className="flex-1 min-w-0 w-full">
            <FadeIn delay={0.08}>
              <div className="custom-card p-6 md:p-8">

                {isSubmitSuccessful ? (
                  <SuccessPanel />
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    aria-label="Demo request form"
                  >
                    <div className="flex flex-col gap-5">

                      {/* Name + Business (2 col on md+) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Full Name"
                          required
                          placeholder="Rajesh Kumar"
                          autoComplete="name"
                          error={errors.fullName?.message}
                          {...register('fullName', { required: 'Full name is required' })}
                        />
                        <Input
                          label="Business Name"
                          required
                          placeholder="Kumar Properties"
                          autoComplete="organization"
                          error={errors.businessName?.message}
                          {...register('businessName', { required: 'Business name is required' })}
                        />
                      </div>

                      {/* Phone + Email (2 col on md+) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Mobile Number"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          inputMode="tel"
                          error={errors.phone?.message}
                          {...register('phone', {
                            required: 'Mobile number is required',
                            pattern: {
                              value: /^[6-9]\d{9}$|^\+91[6-9]\d{9}$/,
                              message: 'Enter a valid Indian mobile number',
                            },
                          })}
                        />
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="rajesh@kumarproperties.in"
                          autoComplete="email"
                          error={errors.email?.message}
                          {...register('email', {
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Enter a valid email address',
                            },
                          })}
                        />
                      </div>

                      {/* Industry */}
                      <Controller
                        name="industry"
                        control={control}
                        rules={{ required: 'Please select your industry' }}
                        render={({ field }) => (
                          <Select
                            label="Industry"
                            required
                            placeholder="Select your industry"
                            options={INDUSTRY_OPTIONS.slice(1)} // remove blank placeholder — handled by atom
                            error={errors.industry?.message}
                            {...field}
                          />
                        )}
                      />

                      {/* Team Size */}
                      <div>
                        <p className="custom-label mb-2">
                          Team Size <span className="ml-1" style={{ color: 'var(--color-error)' }} aria-hidden="true">*</span>
                        </p>
                        <Controller
                          name="teamSize"
                          control={control}
                          rules={{ required: 'Please select your team size' }}
                          render={({ field }) => (
                            <ChipToggle
                              name="Team size"
                              options={TEAM_SIZES}
                              selected={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                        {errors.teamSize && (
                          <p className="custom-error-text mt-1" role="alert">{errors.teamSize.message}</p>
                        )}
                      </div>

                      {/* Challenge */}
                      <Textarea
                        label="What is your biggest communication challenge?"
                        placeholder="E.g. We miss too many leads after hours, our team cannot keep up with follow-ups..."
                        maxLength={300}
                        rows={3}
                        value={challengeVal}
                        error={errors.challenge?.message}
                        {...register('challenge')}
                      />

                      {/* Preferred time */}
                      <div>
                        <p className="custom-label mb-2">Preferred time for the walkthrough</p>
                        <Controller
                          name="preferredTime"
                          control={control}
                          render={({ field }) => (
                            <ChipToggle
                              name="Preferred time"
                              options={PREFERRED_TIMES}
                              selected={field.value}
                              onChange={field.onChange}
                              multi
                            />
                          )}
                        />
                      </div>

                      {/* Root error */}
                      {errors.root && (
                        <div
                          className="flex items-start gap-2 p-4 rounded-lg text-sm"
                          style={{ background: '#FEF2F2', color: 'var(--color-error)' }}
                          role="alert"
                        >
                          <AlertCircle size={16} strokeWidth={2} className="shrink-0 mt-0.5" aria-hidden="true" />
                          {errors.root.message}
                        </div>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full justify-center"
                      >
                        {isSubmitting ? 'Sending…' : 'Book My Free Walkthrough'}
                      </Button>

                      <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
                        By submitting, you agree to be contacted by our team. We do not share your data with third parties.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GetStartedForm;
