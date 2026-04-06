
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

// Define the form schema with required fields matching the database requirements
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

// Create a type from the schema for better type checking
type VolunteerFormValues = z.infer<typeof formSchema>;

// Define a type that matches the Supabase table structure
type SupabaseVolunteerInsert = {
  full_name: string;
  email: string;
  phone?: string;
  address?: string;
  superhero_name: string;
  skills: string[];
  availability: string[];
  interests: string[];
};

const VolunteerForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [],
      availability: [],
      interests: [],
    },
  });

  const onSubmit = async (values: VolunteerFormValues) => {
    setIsSubmitting(true);
    try {
      const volunteerData = {
        full_name: values.full_name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        superhero_name: values.superhero_name,
        skills: values.skills || [],
        availability: values.availability || [],
        interests: values.interests || [],
      };

      const { error } = await supabase
        .from("la_volunteers")
        .insert(volunteerData);
      
      if (error) throw error;

      toast.success(`Welcome, ${values.superhero_name}! 🦸‍♂️`, {
        description: "Your volunteer application has been received. We'll review it soon!",
        duration: 5000,
      });
      
      form.reset();
      setStep(1);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Oops! Something went wrong", {
        description: "Please try submitting your application again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    // Validate current step before proceeding
    let fieldsToValidate: (keyof VolunteerFormValues)[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate = ["full_name", "superhero_name"];
        break;
      case 2:
        fieldsToValidate = ["email"];
        break;
      case 3:
        fieldsToValidate = ["skills"];
        break;
      case 4:
        fieldsToValidate = ["availability", "interests"];
        break;
    }

    // Validate only the fields for the current step
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
