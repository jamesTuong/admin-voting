"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import dayjs from "dayjs";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  bar: {
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

interface VisitCount {
  count: number;
  date: string;
  timeKey: string;
}

export function ActiveUserChart() {
  const [chartData, setChartData] = React.useState<VisitCount[]>(() => {
    const now = dayjs();
    return Array.from({ length: 12 }, (_, i) => {
      const date = now.subtract(11 - i, "hour");
      return {
        count: Math.floor(Math.random() * 100) + 20,
        date: date.format("YYYY-MM-DD HH:mm:ss"),
        timeKey: date.format("HH:00"),
      };
    });
  });

  useSocketClient("visitUpdate", (data) => {
    console.log("data", data);
    const currentHour = dayjs().format("HH:00");

    setChartData((prev) => {
      if (prev[prev.length - 1].timeKey === currentHour) {
        const newData = [...prev];
        newData[newData.length - 1] = {
          count: data.count,
          date: dayjs(data.date).format("YYYY-MM-DD HH:mm:ss"),
          timeKey: currentHour,
        };
        return newData;
      }

      return [
        ...prev.slice(1),
        {
          count: data.count,
          date: dayjs(data.date).format("YYYY-MM-DD HH:mm:ss"),
          timeKey: currentHour,
        },
      ];
    });
  });

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <div className="flex items-center justify-between">
            <CardTitle>Số lượng truy cập ứng dụng</CardTitle>
          </div>
          <CardDescription>
            Hiển thị tổng người dùng truy cập theo giờ trong 12 giờ qua
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={{
            views: {
              label: "Page Views",
            },
            timeKey: {
              label: "Time",
            },
          }}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            // accessibilityLayer
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
                <ChartTooltipContent
                  className="w-[150px] bg-bl"
                  nameKey="views"
                />
              }
            />
            <Bar dataKey="count" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
