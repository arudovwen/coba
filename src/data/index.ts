import AnalyzerSvg from "@/components/pages/model/svgs/analyzer";
import BuilderSvg from "@/components/pages/model/svgs/builder";
import ExplorerSvg from "@/components/pages/model/svgs/explorer";

export const ModelNavList = [
  {
    title: "Chats",
    link: "/model/chats",
  },
  {
    title: "Data",
    link: "/model/data",
  },
  {
    title: "Doc",
    link: "/model/doc",
  },
];

export const SideBarList = [
  {
    title: "Builder",
    link: "/model/chats/builder",
    icon: BuilderSvg,
    hasOption: true
  },
  {
    title: "Analyzer",
    link: "/model/chats/analyzer",
    icon: AnalyzerSvg,
     hasOption: false
  },
  {
    title: "Explorer",
    link: "/model/chats/explorer",
    icon: ExplorerSvg,
     hasOption: false
  },
];
