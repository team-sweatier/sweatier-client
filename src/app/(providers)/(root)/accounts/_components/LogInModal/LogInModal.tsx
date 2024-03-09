"use client";

import Modal from "@/components/Modal";
import { useState } from "react";

function LogInModal() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleClickLogIn = () => {};

  return (
    <Modal>
      <h2>로그인</h2>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-y-4"
      >
        <ul className="flex flex-col gap-y-4">
          <li className="flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button
          onClick={handleClickLogIn}
          className="bg-purple-700 text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
        >
          로그인하기
        </button>
      </form>
    </Modal>
  );
}

export default LogInModal;
