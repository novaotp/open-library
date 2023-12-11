
import { Filter } from "./Filter";
import { Sort } from "./Sort";

export const Options = () => {
  return (
    <div className="relative w-full h-[60px] flex justify-between items-center mt-5">
      <Sort />
      <Filter />
    </div>
  )
}
