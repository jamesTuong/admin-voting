"use client";

import { getLogs } from "@/app/api/logs";
import { Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const logs = await getLogs();
      setLogs(logs);
      setIsLoading(false);
    };
    fetchLogs();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      key: "_id",
      render: (_, record: any, index: number) => {
        return <span>{index + 1}</span>;
      },
    },
    // {
    //   title: "Type",
    //   dataIndex: "type",
    //   key: "type",
    // },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Metadata",
      dataIndex: "metadata",
      key: "metadata",
      width: "15%",
      render: (text: any) => {
        return <span>{JSON.stringify(text)}</span>;
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: string) => {
        return <span>{dayjs(text).format("DD/MM/YYYY HH:mm:ss")}</span>;
      },
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (text: string) => {
        return <span>{dayjs(text).format("DD/MM/YYYY HH:mm:ss")}</span>;
      },
    },
  ];

  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center w-full">Logs</h1>
      <Table
        columns={columns}
        dataSource={logs}
        loading={isLoading}
        pagination={{ pageSize: 20 }}
      />
    </div>
  );
};

export default Page;
