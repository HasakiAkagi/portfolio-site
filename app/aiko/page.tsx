"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

type AikoSong = {
  title: string;
  lyricLabel: string;
  lyric: string;
  url: string;
};

export default function AikoPage() {
  const songs: AikoSong[] = [
    {
      title: "カブトムシ",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "鼻先をくすぐる春　リンと立つのは空の青い夏　袖を風が過ぎるは秋中　そう 気が付けば真横を通る冬",
      url: "https://open.spotify.com/",
    },
    {
      title: "花火",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "夏の星座にぶらさがって上から花火を見下ろして",
      url: "https://open.spotify.com/",
    },
    {
      title: "ボーイフレンド",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "哀れな昨日おだやかな今地球儀は今日も回るけれど",
      url: "https://open.spotify.com/",
    },
    {
      title: "桜の時",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "春が来るとこの川辺は桜がめいっぱい咲き乱れるんだ",
      url: "https://open.spotify.com/",
    },
    {
      title: "KissHug",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "夏髪が頬を切る また年を重ねてきっと思い出す",
      url: "https://open.spotify.com/",
    },
    {
      title: "シアワセ",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "二人周り流れるストーリー　生きていく為に泣くこともある",
      url: "https://open.spotify.com/",
    },
    {
      title: "キラキラ",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "明日は来るのかな?　きっとちゃんとやって来るよ",
      url: "https://open.spotify.com/",
    },
    {
      title: "ストロー",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "君にいいことがあるように　今日は赤いストローさしてあげる",
      url: "https://open.spotify.com/",
    },
    {
      title: "えりあし",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "季節に逆らい想い続けて　今もあなたを好きなままよ",
      url: "https://open.spotify.com/",
    },
    {
      title: "恋のスーパーボール",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "日焼け止めを綺麗に洗いきれずに　夜中に腕が　夏の匂い",
      url: "https://open.spotify.com/",
    },
    {
      title: "青空",
      lyricLabel: "＜おすすめの歌詞＞",
      lyric: "ボーッとした目の先に歪んだ青い空",
      url: "https://open.spotify.com/",
    },
  ];

  const [song, setSong] = useState<AikoSong>(songs[0]);
  const [started, setStarted] = useState(false);
  const [showSong, setShowSong] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const today = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const handleStart = () => {
    let index = Math.floor(Math.random() * songs.length);

    // 前回と同じ曲なら別の曲を選び直す
    while (songs.length > 1 && songs[index].title === song.title) {
      index = Math.floor(Math.random() * songs.length);
    }

    setSong(songs[index]);
    setStarted(true);
    setShowSong(false);
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      setShowSong(true);
    }, 3000);
  };

  const resetToStart = () => {
    setStarted(false);
    setShowSong(false);
    setIsSpinning(false);
  };

  return (
    <main className="bg-gradient-to-b from-[#d9f2ed] to-[#f0cdeb] p-2 sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-16px)] max-w-[900px] flex-col items-center pt-4">
        {/* title */}
        <div className="w-full rounded-[16px] border-[3px] border-[#16384a] bg-[#f0cdeb] py-4 text-center shadow-[0_3px_0px_#16384a]">
          <h1 className="text-3xl font-bold text-white">今日のaiko</h1>
          <p className="mt-2 text-sm font-bold text-[#16384a]">{today}</p>
        </div>

        <div className="mt-4 w-full rounded-[2px] border-[3px] border-[#16384a] bg-[#f6dff0] py-1 text-center text-[14px] text-[#16384a]">
          あなたに今日のaikoをお届けします
        </div>

        <section className="mt-4 flex min-h-[420px] w-full items-center justify-center rounded-[48px] border-[6px] border-[#f0cdeb] bg-white">
          {!started ? (
            <div className="flex flex-col items-center px-4 text-center">
              <button
                type="button"
                onClick={handleStart}
                className="rounded-[16px] border-[3px] border-[#16384a] bg-[#f0cdeb] px-16 py-8 text-3xl font-bold text-white shadow-[0_3px_0px_#16384a] transition hover:opacity-90"
              >
                スタート
              </button>

              <p className="mt-4 text-sm leading-6 text-[#16384a]">
                ボタンを押すと、今日のaikoをランダムにお届けします。
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* イチゴは曲が出る前だけ表示 */}
              {!showSong && (
                <div
                  className={`transition-transform duration-3000 ${isSpinning ? "animate-spin" : ""
                    }`}
                >
                  <Image
                    src="/ichigo_red.png"
                    alt="イチゴ"
                    width={180}
                    height={180}
                    className="h-auto w-[180px] sm:w-[220px]"
                  />
                </div>
              )}

              {/* 選曲中 */}
              {!showSong && isSpinning && (
                <p className="mt-4 text-sm font-bold text-[#16384a]">
                  選曲中...
                </p>
              )}

              {/* 曲表示後 */}
              {showSong && (
                <div className="relative mt-8 w-full max-w-[500px] rounded-[20px] border-[3px] border-[#16384a] bg-[#fff7fb] p-6 text-center text-[#16384a] shadow-[0_3px_0px_#16384a]">
                  {/* キラキラ */}
                  <div className="pointer-events-none absolute -top-3 left-4 text-2xl text-[#ff7ac8]">
                    ✦
                  </div>
                  <div className="pointer-events-none absolute -top-4 right-6 text-3xl text-[#ff9adf]">
                    ✧
                  </div>
                  <div className="pointer-events-none absolute bottom-4 left-6 text-2xl text-[#ff7ac8]">
                    ✦
                  </div>
                  <div className="pointer-events-none absolute bottom-3 right-5 text-2xl text-[#ff9adf]">
                    ✧
                  </div>

                  <p className="text-sm font-bold tracking-[0.3em]">
                    TODAY’S SONG
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">{song.title}</h2>

                  <div className="mt-5 rounded-[16px] border-2 border-[#16384a] bg-[#fff] p-4 text-left">
                    <p className="text-[12px] font-bold tracking-[0.3em] text-[#d86a92]">
                      {song.lyricLabel}
                    </p>
                    <p className="mt-2 text-[16px] leading-7">{song.lyric}</p>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={song.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                    >
                      音楽アプリで聴く
                    </a>
                    <button
                      type="button"
                      onClick={handleStart}
                      className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                    >
                      もう一度選ぶ
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/#contents";
                      }}
                      className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                    >
                      PORTFOLIOに戻る
                    </button>
                    <button
                      type="button"
                      onClick={resetToStart}
                      className="rounded-xl border-2 border-[#16384a] bg-white px-5 py-3 text-sm font-bold text-[#16384a] transition hover:bg-[#fbe8f3]"
                    >
                      はじめに戻る
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
