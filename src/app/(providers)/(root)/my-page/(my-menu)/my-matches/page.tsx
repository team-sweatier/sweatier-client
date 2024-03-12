import MyCalendar from "../_components/MyCalendar";
import MyMatchLists from "../_components/MyMatchLists";

function MyMatchesPage() {
  return (
    <main className="px-5 sm:px-0 pt-[30px] pb-[50px] mx-auto max-w-screen-md flex flex-col w-full justify-between">
      <div className="flex flex-col sm:grid grid-cols-2">
        <div className="w-full grow">
          <MyCalendar />
        </div>
        <div className="w-full grow">
          <MyMatchLists />
        </div>
      </div>
    </main>
  );
}

export default MyMatchesPage;
