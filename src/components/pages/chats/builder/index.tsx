import EmptyBox from "@components/ui/empty-box";
import MessageBox from "@components/ui/message-box";
import BuildSvg from "./svgs/build";
import ContentBox from "./content-box";

export interface ContentItem {
  content: string;
  left: boolean;
}

const content: ContentItem[] = [
  // {
  //   content:
  //     "Hi, can you assist with an example of a history header for either text analysis or data analysis on industrialization?",
  //   left: true,
  // },
  // {
  //   content:
  //     "Certainly! Here's an example of a data analysis report under the theme of Industrialization. It includes a hypothetical analysis of economic and demographic data from the period",
  //   left: false,
  // },
];

export default function BuilderIndex() {
  return (
    <div className="bg-white rounded-lg builder_shadow p-8 flex flex-col h-full">
      <div className="flex-1 max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar pb-8">
        {!content.length ? (
          <div className="mb-[100px] h-full flex items-center justify-center">
            <EmptyBox
              title={"What do you want to build today?"}
              icon={<BuildSvg />}
              text={"Please type your message to start building"}
            />
          </div>
        ) : (
          <ContentBox content={content} />
        )}
      </div>

      <div className="min-h-[100px] sticky bottom-0">
        <MessageBox />
      </div>
    </div>
  );
}
