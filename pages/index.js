import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./Components/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={``}>
      <HomePage />
    </main>
  );
}
