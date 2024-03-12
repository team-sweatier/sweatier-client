import Page from "@/components/Page";
import MyCalendar from "../_components/MyCalendar";
import MyMatchLists from "../_components/MyMatchLists";

function MyMatchesPage() {
  return (
    <Page>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative w-screen h-screen">
        <MyCalendar />
        <MyMatchLists />
      </div>
    </Page>
  );
}

export default MyMatchesPage;
