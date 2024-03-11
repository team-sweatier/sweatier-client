"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useModalStore } from "@/store";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpened, modalElement } = useModalStore();

  return (
    <>
      <Header />
      {children}
      {modalElement}
      <Footer />
    </>
  );
}

export default RootLayout;
