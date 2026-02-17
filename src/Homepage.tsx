import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NodeList } from "./components/NodeList";

const Homepage: React.FC = () => {
  const [nodes, setNodes] = useState<string[]>([]);
  const [count, setCount] = useState<number>(1);

  const addNode = () => {
    setCount(count + 1);
    setNodes([...nodes, `${count}`]);
    console.log(nodes);
  };

  return (
    <>
      <header className="p-4 mb-4 bg-white flex justify-between p-4 border-b-1 border-base-gray ">
        <h1>Workflow Builder</h1>
        <Button onClick={addNode} className="bg-fuschia">
          <Plus /> Add Node
        </Button>
      </header>
      <NodeList nodes={nodes} aria-live="polite" />
    </>
  );
};

export default Homepage;
