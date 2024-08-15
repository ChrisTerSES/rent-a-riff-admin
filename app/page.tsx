import Calender from "./_components/Calender";
import MainSection from "./_components/MainSection";
import Sidebar from "./_components/Sidebar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Sidebar />
        <MainSection />
        <Calender />
      </div>
    </>
  );
}
