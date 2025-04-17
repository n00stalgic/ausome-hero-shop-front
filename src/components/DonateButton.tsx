
import React from 'react';
import { Button } from "@/components/ui/button";

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
  const handleClick = () => {
    // Find the Givebutter widget and trigger it
    const givebutterWidget = document.createElement('givebutter-widget');
    givebutterWidget.id = 'gMENbg';
    document.body.appendChild(givebutterWidget);
    
    // The script should handle the widget display automatically
    // If not showing, we can try to force it programmatically
    setTimeout(() => {
      if (givebutterWidget && !givebutterWidget.hasAttribute('open')) {
        // Clean up any existing widgets first to prevent duplicates
        document.querySelectorAll('givebutter-widget').forEach((widget, index) => {
          if (index !== document.querySelectorAll('givebutter-widget').length - 1) {
            widget.remove();
          }
        });
        
        // Add the open attribute to trigger the widget
        givebutterWidget.setAttribute('open', 'true');
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
    <Button 
      className={buttonClasses} 
      size={size} 
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default DonateButton;
