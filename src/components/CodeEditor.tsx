import { useRef, useEffect, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

interface CodeEditorProps {
  value: string;
  onChange: (parsedValue: string) => void;
  editable: boolean;
  language?: string;
}

export default function CodeEditor({
  value,
  onChange,
  editable,
  language = "javascript",
}: CodeEditorProps) {
  const editorRef = useRef<Monaco.editor.IStandaloneCodeEditor | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleEditorChange = (val: string | undefined) => {
    const newVal = val || "";
    setIsEmpty(newVal.trim() === "");
    onChange(newVal);
  };

  const handleEditorDidMount = (
    editor: Monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
    editor.updateOptions({ readOnly: !editable });
    setIsEmpty((editor.getValue() || "").trim() === "");
  };

  const formatJavaScript = () => {
    editorRef.current?.getAction("editor.action.formatDocument").run();
  };

  const validateJavaScript = () => {
    const val = editorRef.current?.getValue() || "";
    try {
      new Function(val);
      alert("Valid JavaScript");
    } catch (e: unknown) {
      alert(
        `Invalid JavaScript: ${
          e instanceof Error ? e.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="code-editor-container h-full flex flex-col border border-[#E9EAEB] rounded-lg p-2 relative">
      <div className="flex justify-end mb-2 gap-x-2">
        <button
          type="button"
          className="px-1 py-1 text-xs text-primary-text"
          onClick={formatJavaScript}
        >
          Format
        </button>
        <button
          type="button"
          className="px-4 py-1 text-xs text-primary-text"
          onClick={validateJavaScript}
        >
          Validate
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        {/* Placeholder Overlay */}
        {isEmpty && (
          <div className="absolute top-2 left-12 z-10 text-gray-400 pointer-events-none text-xs flex flex-col gap-y-4 font-mono whitespace-pre-wrap leading-relaxed">
            <span className="text-[#3333334D]">&lt;/&gt; Create Model</span>
          
            <span className="text-gray/70">Press <span className="text-[#496EE0B2]">Ctrl+K</span> to generate code or <span className="text-[#496EE0B2]">Ctrl+L</span> to chat</span>
          </div>
        )}

        <Editor
          height="100%"
          language={language}
          value={value}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          className="w-full h-full relative z-0"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            padding: { top: 10 },
          }}
        />
      </div>
    </div>
  );
}
