"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TextLevel = ({ percent }: { percent: number }) => {
  let color = "#000000";
  if (percent === 100) {
    color = "#58b4ac";
  } else if (percent > 80) {
    color = "#81c784";
  } else if (percent > 50) {
    color = "#f57c00";
  } else if (percent > 20) {
    color = "#e57373";
  } else {
    color = "#f44336";
  }

  return <div style={{ color, fontWeight: "bold" }}>{percent}%</div>;
};
function generateRandomCCCD() {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join(
    ""
  );
}

const messageError = [
  "Phiếu bầu không hợp lệ",
  "Lỗi hệ thống",
  "Lỗi kết nối mạng",
  "Lỗi máy chủ",
];

const VotedLogTable = () => {
  interface LogEntry {
    cccd: string;
    time: string;
    status: number;
    message: string;
  }

  const [data, setData] = useState<LogEntry[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 10);
      setData((prev) => [
        {
          cccd: generateRandomCCCD(),
          time: new Date().toLocaleString(),
          status: random === 1 ? 0 : 1,
          message:
            random !== 1
              ? "Thành công"
              : messageError[Math.floor(Math.random() * messageError.length)],
        },
        ...prev,
      ]);
    }, 1350);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[400px] overflow-auto">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="">CCCD</TableHead>
            <TableHead className="">Time</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="max-h-20">
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.cccd}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>
                  <Tag color={item.status === 1 ? "green" : "red"}>
                    {item.status === 1 ? "Success" : "Failed"}
                  </Tag>
                </TableCell>
                <TableCell>{item.message}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default VotedLogTable;
