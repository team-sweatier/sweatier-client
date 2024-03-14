"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useModalStore } from "@/store";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpened, modalElement } = useModalStore();

  return (
    <Suspense>
      <Header />
      <ToastContainer
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={false}
        limit={1}
      />
      {children}
      {modalElement}
      <Footer />
    </Suspense>
  );
}

export default RootLayout;
