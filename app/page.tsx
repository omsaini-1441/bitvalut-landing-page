import Home from "./home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
