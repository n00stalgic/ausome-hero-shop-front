
import { Check, Star } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              index < currentStep
                ? "bg-cosmic-gold text-cosmic-navy"
                : index === currentStep
                ? "bg-cosmic-purple text-white animate-pulse"
                : "bg-cosmic-navy/20 text-cosmic-light"
            }`}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <Star className="w-5 h-5" />
            )}
            <div className="absolute -bottom-6 text-sm font-medium text-cosmic-light">
              Step {index + 1}
            </div>
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-0.5 w-8 mx-2 transition-all duration-300 ${
                index < currentStep ? "bg-cosmic-gold" : "bg-cosmic-navy/20"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
