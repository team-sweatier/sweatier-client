function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 pt-4 pb-[30px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start">
      {children}
    </main>
  );
}
export default Page;
