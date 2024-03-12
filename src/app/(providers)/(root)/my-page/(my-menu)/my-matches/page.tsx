import Page from "@/components/Page";
import MyCalendar from "../_components/MyCalendar";
import MyMatchLists from "../_components/MyMatchLists";

function MyMatchesPage() {
  return (
    <Page>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 grow max-w-1/2 w-full">
          <MyCalendar />
        </div>
        <div className="border-b-4 border-primary-20 w-full md:hidden" />
        <div className="hidden md:block md:w-0 md:flex-1 md:border-r-4 border-primary-20" />

        <div className="flex-1 grow max-w-1/2 w-full">
          <MyMatchLists />
        </div>
      </div>
    </Page>
  );
}

export default MyMatchesPage;
