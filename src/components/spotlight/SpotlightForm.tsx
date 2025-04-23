
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import StepIndicator from "@/components/volunteer/StepIndicator";
import NominatorInfoStep from "./steps/NominatorInfoStep";
import HeroInfoStep from "./steps/HeroInfoStep";
import StoryStep from "./steps/StoryStep";
import SourceStep from "./steps/SourceStep";
import FormNavigation from "@/components/volunteer/steps/FormNavigation";

const formSchema = z.object({
  nominator_name: z.string().min(2, "Name must be at least 2 characters"),
  nominator_email: z.string().email("Invalid email address"),
  nominator_phone: z.string().optional(),
  hero_name: z.string().min(2, "Name must be at least 2 characters"),
  hero_age: z.string().min(1, "Age is required"),
  hero_location: z.string().min(2, "Location is required"),
  hero_story: z.string().min(20, "Please write at least a few sentences"),
  hero_interests: z.string().min(2, "Please share some interests"),
  has_permission: z.boolean().refine((val) => val === true, {
    message: "Parent/guardian permission is required",
  }),
  source: z.string().min(1, "Please select how you heard about us"),
  source_other: z.string().optional(),
});

type SpotlightFormValues = z.infer<typeof formSchema>;

const SpotlightForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SpotlightFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      has_permission: false,
    },
  });

  const onSubmit = async (values: SpotlightFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('hero_nominations')
        .insert({
          nominator_name: values.nominator_name,
          nominator_email: values.nominator_email,
          nominator_phone: values.nominator_phone,
          hero_name: values.hero_name,
          hero_age: values.hero_age,
          hero_location: values.hero_location,
          hero_story: values.hero_story,
          hero_interests: values.hero_interests,
          has_permission: values.has_permission,
          source: values.source,
          source_other: values.source_other,
        });

      if (error) throw error;
      
      toast.success("Thank you for your nomination! 🌟", {
        description: "We'll review your submission and be in touch soon.",
      });
      
      form.reset();
      setStep(1);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Oops! Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    let fieldsToValidate: (keyof SpotlightFormValues)[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate = ["nominator_name", "nominator_email"];
        break;
      case 2:
        fieldsToValidate = ["hero_name", "hero_age", "hero_location"];
        break;
      case 3:
        fieldsToValidate = ["hero_story", "hero_interests", "has_permission"];
        break;
      case 4:
        fieldsToValidate = ["source"];
        break;
    }

    form.trigger(fieldsToValidate).then((isValid) => {
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, 4));
      }
    });
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <StepIndicator currentStep={step} totalSteps={4} />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AnimatePresence mode="wait">
            {step === 1 && <NominatorInfoStep form={form} />}
            {step === 2 && <HeroInfoStep form={form} />}
            {step === 3 && <StoryStep form={form} />}
            {step === 4 && <SourceStep form={form} />}
          </AnimatePresence>

          <FormNavigation
            step={step}
            isSubmitting={isSubmitting}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        </form>
      </Form>
    </div>
  );
};

export default SpotlightForm;
