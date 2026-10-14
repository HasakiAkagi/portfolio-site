"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = {
  label: string;
  href: string;
  external: boolean;
  description: string;
  learnings: string[];
  improvements: string[];
  imageSrc: string;
};

export default function ContentsSection() {
  const projects: Project[] = [
    {
      label: "自己紹介サイト",
      href: "https://hasakiakagi.github.io/akagi-hasaki-profile/",
      external: true,
      description: "自分のおすすめの水族館を記載したWebサイトです。",
      learnings: ["フロントエンド開発", "HTML/CSS,JavaScript"],
      improvements: [
        "CSSのアニメーション機能を使って、画像が流れるようにしました。",
        "モーダルを使って写真の詳細を表示できるようにしました。",
      ],
      imageSrc: "/selfintro.png",
    },
    {
      label: "どうぶつめぐり帳",
      href: "https://animal-travel-log.onrender.com",
      external: true,
      description:
        "自分が訪れた動物園・水族館を記録し、47都道府県の全国制覇を目指していくアプリです。",
      learnings: ["サーバーサイド入門", "Flask"],
      improvements: [
        "達成率と訪れた都道府県を一目でわかるようにしました。",
        "お気に入りの動物を追加したり、これから行きたい施設をメモできるようにしました。",
      ],
      imageSrc: "/zoo.png",
    },
    {
      label: "MBTIプロフィール",
      href: "https://profile-site-emam.onrender.com/",
      external: true,
      description:
        "周りの人のプロフィールを登録してメモやチーム作成ができ、身近に多いMBTIタイプをグラフで確認できるアプリです。",
      learnings: ["フレームワーク入門", "Django"],
      improvements: [
        "文字数制限や必須項目を設定することで、入力ミスを防ぎ、操作性を高めました。",
        "登録したプロフィールのデータをもとに、MBTIの集計やチーム作成ができるようにしました。",
      ],
      imageSrc: "/mbti.png",
    },
    {
      label: "今日のaikoアプリ",
      href: "/aiko",
      external: false,
      description:
        "aikoの楽曲をランダムに表示して、今日の1曲をおすすめしてくれるアプリです。",
      learnings: ["ポートフォリオ内の自由追加課題", "React"],
      improvements: [
        "結果を出すだけでなく、楽しさを感じられるように選曲中の演出を入れました。",
        "もう一度選ぶボタンでは、前回と同じ曲が連続して表示されないように工夫しました。",
      ],
      imageSrc: "/aiko.png",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToProfile = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLike = () => {
    document.getElementById("like")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMessage = () => {
    document.getElementById("message")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contents"
      className="bg-gradient-to-b from-[#c2ecfa] to-[#cde5fe] p-2 sm:p-4"
    >
      <div className="mx-auto flex min-h-[calc(100vh-16px)] max-w-[1200px] items-center justify-center">
        <div className="grid w-full gap-4 lg:grid-cols-[1fr_250px]">
          <section className="overflow-hidden rounded-[24px] border-[5px] border-[#3d675b] bg-[#f7f9f7] shadow-[5px_5px_0px_#3d675b]">
            <div className="rounded-t-[18px] border-b-[5px] border-[#3d675b] px-5 py-2">
              <h1 className="text-[18px] font-bold tracking-[0.35em] text-[#3d675b]">
                CONTENTS
              </h1>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {projects.map((project) => (
                  <button
                    key={project.label}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex h-[180px] flex-col overflow-hidden rounded-[18px] border-[2px] border-[#223f50] bg-white text-center transition hover:scale-[1.02] hover:bg-[#eefaf8]"
                  >
                    <div className="relative h-[110px] w-full bg-[#f4f4f4]">
                      <Image
                        src={project.imageSrc}
                        alt={project.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-center px-3 py-2">
                      <span className="text-[14px] font-bold tracking-[0.2em] text-[#3d675b]">
                        {project.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[18px] border-[3px] border-[#3d675b] bg-white p-5 text-[#3d675b]">
                {selectedProject ? (
                  <div className="space-y-5">
                    <h2 className="text-[18px] font-bold tracking-[0.2em]">
                      {selectedProject.label}
                    </h2>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.32em]">
                        アプリ説明
                      </p>
                      <p className="mt-3 text-[14px] leading-7">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.32em]">
                        学習内容
                      </p>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] leading-7">
                        {selectedProject.learnings.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-[0.32em]">
                        工夫したこと
                      </p>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] leading-7">
                        {selectedProject.improvements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      {selectedProject.external ? (
                        <a
                          href={selectedProject.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                        >
                          このコンテンツを見る
                        </a>
                      ) : (
                        <Link
                          href={selectedProject.href}
                          className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                        >
                          このコンテンツを見る
                        </Link>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(null)}
                        className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-[14px] leading-7">
                    上のコンテンツをクリックすると、詳細が表示されます。
                  </p>
                )}
              </div>
            </div>
          </section>

          <aside className="flex flex-col gap-4 pt-2">
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
              onClick={scrollToLike}
              className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
            >
              LIKE
            </button>
            <button
              type="button"
              onClick={scrollToMessage}
              className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
            >
              MESSAGE
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
