"use client";

export default function Brands() {
  return (
    <section className="mb-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-wider text-white uppercase md:text-xl">
          ბრენდები
        </h2>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0d111d]/70 p-6 md:p-8 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-6 items-center justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {/* 1. BRESSER Junior */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 160 50" className="h-9 w-auto">
              <circle
                cx="20"
                cy="20"
                r="14"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
              />
              <text
                x="14"
                y="26"
                fill="white"
                fontSize="16"
                fontWeight="900"
                fontFamily="sans-serif"
              >
                B
              </text>
              <text
                x="40"
                y="24"
                fill="white"
                fontSize="15"
                fontWeight="900"
                letterSpacing="0.5"
                fontFamily="sans-serif"
              >
                BRESSER
              </text>
              <line
                x1="40"
                y1="29"
                x2="68"
                y2="29"
                stroke="white"
                strokeWidth="1.5"
              />
              <g
                transform="translate(70, 38)"
                fontSize="13"
                fontWeight="900"
                fontFamily="sans-serif"
              >
                <text x="0" y="0" fill="#ec4899">
                  j
                </text>
                <text x="6" y="0" fill="#f59e0b">
                  u
                </text>
                <text x="14" y="0" fill="#3b82f6">
                  n
                </text>
                <text x="22" y="0" fill="#10b981">
                  i
                </text>
                <text x="27" y="0" fill="#ef4444">
                  o
                </text>
                <text x="35" y="0" fill="#8b5cf6">
                  r
                </text>
              </g>
            </svg>
          </div>

          {/* 2. National Geographic */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 140 45" className="h-9 w-auto">
              <rect
                x="2"
                y="4"
                width="22"
                height="34"
                stroke="#eab308"
                strokeWidth="4"
                fill="none"
              />
              <text
                x="32"
                y="19"
                fill="white"
                fontSize="10.5"
                fontWeight="900"
                letterSpacing="0.5"
                fontFamily="sans-serif"
              >
                NATIONAL
              </text>
              <text
                x="32"
                y="32"
                fill="white"
                fontSize="9.5"
                fontWeight="900"
                letterSpacing="0.5"
                fontFamily="sans-serif"
              >
                GEOGRAPHIC
              </text>
            </svg>
          </div>

          {/* 3. Celestron */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 140 45" className="h-8 w-auto">
              <circle cx="16" cy="22" r="12" fill="#f97316" />
              <circle cx="21" cy="22" r="10" fill="#0d111d" />
              <text
                x="34"
                y="27"
                fill="#60a5fa"
                fontSize="15"
                fontWeight="900"
                fontStyle="italic"
                letterSpacing="1"
                fontFamily="sans-serif"
              >
                CELESTRON
              </text>
            </svg>
          </div>

          {/* 4. BRESSER */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 140 45" className="h-8 w-auto">
              <circle
                cx="18"
                cy="22"
                r="13"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
              />
              <text
                x="12"
                y="27"
                fill="white"
                fontSize="15"
                fontWeight="900"
                fontFamily="sans-serif"
              >
                B
              </text>
              <text
                x="37"
                y="27"
                fill="white"
                fontSize="16"
                fontWeight="900"
                letterSpacing="1"
                fontFamily="sans-serif"
              >
                BRESSER
              </text>
            </svg>
          </div>

          {/* 5. FORESEEN */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 140 45" className="h-8 w-auto">
              <text
                x="4"
                y="28"
                fill="white"
                fontSize="19"
                fontWeight="900"
                letterSpacing="1"
                fontFamily="sans-serif"
              >
                F
              </text>
              <circle cx="28" cy="22" r="9" fill="#ef4444" />
              <circle cx="28" cy="22" r="4.5" fill="#0d111d" />
              <circle cx="28" cy="22" r="2" fill="#ef4444" />
              <text
                x="42"
                y="28"
                fill="white"
                fontSize="19"
                fontWeight="900"
                letterSpacing="1"
                fontFamily="sans-serif"
              >
                RESEEN
              </text>
            </svg>
          </div>

          {/* 6. STEM */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 65 65" className="h-11 w-auto">
              <path d="M 32 32 L 32 8 A 24 24 0 0 0 8 32 Z" fill="#ec4899" />
              <path d="M 32 32 L 56 32 A 24 24 0 0 0 32 8 Z" fill="#0284c7" />
              <path d="M 32 32 L 8 32 A 24 24 0 0 0 32 56 Z" fill="#16a34a" />
              <path d="M 32 32 L 32 56 A 24 24 0 0 0 56 32 Z" fill="#f59e0b" />
              <circle cx="32" cy="32" r="4" fill="#0d111d" />
              <text
                x="13"
                y="64"
                fill="#f87171"
                fontSize="11"
                fontWeight="900"
                letterSpacing="1.5"
                fontFamily="sans-serif"
              >
                STEM
              </text>
            </svg>
          </div>

          {/* 7. Vixen */}
          <div className="flex h-14 w-full items-center justify-center p-2 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer">
            <svg viewBox="0 0 120 45" className="h-8 w-auto">
              <text
                x="50%"
                y="52%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#ef4444"
                fontSize="25"
                fontWeight="900"
                fontStyle="italic"
                letterSpacing="1"
                fontFamily="sans-serif"
              >
                Vixen
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
