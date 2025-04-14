
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface BasicInfoStepProps {
  form: UseFormReturn<any>;
}

const BasicInfoStep = ({ form }: BasicInfoStepProps) => {
  return (
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
            <FormLabel className="text-cosmic-light text-lg">Civilian Name</FormLabel>
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
            <FormLabel className="text-cosmic-light text-lg">Choose Your Hero Name</FormLabel>
            <FormControl>
              <Input placeholder="What should we call you?" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );
};

export default BasicInfoStep;
