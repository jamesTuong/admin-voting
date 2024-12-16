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
import { useState } from "react";

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

const data = [
  {
    id: 0,
    name: "Bầu cử Quốc hội: Đại diện trí tuệ và ý chí nhân dân",
    description:
      "Lựa chọn các thành viên đại diện cho tiếng nói và lợi ích của nhân dân ở cấp trung ương.phản ánh ý kiến, nguyện vọng của người dân tại cơ quan quyền lực cao nhất, là cơ hội để mọi tầng lớp nhân dân cùng tham gia, gắn kết và thể hiện ý chí chung.",
    address: "Toàn quốc (Viêt Nam)",
    endTime: " 17:00, ngày 15/12/2024",
    purpose: "Đại biểu Quốc hội, Uỷ ban Quốc hội",
    startTime: " 08:00, ngày 15/12/2024",
    status: 1,
    totalVoted: 73,
  },
  {
    id: 1,
    name: "Bầu cử Thị trưởng Thành phố Hà Nội",
    description:
      "Chọn Thị trưởng mới với cam kết cải thiện giao thông, hạ tầng và môi trường sống tại Hà Nội.",
    address: "Thành phố Hà Nội",
    startTime: "07:00, ngày 20/01/2025",
    endTime: "19:00, ngày 20/01/2025",
    status: 0,
    // image: hanoi,
  },
  {
    id: 2,
    name: "Ban Quản lý Khu phố Thăng Long",
    description:
      "Lựa chọn các thành viên quản lý để điều hành hoạt động cộng đồng, cải thiện cơ sở hạ tầng và giải quyết các vấn đề địa phương.",
    address: "Quận Ba Đình, Hà Nội",
    startTime: "09:00, ngày 05/01/2024",
    endTime: "15:00, ngày 05/01/2024",
    // image: thanglong,
    status: 2,
  },
  {
    id: 3,
    name: "Bầu cử Hội đồng Khoa học và Công nghệ Quốc gia",
    description:
      "Lựa chọn các thành viên uy tín để đưa ra các chính sách và định hướng phát triển khoa học và công nghệ trong giai đoạn tới.",
    address: "Thành phố Đà Nẵng",
    startTime: "09:00, ngày 25/03/2024",
    endTime: "17:00, ngày 25/03/2024",
    // image:hoidong,
    status: 0,
    totalVoted: 12,
  },
  {
    id: 4,
    name: "Bầu cử Hội đồng Nhân dân Thành phố Hồ Chí Minh",
    description:
      "Tuyển chọn các đại diện có năng lực để giải quyết các vấn đề về giao thông, giáo dục, và kinh tế tại Thành phố Hồ Chí Minh.",
    address: "Thành phố Hồ Chí Minh",
    startTime: "07:00, ngày 10/04/2024",
    endTime: "19:00, ngày 10/04/2024",
    // image: hcmcCouncil,
    status: 0,
  },
  {
    id: 5,
    name: "Bầu cử Hiệu trưởng Trường Đại học Quốc gia Hà Nội",
    description:
      "Bầu chọn người lãnh đạo có tầm nhìn để phát triển chất lượng giáo dục và nghiên cứu tại trường.",
    address: "Trường Đại học Quốc gia Hà Nội",
    startTime: "09:00, ngày 18/02/2024",
    endTime: "15:00, ngày 18/02/2024",
    // image: vnuHanoi,
    status: 0,
  },
  {
    id: 6,
    name: "Bầu cử Ban Đại diện Kinh tế Miền Trung",
    description:
      "Chọn những người đại diện nhằm thúc đẩy kinh tế và kết nối khu vực Miền Trung với cả nước.",
    address: "Miền Trung, Việt Nam",
    startTime: "08:00, ngày 01/05/2024",
    endTime: "18:00, ngày 01/05/2024",
    // image: centralEconomy,
    status: 0,
  },
  {
    id: 7,
    name: "Bầu cử Trưởng thôn Làng Sen",
    description:
      "Tìm kiếm người lãnh đạo có trách nhiệm để cải thiện đời sống và văn hóa tại địa phương.",
    address: "Làng Sen, Nghệ An",
    startTime: "08:00, ngày 15/03/2024",
    endTime: "16:00, ngày 15/03/2024",
    // image: langSen,
    status: 0,
  },
  {
    id: 8,
    name: "Bầu cử Trưởng Ban Quản lý Hồ Hoàn Kiếm",
    description:
      "Chọn lựa người chịu trách nhiệm quản lý, bảo tồn và phát triển Hồ Hoàn Kiếm.",
    address: "Quận Hoàn Kiếm, Hà Nội",
    startTime: "09:00, ngày 25/04/2024",
    endTime: "17:00, ngày 25/04/2024",
    // image: hoanKiem,
    status: 0,
  },
  {
    id: 9,
    name: "Bầu cử Hội đồng Y tế Quốc gia",
    description:
      "Lựa chọn các chuyên gia y tế hàng đầu để định hướng chính sách và cải thiện hệ thống chăm sóc sức khỏe.",
    address: "Thành phố Hồ Chí Minh",
    startTime: "09:00, ngày 20/06/2024",
    endTime: "17:00, ngày 20/06/2024",
    // image: healthCouncil,
    status: 0,
  },
  {
    id: 10,
    name: "Bầu cử Ủy ban Môi trường và Phát triển Bền vững",
    description:
      "Tìm kiếm những nhà lãnh đạo bảo vệ môi trường và thúc đẩy phát triển bền vững tại Việt Nam.",
    address: "Toàn quốc (Việt Nam)",
    startTime: "08:00, ngày 10/07/2024",
    endTime: "18:00, ngày 10/07/2024",
    // image: environmentCommittee,
    status: 0,
  },
  {
    id: 11,
    name: "Bầu cử Hội đồng Văn hóa và Nghệ thuật Thành phố Huế",
    description:
      "Tuyển chọn những người có khả năng bảo tồn và phát huy di sản văn hóa Huế.",
    address: "Thành phố Huế",
    startTime: "07:00, ngày 12/08/2024",
    endTime: "19:00, ngày 12/08/2024",
    // image: hueCulture,
    status: 0,
  },
  {
    id: 12,
    name: "Bầu cử Ban Quản lý Dự án Cầu Long Biên",
    description:
      "Lựa chọn đội ngũ quản lý để thực hiện các dự án cải tạo và bảo tồn cầu Long Biên.",
    address: "Thành phố Hà Nội",
    startTime: "09:00, ngày 05/09/2024",
    endTime: "17:00, ngày 05/09/2024",
    // image: longBien,
    status: 0,
  },
  {
    id: 13,
    name: "Bầu cử Trưởng Làng Văn hóa Dân tộc Việt Nam",
    description:
      "Chọn người quản lý và phát triển khu làng văn hóa, bảo tồn bản sắc dân tộc.",
    address: "Đồng Mô, Sơn Tây, Hà Nội",
    startTime: "08:00, ngày 10/10/2024",
    endTime: "16:00, ngày 10/10/2024",
    // image: vietnameseCulture,
    status: 0,
  },
  {
    id: 14,
    name: "Bầu cử Ban Lãnh đạo Doanh nghiệp Nhà nước",
    description:
      "Chọn các nhà lãnh đạo có năng lực để quản lý và phát triển doanh nghiệp nhà nước hiệu quả.",
    address: "Toàn quốc (Việt Nam)",
    startTime: "08:00, ngày 20/11/2024",
    endTime: "17:00, ngày 20/11/2024",
    // image: stateEnterprise,
    status: 0,
  },
];

const AreaTable = ({ handleClick, insightData }) => {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>A list of elections.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Area</TableHead>
          <TableHead className="">Voted</TableHead>
          <TableHead className="">Percent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(insightData).map((key, index) => {
          const voted = insightData[key].users.filter(
            (user) => user.status === 1
          ).length;
          const totalVoted = insightData[key].users.length;

          return (
            <TableRow key={index}>
              <TableCell>
                <button
                  onClick={() => {
                    handleClick(insightData[key]);
                  }}
                >
                  <div>{insightData[key].title}</div>
                </button>
              </TableCell>
              <TableCell>{voted}</TableCell>
              <TableCell>
                <TextLevel percent={Math.round((voted * 100) / totalVoted)} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AreaTable;
