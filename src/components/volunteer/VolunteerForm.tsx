
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import StepIndicator from "./StepIndicator";
import { supabase } from "@/integrations/supabase/client";

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

const skills = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "First Aid",
  "Event Planning",
  "Teaching",
  "Technology",
  "Arts & Crafts",
];

const availability = [
  "Weekday Mornings",
  "Weekday Afternoons",
  "Weekday Evenings",
  "Weekend Mornings",
  "Weekend Afternoons",
  "Weekend Evenings",
];

const interests = [
  "Children's Programs",
  "Special Events",
  "Administrative Support",
  "Fundraising",
  "Community Outreach",
  "Social Media",
  "Photography",
  "Sports & Recreation",
];

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
      const { error } = await supabase.from("la_volunteers").insert([values]);
      
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
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Begin Your Hero's Journey</h2>
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Civilian Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="superhero_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Choose Your Hero Name</FormLabel>
                      <FormControl>
                        <Input placeholder="What should we call you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Contact Information</h2>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Your Superpowers</h2>
                <FormField
                  control={form.control}
                  name="skills"
                  render={() => (
                    <FormItem>
                      <FormLabel>Select Your Skills</FormLabel>
                      <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill) => (
                          <label
                            key={skill}
                            className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-cosmic-navy/10"
                          >
                            <Checkbox
                              checked={form.watch("skills")?.includes(skill)}
                              onCheckedChange={(checked) => {
                                const current = form.watch("skills") || [];
                                const updated = checked
                                  ? [...current, skill]
                                  : current.filter((s) => s !== skill);
                                form.setValue("skills", updated);
                              }}
                            />
                            <span>{skill}</span>
                          </label>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Mission Preferences</h2>
                <FormField
                  control={form.control}
                  name="availability"
                  render={() => (
                    <FormItem className="mb-8">
                      <FormLabel>When Can You Join Missions?</FormLabel>
                      <div className="grid grid-cols-2 gap-4">
                        {availability.map((time) => (
                          <label
                            key={time}
                            className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-cosmic-navy/10"
                          >
                            <Checkbox
                              checked={form.watch("availability")?.includes(time)}
                              onCheckedChange={(checked) => {
                                const current = form.watch("availability") || [];
                                const updated = checked
                                  ? [...current, time]
                                  : current.filter((t) => t !== time);
                                form.setValue("availability", updated);
                              }}
                            />
                            <span>{time}</span>
                          </label>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <FormLabel>Areas of Interest</FormLabel>
                      <div className="grid grid-cols-2 gap-4">
                        {interests.map((interest) => (
                          <label
                            key={interest}
                            className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-cosmic-navy/10"
                          >
                            <Checkbox
                              checked={form.watch("interests")?.includes(interest)}
                              onCheckedChange={(checked) => {
                                const current = form.watch("interests") || [];
                                const updated = checked
                                  ? [...current, interest]
                                  : current.filter((i) => i !== interest);
                                form.setValue("interests", updated);
                              }}
                            />
                            <span>{interest}</span>
                          </label>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between pt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="w-32"
            >
              Previous
            </Button>
            
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="w-32">
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="w-32">
                {isSubmitting ? "Submitting..." : "Join Now"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VolunteerForm;
