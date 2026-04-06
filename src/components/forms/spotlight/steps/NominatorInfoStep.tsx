
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface NominatorInfoStepProps {
  form: UseFormReturn<any>;
}

const NominatorInfoStep = ({ form }: NominatorInfoStepProps) => {
  return (
    <motion.div
      key="step1"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Nominator Information</h2>
      <FormField
        control={form.control}
        name="nominator_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Your Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Who's nominating this hero?" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="nominator_email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Your Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="So we can follow up with you!" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="nominator_phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Your Phone Number (Optional)</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="Only used if needed for follow-up" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  );
};

export default NominatorInfoStep;
