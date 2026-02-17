import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { ArrowDown } from "@/components/ArrowDown";
import { Circle, MessageCircleQuestionMark } from "lucide-react";

interface NodeListProps {
  nodes: string[];
}

export function NodeList({ nodes }: NodeListProps) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-auto">
        {nodes.map((nodeNumber, index) => (
          <div className="flex-col justify-items-center">
            <Circle size="12" className="stroke-fuschia fill-white" />
            <Card
              key={`nodeNumber-${nodeNumber}`}
              className="w-full w-xs pt-3 pb-6 gap-2 -mt-2"
            >
              <CardHeader className="flex items-center border-b-1 border-base-gray p-3">
                <MessageCircleQuestionMark />{" "}
                <h2 className="text-base" id={nodeNumber}>
                  Question
                </h2>
              </CardHeader>
              <CardContent className="p-3 text-left text-sm">
                <p>
                  What percentage does the plan cover for co-insurance on
                  diagnostic lab services?
                </p>
              </CardContent>
            </Card>

            <div className="flex-col justify-items-center -mt-2">
              {index != nodes.length - 1 ? (
                <ArrowDown />
              ) : (
                <Circle size="12" className="stroke-fuschia fill-white" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
