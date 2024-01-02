import { renderLatexContent } from "@/lib/utils";
import { MathpixMarkdownModel as MM } from "mathpix-markdown-it";
import { useEffect } from "react";

const RenderMarkdown = ({ markdown }: { markdown: string }) => {
  useEffect(() => {
    return () => {
      const elStyle = document.getElementById("Mathpix-styles");
      if (!elStyle) {
        const style = document.createElement("style");
        style.setAttribute("id", "Mathpix-styles");
        style.innerHTML = MM.getMathpixFontsStyle() + MM.getMathpixStyle(true);
        document.head.appendChild(style);
      }
    };
  }, []);

  return (
    <div
      className="w-[100%] font-quicksand"
      dangerouslySetInnerHTML={{
        __html: renderLatexContent(markdown),
      }}
    />
  );
};

export default RenderMarkdown;
