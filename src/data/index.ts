import AnalyzerSvg from "@/components/pages/model/svgs/analyzer";
import BuilderSvg from "@/components/pages/model/svgs/builder";
import ExplorerSvg from "@/components/pages/model/svgs/explorer";

export const ModelNavList = [
  {
    title: "Chats",
    link: "/chats",
  },
  {
    title: "Data",
    link: "/data",
  },
  {
    title: "Model",
    link: "/model",
  },
  {
    title: "Doc",
    link: "/doc",
  },
];

export const SideBarList = [
  {
    title: "Builder",
    link: "/chats/builder",
    icon: BuilderSvg,
    hasOption: true,
  },
  {
    title: "Analyzer",
    link: "/chats/analyzer",
    icon: AnalyzerSvg,
    hasOption: false,
  },
  {
    title: "Explorer",
    link: "/chats/explorer",
    icon: ExplorerSvg,
    hasOption: false,
  },
];

export const DocSortOptions = [
   {
    label: "Sort",
    value: "",
  },
  {
    label: "Name",
    value: "name",
  },
    {
    label: "Type",
    value: "type",
  },
    {
    label: "Size",
    value: "size",
  },
    {
    label: "Date Uploaded",
    value: "date",
  },
];


export const GridSortOptions = [
   {
    label: "Excel/CSV",
    value: "",
  },
  {
    label: "...Other",
    value: "name",
  },
 
];
