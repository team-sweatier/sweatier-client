function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 pt-[30px] pb-[50px] sm:pt-[50px] sm:pb-[100px] mx-auto max-w-screen-md flex flex-col w-full items-center justify-start h-screen grow">
      {children}
    </main>
  );
}
export default Page;
