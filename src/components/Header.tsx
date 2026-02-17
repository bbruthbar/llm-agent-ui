import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus} from "lucide-react";

const Header: React.FC = () => {
      const [cards, setCards] = useState<string[]>([]);
      const [count, setCount] = useState<number>(1);
    
      const addCard = () => {
        setCount(count + 1);
        setCards([...cards, `${count}`]);
        console.log(cards);
      };

    return (
      <header className="p-4 mb-4 bg-white flex justify-between p-4 border-b-1 border-base-gray ">
        <h1>Workflow Builder</h1>
        <Button onClick={addCard} className="bg-fuschia">
          <Plus /> Add Node
        </Button>
      </header>
    );
}

export default Header;