
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface StoryStepProps {
  form: UseFormReturn<any>;
}

const StoryStep = ({ form }: StoryStepProps) => {
  return (
    <motion.div
      key="step3"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Tell Us Their Story</h2>
      <FormField
        control={form.control}
        name="hero_story"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Share Their Story</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Why is this hero amazing? What makes them shine in the Mindverse? (Write 3–5 sentences or more!)" 
                className="min-h-[150px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="hero_interests"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Hero's Favorite Interests or Hobbies</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="This helps us personalize their spotlight" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="has_permission"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-cosmic-light">
                I have permission from the parent/guardian to nominate this child
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </motion.div>
  );
};

export default StoryStep;
