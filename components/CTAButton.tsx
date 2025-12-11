import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  text,
  variant = 'primary',
  size = 'medium',
  icon = true,
  className = '',
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105';

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg',
    secondary: 'bg-accent text-white hover:bg-accent-light shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {text}
      {icon && <HiArrowRight className="w-5 h-5" />}
    </Link>
  );
}
