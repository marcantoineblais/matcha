const INK = "#090b0a";

/**
 * The matcha mascot: a bowl of whisked matcha, up to no good, its steam
 * curling into little horns. Mochi's mischievous companion. Used as the
 * logo, the loading indicator and empty states.
 */
export default function Matcha({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Steam, curled into horns */}
      <path
        d="M24 16.5c-3.5-1.5-5.5-5-4-10c1.5 3 3.5 4.5 6 4.8M40 16.5c3.5-1.5 5.5-5 4-10c-1.5 3-3.5 4.5-6 4.8"
        stroke="#e5fb9d"
        strokeOpacity=".7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* The bowl: foot, body, shine, rim */}
      <path
        d="M22 52h20v4a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 22 56z"
        fill="#d9d6c8"
      />
      <path d="M5 27C5 45 17 55 32 55S59 45 59 27Z" fill="#f1eee2" />
      <path
        d="M10 33c1 7 4.5 12 9.5 15"
        stroke="#ffffff"
        strokeOpacity=".7"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="32" cy="27" rx="27" ry="9" fill="#fbf9f1" />
      <ellipse cx="32" cy="27.4" rx="24" ry="7.3" fill="#d6dac6" />

      {/* The matcha inside, frothy with a swirl */}
      <ellipse cx="32" cy="28.4" rx="22.5" ry="6.3" fill="#86d65c" />
      <ellipse cx="32" cy="28.2" rx="20.5" ry="5.4" fill="#c3f2a0" />
      <path
        d="M22 28.5c3-2.6 9-3 12-1.2s1.5 3.6-2 3.4s-3.5-2.4-.5-2.9"
        stroke="#9fe474"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="41" cy="27" r="1.2" fill="#e6fad6" />
      <circle cx="44" cy="29" r=".9" fill="#e6fad6" />
      <circle cx="19" cy="27.5" r=".9" fill="#e6fad6" />

      {/* The face: tapered brows over a glare, glints, a two-fang grin */}
      <g transform="translate(32 43)">
        <path
          d="M-12.8-6.1L-3.9-4.3Q-2.6-4-3-2.6Q-3.3-1.6-4.4-1.9L-12.9-5.5Q-13.4-5.9-12.8-6.1ZM12.8-6.1L3.9-4.3Q2.6-4 3-2.6Q3.3-1.6 4.4-1.9L12.9-5.5Q13.4-5.9 12.8-6.1Z"
          fill={INK}
        />
        <path
          d="M-9.64-2.58L-4.86-.9A3.4 3.4 0 1 1-9.64-2.58ZM9.64-2.58L4.86-.9A3.4 3.4 0 1 0 9.64-2.58Z"
          fill={INK}
        />
        <circle cx="-6.8" cy="-.2" r="1.05" fill="#ffffff" />
        <circle cx="-9.3" cy="2" r=".5" fill="#ffffff" />
        <circle cx="9.2" cy="-.2" r="1.05" fill="#ffffff" />
        <circle cx="6.7" cy="2" r=".5" fill="#ffffff" />
        <path d="M-6 4.6Q0 11.4 6 4.6Z" fill={INK} />
        <path d="M-3.4 5.2l1 2l1-2.2zM1.4 5.2l1 2.2l1-2z" fill="#ffffff" />
      </g>
    </svg>
  );
}
