import { renderLatexContent } from "@/lib/utils";

const RenderMarkdown = ({ markdown }: { markdown: string }) => {
  return (
    <div
      className="w-[90%]"
      dangerouslySetInnerHTML={{
        __html: renderLatexContent(markdown),
      }}
    />
  );
};

export default RenderMarkdown;
