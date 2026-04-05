import { Button } from "@/components/ui/button";

const GIVEBUTTER_URL = "https://givebutter.com/ausome-heroes";

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
    // Try to open the Givebutter widget inline
    let widget = document.querySelector('givebutter-widget');
    if (!widget) {
      widget = document.createElement('givebutter-widget');
      widget.id = 'gMENbg';
      document.body.appendChild(widget);
    }
    widget.setAttribute('open', 'true');

    // If the script hasn't loaded, the widget won't actually open.
    // Fall back to the hosted page after a short grace period.
    setTimeout(() => {
      const iframe = document.querySelector('givebutter-widget iframe');
      if (!iframe) {
        window.open(GIVEBUTTER_URL, '_blank', 'noopener');
      }
    }, 1500);
  };

  const variantClasses: Record<string, string> = {
    gold: 'bg-cosmic-gold hover:bg-cosmic-gold/80 text-cosmic-navy',
    purple: 'bg-cosmic-purple hover:bg-cosmic-purple/80 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
  };

  return (
    <Button
      className={`${className} ${variantClasses[variant]}`}
      size={size}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default DonateButton;
