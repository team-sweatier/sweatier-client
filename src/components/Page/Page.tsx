function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 pt-[30px] pb-[50px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start min-h-screen">
      {children}
    </main>
  );
}
export default Page;
