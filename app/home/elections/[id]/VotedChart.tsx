"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { use, useEffect, useState } from "react";
const chartData = [];

const chartConfig = {
  desktop: {
    label: "Phiếu bầu",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function VotedChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev];

        newData.push({
          time: new Date().toLocaleTimeString(),
          desktop: Math.floor(Math.random() * 10),
        });
        return newData;
      });
    }, 1350);
    return () => clearInterval(interval);
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Số lượng phiếu bầu (theo giờ)</CardTitle>
        <CardDescription>Tháng 12 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="step"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              animationDuration={300}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Thời gian có phiếu bầu cao nhất vào 3h 12-12-2024{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
