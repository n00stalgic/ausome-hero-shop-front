
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface SourceStepProps {
  form: UseFormReturn<any>;
}

const sources = [
  "Instagram",
  "Facebook",
  "Event",
  "Word of Mouth",
  "Other"
];

const SourceStep = ({ form }: SourceStepProps) => {
  const source = form.watch("source");

  return (
    <motion.div
      key="step4"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Final Details</h2>
      <FormField
        control={form.control}
        name="source"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">How did you hear about Ausome Heroes?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-2"
              >
                {sources.map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <RadioGroupItem value={item} id={item} />
                    <FormLabel htmlFor={item} className="text-cosmic-light">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {source === "Other" && (
        <FormField
          control={form.control}
          name="source_other"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-cosmic-light text-lg">Please specify</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </motion.div>
  );
};

export default SourceStep;
