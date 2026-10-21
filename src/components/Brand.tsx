import { Link } from "react-router-dom";
import { Box } from "lucide-react";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center gap-2.5 ${light ? "text-white" : "text-slate-900"}`}
      aria-label="PepExpert home"
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-sky-500 text-white">
        <Box size={25} strokeWidth={1.8} />
      </span>
      <span className="font-display text-[24px] font-extrabold tracking-[-1.1px]">
        pep
        <span className={light ? "text-sky-400" : "text-sky-600"}>expert</span>
      </span>
    </Link>
  );
}
