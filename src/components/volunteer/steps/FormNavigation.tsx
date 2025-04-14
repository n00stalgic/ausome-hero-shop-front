
import React from "react";
import { Button } from "@/components/ui/button";

interface FormNavigationProps {
  step: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const FormNavigation = ({ step, isSubmitting, onPrevious, onNext }: FormNavigationProps) => {
  return (
    <div className="flex justify-between pt-8">
      <Button
        type="button"
        variant="outline"
        onClick={onPrevious}
        disabled={step === 1}
        className="w-32"
      >
        Previous
      </Button>
      
      {step < 4 ? (
        <Button type="button" onClick={onNext} className="w-32">
          Next
        </Button>
      ) : (
        <Button type="submit" disabled={isSubmitting} className="w-32">
          {isSubmitting ? "Submitting..." : "Join Now"}
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
