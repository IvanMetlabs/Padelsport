import React, { useState, useEffect } from "react";
import svgPaths from "@/imports/svg-nzkx60nfa5";
import imgUsdt1 from "figma:asset/2ed3e4b39d2a73d0b2cca87badd15501d959826b.png";
import imgHero1 from "figma:asset/cbbb7313b9e0107f0bfc4f9cb43241552f0ba154.png";

// --- HOOKS ---
export const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24,
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

// --- ATOMS ---

export const TickerBadge = ({
  img,
  text,
}: {
  img: string;
  text: string;
}) => (
  <div className="bg-[#06160f] relative rounded-[14px] shrink-0 h-[44px]">
    <div
      aria-hidden="true"
      className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]"
    />
    <div className="border-0 border-transparent border-solid flex gap-[11px] items-center justify-center p-[12px] relative h-full">
      <div className="relative shrink-0 w-[20px] h-[20px]">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={img}
        />
      </div>
      <div className="flex items-center relative shrink-0">
        <p className="font-bold text-[14px] text-center text-white">
          {text}
        </p>
      </div>
    </div>
  </div>
);

export const CountdownDigit = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => (
  <div className="h-[38px] relative shrink-0 w-[52px]">
    <div className="flex gap-[8px] items-center relative size-full">
      <div className="bg-[rgba(255,255,255,0.05)] h-full relative rounded-[10px] shrink-0 w-[38px] flex items-center justify-center border border-white/5">
        <p className="font-bold text-[18px] text-center text-white">
          {value.toString().padStart(2, "0")}
        </p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[8px]">
        <p className="absolute left-1/2 -translate-x-1/2 top-0 text-[#6a7282] text-[14px] text-center uppercase">
          {label}
        </p>
      </div>
    </div>
  </div>
);

export const PresaleCountdown = ({
  targetDate,
}: {
  targetDate?: Date;
}) => {
  // Default to 30 days from now if not provided
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 30);
  const finalDate = targetDate || defaultDate;

  const { days, hours, minutes, seconds } =
    useCountdown(finalDate);

  return (
    <div className="flex gap-1 items-center">
      <CountdownDigit value={days} label="D" />
      <CountdownDigit value={hours} label="H" />
      <CountdownDigit value={minutes} label="M" />
      <CountdownDigit value={seconds} label="S" />
    </div>
  );
};

// --- MOLECULES ---

interface PresaleInputProps {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  tickerImg: string;
  tickerText: string;
  readOnly?: boolean;
  iconPath?: string;
}

export const PresaleInput = ({
  label,
  value,
  onChange,
  placeholder,
  tickerImg,
  tickerText,
  readOnly = false,
  iconPath,
}: PresaleInputProps) => {
  return (
    <div className="bg-[#020705] flex flex-col gap-3 p-6 rounded-[22px] w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#1a1a1a] rounded-full size-[18px] flex items-center justify-center p-1">
          {iconPath ? (
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                d={iconPath}
                stroke="#99A1AF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </svg>
          ) : (
            <div className="w-1.5 h-1.5 bg-[#99A1AF] rounded-full" />
          )}
        </div>
        <p className="text-[12px] text-white">
          {label}
        </p>
      </div>

      <div className="flex items-end justify-between w-full gap-4">
        {readOnly ? (
          <p className="text-[40px] md:text-[44px] text-white overflow-hidden whitespace-nowrap text-ellipsis flex-1">
            {value}
          </p>
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[40px] md:text-[44px] text-white focus:outline-none placeholder-[rgba(255,255,255,0.3)] leading-none p-0 border-none"
          />
        )}
        <TickerBadge img={tickerImg} text={tickerText} />
      </div>
    </div>
  );
};

export const PresaleProgress = ({
  raised,
  target,
  softCap,
}: {
  raised: number;
  target: number;
  softCap: number;
}) => {
  const progressPercent = Math.min(
    (raised / target) * 100,
    100,
  );
  const softCapPercent = (softCap / target) * 100;

  const formatCurrency = (val: number) =>
    val.toLocaleString("de-DE") + "€";

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between text-[10px]">
        <div className="flex gap-2">
          <span className="text-[#99a1af]">Recaudado:</span>
          <span className="text-white">
            {formatCurrency(raised)}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#99a1af]">Objetivo:</span>
          <span className="text-white">
            {formatCurrency(target)}
          </span>
        </div>
      </div>

      <div className="bg-[rgba(0,0,0,0.4)] h-[12px] rounded-full w-full border border-white/5 p-[2px] relative mt-3 mb-1">
        {/* Progress Bar */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#01ffe7] to-[#01ffe7] opacity-50 shadow-[0_0_10px_rgba(1,255,231,0.3)] relative z-10 transition-all duration-1000"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Soft Cap Marker */}
        <div
          className="absolute top-[-4px] bottom-[-4px] w-[1px] bg-[#99a1af] z-20 flex flex-col items-center"
          style={{ left: `${softCapPercent}%` }}
        >
          <div className="absolute top-[-14px] text-[8px] text-[#99a1af] whitespace-nowrap uppercase tracking-wider">
            Soft Cap ({formatCurrency(softCap)})
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ORGANISM ---

export const PresaleWidget = ({
  onConnect,
  className = "",
}: {
  onConnect?: () => void;
  className?: string;
}) => {
  const [amount, setAmount] = useState("");
  const tokenPrice = 0.05;

  // Example data
  const raised = 800000;
  const target = 1200000;
  const softCap = 600000;

  const getTokens = () => {
    if (!amount) return "0.00";
    const val = parseFloat(
      amount.replace(/\./g, "").replace(",", "."),
    ); // Handle different number formats loosely or just standard float
    // For simplicity in this demo, let's assume standard input or simple parse
    const num = parseFloat(amount);
    if (isNaN(num)) return "0.00";
    return (num / tokenPrice).toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div
      className={`w-full max-w-[600px] relative shrink-0 ${className}`}
    >
      <div className="bg-[rgba(0,0,0,0.53)] border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid relative rounded-[28px] backdrop-blur-sm overflow-hidden z-20 flex flex-col p-10">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <p className="font-bold text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">
              COMPRA $PSC
            </p>
          </div>
          <PresaleCountdown />
        </div>

        {/* Inputs Container */}
        <div className="flex flex-col gap-3 mt-6">
          <PresaleInput
            label="Pagas con"
            value={amount}
            onChange={setAmount}
            placeholder="5.000,00"
            tickerImg={imgUsdt1}
            tickerText="USDT / BNB"
            iconPath={svgPaths.p6cc8300} // Chevron down or similar from original
          />

          <div className="bg-[#020705] p-6 rounded-[22px] w-full flex flex-col gap-8">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="bg-[#1a1a1a] rounded-full size-[20px] flex items-center justify-center p-1.5">
                  {/* Down arrow icon */}
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      d="M5 2V8M2 5L5 8L8 5"
                      stroke="#99A1AF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <p className="text-[12px] text-white">
                  Recibes
                </p>
              </div>
              <div className="bg-[#01ffe7]/10 border border-[#01ffe7]/20 px-2 py-0.5 rounded-full">
                <span className="text-[#01ffe7] text-[10px] font-bold">
                  1 PSC = $0.05
                </span>
              </div>
            </div>

            <div className="flex items-end justify-between w-full gap-4">
              <p className="text-[40px] md:text-[44px] text-white overflow-hidden whitespace-nowrap text-ellipsis flex-1">
                {amount ? getTokens() : "0.00"}
              </p>
              <TickerBadge img={imgHero1} text="PSC" />
            </div>

            <PresaleProgress
              raised={raised}
              target={target}
              softCap={softCap}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-8">
          <button
            onClick={onConnect}
            className="bg-[#01ffe7] h-[72px] rounded-[20px] w-full group relative overflow-hidden flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] transition-all"
          >
            <div className="absolute inset-0 border border-white/10 rounded-[20px]" />
            <svg
              className="size-[24px]"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                d={svgPaths.p35625ff0}
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p2532d00}
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span className="font-bold text-[20px] text-black">
              Conectar Wallet
            </span>
          </button>

          <button
            onClick={onConnect}
            className="bg-[rgba(255,255,255,0.1)] h-[68px] rounded-[20px] w-full group hover:bg-[rgba(255,255,255,0.15)] transition-colors relative flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 border border-white/10 rounded-[20px]" />
            <svg
              className="size-[24px]"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                d={svgPaths.p5eca500}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M1.5 7.5H16.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span className="font-bold text-[20px] text-white">
              Tarjeta / Transferencia
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};