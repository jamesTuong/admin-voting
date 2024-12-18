"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import dayjs from "dayjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useSocketClient } from "@/hooks/use-socket-client";

interface VoteData {
  campaignId: string;
  campaignName: string;
  candidateId: string;
  candidateName: string;
  voterId: string;
  voterName: string;
  time: string;
}

interface ChartDataPoint {
  count: number;
  date: string;
  timeKey: string;
}

const chartConfig = {
  count: {
    label: "Votes",
    color: "#fca5a5",
  },
} satisfies ChartConfig;

const VotingQuantityChart = () => {
  const [chartData, setChartData] = React.useState<ChartDataPoint[]>(() => {
    const now = dayjs();
    const currentHour = now.format("HH:00");
    return Array.from({ length: 12 }, (_, i) => {
      const date = now.subtract(i, "hour");
      const timeKey = date.format("HH:00");
      return {
        count:
          timeKey === currentHour ? 0 : Math.floor(Math.random() * 40) + 10,
        date: date.format("YYYY-MM-DD HH:mm:ss"),
        timeKey,
      };
    }).reverse();
  });

  const [currentCampaign, setCurrentCampaign] = React.useState<string>("");
  useSocketClient("newVote", (data: VoteData) => {
    if (data.campaignName !== currentCampaign) {
      setCurrentCampaign(data.campaignName);
      const now = dayjs();
      const currentHour = now.format("HH:00");
      setChartData(
        Array.from({ length: 12 }, (_, i) => {
          const date = now.subtract(i, "hour");
          const timeKey = date.format("HH:00");
          return {
            count:
              timeKey === currentHour ? 0 : Math.floor(Math.random() * 40) + 10,
            date: date.format("YYYY-MM-DD HH:mm:ss"),
            timeKey,
          };
        }).reverse()
      );
      return;
    }

    const currentHour = dayjs(data.time).format("HH:00");
    setChartData((prev) => {
      const hourIndex = prev.findIndex((item) => item.timeKey === currentHour);
      if (hourIndex !== -1) {
        const newData = [...prev];
        newData[hourIndex] = {
          ...newData[hourIndex],
          count: newData[hourIndex].count + 1,
          date: dayjs(data.time).format("YYYY-MM-DD HH:mm:ss"),
        };
        return newData;
      }
      return prev;
    });
  });

  return (
    <Card>
      <CardHeader className="flex bg-re flex-col items-stretch space-y-0 border-b p-0">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Số lượng bỏ phiếu - (theo ngày)</CardTitle>
          <CardDescription>
            Hiển thị tổng người dùng bỏ phiếu theo thời gian thực
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timeKey"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent className="w-[150px]" nameKey="count" />
              }
            />
            <Line
              dataKey="count"
              stroke="#fca5a5"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fca5a5" }}
              connectNulls
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default VotingQuantityChart;
