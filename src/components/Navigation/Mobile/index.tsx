
"use client";

// MUI Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

// React + Next
import { useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Internal
import { NavLink } from './NavLink';

export const Mobile = () => {
  const mobileMenuRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const openMobileMenu = () => {
    if (!mobileMenuRef.current) return;

    mobileMenuRef.current.classList.replace("-left-full", "left-0");
  }

  const closeMobileMenu = () => {
    if (!mobileMenuRef.current) return;

    mobileMenuRef.current.classList.replace("left-0", "-left-full");
  }

  return (
    <div className="lg:hidden">
      <nav className="fixed top-0 left-0 w-full h-20 flex justify-start items-center bg-[#1D1D1D] p-5 z-40">
        <button onClick={openMobileMenu} className="relative h-full aspect-square flex justify-center items-center text-white">
          <div className="relative h-[25px] w-[30px] flex flex-col justify-between items-start">
            <div className="relative w-full h-[3px] rounded-md bg-white"></div>
            <div className="relative w-2/3 h-[3px] rounded-md bg-white"></div>
            <div className="relative w-1/3 h-[3px] rounded-md bg-white"></div>
          </div>
        </button>
      </nav>
      <menu ref={mobileMenuRef} className="fixed top-0 -left-full w-full h-full bg-[#1D1D1D] z-50 duration-300 ease-out flex flex-col justify-between items-center">
        <nav className="relative top-0 left-0 w-full h-20 flex justify-between items-center p-5">
          <button onClick={closeMobileMenu} className="relative h-full aspect-square flex justify-center items-center text-white">
            <CloseRoundedIcon className="text-3xl" />
          </button>
          <Link href="/" onClick={closeMobileMenu} className="relative h-full flex justify-center items-center text-white underline p-2">
            OpenLibrary
          </Link>
        </nav>
        <ul className="relative w-full flex-grow flex flex-col justify-between p-5">
          <div>
            <NavLink href="/" label='Home' icon={<HomeRoundedIcon />} selected={pathname === "/"} />
            <NavLink href="/favorites" label='My favorites' icon={<FavoriteRoundedIcon />} selected={pathname === "/favorites"} />
          </div>
          <div>
            <NavLink href="/notifications" label='Notifications' icon={<NotificationsRoundedIcon />} selected={pathname === "/notifications"} />
            <NavLink href="/settings" label='Settings' icon={<SettingsRoundedIcon />} selected={pathname === "/settings"} />
            <NavLink href="/auth/log-out" label='Disconnect' icon={<LogoutRoundedIcon />} selected={pathname === "/auth/log-out"} asDisconnect={true} />
          </div>
        </ul>
        <footer className="relative w-full h-20 flex justify-center items-center text-white">
          <p>OpenLibrary {(new Date()).getFullYear()} - Sajidur Rahman</p>
        </footer>
      </menu>
    </div>
  )
}
