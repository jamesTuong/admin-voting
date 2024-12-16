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
    // image:bachkhoa,
    status: 1,
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

const ElectionTable = () => {
  const router = useRouter();
  return (
    <Table>
      <TableCaption>A list of elections.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Id</TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="">Address</TableHead>
          <TableHead className="">Start time</TableHead>
          <TableHead className="">End time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell className="max-w-[700px]">{row.description}</TableCell>
            <TableCell className="font-medium">{row.address}</TableCell>
            <TableCell className="font-medium">{row.startTime}</TableCell>
            <TableCell className="font-medium">{row.endTime}</TableCell>
            <TableCell className="font-medium">
              {row.status === 1 ? (
                <Tag color="#108ee9"> Đang diễn ra</Tag>
              ) : row.status === 0 ? (
                <Tag> Chưa diễn ra</Tag>
              ) : (
                <Tag color="success"> Hoàn thành</Tag>
              )}
            </TableCell>
            <TableCell className="">
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    router.push(`/home/elections/${row.id}`);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
                <button
                  disabled={!!row.status}
                  style={{
                    opacity: row.status ? 0.3 : 1,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ElectionTable;
