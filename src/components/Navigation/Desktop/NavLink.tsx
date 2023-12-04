
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
  const bgColor = asDisconnect ? "bg-[rgb(220,38,38)]" : selected ? "bg-[rgb(45,45,45)]" : "bg-transparent";

  return (
    <li className={`relative w-auto h-[50px] flex justify-center items-center mr-8 last-of-type:mr-0`}>
      <Link
        href={href}
        className={`relative ${bgColor} px-5 py-3 rounded-xl flex justify-between items-center text-white duration-150 hover:bg-[rgb(45,45,45)]`}
      >
        {icon}
        {
          label !== "" ? 
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{label}</p>
            : ""
        }
      </Link>
    </li>
  )
}
