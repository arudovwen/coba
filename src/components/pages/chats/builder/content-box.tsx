import { ContentItem } from ".";

function RightBox({ data }: { data: string }) {
  return (
    <div className="bg-[#3D3F941A] text-base rounded-lg text-gray py-2 px-3 max-w-[700px] ml-auto">
      {data}
    </div>
  );
}

function LeftBox({ data }: { data: string }) {
  return (
    <div className="text-base text-gray py-2 px-3 w-full max-w-[800px]">
      {data}
    </div>
  );
}


export default function ContentBox({ content }: { content: ContentItem[] }) {
  return (
    <div className="w-full grid gap-y-1">
      {content.map((item, index) => (
        <div key={index}>
          {item.left ? (
            <LeftBox data={item.content} />
          ) : (
            <RightBox data={item.content} />
          )}
        </div>
      ))}
    </div>
  );
}
