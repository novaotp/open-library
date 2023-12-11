
"use client";

import { useCustomSearchParams } from "@hooks/useCustomSearchParams";
import { Card } from "./Card"
import { Stock, dummyData } from "./data"
import { useMemo } from "react";

export const StockList = () => {
  const { searchParams } = useCustomSearchParams();
  const searchParam = searchParams.get('search') ?? "";

  const sortedStocks: Stock[] = useMemo(() => {
    const data = dummyData();

    if (searchParam === "") return data;

    return data.filter((stock) => {
      const title = stock.title.toLowerCase()
      const search = searchParam.toLowerCase();

      return title.includes(search);
    }) as Stock[];
  }, [searchParam]);

  return (
    <ul className="relative mt-5">
      {
        sortedStocks.map((stock, index) => {
          return (
            <Card key={index} id={index + 1} stock={stock} />
          )
        })
      }
    </ul>
  )
}
