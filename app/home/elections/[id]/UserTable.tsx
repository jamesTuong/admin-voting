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
import { notification } from "antd";
import { Tag } from "antd";
import { BellIcon } from "lucide-react";

const UserTable = ({ users }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (id) => {
    api.open({
      message: `Nhắc nhở bỏ phiếu`,
      description: `Thông báo nhắc nhở đã được gửi đến email của cử tri có CCCD: "${id}" thành công.`,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Cccd</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((key, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{key.cccd}</TableCell>
                <TableCell>
                  {key.status === 1 ? (
                    <Tag color="success">Hoàn thành</Tag>
                  ) : (
                    <Tag>Chưa bỏ phiếu</Tag>
                  )}
                </TableCell>
                <TableCell>
                  <button onClick={() => openNotification(key.cccd)}>
                    <BellIcon />
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;
