import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  target: string;
  className?: string;
  duration?: number;
}

function parseTarget(s: string): { num: number; suffix: string } {
  const match = s.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: s };
  return { num: parseInt(match[1]), suffix: match[2] };
}

const CountUp = ({ target, className, duration = 1.5 }: CountUpProps) => {
  const { num, suffix } = parseTarget(target);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default CountUp;
