"use client";
import AreaTable from "@/app/components/Tables/AreaTable";
import {
  BookIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartLineIcon,
  CpuIcon,
  DownloadIcon,
  HeartIcon,
  MailIcon,
  PhoneIcon,
  TicketIcon,
  UserIcon,
} from "lucide-react";

import { Modal, Tag } from "antd";
import { useEffect, useState } from "react";
import { VotedChart } from "./VotedChart";
import { AgePieChart } from "./AgePieChart";
import { ProvinceBarChart } from "./ProvinceBarChart";
import UserTable from "./UserTable";
import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import girl1 from "../../../assets/girl1.png";
import Image from "next/image";
import InfogramEmbed from "./InfoEmbed";
import VotedLogTable from "./VotedLogTable";
import { cn } from "@/lib/utils";
import { GenderPieChart } from "./GenderPieChart";
import { JobPieChart } from "./JobPieChart";

const Candidates = [
  {
    id: 1,
    name: "Trần Văn Tân",
    position: "Ứng cử viên Đại biểu Quốc hội",
    image: man1,
    dateOfBirth: "12/12/1979",
    gender: "Nam",
    email: "laminh@example.com",
    sdt: "0123456789",
    fb: "https://facebook.com/laminh",
    level: "Thạc sĩ Khoa học Máy tính",
    job: "Giám đốc Công nghệ tại Công ty Thaco",
    major: "Phát triển phần mềm và trí tuệ nhân tạo",
    achievements: [
      "Đại diện Việt Nam tham dự hội nghị Công nghệ Châu Á 2020",
      "Lãnh đạo dự án chuyển đổi số thành công tại tỉnh nhà",
      "Được trao bằng khen vì đóng góp vào việc ứng dụng công nghệ trong quản lý nhà nước",
    ],
  },
  {
    id: 2,
    name: "Nguyễn Gia Bảo",
    position: "Ứng cử viên Đại biểu Quốc hội",
    image: man2,
    dateOfBirth: "01/05/1983",
    gender: "Nam",
    email: "bvan@example.com",
    sdt: "0987654321",
    fb: "https://facebook.com/nguyenbvan",
    level: "Tiến sĩ Kinh tế",
    job: "Chuyên gia kinh tế cấp cao tại Bộ Tài chính",
    major: "Chính sách tài chính và kinh tế quốc gia",
    achievements: [
      'Đồng tác giả cuốn sách "Phát triển kinh tế bền vững trong thời kỳ mới"',
      "Tham gia xây dựng chính sách hỗ trợ doanh nghiệp vừa và nhỏ hậu COVID-19",
      "Đạt danh hiệu “Nhà kinh tế trẻ xuất sắc” năm 2022",
    ],
  },
  {
    id: 3,
    name: "Vũ Thị Hương",
    position: "Ứng cử viên Đại biểu Quốc hội",
    image: girl1,
    dateOfBirth: "20/07/1985",
    gender: "Nữ",
    email: "choa@example.com",
    sdt: "0345678901",
    fb: "https://facebook.com/tranchoa",
    level: "Thạc sĩ Quan hệ Quốc tế",
    job: "Phó Vụ trưởng tại Bộ Ngoại giao",
    major: "Hợp tác kinh tế và chính sách đối ngoại",
    achievements: [
      "Đại diện Việt Nam tại Diễn đàn Kinh tế Toàn cầu năm 2022",
      "Lãnh đạo đàm phán thành công các hiệp định thương mại song phương",
      "Nhận Huy chương Vì sự nghiệp đối ngoại năm 2023",
    ],
  },
];

const areaData = {
  dongnai: {
    title: "Đồng Nai",
    total: 17,
    users: [
      {
        cccd: "933921337020",
        status: 0,
      },
      {
        cccd: "604908415147",
        status: 0,
      },
      {
        cccd: "339409732442",
        status: 0,
      },
      {
        cccd: "789701936777",
        status: 0,
      },
      {
        cccd: "775206237895",
        status: 0,
      },
      {
        cccd: "479258410552",
        status: 0,
      },
      {
        cccd: "954632256263",
        status: 1,
      },
      {
        cccd: "670022476943",
        status: 0,
      },
      {
        cccd: "817432443171",
        status: 0,
      },
      {
        cccd: "108378117255",
        status: 1,
      },
      {
        cccd: "418442253629",
        status: 0,
      },
      {
        cccd: "635202402825",
        status: 0,
      },
      {
        cccd: "618867728518",
        status: 1,
      },
      {
        cccd: "055451265579",
        status: 0,
      },
      {
        cccd: "305584120952",
        status: 1,
      },
      {
        cccd: "592761442270",
        status: 1,
      },
      {
        cccd: "478357098392",
        status: 1,
      },
    ],
  },
  bienhoa: {
    title: "Biên Hòa",
    total: 12,
    users: [
      {
        cccd: "201713499913",
        status: 0,
      },
      {
        cccd: "224300945170",
        status: 0,
      },
      {
        cccd: "291703455391",
        status: 1,
      },
      {
        cccd: "294818048527",
        status: 1,
      },
      {
        cccd: "333740285353",
        status: 0,
      },
      {
        cccd: "417857627529",
        status: 1,
      },
      {
        cccd: "890283326662",
        status: 0,
      },
      {
        cccd: "146778285575",
        status: 0,
      },
      {
        cccd: "764041508020",
        status: 1,
      },
      {
        cccd: "530265889640",
        status: 0,
      },
      {
        cccd: "851083487287",
        status: 0,
      },
      {
        cccd: "300528322671",
        status: 1,
      },
    ],
  },
  hanoi: {
    title: "Hà Nội",
    total: 19,
    users: [
      {
        cccd: "773350988097",
        status: 0,
      },
      {
        cccd: "509049654618",
        status: 1,
      },
      {
        cccd: "712128421031",
        status: 0,
      },
      {
        cccd: "312770032311",
        status: 1,
      },
      {
        cccd: "785375715672",
        status: 0,
      },
      {
        cccd: "611778609375",
        status: 1,
      },
      {
        cccd: "964846790489",
        status: 0,
      },
      {
        cccd: "481564863725",
        status: 0,
      },
      {
        cccd: "610403367816",
        status: 0,
      },
      {
        cccd: "252810708223",
        status: 0,
      },
      {
        cccd: "304854691965",
        status: 0,
      },
      {
        cccd: "116845464954",
        status: 0,
      },
      {
        cccd: "350526258917",
        status: 0,
      },
      {
        cccd: "972625431931",
        status: 0,
      },
      {
        cccd: "124880420931",
        status: 1,
      },
      {
        cccd: "684852351610",
        status: 0,
      },
      {
        cccd: "275611449866",
        status: 0,
      },
      {
        cccd: "416721528307",
        status: 1,
      },
      {
        cccd: "028771526530",
        status: 1,
      },
    ],
  },
  hochiminh: {
    title: "Hồ Chí Minh",
    total: 14,
    users: [
      {
        cccd: "189245383264",
        status: 0,
      },
      {
        cccd: "026664570366",
        status: 0,
      },
      {
        cccd: "985064024280",
        status: 1,
      },
      {
        cccd: "180777439400",
        status: 0,
      },
      {
        cccd: "669182111137",
        status: 0,
      },
      {
        cccd: "599713875711",
        status: 1,
      },
      {
        cccd: "050750087172",
        status: 0,
      },
      {
        cccd: "096937269928",
        status: 1,
      },
      {
        cccd: "565819626779",
        status: 0,
      },
      {
        cccd: "598037439482",
        status: 0,
      },
      {
        cccd: "468455102100",
        status: 0,
      },
      {
        cccd: "636867196900",
        status: 1,
      },
      {
        cccd: "571605691829",
        status: 0,
      },
      {
        cccd: "339749064928",
        status: 0,
      },
    ],
  },
  haiphong: {
    title: "Hải Phòng",
    total: 13,
    users: [
      {
        cccd: "297453659134",
        status: 0,
      },
      {
        cccd: "536674471487",
        status: 1,
      },
      {
        cccd: "624273885065",
        status: 1,
      },
      {
        cccd: "238683973470",
        status: 1,
      },
      {
        cccd: "423386987830",
        status: 0,
      },
      {
        cccd: "845617904813",
        status: 0,
      },
      {
        cccd: "561705881277",
        status: 0,
      },
      {
        cccd: "717244360713",
        status: 1,
      },
      {
        cccd: "175170458904",
        status: 0,
      },
      {
        cccd: "053029662742",
        status: 0,
      },
      {
        cccd: "888388654134",
        status: 1,
      },
      {
        cccd: "593249664653",
        status: 0,
      },
      {
        cccd: "184671531370",
        status: 0,
      },
    ],
  },
  danang: {
    title: "Đà Nẵng",
    total: 11,
    users: [
      {
        cccd: "264174314236",
        status: 1,
      },
      {
        cccd: "504044688314",
        status: 0,
      },
      {
        cccd: "535278551552",
        status: 0,
      },
      {
        cccd: "780869434164",
        status: 0,
      },
      {
        cccd: "489620038677",
        status: 0,
      },
      {
        cccd: "556737615391",
        status: 0,
      },
      {
        cccd: "045679005402",
        status: 0,
      },
      {
        cccd: "608564299184",
        status: 0,
      },
      {
        cccd: "627197536323",
        status: 0,
      },
      {
        cccd: "929149169675",
        status: 1,
      },
      {
        cccd: "780222573992",
        status: 0,
      },
    ],
  },
  hagiang: {
    title: "Hà Giang",
    total: 8,
    users: [
      {
        cccd: "380188642535",
        status: 1,
      },
      {
        cccd: "074733909364",
        status: 0,
      },
      {
        cccd: "034056557399",
        status: 0,
      },
      {
        cccd: "097313846634",
        status: 1,
      },
      {
        cccd: "563536285219",
        status: 1,
      },
      {
        cccd: "673160480199",
        status: 1,
      },
      {
        cccd: "096025679725",
        status: 1,
      },
      {
        cccd: "579981872587",
        status: 1,
      },
    ],
  },
  caobang: {
    title: "Cao Bằng",
    total: 18,
    users: [
      {
        cccd: "732959792984",
        status: 1,
      },
      {
        cccd: "386236002871",
        status: 0,
      },
      {
        cccd: "290661710453",
        status: 0,
      },
      {
        cccd: "365968387396",
        status: 1,
      },
      {
        cccd: "897515825451",
        status: 0,
      },
      {
        cccd: "347374329531",
        status: 1,
      },
      {
        cccd: "520963367239",
        status: 0,
      },
      {
        cccd: "246652386645",
        status: 1,
      },
      {
        cccd: "825556805197",
        status: 1,
      },
      {
        cccd: "554870107685",
        status: 0,
      },
      {
        cccd: "656188307305",
        status: 0,
      },
      {
        cccd: "950311633002",
        status: 1,
      },
      {
        cccd: "373928227728",
        status: 1,
      },
      {
        cccd: "795989544123",
        status: 1,
      },
      {
        cccd: "491306483126",
        status: 1,
      },
      {
        cccd: "467038814738",
        status: 1,
      },
      {
        cccd: "273771059703",
        status: 1,
      },
      {
        cccd: "834940101996",
        status: 0,
      },
    ],
  },
  backan: {
    title: "Bắc Kạn",
    total: 15,
    users: [
      {
        cccd: "529646512806",
        status: 0,
      },
      {
        cccd: "638467097213",
        status: 0,
      },
      {
        cccd: "314839895085",
        status: 1,
      },
      {
        cccd: "188225179443",
        status: 1,
      },
      {
        cccd: "958050767340",
        status: 0,
      },
      {
        cccd: "366935673037",
        status: 0,
      },
      {
        cccd: "065750473246",
        status: 0,
      },
      {
        cccd: "789069948725",
        status: 0,
      },
      {
        cccd: "468961224437",
        status: 0,
      },
      {
        cccd: "272310634492",
        status: 1,
      },
      {
        cccd: "727587211153",
        status: 1,
      },
      {
        cccd: "479449890276",
        status: 1,
      },
      {
        cccd: "403683822966",
        status: 0,
      },
      {
        cccd: "540970962882",
        status: 0,
      },
      {
        cccd: "782790627620",
        status: 0,
      },
    ],
  },
  tuyenquang: {
    title: "Tuyên Quang",
    total: 13,
    users: [
      {
        cccd: "027119649445",
        status: 0,
      },
      {
        cccd: "265189855906",
        status: 1,
      },
      {
        cccd: "453931199466",
        status: 1,
      },
      {
        cccd: "108598885858",
        status: 0,
      },
      {
        cccd: "072541835333",
        status: 1,
      },
      {
        cccd: "936453845086",
        status: 0,
      },
      {
        cccd: "349177936503",
        status: 1,
      },
      {
        cccd: "970026973540",
        status: 0,
      },
      {
        cccd: "764613972309",
        status: 0,
      },
      {
        cccd: "036629698509",
        status: 0,
      },
      {
        cccd: "731896126117",
        status: 1,
      },
      {
        cccd: "407616620986",
        status: 1,
      },
      {
        cccd: "443604649211",
        status: 0,
      },
    ],
  },
  langson: {
    title: "Lạng Sơn",
    total: 7,
    users: [
      {
        cccd: "692781799183",
        status: 0,
      },
      {
        cccd: "101486951591",
        status: 1,
      },
      {
        cccd: "590937722960",
        status: 0,
      },
      {
        cccd: "125248547915",
        status: 0,
      },
      {
        cccd: "837139686705",
        status: 0,
      },
      {
        cccd: "485211827066",
        status: 0,
      },
      {
        cccd: "523074062433",
        status: 1,
      },
    ],
  },
  quangninh: {
    title: "Quảng Ninh",
    total: 10,
    users: [
      {
        cccd: "938743334538",
        status: 0,
      },
      {
        cccd: "214075366354",
        status: 1,
      },
      {
        cccd: "111484845133",
        status: 1,
      },
      {
        cccd: "223920463128",
        status: 1,
      },
      {
        cccd: "250251658089",
        status: 0,
      },
      {
        cccd: "533053081318",
        status: 1,
      },
      {
        cccd: "843575498615",
        status: 1,
      },
      {
        cccd: "055875518951",
        status: 1,
      },
      {
        cccd: "413521353902",
        status: 0,
      },
      {
        cccd: "849714150995",
        status: 0,
      },
    ],
  },
  bacgiang: {
    title: "Bắc Giang",
    total: 9,
    users: [
      {
        cccd: "458820937989",
        status: 1,
      },
      {
        cccd: "255654483543",
        status: 1,
      },
      {
        cccd: "215039111929",
        status: 1,
      },
      {
        cccd: "246813104776",
        status: 1,
      },
      {
        cccd: "856086842030",
        status: 0,
      },
      {
        cccd: "973911401609",
        status: 0,
      },
      {
        cccd: "567183925094",
        status: 1,
      },
      {
        cccd: "486436839627",
        status: 0,
      },
      {
        cccd: "209053518200",
        status: 1,
      },
    ],
  },
  phutho: {
    title: "Phú Thọ",
    total: 8,
    users: [
      {
        cccd: "914275081198",
        status: 0,
      },
      {
        cccd: "623159263413",
        status: 1,
      },
      {
        cccd: "665172214130",
        status: 1,
      },
      {
        cccd: "487405091681",
        status: 1,
      },
      {
        cccd: "343450293320",
        status: 1,
      },
      {
        cccd: "551934854190",
        status: 0,
      },
      {
        cccd: "733764161443",
        status: 1,
      },
      {
        cccd: "164152140728",
        status: 0,
      },
    ],
  },
  yenbai: {
    title: "Yên Bái",
    total: 20,
    users: [
      {
        cccd: "038047702672",
        status: 1,
      },
      {
        cccd: "951823977134",
        status: 0,
      },
      {
        cccd: "193165290489",
        status: 1,
      },
      {
        cccd: "234561728011",
        status: 1,
      },
      {
        cccd: "415815938487",
        status: 0,
      },
      {
        cccd: "600322395095",
        status: 1,
      },
      {
        cccd: "539977195889",
        status: 1,
      },
      {
        cccd: "885949372808",
        status: 1,
      },
      {
        cccd: "473265008663",
        status: 1,
      },
      {
        cccd: "215882023587",
        status: 0,
      },
      {
        cccd: "144837889863",
        status: 0,
      },
      {
        cccd: "700038472974",
        status: 1,
      },
      {
        cccd: "932964490226",
        status: 1,
      },
      {
        cccd: "145009577450",
        status: 0,
      },
      {
        cccd: "049721046739",
        status: 0,
      },
      {
        cccd: "265051759011",
        status: 0,
      },
      {
        cccd: "931727092294",
        status: 0,
      },
      {
        cccd: "465944324948",
        status: 1,
      },
      {
        cccd: "374686024389",
        status: 0,
      },
      {
        cccd: "547741381122",
        status: 0,
      },
    ],
  },
  thainguyen: {
    title: "Thái Nguyên",
    total: 17,
    users: [
      {
        cccd: "357816642031",
        status: 0,
      },
      {
        cccd: "571979491133",
        status: 0,
      },
      {
        cccd: "013828549361",
        status: 0,
      },
      {
        cccd: "473990502710",
        status: 0,
      },
      {
        cccd: "587874269713",
        status: 1,
      },
      {
        cccd: "885233162926",
        status: 1,
      },
      {
        cccd: "109374142884",
        status: 1,
      },
      {
        cccd: "400243275891",
        status: 1,
      },
      {
        cccd: "831729653947",
        status: 1,
      },
      {
        cccd: "482548911324",
        status: 1,
      },
      {
        cccd: "482454979558",
        status: 1,
      },
      {
        cccd: "659621560449",
        status: 0,
      },
      {
        cccd: "659717536051",
        status: 0,
      },
      {
        cccd: "180573919083",
        status: 1,
      },
      {
        cccd: "796790907370",
        status: 1,
      },
      {
        cccd: "910868987618",
        status: 1,
      },
      {
        cccd: "227349739730",
        status: 1,
      },
    ],
  },
  hatinh: {
    title: "Hà Tĩnh",
    total: 6,
    users: [
      {
        cccd: "261645727051",
        status: 1,
      },
      {
        cccd: "514923482650",
        status: 0,
      },
      {
        cccd: "756924660276",
        status: 1,
      },
      {
        cccd: "175634868146",
        status: 1,
      },
      {
        cccd: "355375421151",
        status: 0,
      },
      {
        cccd: "038940206149",
        status: 0,
      },
    ],
  },
  quangtri: {
    title: "Quảng Trị",
    total: 12,
    users: [
      {
        cccd: "105260888776",
        status: 1,
      },
      {
        cccd: "735613622773",
        status: 0,
      },
      {
        cccd: "684774310468",
        status: 0,
      },
      {
        cccd: "455616797534",
        status: 0,
      },
      {
        cccd: "531733900724",
        status: 0,
      },
      {
        cccd: "807687194156",
        status: 1,
      },
      {
        cccd: "314077794775",
        status: 0,
      },
      {
        cccd: "120542250600",
        status: 1,
      },
      {
        cccd: "909808809731",
        status: 0,
      },
      {
        cccd: "746555884439",
        status: 0,
      },
      {
        cccd: "688754155976",
        status: 0,
      },
      {
        cccd: "169408487796",
        status: 0,
      },
    ],
  },
  thuathienhue: {
    title: "Thừa Thiên Huế",
    total: 13,
    users: [
      {
        cccd: "439833073120",
        status: 0,
      },
      {
        cccd: "184862308582",
        status: 0,
      },
      {
        cccd: "591734197165",
        status: 0,
      },
      {
        cccd: "648526398268",
        status: 0,
      },
      {
        cccd: "114719352329",
        status: 1,
      },
      {
        cccd: "150777886766",
        status: 1,
      },
      {
        cccd: "762103937489",
        status: 0,
      },
      {
        cccd: "901436076210",
        status: 1,
      },
      {
        cccd: "081447592166",
        status: 1,
      },
      {
        cccd: "776200036297",
        status: 1,
      },
      {
        cccd: "824570028119",
        status: 0,
      },
      {
        cccd: "986716821401",
        status: 1,
      },
      {
        cccd: "609396846330",
        status: 0,
      },
    ],
  },
  nang: {
    title: "Đà Nẵng",
    total: 15,
    users: [
      {
        cccd: "034186026673",
        status: 1,
      },
      {
        cccd: "610828420508",
        status: 0,
      },
      {
        cccd: "117989967361",
        status: 0,
      },
      {
        cccd: "267246596079",
        status: 0,
      },
      {
        cccd: "390729855396",
        status: 0,
      },
      {
        cccd: "690560355652",
        status: 1,
      },
      {
        cccd: "750162675160",
        status: 0,
      },
      {
        cccd: "839036407505",
        status: 1,
      },
      {
        cccd: "928554888402",
        status: 0,
      },
      {
        cccd: "603683002903",
        status: 1,
      },
      {
        cccd: "934143212178",
        status: 0,
      },
      {
        cccd: "779207283606",
        status: 1,
      },
      {
        cccd: "668326857457",
        status: 1,
      },
      {
        cccd: "647386498877",
        status: 0,
      },
      {
        cccd: "784163382491",
        status: 1,
      },
    ],
  },
  quangnam: {
    title: "Quảng Nam",
    total: 8,
    users: [
      {
        cccd: "722718311210",
        status: 0,
      },
      {
        cccd: "548116808150",
        status: 0,
      },
      {
        cccd: "273408012630",
        status: 1,
      },
      {
        cccd: "138686309143",
        status: 1,
      },
      {
        cccd: "008015509881",
        status: 1,
      },
      {
        cccd: "233530457172",
        status: 0,
      },
      {
        cccd: "328834916695",
        status: 1,
      },
      {
        cccd: "829933394265",
        status: 0,
      },
    ],
  },
  quangngai: {
    title: "Quảng Ngãi",
    total: 11,
    users: [
      {
        cccd: "034051953918",
        status: 1,
      },
      {
        cccd: "537762757783",
        status: 1,
      },
      {
        cccd: "039678383887",
        status: 1,
      },
      {
        cccd: "280880194997",
        status: 1,
      },
      {
        cccd: "166555114704",
        status: 1,
      },
      {
        cccd: "594456779323",
        status: 1,
      },
      {
        cccd: "552520508816",
        status: 1,
      },
      {
        cccd: "272698777051",
        status: 0,
      },
      {
        cccd: "968691934535",
        status: 0,
      },
      {
        cccd: "657333166566",
        status: 1,
      },
      {
        cccd: "079875803754",
        status: 1,
      },
    ],
  },
  binhdinh: {
    title: "Bình Định",
    total: 9,
    users: [
      {
        cccd: "491721651474",
        status: 1,
      },
      {
        cccd: "268795053936",
        status: 1,
      },
      {
        cccd: "812649587724",
        status: 1,
      },
      {
        cccd: "363389351699",
        status: 0,
      },
      {
        cccd: "991075026251",
        status: 1,
      },
      {
        cccd: "759047824389",
        status: 1,
      },
      {
        cccd: "837949552797",
        status: 0,
      },
      {
        cccd: "450775351852",
        status: 0,
      },
      {
        cccd: "750116141975",
        status: 1,
      },
    ],
  },
  phuyen: {
    title: "Phú Yên",
    total: 16,
    users: [
      {
        cccd: "522765614166",
        status: 0,
      },
      {
        cccd: "679466670642",
        status: 1,
      },
      {
        cccd: "473454889739",
        status: 0,
      },
      {
        cccd: "319568788656",
        status: 0,
      },
      {
        cccd: "956490613624",
        status: 1,
      },
      {
        cccd: "807694010261",
        status: 1,
      },
      {
        cccd: "911082252068",
        status: 1,
      },
      {
        cccd: "654252410869",
        status: 1,
      },
      {
        cccd: "404027028269",
        status: 1,
      },
      {
        cccd: "706283800727",
        status: 1,
      },
      {
        cccd: "436146435464",
        status: 1,
      },
      {
        cccd: "460318011422",
        status: 1,
      },
      {
        cccd: "378482049106",
        status: 1,
      },
      {
        cccd: "823558980787",
        status: 1,
      },
      {
        cccd: "329357242758",
        status: 0,
      },
      {
        cccd: "449479887424",
        status: 1,
      },
    ],
  },
  khanhhoa: {
    title: "Khánh Hòa",
    total: 18,
    users: [
      {
        cccd: "665220394946",
        status: 0,
      },
      {
        cccd: "055512952196",
        status: 0,
      },
      {
        cccd: "164452278963",
        status: 0,
      },
      {
        cccd: "075888762292",
        status: 1,
      },
      {
        cccd: "015721271023",
        status: 1,
      },
      {
        cccd: "954479645024",
        status: 1,
      },
      {
        cccd: "253451353149",
        status: 1,
      },
      {
        cccd: "130331630926",
        status: 1,
      },
      {
        cccd: "474767049178",
        status: 0,
      },
      {
        cccd: "961892302327",
        status: 1,
      },
      {
        cccd: "375660857372",
        status: 1,
      },
      {
        cccd: "510826828202",
        status: 0,
      },
      {
        cccd: "910821353933",
        status: 0,
      },
      {
        cccd: "357614538832",
        status: 1,
      },
      {
        cccd: "420748424482",
        status: 1,
      },
      {
        cccd: "584005426563",
        status: 0,
      },
      {
        cccd: "404193984864",
        status: 1,
      },
      {
        cccd: "547926143003",
        status: 1,
      },
    ],
  },
  ninhthuan: {
    title: "Ninh Thuận",
    total: 7,
    users: [
      {
        cccd: "042941635169",
        status: 0,
      },
      {
        cccd: "997581263392",
        status: 0,
      },
      {
        cccd: "969882876589",
        status: 0,
      },
      {
        cccd: "614361524521",
        status: 1,
      },
      {
        cccd: "022145057016",
        status: 1,
      },
      {
        cccd: "833131095610",
        status: 0,
      },
      {
        cccd: "069182133813",
        status: 0,
      },
    ],
  },
  binhthuanc: {
    title: "Bình Thuận",
    total: 12,
    users: [
      {
        cccd: "402086296485",
        status: 0,
      },
      {
        cccd: "362906090565",
        status: 1,
      },
      {
        cccd: "495594481022",
        status: 1,
      },
      {
        cccd: "528065904173",
        status: 0,
      },
      {
        cccd: "098588696485",
        status: 0,
      },
      {
        cccd: "651844209085",
        status: 1,
      },
      {
        cccd: "222898513671",
        status: 1,
      },
      {
        cccd: "905953134151",
        status: 0,
      },
      {
        cccd: "367698947482",
        status: 0,
      },
      {
        cccd: "096870159878",
        status: 1,
      },
      {
        cccd: "316653187211",
        status: 0,
      },
      {
        cccd: "193629567310",
        status: 0,
      },
    ],
  },
  longan: {
    title: "Long An",
    total: 19,
    users: [
      {
        cccd: "442631454174",
        status: 0,
      },
      {
        cccd: "779620787496",
        status: 1,
      },
      {
        cccd: "753935775143",
        status: 1,
      },
      {
        cccd: "952708517079",
        status: 0,
      },
      {
        cccd: "329808124925",
        status: 1,
      },
      {
        cccd: "510584739308",
        status: 1,
      },
      {
        cccd: "292484538115",
        status: 0,
      },
      {
        cccd: "976811487085",
        status: 0,
      },
      {
        cccd: "547462057171",
        status: 1,
      },
      {
        cccd: "525436239819",
        status: 1,
      },
      {
        cccd: "830201523191",
        status: 0,
      },
      {
        cccd: "353580636364",
        status: 0,
      },
      {
        cccd: "910010200414",
        status: 0,
      },
      {
        cccd: "949684543554",
        status: 0,
      },
      {
        cccd: "083433901169",
        status: 1,
      },
      {
        cccd: "666990180960",
        status: 0,
      },
      {
        cccd: "350175285380",
        status: 1,
      },
      {
        cccd: "862491887732",
        status: 0,
      },
      {
        cccd: "384156060144",
        status: 1,
      },
    ],
  },
  bentre: {
    title: "Bến Tre",
    total: 13,
    users: [
      {
        cccd: "646203960639",
        status: 1,
      },
      {
        cccd: "433836834037",
        status: 1,
      },
      {
        cccd: "970527155898",
        status: 0,
      },
      {
        cccd: "539552706460",
        status: 0,
      },
      {
        cccd: "794651725560",
        status: 0,
      },
      {
        cccd: "764498041593",
        status: 0,
      },
      {
        cccd: "480112346640",
        status: 0,
      },
      {
        cccd: "735303023818",
        status: 0,
      },
      {
        cccd: "209009532126",
        status: 0,
      },
      {
        cccd: "347823069953",
        status: 1,
      },
      {
        cccd: "182958225510",
        status: 1,
      },
      {
        cccd: "111064719012",
        status: 1,
      },
      {
        cccd: "471742102176",
        status: 1,
      },
    ],
  },
  tiengiang: {
    title: "Tiền Giang",
    total: 18,
    users: [
      {
        cccd: "018251688878",
        status: 0,
      },
      {
        cccd: "835043540047",
        status: 0,
      },
      {
        cccd: "190655668735",
        status: 0,
      },
      {
        cccd: "940453155100",
        status: 0,
      },
      {
        cccd: "158257593603",
        status: 1,
      },
      {
        cccd: "301286585294",
        status: 1,
      },
      {
        cccd: "207220073714",
        status: 1,
      },
      {
        cccd: "066823762518",
        status: 1,
      },
      {
        cccd: "829146850318",
        status: 0,
      },
      {
        cccd: "257624124938",
        status: 0,
      },
      {
        cccd: "843772407518",
        status: 0,
      },
      {
        cccd: "674751411076",
        status: 0,
      },
      {
        cccd: "806469752413",
        status: 1,
      },
      {
        cccd: "826969545764",
        status: 1,
      },
      {
        cccd: "463951323731",
        status: 0,
      },
      {
        cccd: "560198121865",
        status: 1,
      },
      {
        cccd: "044773860564",
        status: 0,
      },
      {
        cccd: "998812235372",
        status: 0,
      },
    ],
  },
  vinhlong: {
    title: "Vĩnh Long",
    total: 17,
    users: [
      {
        cccd: "621535884122",
        status: 0,
      },
      {
        cccd: "209621266490",
        status: 1,
      },
      {
        cccd: "787509868613",
        status: 1,
      },
      {
        cccd: "129004851440",
        status: 0,
      },
      {
        cccd: "142762904438",
        status: 0,
      },
      {
        cccd: "487037778416",
        status: 0,
      },
      {
        cccd: "122247383791",
        status: 0,
      },
      {
        cccd: "729340035474",
        status: 1,
      },
      {
        cccd: "353041186233",
        status: 0,
      },
      {
        cccd: "562656862572",
        status: 1,
      },
      {
        cccd: "457439294959",
        status: 1,
      },
      {
        cccd: "612615372539",
        status: 0,
      },
      {
        cccd: "101730600472",
        status: 0,
      },
      {
        cccd: "807159255116",
        status: 1,
      },
      {
        cccd: "086212508393",
        status: 0,
      },
      {
        cccd: "832405401922",
        status: 0,
      },
      {
        cccd: "908816620916",
        status: 1,
      },
    ],
  },
  soctrang: {
    title: "Sóc Trăng",
    total: 16,
    users: [
      {
        cccd: "901321755864",
        status: 1,
      },
      {
        cccd: "325124621932",
        status: 1,
      },
      {
        cccd: "694602436403",
        status: 1,
      },
      {
        cccd: "876356316321",
        status: 0,
      },
      {
        cccd: "220172937120",
        status: 0,
      },
      {
        cccd: "375862468361",
        status: 1,
      },
      {
        cccd: "214430294919",
        status: 1,
      },
      {
        cccd: "968344109384",
        status: 1,
      },
      {
        cccd: "812939866250",
        status: 1,
      },
      {
        cccd: "880192600475",
        status: 0,
      },
      {
        cccd: "943675809095",
        status: 0,
      },
      {
        cccd: "580594273045",
        status: 0,
      },
      {
        cccd: "686749779545",
        status: 1,
      },
      {
        cccd: "817827049184",
        status: 0,
      },
      {
        cccd: "345424023211",
        status: 1,
      },
      {
        cccd: "490556537611",
        status: 0,
      },
    ],
  },
  baclieu: {
    title: "Bạc Liêu",
    total: 9,
    users: [
      {
        cccd: "174521889727",
        status: 1,
      },
      {
        cccd: "872863740615",
        status: 1,
      },
      {
        cccd: "801448323737",
        status: 1,
      },
      {
        cccd: "270644468101",
        status: 1,
      },
      {
        cccd: "479603759809",
        status: 1,
      },
      {
        cccd: "040669968633",
        status: 1,
      },
      {
        cccd: "621992033480",
        status: 0,
      },
      {
        cccd: "642015705264",
        status: 1,
      },
      {
        cccd: "668146641619",
        status: 1,
      },
    ],
  },
  camau: {
    title: "Cà Mau",
    total: 17,
    users: [
      {
        cccd: "911179254159",
        status: 1,
      },
      {
        cccd: "265596177305",
        status: 1,
      },
      {
        cccd: "036871932087",
        status: 0,
      },
      {
        cccd: "623238211587",
        status: 0,
      },
      {
        cccd: "534361115387",
        status: 0,
      },
      {
        cccd: "595941061728",
        status: 0,
      },
      {
        cccd: "469835414359",
        status: 0,
      },
      {
        cccd: "036769121732",
        status: 0,
      },
      {
        cccd: "246990440361",
        status: 1,
      },
      {
        cccd: "516134935716",
        status: 1,
      },
      {
        cccd: "190611364542",
        status: 1,
      },
      {
        cccd: "198249533725",
        status: 1,
      },
      {
        cccd: "405705084396",
        status: 1,
      },
      {
        cccd: "383151804493",
        status: 0,
      },
      {
        cccd: "532399118026",
        status: 1,
      },
      {
        cccd: "001340257467",
        status: 1,
      },
      {
        cccd: "106731796710",
        status: 1,
      },
    ],
  },
  kiengiang: {
    title: "Kiên Giang",
    total: 12,
    users: [
      {
        cccd: "454437879100",
        status: 1,
      },
      {
        cccd: "398684218230",
        status: 0,
      },
      {
        cccd: "221308476549",
        status: 1,
      },
      {
        cccd: "494621428104",
        status: 1,
      },
      {
        cccd: "640723570589",
        status: 1,
      },
      {
        cccd: "668045752486",
        status: 0,
      },
      {
        cccd: "933030067292",
        status: 1,
      },
      {
        cccd: "378734819567",
        status: 1,
      },
      {
        cccd: "907574036133",
        status: 1,
      },
      {
        cccd: "821370176518",
        status: 0,
      },
      {
        cccd: "421007105344",
        status: 0,
      },
      {
        cccd: "762856399236",
        status: 0,
      },
    ],
  },
  angiang: {
    title: "An Giang",
    total: 19,
    users: [
      {
        cccd: "074788323153",
        status: 1,
      },
      {
        cccd: "618273632150",
        status: 0,
      },
      {
        cccd: "303824646499",
        status: 1,
      },
      {
        cccd: "170566109627",
        status: 1,
      },
      {
        cccd: "714996837339",
        status: 1,
      },
      {
        cccd: "124270810611",
        status: 0,
      },
      {
        cccd: "305422604795",
        status: 0,
      },
      {
        cccd: "183505827389",
        status: 1,
      },
      {
        cccd: "957442064636",
        status: 0,
      },
      {
        cccd: "925443132540",
        status: 1,
      },
      {
        cccd: "093999108521",
        status: 1,
      },
      {
        cccd: "533759623782",
        status: 1,
      },
      {
        cccd: "932834314975",
        status: 0,
      },
      {
        cccd: "665314858242",
        status: 1,
      },
      {
        cccd: "862983793021",
        status: 0,
      },
      {
        cccd: "415853893450",
        status: 0,
      },
      {
        cccd: "035981606360",
        status: 1,
      },
      {
        cccd: "647426846029",
        status: 0,
      },
      {
        cccd: "004357524359",
        status: 0,
      },
    ],
  },
  dongthap: {
    title: "Đồng Tháp",
    total: 14,
    users: [
      {
        cccd: "402334672717",
        status: 1,
      },
      {
        cccd: "141105284033",
        status: 1,
      },
      {
        cccd: "418373783042",
        status: 0,
      },
      {
        cccd: "802095311915",
        status: 0,
      },
      {
        cccd: "221150769216",
        status: 0,
      },
      {
        cccd: "791592234088",
        status: 0,
      },
      {
        cccd: "542022689740",
        status: 1,
      },
      {
        cccd: "345907199059",
        status: 1,
      },
      {
        cccd: "917431053885",
        status: 1,
      },
      {
        cccd: "764517615834",
        status: 1,
      },
      {
        cccd: "573924970330",
        status: 1,
      },
      {
        cccd: "204700897775",
        status: 0,
      },
      {
        cccd: "765777318942",
        status: 0,
      },
      {
        cccd: "412651681798",
        status: 1,
      },
    ],
  },
  travinh: {
    title: "Trà Vinh",
    total: 16,
    users: [
      {
        cccd: "717397856656",
        status: 0,
      },
      {
        cccd: "226443715509",
        status: 1,
      },
      {
        cccd: "145151341574",
        status: 0,
      },
      {
        cccd: "936308004603",
        status: 0,
      },
      {
        cccd: "290853646272",
        status: 0,
      },
      {
        cccd: "874966558921",
        status: 1,
      },
      {
        cccd: "847642330740",
        status: 0,
      },
      {
        cccd: "848342897843",
        status: 0,
      },
      {
        cccd: "704776450260",
        status: 0,
      },
      {
        cccd: "842948634596",
        status: 0,
      },
      {
        cccd: "403559611976",
        status: 1,
      },
      {
        cccd: "196918491206",
        status: 1,
      },
      {
        cccd: "792021753055",
        status: 0,
      },
      {
        cccd: "834662037617",
        status: 1,
      },
      {
        cccd: "588001527601",
        status: 0,
      },
      {
        cccd: "889800590042",
        status: 0,
      },
    ],
  },
  haugiang: {
    title: "Hậu Giang",
    total: 10,
    users: [
      {
        cccd: "535022585132",
        status: 0,
      },
      {
        cccd: "924385399742",
        status: 1,
      },
      {
        cccd: "262084172976",
        status: 1,
      },
      {
        cccd: "862485978799",
        status: 0,
      },
      {
        cccd: "198370048459",
        status: 0,
      },
      {
        cccd: "559961967234",
        status: 1,
      },
      {
        cccd: "799481424568",
        status: 1,
      },
      {
        cccd: "582409480286",
        status: 1,
      },
      {
        cccd: "473576479405",
        status: 1,
      },
      {
        cccd: "871744692515",
        status: 1,
      },
    ],
  },
  vinhphuc: {
    title: "Vĩnh Phúc",
    total: 13,
    users: [
      {
        cccd: "510900304477",
        status: 0,
      },
      {
        cccd: "002343394839",
        status: 1,
      },
      {
        cccd: "872253466810",
        status: 1,
      },
      {
        cccd: "612040657430",
        status: 0,
      },
      {
        cccd: "292648524744",
        status: 0,
      },
      {
        cccd: "240376472489",
        status: 0,
      },
      {
        cccd: "911616647762",
        status: 0,
      },
      {
        cccd: "608803576346",
        status: 1,
      },
      {
        cccd: "198910767679",
        status: 0,
      },
      {
        cccd: "279031835852",
        status: 0,
      },
      {
        cccd: "816233736890",
        status: 0,
      },
      {
        cccd: "464381491192",
        status: 0,
      },
      {
        cccd: "719261735574",
        status: 1,
      },
    ],
  },
  barya: {
    title: "Bà Rịa Vũng Tàu",
    total: 9,
    users: [
      {
        cccd: "826423430045",
        status: 0,
      },
      {
        cccd: "369495239615",
        status: 0,
      },
      {
        cccd: "812800892580",
        status: 1,
      },
      {
        cccd: "078015508627",
        status: 1,
      },
      {
        cccd: "638995477648",
        status: 0,
      },
      {
        cccd: "446379673467",
        status: 0,
      },
      {
        cccd: "769303104526",
        status: 0,
      },
      {
        cccd: "698674045367",
        status: 1,
      },
      {
        cccd: "042465104628",
        status: 0,
      },
    ],
  },
  quangbinh: {
    title: "Quảng Bình",
    total: 11,
    users: [
      {
        cccd: "479674773983",
        status: 1,
      },
      {
        cccd: "997079535550",
        status: 1,
      },
      {
        cccd: "977759547557",
        status: 0,
      },
      {
        cccd: "312766005697",
        status: 0,
      },
      {
        cccd: "248992954631",
        status: 1,
      },
      {
        cccd: "370275123270",
        status: 0,
      },
      {
        cccd: "973673090360",
        status: 0,
      },
      {
        cccd: "385869543867",
        status: 1,
      },
      {
        cccd: "315580112849",
        status: 1,
      },
      {
        cccd: "395795630718",
        status: 1,
      },
      {
        cccd: "064829088547",
        status: 0,
      },
    ],
  },
  haiduong: {
    title: "Hải Dương",
    total: 10,
    users: [
      {
        cccd: "390359074241",
        status: 1,
      },
      {
        cccd: "284214703860",
        status: 0,
      },
      {
        cccd: "888519325378",
        status: 1,
      },
      {
        cccd: "732230509813",
        status: 1,
      },
      {
        cccd: "461034701086",
        status: 0,
      },
      {
        cccd: "944344462018",
        status: 0,
      },
      {
        cccd: "475292705708",
        status: 0,
      },
      {
        cccd: "506294529163",
        status: 1,
      },
      {
        cccd: "418620466065",
        status: 0,
      },
      {
        cccd: "855765779984",
        status: 0,
      },
    ],
  },
  ninhbinh: {
    title: "Ninh Bình",
    total: 15,
    users: [
      {
        cccd: "888981768983",
        status: 0,
      },
      {
        cccd: "820073656143",
        status: 0,
      },
      {
        cccd: "317029491024",
        status: 1,
      },
      {
        cccd: "036209650984",
        status: 1,
      },
      {
        cccd: "239480112187",
        status: 1,
      },
      {
        cccd: "780297971337",
        status: 1,
      },
      {
        cccd: "442717272962",
        status: 0,
      },
      {
        cccd: "082180471038",
        status: 1,
      },
      {
        cccd: "022317619049",
        status: 1,
      },
      {
        cccd: "494179012101",
        status: 0,
      },
      {
        cccd: "694742245996",
        status: 1,
      },
      {
        cccd: "868781644953",
        status: 0,
      },
      {
        cccd: "594150001142",
        status: 1,
      },
      {
        cccd: "559707351189",
        status: 1,
      },
      {
        cccd: "427050775324",
        status: 1,
      },
    ],
  },
};

const CandidateCard = ({ data, isWin }) => {
  return (
    <div
      className={cn(
        "bg-white flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-4",
        {
          "bg-green-100": isWin,
        }
      )}
    >
      <Image alt="Picture of the author" src={data.image} />
      <p className="text-2xl font-bold">{data.name}</p>
      <div className="h-[1px] w-full bg-gray-400"></div>
      <p>{data.job}</p>
      <div className="flex flex-col items-center gap-2 mt-2 w-full justify-between">
        <div className="grid grid-cols-2 gap-1">
          <div className="flex gap-1 flex-row items-center">
            <PhoneIcon size={20} color="black" />
            <p>{data.sdt}</p>
          </div>
          <div className="flex gap-1 flex-row items-center">
            <MailIcon size={20} color="black" />
            <p>{data.email}</p>
          </div>
          <div className="flex gap-1 flex-row items-center">
            <UserIcon size={20} color="black" />
            <p>{data.gender}</p>
          </div>
          <div className="flex gap-1 flex-row items-center">
            <CalendarIcon size={20} color="black" />
            <p>{data.dateOfBirth}</p>
          </div>
        </div>
      </div>
      <p className="font-semibold text-lg mt-1">Thông tin chi tiết</p>
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full flex flex-col gap-1 justify-between ">
          <div className="flex flex-row w-full gap-1 items-center">
            <div className="flex gap-1  w-[250px]">
              <ChartLineIcon color="black" />
              <p>Cấp bậc:</p>
            </div>
            <p className="w-full">{data.level}</p>
          </div>
          <div className="flex flex-row w-full gap-1 items-center">
            <div className="flex gap-1 w-[250px]">
              <BookOpenIcon color="black" />
              <p>Chuyên ngành:</p>
            </div>
            <p className="w-full"> {data.major}</p>
          </div>
        </div>
        <div className="flex flex-row w-full items-start gap-2">
          <div className="flex flex-row items-center gap-1 w-[250px]">
            <BookIcon color="black" />
            <p>Thành tích:</p>
          </div>
          <div className="w-full flex-col flex gap-2">
            {data.achievements.map((text) => (
              <p>- {text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function findAreasWithNonAllDoneVoting(data) {
  return Object.keys(data).filter((key) => {
    const users = data[key].users;
    // Check if any user does not have status 1
    return users.some((user) => user.status !== 1);
  });
}

const Page = ({ params }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openResult, setOpenResult] = useState(false);
  const [insightData, setInsightData] = useState(areaData);
  const [provincePicked, setProvincePicked] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setOpenResult(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenResult(false);
  };
  const districtKeys = findAreasWithNonAllDoneVoting(insightData);
  const targetTime = new Date(new Date().getTime() + 10 * 54 * 62 * 1000); // Set the fixed target time

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (districtKeys.length === 0) {
        clearInterval(interval);
        return;
      }
      const randomDistrictKey =
        districtKeys[Math.floor(Math.random() * districtKeys.length)];
      const now = new Date(); // Get the current time
      const diffMs = targetTime - now; // Calculate the remaining time in milliseconds

      // If time is up, clear the interval

      // Calculate hours, minutes, and seconds remaining
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      // Format the time left
      const timeLeft = `${hours}h, ` + `${minutes}m, ` + `${seconds}s`;
      setTimeLeft(timeLeft);
      setInsightData((prev) => ({
        ...prev,
        [randomDistrictKey]: {
          ...prev[randomDistrictKey],
          users: prev[randomDistrictKey].users.map((user) => ({
            ...user,
            status: user.status === 0 ? Math.round(Math.random()) : 1,
          })),
        },
      }));
    }, 1350);

    return () => clearInterval(interval);
  }, []);

  const handleClickArea = (data) => {
    setProvincePicked(data);
    showModal();
  };

  return (
    <>
      <div className="flex justify-center w-full flex-col relative">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center ">
            Bầu cử Quốc hội: Đại diện trí tuệ và ý chí nhân dân
            <Tag color="success" className="text-md">
              Đã xong
            </Tag>
          </h1>
          <p className="max-w-[1000px] text-center mb-4">
            Lựa chọn các thành viên đại diện cho tiếng nói và lợi ích của nhân
            dân ở cấp trung ương.phản ánh ý kiến, nguyện vọng của người dân tại
            cơ quan quyền lực cao nhất, là cơ hội để mọi tầng lớp nhân dân cùng
            tham gia, gắn kết và thể hiện ý chí chung.
          </p>
          <p>07:00, ngày 20/01/2025 - 19:00, ngày 20/01/2025</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Candidates.map((candidate) => (
            <CandidateCard
              data={candidate}
              key={candidate.id}
              isWin={candidate.id === 2}
            />
          ))}
        </div>
        <AreaTable handleClick={handleClickArea} insightData={insightData} />
        <div className="grid grid-cols-3">
          <VotedChart />
          <ProvinceBarChart data={insightData} />
          <VotedLogTable />
        </div>
        <div className="grid grid-cols-3">
          <AgePieChart />
          <GenderPieChart />
          <JobPieChart />
        </div>
      </div>

      <button
        className="absolute top-4 right-4"
        onClick={() => {
          setOpenResult(true);
        }}
      >
        <Tag className="flex gap-2 text-lg items-center">
          <p>Export PDF</p>
          <DownloadIcon size={20} />
        </Tag>
      </button>

      <Modal
        title={provincePicked?.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="max-h-[70vh] overflow-auto">
          <div className="flex w-full">
            <div className="flex flex-row items-center justify-between">
              <div>
                <div className="w-full items-center flex gap-1 flex-row">
                  <p>Đã bỏ:</p>
                  <div className="flex items-center flex-row gap-1 justify-center">
                    <p className="font-semibold text-lg">
                      {
                        provincePicked?.users.filter((x) => x.status === 1)
                          .length
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full items-center flex gap-1 flex-row">
                  <p>Còn lại:</p>
                  <div className="flex items-center flex-row gap-1 justify-center">
                    <p className="font-semibold text-lg">
                      {provincePicked?.users.length -
                        provincePicked?.users.filter((x) => x.status === 1)
                          .length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UserTable users={provincePicked?.users} />
        </div>
      </Modal>
      <Modal
        title="Kết quả bỏ phiếu"
        open={openResult}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InfogramEmbed />
      </Modal>
    </>
  );
};

export default Page;
