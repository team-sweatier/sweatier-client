"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useModalStore } from "@/store";
import { ToastContainer } from "react-toastify";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpened, modalElement } = useModalStore();

  return (
    <>
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
    </>
  );
}

export default RootLayout;
