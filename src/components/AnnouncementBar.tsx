import { ArrowUpRight, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

export function AnnouncementBar() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container-shell flex min-h-9 items-center justify-center gap-2 text-[10px] tracking-wide sm:justify-between sm:text-[11px]">
        <span className="flex items-center gap-2">
          <FlaskConical size={12} className="text-sky-300" /> Purpose-built for
          research. Driven by possibility.
        </span>
        <Link
          to="/about-us/"
          className="hidden items-center gap-1.5 text-slate-300 transition hover:text-white sm:flex"
        >
          Get to know PepExpert <ArrowUpRight size={12} />
        </Link>
      </div>
    </div>
  );
}
