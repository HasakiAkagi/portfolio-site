"use client";

import Image from "next/image";

export default function ProfileSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <section id="profile" className="bg-gradient-to-b from-[#c2faf4] to-[#c2faf6] p-2 sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-16px)] max-w-[1100px] items-center justify-center">
        <div className="grid w-full gap-4 lg:grid-cols-[1fr_230px]">
          {/* left panel */}
          <section className="rounded-[24px] border-[5px] border-[#3d675b] bg-[#f7f9f7] shadow-[5px_5px_0px_#3d675b]">
            <div className="rounded-t-[18px] border-b-[5px] border-[#3d675b] px-5 py-2">
              <h1 className="text-[18px] font-bold tracking-[0.35em] text-[#3d675b]">
                MY PROFILE
              </h1>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border-[3px] border-[#3d675b] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#78a89b] hover:bg-[#f6fffd]">
                  <p className="text-[11px] font-bold tracking-[0.32em] text-[#3d675b]">
                    NAME
                  </p>
                  <p className="mt-2 text-[13px] text-[#3d675b]">赤城 葉咲</p>
                </div>

                <div className="rounded-xl border-[3px] border-[#3d675b] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#78a89b] hover:bg-[#f6fffd]">
                  <p className="text-[11px] font-bold tracking-[0.32em] text-[#3d675b]">
                    DEPARTMENT
                  </p>
                  <p className="mt-2 text-[13px] text-[#3d675b]">SVCP-AD</p>
                </div>

                <div className="rounded-xl border-[3px] border-[#3d675b] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#78a89b] hover:bg-[#f6fffd]">
                  <p className="text-[11px] font-bold tracking-[0.32em] text-[#3d675b]">
                    Date of Birth
                  </p>
                  <p className="mt-2 text-[13px] text-[#3d675b]">2003/08/18</p>
                </div>

                <div className="rounded-xl border-[3px] border-[#3d675b] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#78a89b] hover:bg-[#f6fffd]">
                  <p className="text-[11px] font-bold tracking-[0.32em] text-[#3d675b]">
                    BLOOD TYPE
                  </p>
                  <p className="mt-2 text-[13px] text-[#3d675b]">O型</p>
                </div>

                <div className="rounded-xl border-[3px] border-[#3d675b] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#78a89b] hover:bg-[#f6fffd]">
                  <p className="text-[11px] font-bold tracking-[0.32em] text-[#3d675b]">
                    FROM
                  </p>
                  <p className="mt-2 text-[13px] text-[#3d675b]">茨城県 牛久市</p>
                  <p className="mt-1 text-[13px] text-[#3d675b]">
                    （高校生まではつくば市に住んでいました）
                  </p>
                </div>

                <div className="rounded-xl border-[3px] border-[#3d675b] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#78a89b] hover:bg-[#f6fffd]">
                  <p className="text-[11px] font-bold tracking-[0.32em] text-[#3d675b]">
                    Highest Education
                  </p>
                  <p className="mt-2 text-[13px] text-[#3d675b]">大学卒</p>
                </div>

              </div>
            </div>
          </section>

          {/* right panel */}
          <aside className="flex flex-col items-center gap-4 pt-2">
            <div className="bg-[#dff4ec] p-4">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-md border-[2px] border-[#3d675b] bg-white">
                <Image
                  src="/profile_pg.png"
                  alt="profile icon"
                  width={96}
                  height={96}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

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
                onClick={scrollToLike}
                className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
              >
                LIKE
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
    </section>
  );
}
