
"use client";

import { useCustomSearchParams } from "@hooks/useCustomSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { searchParams, set, remove } = useCustomSearchParams();
  const [search, setSearch] = useState<string>(searchParams!.get('search') ?? '');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    if (debouncedSearch === '') {
      router.push(`${pathname}?${remove('search')}`);
    } else {
      router.push(`${pathname}?${set('search', debouncedSearch)}`);
    }
  }, [debouncedSearch]);

  return (
    <input
      className="relative font-[14px] min-h-[60px] w-full px-5 flex items-center rounded-md mt-5"
      type="text"
      value={search}
      onChange={event => setSearch(event.target.value)}
      placeholder="Search a book / film..."
    />
  )
}
