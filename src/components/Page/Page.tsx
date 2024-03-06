function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 py-4 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col w-full items-center justify-start">
      {children}
    </main>
  );
}
export default Page;
