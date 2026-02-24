import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Pagina from "@/components/template/Pagina";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Responsive() {
  return (
    <Pagina>
      <div
        className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
      >
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

          <div className="flex justify-between w-full p-6 bg-white text-gray-950 rounded-md">
            <h1 className="hiden sm:opacity-50 md:opacity-25 lg:opacity-5">Mobile</h1>
            <h1 className="opacity-5 lg:opacity-50 xl:opacity-100">No mobile</h1>
          </div>

        </main>
      </div>
    </Pagina>
  );
}
