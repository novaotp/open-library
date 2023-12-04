
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

export const Desktop = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex justify-between items-center p-5 h-20">
      <Link href="/" className="relative h-full flex justify-center items-center text-white underline p-2">
        OpenLibrary
      </Link>
      <menu className="relative flex">
        <NavLink href="/" label='Home' icon={<HomeRoundedIcon />} selected={pathname === "/"} />
        <NavLink href="/favorites" label='My favorites' icon={<FavoriteRoundedIcon />} selected={pathname === "/favorites"} />
        <NavLink href="/notifications" label='Notifications' icon={<NotificationsRoundedIcon />} selected={pathname === "/notifications"} />
        <NavLink href="/settings" label='Settings' icon={<SettingsRoundedIcon />} selected={pathname === "/settings"} />
        <NavLink href="/auth/log-out" label='' icon={<LogoutRoundedIcon />} selected={pathname === "/auth/log-out"} asDisconnect={true} />
      </menu>
    </nav>
  )
}
