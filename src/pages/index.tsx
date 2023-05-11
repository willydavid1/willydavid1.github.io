import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export default function Home() {
  return (
    <main className={`min-h-screen ${openSansFont.className} font-opensans`}>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-4xl">🚧 WIP</h1>
        <p className="mt-12 text-base">Last updated on 10/05/2023</p>
      </div>
    </main>
  );
}
