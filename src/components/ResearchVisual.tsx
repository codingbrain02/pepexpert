import { useId } from "react";

function Vial({
  x,
  y,
  scale = 1,
  name,
  strength,
  id,
}: {
  x: number;
  y: number;
  scale?: number;
  name: string;
  strength: string;
  id: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse
        cx="67"
        cy="220"
        rx="66"
        ry="12"
        fill="#0f172a"
        opacity=".08"
        filter={`url(#${id}-blur)`}
      />
      <rect
        x="10"
        y="49"
        width="114"
        height="166"
        rx="19"
        fill={`url(#${id}-glass)`}
        stroke="#c5d9e3"
        strokeWidth="1.3"
      />
      <path
        d="M22 69v116c0 13 5 20 17 20"
        fill="none"
        stroke="white"
        strokeWidth="5"
        opacity=".85"
      />
      <rect
        x="11"
        y="5"
        width="112"
        height="35"
        rx="7"
        fill={`url(#${id}-cap)`}
      />
      <path
        d="M18 12h99M18 19h99M18 26h99M18 33h99"
        stroke="#8799a7"
        strokeWidth="1"
        opacity=".4"
      />
      <rect x="20" y="39" width="94" height="15" rx="3" fill="#b2c2cc" />
      <rect x="11" y="95" width="112" height="86" fill="#fbfdff" />
      <path d="M11 95h112v8H11z" fill="#0ea5e9" />
      <text
        x="24"
        y="122"
        fontFamily="Arial,sans-serif"
        fontSize="12"
        fontWeight="800"
        fill="#0f172a"
      >
        pepexpert<tspan fill="#0ea5e9">.</tspan>
      </text>
      <text
        x="24"
        y="146"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="#0f172a"
      >
        {name}
      </text>
      <text
        x="24"
        y="163"
        fontFamily="Arial,sans-serif"
        fontSize="9"
        textLength="88"
        lengthAdjust="spacingAndGlyphs"
        fill="#64748b"
      >
        {strength} · RESEARCH COMPOUND
      </text>
      <path d="M22 190h89" stroke="#cbd5e1" strokeWidth=".5" />
      <text
        x="24"
        y="199"
        fontFamily="Arial,sans-serif"
        fontSize="5.4"
        letterSpacing="1"
        fill="#64748b"
      >
        FOR LABORATORY RESEARCH ONLY
      </text>
    </g>
  );
}

export function ResearchVisual() {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 600 460"
      role="img"
      aria-label="PepExpert research vials with a molecular illustration"
      className="h-full w-full overflow-visible"
    >
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" x2="1">
          <stop stopColor="#d6e8f0" />
          <stop offset=".18" stopColor="#fcffff" />
          <stop offset=".55" stopColor="#eaf4f7" />
          <stop offset=".85" stopColor="#d1e2eb" />
          <stop offset="1" stopColor="#b5ccd8" />
        </linearGradient>
        <linearGradient id={`${id}-cap`} x1="0" x2="1">
          <stop stopColor="#8b9ca8" />
          <stop offset=".3" stopColor="#e3eaf0" />
          <stop offset=".65" stopColor="#b4c2cd" />
          <stop offset="1" stopColor="#718694" />
        </linearGradient>
        <radialGradient id={`${id}-sphere`} cx=".3" cy=".2">
          <stop stopColor="#e0f7ff" />
          <stop offset=".4" stopColor="#67cbec" />
          <stop offset="1" stopColor="#1494c5" />
        </radialGradient>
        <filter id={`${id}-blur`}>
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <linearGradient id={`${id}-platform`} x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#f6fcff" />
          <stop offset="1" stopColor="#daeaf2" />
        </linearGradient>
      </defs>
      <circle
        cx="326"
        cy="210"
        r="190"
        fill="none"
        stroke="#cae6f2"
        strokeDasharray="3 8"
      />
      <circle cx="326" cy="210" r="145" fill="none" stroke="#d8ecf5" />
      <g fill="none" stroke="#86cde6" strokeWidth="5" opacity=".8">
        <path d="m372 52 75 55-17 78 69 47M447 107l68-35M430 185l-73 34M499 232l-4 75M372 52l-66 39" />
      </g>
      {[
        [372, 52, 17],
        [447, 107, 26],
        [430, 185, 19],
        [499, 232, 29],
        [515, 72, 16],
        [357, 219, 12],
        [495, 307, 17],
        [306, 91, 12],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={`url(#${id}-sphere)`} />
      ))}
      <ellipse
        cx="286"
        cy="415"
        rx="220"
        ry="24"
        fill="#b6d1df"
        opacity=".2"
        filter={`url(#${id}-blur)`}
      />
      <path
        d="M78 343h401v44c0 19-90 35-200 35S78 406 78 387Z"
        fill={`url(#${id}-platform)`}
      />
      <ellipse
        cx="279"
        cy="343"
        rx="201"
        ry="35"
        fill="#f4fbff"
        stroke="#dcecf3"
      />
      <Vial
        x={109}
        y={151}
        scale={0.83}
        name="TB-500"
        strength="10 MG"
        id={id}
      />
      <Vial
        x={322}
        y={144}
        scale={0.91}
        name="NAD+"
        strength="100 MG"
        id={id}
      />
      <Vial
        x={209}
        y={102}
        scale={1.2}
        name="BPC-157"
        strength="10 MG"
        id={id}
      />
      <g transform="translate(55 95)">
        <rect width="151" height="48" rx="10" fill="white" stroke="#dfeaf0" />
        <circle cx="24" cy="24" r="12" fill="#e0f2fe" />
        <path d="m19 24 3 3 6-7" fill="none" stroke="#0ea5e9" strokeWidth="2" />
        <text
          x="45"
          y="21"
          fontSize="9"
          fontFamily="Arial,sans-serif"
          fontWeight="700"
          fill="#0f172a"
        >
          PRECISION IN FOCUS
        </text>
        <text
          x="45"
          y="34"
          fontSize="8"
          fontFamily="Arial,sans-serif"
          fill="#64748b"
        >
          Every detail matters.
        </text>
      </g>
    </svg>
  );
}
