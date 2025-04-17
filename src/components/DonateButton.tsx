
import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";

interface DonateButtonProps {
  variant?: 'gold' | 'purple' | 'blue';
  size?: 'default' | 'lg' | 'sm';
  className?: string;
  text?: string;
}

const DonateButton = ({ 
  variant = 'gold', 
  size = 'default', 
  className = '',
  text = 'Donate Now'
}: DonateButtonProps) => {
  const [showFallbackDialog, setShowFallbackDialog] = React.useState(false);
  
  const handleClick = () => {
    // Show a toast to let users know what's happening
    toast.info("Opening donation form...");
    
    // Try to find an existing widget first
    let givebutterWidget = document.querySelector('givebutter-widget');
    
    // If no widget exists, create one
    if (!givebutterWidget) {
      givebutterWidget = document.createElement('givebutter-widget');
      givebutterWidget.id = 'gMENbg';
      document.body.appendChild(givebutterWidget);
      
      console.log("Created new Givebutter widget");
    } else {
      console.log("Found existing Givebutter widget");
    }
    
    // Try to open the widget
    setTimeout(() => {
      if (givebutterWidget) {
        // Clean up any existing widgets first to prevent duplicates
        document.querySelectorAll('givebutter-widget').forEach((widget, index) => {
          if (index !== document.querySelectorAll('givebutter-widget').length - 1) {
            widget.remove();
          }
        });
        
        // Add the open attribute to trigger the widget
        givebutterWidget.setAttribute('open', 'true');
        
        // Check if widget opened successfully after a short delay
        setTimeout(() => {
          // If the donation form is not visible, show our fallback dialog
          const isWidgetActive = document.querySelector('givebutter-widget[open="true"]');
          if (!isWidgetActive) {
            console.log("Widget failed to open, showing fallback dialog");
            setShowFallbackDialog(true);
          }
        }, 1000);
      }
    }, 100);
  };

  let buttonClasses = className + ' ';
  
  // Set button styling based on variant
  switch (variant) {
    case 'gold':
      buttonClasses += 'bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy';
      break;
    case 'purple':
      buttonClasses += 'bg-cosmic-purple hover:bg-cosmic-purple/80 text-white';
      break;
    case 'blue':
      buttonClasses += 'bg-blue-500 hover:bg-blue-600 text-white';
      break;
    default:
      buttonClasses += 'bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy';
  }

  return (
    <>
      <Button 
        className={buttonClasses} 
        size={size} 
        onClick={handleClick}
      >
        {text}
      </Button>
      
      {/* Fallback Dialog if Givebutter widget doesn't open */}
      <Dialog open={showFallbackDialog} onOpenChange={setShowFallbackDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Donate to AusomeHeroes</DialogTitle>
            <DialogDescription>
              Our donation form should appear momentarily. If you don't see it, please look for the "Donate" button in the bottom right corner of the screen and click it.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <p>
              Your support helps us provide sensory-friendly products and events for autistic children and their families.
            </p>
            <div className="flex justify-end gap-2">
              <Button 
                onClick={() => {
                  // Try to trigger the button on the page
                  const donateButton = document.querySelector('givebutter-button');
                  if (donateButton) {
                    (donateButton as HTMLElement).click();
                  }
                  setShowFallbackDialog(false);
                }}
                className="bg-cosmic-purple hover:bg-cosmic-purple/80 text-white"
              >
                Try Again
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowFallbackDialog(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonateButton;
