function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 w-full h-full pt-[10px] pb-[15px]">{children}</main>
  );
}

export default Page;
