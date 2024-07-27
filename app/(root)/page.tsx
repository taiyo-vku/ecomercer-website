import { Button } from "@/components/ui/button";
import { AlignCenter, AlignRight } from "lucide-react";
import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div className="p-4">
      <Button size="default" variant= "outline">Click me</Button>
    </div>
  );
}
