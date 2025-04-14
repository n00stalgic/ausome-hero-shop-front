
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AnimatePresence } from "framer-motion";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import StepIndicator from "./StepIndicator";
import { supabase } from "@/integrations/supabase/client";
import BasicInfoStep from "./steps/BasicInfoStep";
import ContactInfoStep from "./steps/ContactInfoStep";
import SkillsStep from "./steps/SkillsStep";
import PreferencesStep from "./steps/PreferencesStep";
import FormNavigation from "./steps/FormNavigation";

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  address: z.string().optional(),
  superhero_name: z.string().min(2, "Superhero name must be at least 2 characters"),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  availability: z.array(z.string()).min(1, "Select at least one availability"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

const VolunteerForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [],
      availability: [],
      interests: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("la_volunteers")
        .insert(values);
      
      if (error) throw error;

      toast.success("Welcome to the team, Hero! 🦸‍♂️", {
        description: "Your application has been received. Get ready for your journey!",
      });
      
      form.reset();
      setStep(1);
    } catch (error) {
      toast.error("Oops! Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4));
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
            {step === 1 && <BasicInfoStep form={form} />}
            {step === 2 && <ContactInfoStep form={form} />}
            {step === 3 && <SkillsStep form={form} />}
            {step === 4 && <PreferencesStep form={form} />}
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

export default VolunteerForm;
