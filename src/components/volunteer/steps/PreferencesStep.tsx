
import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";

interface PreferencesStepProps {
  form: UseFormReturn<any>;
}

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

const PreferencesStep = ({ form }: PreferencesStepProps) => {
  return (
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
            <FormLabel className="text-cosmic-light text-lg">When Can You Join Missions?</FormLabel>
            <div className="grid grid-cols-2 gap-4">
              {availability.map((time) => (
                <label
                  key={time}
                  className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-cosmic-navy/20 transition-colors"
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
                  <span className="text-cosmic-light">{time}</span>
                </label>
              ))}
            </div>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="interests"
        render={() => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Areas of Interest</FormLabel>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-cosmic-navy/20 transition-colors"
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
                  <span className="text-cosmic-light">{interest}</span>
                </label>
              ))}
            </div>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
    </motion.div>
  );
};

export default PreferencesStep;
