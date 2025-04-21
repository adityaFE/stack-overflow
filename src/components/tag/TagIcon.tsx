
import React from "react";
import { 
  Code, 
  Boxes, 
  FileType, 
  Database, 
  Server, 
  Webhook, 
  Globe, 
  PaintBucket, 
  Lightbulb, 
  Package, 
  Puzzle,
  Atom
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TagIconProps {
  tagName: string;
  className?: string;
}

const TagIcon: React.FC<TagIconProps> = ({ tagName, className }) => {
  // Map tag names to appropriate icons
  const getIconForTag = (tag: string): React.ReactNode => {
    const tagLower = tag.toLowerCase();
    const iconSize = 14; // Decreased from default size
    
    if (tagLower.includes("javascript") || tagLower.includes("js")) {
      return <Code className="text-yellow-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("react") || tagLower.includes("hooks")) {
      return <Atom className="text-blue-400 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("typescript") || tagLower.includes("ts")) {
      return <FileType className="text-blue-600 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("mongo") || tagLower.includes("database")) {
      return <Database className="text-green-600 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("node") || tagLower.includes("express")) {
      return <Server className="text-green-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("html")) {
      return <Code className="text-orange-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("css")) {
      return <PaintBucket className="text-blue-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("redux")) {
      return <Puzzle className="text-purple-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("schema") || tagLower.includes("design")) {
      return <Boxes className="text-amber-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("api") || tagLower.includes("rest")) {
      return <Webhook className="text-red-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("web") || tagLower.includes("browser")) {
      return <Globe className="text-blue-500 pt-0.5" size={iconSize} />;
    } else if (tagLower.includes("vue") || tagLower.includes("angular")) {
      return <Package className="text-green-500 pt-0.5" size={iconSize} />;
    } else {
      return <Lightbulb className="text-amber-400 pt-0.5" size={iconSize} />;
    }
  };

  return (
    <div className={cn("h-4 w-4 flex items-center justify-center", className)}>
      {getIconForTag(tagName)}
    </div>
  );
};

export default TagIcon;
