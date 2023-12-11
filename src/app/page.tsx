
import { Metadata } from "next";
import { Home } from "@components/home";

export const metadata: Metadata = {
  title: "Home - OpenLibrary"
}

const Page = () => {
  return (
    <Home />
  )
}

export default Page;
