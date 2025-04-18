
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface HeroInfoStepProps {
  form: UseFormReturn<any>;
}

const HeroInfoStep = ({ form }: HeroInfoStepProps) => {
  return (
    <motion.div
      key="step2"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Hero Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="hero_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cosmic-light text-lg">Hero's First Name</FormLabel>
              <FormControl>
                <Input placeholder="Tell us who you're nominating!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hero_age"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cosmic-light text-lg">Hero's Age</FormLabel>
              <FormControl>
                <Input placeholder="Age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="hero_location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Hero's City/State</FormLabel>
            <FormControl>
              <Input placeholder="Location helps us plan recognition and gifts!" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );
};

export default HeroInfoStep;
