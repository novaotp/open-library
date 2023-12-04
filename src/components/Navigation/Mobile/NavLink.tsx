
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  selected: boolean;
  asDisconnect?: boolean;
}

export const NavLink = ({ href, label, icon, selected, asDisconnect = false }: NavLinkProps) => {
  const bgColorVariants = {
    normal: "bg-[rgb(45,45,45)]",
    selected: "bg-slate-200",
    disconnect: "bg-[rgb(220,38,38)]"
  }

  const textColorVariants = {
    normal: "text-white",
    selected: "text-black"
  }

  const bgColor = bgColorVariants[asDisconnect ? 'disconnect' : selected ? 'selected' : 'normal'];
  const textColor = textColorVariants[selected ? 'selected' : 'normal'];

  return (
    <li className="relative w-full h-[60px] mb-5 last-of-type:mb-0">
      <Link
        href={href}
        className={`${bgColor} ${textColor} relative w-full h-full p-5 rounded-xl flex justify-between items-center`}
      >
        {icon}
        {label}
      </Link>
    </li>
  )
}
