
import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { motion } from "framer-motion";
import { Controller } from "react-hook-form";

interface SkillsStepProps {
  form: UseFormReturn<any>;
}

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

const SkillsStep = ({ form }: SkillsStepProps) => {
  return (
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
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-cosmic-light text-lg">Select Your Skills</FormLabel>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-cosmic-navy/20 transition-colors"
                >
                  <Controller
                    name="skills"
                    control={form.control}
                    render={({ field: skillsField }) => (
                      <Checkbox
                        checked={skillsField.value?.includes(skill)}
                        onCheckedChange={(checked) => {
                          const currentValue = skillsField.value || [];
                          const newValue = checked
                            ? [...currentValue, skill]
                            : currentValue.filter((s: string) => s !== skill);
                          form.setValue("skills", newValue, { 
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true 
                          });
                        }}
                      />
                    )}
                  />
                  <span className="text-cosmic-light">{skill}</span>
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

export default SkillsStep;
