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
    let widget = document.querySelector('givebutter-widget');
    if (!widget) {
      widget = document.createElement('givebutter-widget');
      widget.id = 'gMENbg';
      document.body.appendChild(widget);
    }
    widget.setAttribute('open', 'true');
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
