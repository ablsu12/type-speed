import { WordBoxProps } from "../type/type.ts";

export const TWordBox = ({ value, status }: WordBoxProps) => {
  const computedBgColor = (status: string) => {
    if (status === "pending") return "bg-sky-100";
    if (status === "active") return "bg-sky-500";
    if (status === "correct") return "bg-green-500";
    if (status === "wrong") return "bg-red-400";
  };
  return (
    <div
      className={`w-56 h-12 text-black rounded-md m-2.5 flex justify-center 
      items-center p-5 ${computedBgColor(status)}`}
    >
      <h1 className={"font-mono font-light"}>{value}</h1>
    </div>
  );
};
