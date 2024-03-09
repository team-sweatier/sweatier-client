"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useModalStore } from "@/store";
import LogInModal from "./accounts/_components/LogInModal";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpened } = useModalStore();

  return (
    <>
      <Header />
      {children}
      {isOpened ? <LogInModal /> : null}
      <Footer />
    </>
  );
}

export default RootLayout;
