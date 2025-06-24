import { useState } from "react";
import { Link } from "react-router";

export default function ChatHistory() {
  const [historyList] = useState([
    {
      title: "",
      link: "",
    },
  ]);
  return (
    <div>
      <h3 className="text-sm text-gray/50 font-semibold mb-4">Chat history</h3>

      <ul className="grid  gap-y-2">
        {historyList?.map((item) => (
          <li key={item.title}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
