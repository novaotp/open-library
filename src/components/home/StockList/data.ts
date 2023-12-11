
import data from './rawData.json';

export interface Stock {
  type: "Book" | "Film";
  title: string;
  tags: string[];
  duration: number;
}

export const dummyData = (): Stock[] => {
  return data.map((stock) => {
    return {
      type: stock.type,
      title: stock.title,
      tags: stock.tags.replace(/\s/g, "").split(","),
      duration: stock.duration
    } as Stock;
  });
};
