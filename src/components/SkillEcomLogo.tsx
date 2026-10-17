type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
};

export default function SkillEcomLogo({
  size = 'md',
  theme = 'light',
  className = '',
  showSubtitle = true,
}: Props) {
  // Heights according to size
  const heightClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16 md:h-20',
    xl: 'h-24 md:h-28 lg:h-32',
  }[size];

  const src = theme === 'dark' ? '/skill-ecom-logo-white.svg' : '/skill-ecom-logo.svg';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        alt="Skill Ecom - Institute of E-Commerce & Management"
        className={`${heightClasses} w-auto object-contain transition-transform`}
        loading="eager"
      />
    </div>
  );
}
