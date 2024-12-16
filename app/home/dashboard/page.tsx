import { ActiveUserChart } from "@/app/components/Charts/ActiveUserChart";
import VotingQuantityChart from "@/app/components/Charts/VotingQuantityChart";

const Page = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center w-full">Dashboard</h1>
      <div className="flex flex-col gap-4 divide-gray-300 mt-4">
        <ActiveUserChart />
        <VotingQuantityChart />
      </div>
    </div>
  );
};

export default Page;
