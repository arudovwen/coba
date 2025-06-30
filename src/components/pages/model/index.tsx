/* eslint-disable @typescript-eslint/no-explicit-any */
import CodeEditor from "@/components/CodeEditor";
import { useState } from "react";

export default function ModelIndex() {
  const [code, setCode] = useState<any>(null);
  return (
    <div className="bg-white rounded-lg builder_shadow p-4 flex flex-col h-full">
      <CodeEditor value={code} onChange={setCode} editable={true} />
    </div>
  );
}
