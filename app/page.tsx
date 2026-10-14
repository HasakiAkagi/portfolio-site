"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ProfileSection from "@/components/ProfileSection";
import LikeSection from "@/components/LikeSection";
import ContentsSection from "@/components/ContentSection";
import MessageSection from "@/components/MessageSection";

export default function Home() {
  const images = [
    "/cat_1.png",
    "/cat_2.png",
    "/cat_3.png",
    "/cat_4.png",
    "/cat_5.png",
  ];
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % (images.length + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [images.length]);

  const scrollToProfile = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLike = () => {
    document.getElementById("like")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContents = () => {
    document.getElementById("contents")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMessage = () => {
    document.getElementById("message")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="bg-gradient-to-b from-[#d9f2ed] to-[#c2faf4] p-4">
        <div className="mx-auto flex min-h-[calc(100vh-32px)] max-w-6xl items-center justify-center">
          <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* 左上 */}
            <section className="overflow-hidden rounded-2xl border-4 border-[#355c4e] bg-[#f3f7f5] shadow-[6px_6px_0px_#355c4e]">
              <div className="border-b-4 border-[#355c4e] bg-[#dff3ea] px-4 py-2 text-sm font-bold tracking-[0.2em] text-[#355c4e]">
                ICON
              </div>

              <div className="flex min-h-[360px] items-center justify-center p-6">
                <div className="relative h-[280px] w-full max-w-[280px] overflow-hidden rounded-xl border-4 border-[#355c4e] bg-white">
                  <Image
                    src="/icon.png"
                    alt="写真"
                    fill
                    className="object-contain p-3"
                    priority
                  />
                </div>
              </div>

              <div className="flex min-h-[180px] items-center justify-start rounded-xl border-4 border-[#355c4e] bg-white px-4">
                <div className="flex items-center gap-3">
                  {step !== 5 &&
                    images.slice(0, step + 1).map((src, index) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`${index + 1}枚目`}
                        width={90}
                        height={90}
                        className="object-contain"
                      />
                    ))}
                </div>
              </div>
            </section>

            {/* 右上 */}
            <section className="overflow-hidden rounded-2xl border-4 border-[#355c4e] bg-[#f3f7f5] shadow-[6px_6px_0px_#355c4e]">
              <div className="border-b-4 border-[#355c4e] bg-[#dff3ea] px-4 py-2 text-sm font-bold tracking-[0.2em] text-[#355c4e]">
                MENU
              </div>

              <div className="flex min-h-[520px] flex-col justify-center px-8 py-10">
                <p className="text-sm font-bold tracking-[0.3em] text-[#355c4e]">
                  WELCOME TO MY PORTFOLIO
                </p>
                <p className="mt-1 text-sm text-[#355c4e]">
                  赤城 葉咲の自己紹介ポートフォリオです
                </p>

                <h1 className="mt-6 text-5xl font-black tracking-[0.08em] text-[#355c4e] md:text-7xl">
                  AKAGI HASAKI
                </h1>

                <nav className="mt-8 grid max-w-md grid-cols-2 gap-3">
                  <Link
                    href="/"
                    className="flex h-14 w-[150px] items-center justify-center rounded-2xl border-4 border-[#355c4e] bg-white text-xs font-bold tracking-[0.15em] text-[#355c4e] shadow-[3px_3px_0px_#355c4e] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  >
                    HOME
                  </Link>

                  <button
                    type="button"
                    onClick={scrollToProfile}
                    className="flex h-14 w-[150px] items-center justify-center rounded-2xl border-4 border-[#355c4e] bg-white text-xs font-bold tracking-[0.15em] text-[#355c4e] shadow-[3px_3px_0px_#355c4e] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  >
                    PROFILE
                  </button>

                  <button
                    type="button"
                    onClick={scrollToLike}
                    className="flex h-14 w-[150px] items-center justify-center rounded-2xl border-4 border-[#355c4e] bg-white text-xs font-bold tracking-[0.15em] text-[#355c4e] shadow-[3px_3px_0px_#355c4e] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  >
                    LIKE
                  </button>

                  <button
                    type="button"
                    onClick={scrollToContents}
                    className="flex h-14 w-[150px] items-center justify-center rounded-2xl border-4 border-[#355c4e] bg-white text-xs font-bold tracking-[0.15em] text-[#355c4e] shadow-[3px_3px_0px_#355c4e] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  >
                    CONTENTS
                  </button>
                  <button
                    type="button"
                    onClick={scrollToMessage}
                    className="flex h-14 w-[150px] items-center justify-center rounded-2xl border-4 border-[#355c4e] bg-white text-xs font-bold tracking-[0.15em] text-[#355c4e] shadow-[3px_3px_0px_#355c4e] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  >
                    MESSAGE
                  </button>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </main>

      <ProfileSection />
      <LikeSection />
      <ContentsSection />
      <MessageSection />
    </>
  );
}
