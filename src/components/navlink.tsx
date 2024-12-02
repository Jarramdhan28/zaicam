interface NavLinkProps {
  to: string;
  label: string;
  className?: string;  
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, className = '' }) => {
  return (
    <a
      href={to}
      className={`block hover:text-gray-500 p-2 md:inline-block ${className}`}
    >
      {label}
    </a>
  );
};
 
export default NavLink;