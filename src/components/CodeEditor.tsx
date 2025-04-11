
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, RefreshCw } from "lucide-react";

interface CodeEditorProps {
  initialCode: string;
  initialHtml?: string;
  initialCss?: string;
  height?: string;
  language?: string;
  readOnly?: boolean;
  onCodeChange?: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  initialHtml = "",
  initialCss = "",
  height = "400px",
  language = "jsx",
  readOnly = false,
  onCodeChange,
}) => {
  const [code, setCode] = useState(initialCode);
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("code");

  useEffect(() => {
    if (onCodeChange) {
      onCodeChange(code);
    }
  }, [code, onCodeChange]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!readOnly) {
      setCode(e.target.value);
    }
  };

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!readOnly) {
      setHtml(e.target.value);
    }
  };

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!readOnly) {
      setCss(e.target.value);
    }
  };

  const runCode = () => {
    try {
      // For a real implementation, you would use a proper code execution engine
      // This is just a placeholder to demonstrate the concept
      const fullCode = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script type="text/babel">
              ${code}
            </script>
          </body>
        </html>
      `;
      
      setOutput(fullCode);
      setActiveTab("output");
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setHtml(initialHtml);
    setCss(initialCss);
  };

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div className="flex items-center justify-between p-2 bg-muted">
        <Tabs 
          defaultValue="code" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="code">
                {language === "jsx" ? "JSX" : language === "html" ? "HTML" : language === "css" ? "CSS" : language.toUpperCase()}
              </TabsTrigger>
              {initialHtml && <TabsTrigger value="html">HTML</TabsTrigger>}
              {initialCss && <TabsTrigger value="css">CSS</TabsTrigger>}
              <TabsTrigger value="output">Output</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetCode} 
                disabled={readOnly}
                className="flex items-center gap-1"
              >
                <RefreshCw size={14} />
                <span className="hidden sm:inline">Reset</span>
              </Button>
              <Button 
                size="sm" 
                onClick={runCode}
                className="flex items-center gap-1"
              >
                <Play size={14} />
                <span className="hidden sm:inline">Run</span>
              </Button>
            </div>
          </div>

          <TabsContent value="code" className="m-0">
            <textarea
              value={code}
              onChange={handleCodeChange}
              className="font-mono text-sm w-full p-4 focus:outline-none code-block"
              style={{ height, resize: "none" }}
              readOnly={readOnly}
              spellCheck="false"
            />
          </TabsContent>
          
          {initialHtml && (
            <TabsContent value="html" className="m-0">
              <textarea
                value={html}
                onChange={handleHtmlChange}
                className="font-mono text-sm w-full p-4 focus:outline-none code-block"
                style={{ height, resize: "none" }}
                readOnly={readOnly}
                spellCheck="false"
              />
            </TabsContent>
          )}
          
          {initialCss && (
            <TabsContent value="css" className="m-0">
              <textarea
                value={css}
                onChange={handleCssChange}
                className="font-mono text-sm w-full p-4 focus:outline-none code-block"
                style={{ height, resize: "none" }}
                readOnly={readOnly}
                spellCheck="false"
              />
            </TabsContent>
          )}
          
          <TabsContent value="output" className="m-0 bg-white">
            <div style={{ height }} className="w-full overflow-auto">
              <iframe
                title="code-output"
                srcDoc={output}
                className="w-full h-full border-0"
                sandbox="allow-scripts"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CodeEditor;
