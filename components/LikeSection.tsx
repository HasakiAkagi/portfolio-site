"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LikeItem = {
  src: string;
  alt: string;
  description: string;
  photos: string[];
};

export default function LikeSection() {
  const likeImages: LikeItem[] = [
    {
      src: "/ichigo_red.png",
      alt: "いちご",
      description: "好きなアーティスト：aiko",
      photos: ["/ichigo_photo1.jpg", "/ichigo_photo2.jpg", "/ichigo_photo3.jpg"],
    },
    {
      src: "/gorilla.png",
      alt: "ゴリラ",
      description: "趣味：動物園巡り",
      photos: ["/gorilla_photo1.jpg", "/gorilla_photo2.jpg", "/gorilla_photo3.jpg"],
    },
    {
      src: "/drink_hotcafelatte.png",
      alt: "カフェラテ",
      description: "趣味：喫茶店巡り",
      photos: ["/cafe_photo1.jpg", "/cafe_photo2.jpg", "/cafe_photo3.jpg"],
    },
    {
      src: "/iruka.png",
      alt: "イルカ",
      description: "趣味：水族館巡り",
      photos: ["/iruka_photo1.jpg", "/iruka_photo2.jpg", "/iruka_photo3.jpg"],
    },
    {
      src: "/hamster.png",
      alt: "ハムスター",
      description: "好きなキャラクター：ちいかわ",
      photos: ["/hamster_photo1.jpg", "/hamster_photo4.jpg", "/hamster_photo3.jpg"],
    },
    {
      src: "/cat_like.png",
      alt: "猫",
      description: "将来の目標：一人暮らしをして猫を迎える",
      photos: ["/like_cat6.jpg", "/like_cat2.jpg", "/like_cat4.jpg"],
    },
    {
      src: "/keito.png",
      alt: "編み物",
      description: "特技：編み物",
      photos: ["/knit_photo1.jpg", "/knit_photo2.jpg", "/knit_photo3.jpg"],
    },
    {
      src: "/snowman_red.png",
      alt: "冬",
      description: "好きな季節：冬（雪が好きです）",
      photos: ["/snow_photo1.jpg", "/snow_photo2.jpg", "/snow_photo4.jpg"],
    },
  ];

  const [selected, setSelected] = useState<LikeItem | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProfile = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContents = () => {
    document.getElementById("contents")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMessage = () => {
    document.getElementById("message")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="like" className="bg-gradient-to-b from-[#c2faf6] to-[#c2ecfa] p-2 sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-16px)] max-w-[1200px] items-center justify-center">
        <div className="grid w-full gap-4 lg:grid-cols-[1fr_250px]">
          {/* left panel */}
          <section className="overflow-hidden rounded-[24px] border-[5px] border-[#3d675b] bg-[#f7f9f7] shadow-[5px_5px_0px_#3d675b]">
            <div className="rounded-t-[18px] border-b-[5px] border-[#3d675b] px-5 py-2">
              <h1 className="text-[18px] font-bold tracking-[0.35em] text-[#3d675b]">
                I LIKE
              </h1>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {likeImages.map((item) => (
                  <button
                    key={item.alt}
                    type="button"
                    onClick={() => setSelected(item)}
                    className="flex aspect-square items-center justify-center border-[2px] border-[#223f50] bg-white p-3 transition hover:scale-[1.02]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={120}
                      height={120}
                      className="h-[85%] w-[85%] object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* 詳細表示 */}
              <div className="mt-6 rounded-xl border-[3px] border-[#3d675b] bg-white p-4 text-[#3d675b]">
                {selected ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.32em]">
                        MEMO
                      </p>
                      <p className="mt-3 text-[14px] leading-7">
                        {selected.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.32em]">
                        PHOTOS
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {selected.photos.map((photo, index) => (
                          <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-lg border-[2px] border-[#223f50] bg-[#f8fbfa]"
                          >
                            <Image
                              src={photo}
                              alt={`${selected.alt} ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                    >
                      閉じる
                    </button>
                  </div>
                ) : (
                  <p className="text-[14px] leading-7">
                    上の画像をクリックすると、詳細が表示されます。
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* right panel */}
          <aside className="flex flex-col gap-4 pt-2">
            <div className="flex w-full flex-col gap-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
              >
                HOME
              </button>

              <button
                type="button"
                onClick={scrollToProfile}
                className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
              >
                PROFILE
              </button>

              <button
                type="button"
                onClick={scrollToContents}
                className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
              >
                CONTENTS
              </button>
              <button
                type="button"
                onClick={scrollToMessage}
                className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
              >
                MESSAGE
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
