"use client";

import { useState } from "react";

export default function MessageSection() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const maxLength = 1000;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ok = window.confirm("この内容で送信しますか？");
    if (!ok) return;

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/mgawepqq", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (res.ok) {
      alert("送信しました。");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("送信に失敗しました。");
    }
  };

  return (
    <main
      id="message"
      className="bg-gradient-to-b from-[#cde5fe] to-[#99c6f5] p-2 sm:p-4"
    >
      <div className="mx-auto flex min-h-[calc(100vh-16px)] max-w-[1200px] items-center justify-center">
        <section className="w-full overflow-hidden rounded-[24px] border-[5px] border-[#3d675b] bg-[#f7f9f7] shadow-[5px_5px_0px_#3d675b]">
          <div className="rounded-t-[18px] border-b-[5px] border-[#3d675b] px-5 py-2">
            <h1 className="text-[18px] font-bold tracking-[0.35em] text-[#3d675b]">
              MESSAGE
            </h1>
          </div>

          <div className="p-6 sm:p-10">
            <div className="rounded-[18px] border-[3px] border-[#3d675b] bg-white p-6 text-[#3d675b]">
              <p className="text-[16px] leading-8">
                自己紹介ポートフォリオをご覧いただきありがとうございました。

              </p>
            </div>

            <div className="mt-8 rounded-[18px] border-[3px] border-[#3d675b] bg-white p-4 text-[#3d675b]">
              <p className="mb-3 text-sm text-[#3d675b]/80">
                使用した画像のダウンロード元サイトはこちらです。
              </p>
              <a
                href="https://dot-illust.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#3d675b] underline underline-offset-4 hover:opacity-80"
              >
                DOT ILLUST(ドットイラスト)サイト
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 rounded-[18px] border-[3px] border-[#3d675b] bg-white p-6 text-[#3d675b]"
            >
              <h2 className="mb-4 text-[16px] font-bold tracking-[0.2em]">
                お問い合わせ
              </h2>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#3d675b]">
                    お名前
                    <span className="ml-2 inline-block rounded-full border border-[#3d675b] bg-[#3d675b]/10 px-3 py-[4px] text-[13px] font-semibold text-[#3d675b]">
                      必須
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    placeholder="お名前を入力してください"
                    className="w-full rounded-[12px] border-[2px] border-[#3d675b] px-4 py-3 outline-none placeholder:text-[#3d675b]/30 focus:bg-[#f3faf8]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#3d675b]">
                    メールアドレス
                    <span className="ml-2 inline-block rounded-full border border-[#3d675b] bg-[#3d675b]/10 px-3 py-[4px] text-[13px] font-semibold text-[#3d675b]">
                      必須
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={100}
                    placeholder="メールアドレスを入力してください"
                    className="w-full rounded-[12px] border-[2px] border-[#3d675b] px-4 py-3 outline-none placeholder:text-[#3d675b]/30 focus:bg-[#f3faf8]"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#3d675b]">
                    お問い合わせ内容
                    <span className="ml-2 inline-block rounded-full border border-[#3d675b] bg-[#3d675b]/10 px-3 py-[4px] text-[13px] font-semibold text-[#3d675b]">
                      必須
                    </span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={maxLength}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="お問い合わせ内容を入力してください"
                    className="w-full rounded-[12px] border-[2px] border-[#3d675b] px-4 py-3 outline-none placeholder:text-[#3d675b]/30 focus:bg-[#f3faf8]"
                    required
                  />
                  <p className="mt-2 text-right text-base text-[#3d675b]/60">
                    {message.length} / {maxLength}
                  </p>
                </div>

                <button
                  type="submit"
                  className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
                >
                  送信
                </button>
              </div>
            </form>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                className="rounded-[18px] border-[5px] border-[#3d675b] bg-[#f7f9f7] px-6 py-3 text-[14px] font-bold tracking-[0.25em] text-[#3d675b] shadow-[4px_4px_0px_#3d675b] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#3d675b]"
              >
                HOME
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
