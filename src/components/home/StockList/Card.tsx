
"use client";

import Link from "next/link"
import { Stock } from "./data"

interface CardProps {
  id: number;
  stock: Stock;
}

export const Card = ({ id, stock }: CardProps) => {
  return (
    <li className="relative w-full min-h-[200px] bg-green-300 rounded-md mb-5 last-of-type:mb-0 flex">
      <Link href={`/${id}`} className="relative w-full h-[200px] p-5 flex flex-col justify-end">
        <h3 className="text-lg">{stock.title}</h3>
        <div className="relative w-full flex justify-between">
          <p className="relative text-xs text-gray-500">
            { stock.tags.join(" - ") }
          </p>
          <p className="text-xs text-gray-500">{stock.duration} min</p>
        </div>
      </Link>
    </li>
  )
}
