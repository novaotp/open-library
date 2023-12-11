
"use client";

import SwapVertRoundedIcon from '@mui/icons-material/SwapVertRounded';
import { useMemo, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCustomSearchParams } from '@hooks/useCustomSearchParams';

export const Sort = () => {
  const sortOptionsRef = useRef<HTMLUListElement>(null);
  const currentSortRef = useRef<HTMLButtonElement>(null);
  const { searchParams, set, remove } = useCustomSearchParams();
  const sortParam = searchParams?.get("sort") ?? "";
  const pathname = usePathname();
  const router = useRouter();

  const expandSortOptions = () => {
    if (!sortOptionsRef.current) return;
    if (!currentSortRef.current) return;

    const isVisible = sortOptionsRef.current.classList.contains("flex");
    const oldValue = isVisible ? "flex" : "hidden";
    const newValue = isVisible ? "hidden" : "flex";

    sortOptionsRef.current.classList.replace(oldValue, newValue);

    const oldRounding = isVisible ? "rounded-br-none" : "rounded-br-md";
    const newRounding = isVisible ? "rounded-br-md" : "rounded-br-none";
    currentSortRef.current.classList.replace(oldRounding, newRounding);
  }

  const currentSort = useMemo(() => {
    switch (sortParam) {
      case "":
        return "Newest";
      case "oldest":
        return "Oldest";
      case "trending":
        return "Trending";
      default:
        router.push(`${pathname}?${remove('sort')}`);
    }
  }, [sortParam])

  const optionsToRender = useMemo(() => {
    switch (sortParam) {
      case "":
        return [{ href: `${pathname}?${set('sort', 'oldest')}`, label: "Oldest" }, { href: `${pathname}?${set('sort', 'trending')}`, label: "Trending" }];
      case "oldest":
        return [{ href: `${pathname}?${remove('sort')}`, label: "Newest" }, { href: `${pathname}?${set('sort', 'trending')}`, label: "Trending" }];
      case "trending":
        return [{ href: `${pathname}?${set('sort', 'oldest')}`, label: "Oldest" }, { href: `${pathname}?${remove('sort')}`, label: "Newest" }];
      default:
        router.push(`${pathname}?${remove('sort')}`);
    }
  }, [sortParam]);

  return (
    <div className="relative h-full w-[calc(50%-10px)]">
      <button
        onClick={expandSortOptions}
        ref={currentSortRef}
        className="relative h-full w-full bg-orange-400 rounded-t-md rounded-bl-md rounded-br-md flex justify-between items-center p-[15px]"
      >
        <SwapVertRoundedIcon className="relative h-full w-[30px]" />
        <span className="relative h-full flex-grow pl-[15px]">{currentSort}</span>
      </button>
      <ul ref={sortOptionsRef} className="relative hidden flex-col w-[calc(100%-45px)] left-[45px]">
        {
          !optionsToRender
            ? null
            : optionsToRender.map(({ href, label }) => {
                return (
                  <li key={href} className="relative h-[60px] w-full bg-blue-400 p-[15px] last-of-type:rounded-b-md">
                    <Link onClick={expandSortOptions} href={href} className="relative h-full w-full p-[15px] flex justify-center items-center">
                      {label}
                    </Link>
                  </li>
                )
              })
        }
      </ul>
    </div>
  )
}
