
import { Metadata } from "next";
import { Home } from "./page.components";

export const metadata: Metadata = {
  title: "Home - OpenLibrary"
}

const Page = () => {
  return (
    <Home />
  )
}

export default Page;
