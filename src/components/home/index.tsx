
import { Options } from "./Options";
import { Search } from "./Search";
import { StockList } from "./StockList";

export const Home = () => {
  return (
    <div className="relative w-full h-full flex flex-col p-5">
      <h1 className="relative text-white text-4xl font-bold">OpenLibrary</h1>
      <Search />
      <Options />
      <StockList />
      <footer>
        
      </footer>
    </div>
  )
}
