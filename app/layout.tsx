import "./globals.css";
import Image from "next/image";
import { DotGothic16 } from "next/font/google";
import MouseStalker from "@/components/MouseStalker";

const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={dotGothic16.className}>
        <MouseStalker />
        {/* 雲の帯 */}
        <header className="bg-[#d9f2ed] py-2">
          <div className="flex w-full justify-between px-4">
            <div className="animate-floatY">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
            <div className="animate-floatY [animation-delay:0.5s]">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
            <div className="animate-floatY [animation-delay:1s]">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
            <div className="animate-floatY [animation-delay:1.5s]">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
            <div className="animate-floatY [animation-delay:2s]">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
            <div className="animate-floatY [animation-delay:2.5s]">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
            <div className="animate-floatY [animation-delay:3s]">
              <Image src="/cloud.png" alt="cloud" width={70} height={70} />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
