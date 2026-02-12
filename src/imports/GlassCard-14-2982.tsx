import svgPaths from "./svg-rwn9vmkjnm";

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center pl-[11px] pr-[9px] py-[9px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="css-ew64yg font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white">29</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container1 />
      <p className="css-ew64yg leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[20px] text-center uppercase">D</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center pl-[11px] pr-[9px] py-[9px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="css-ew64yg font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white">23</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container2 />
      <p className="css-ew64yg leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[20px] text-center uppercase">H</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center pl-[11px] pr-[9px] py-[9px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="css-ew64yg font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white">59</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container3 />
      <p className="css-ew64yg leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[20px] text-center uppercase">M</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center pl-[11px] pr-[9px] py-[9px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="css-ew64yg font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white">58</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container4 />
      <p className="css-ew64yg leading-[15px] not-italic relative shrink-0 text-[#6a7282] text-[20px] text-center uppercase">S</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <Frame />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[12px] tracking-[0.6px] uppercase">COMPRA $PSC</p>
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Icon />
        </div>
      </div>
      <p className="css-ew64yg leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Pagas con</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] items-start min-h-px min-w-px relative">
      <Frame6 />
      <p className="css-ew64yg leading-[normal] not-italic relative shrink-0 text-[36px] text-white">5.000,00</p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="bg-[#050511] h-[49.333px] relative rounded-[14px] shrink-0 w-[79px]" data-name="Number Input">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-bold leading-[16px] not-italic opacity-47 relative shrink-0 text-[17px] text-center text-white">USDT</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0f0d0d] relative rounded-[17px] shrink-0 w-full">
      <div className="flex flex-row items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[21px] items-end px-[15px] py-[21px] relative w-full">
          <Frame5 />
          <NumberInput />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 2.91667V11.0833" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p10793100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Icon1 />
      <p className="css-ew64yg leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Recibes</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] items-start min-h-px min-w-px relative">
      <Frame10 />
      <p className="css-ew64yg leading-[normal] not-italic relative shrink-0 text-[36px] text-white">12.250,00</p>
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="bg-[#050511] h-[49.333px] relative rounded-[14px] shrink-0 w-[79px]" data-name="Number Input">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-bold leading-[16px] not-italic relative shrink-0 text-[17px] text-center text-white">PSC</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame9 />
      <NumberInput1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[66.53px] top-0 w-[57.51px]" data-name="Text">
      <p className="css-ew64yg leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">$1,245,000</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[124.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg leading-[16px] left-[33.5px] not-italic text-[#99a1af] text-[12px] text-center top-[-1px] translate-x-[-50%]">Recaudado:</p>
        <Text1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[52.64px] top-0 w-[59.094px]" data-name="Text">
      <p className="css-ew64yg leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">$2,000,000</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[111.729px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg leading-[16px] left-[26px] not-italic text-[#99a1af] text-[12px] text-center top-[-1px] translate-x-[-50%]">Objetivo:</p>
        <Text3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Text />
        <Text2 />
      </div>
    </div>
  );
}

function PresaleWidget2() {
  return <div className="bg-[#01ffe7] h-[6.667px] shrink-0 w-full" data-name="PresaleWidget" />;
}

function Container7() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#f6339a] h-[6.667px] items-start overflow-clip relative rounded-[22369600px] shrink-0 to-[#9810fa] w-full" data-name="Container">
      <PresaleWidget2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] h-[12px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.667px] pl-[2.667px] pr-[152.135px] pt-[2.667px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
    </div>
  );
}

function PresaleWidget1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[32px] items-start relative shrink-0 w-full" data-name="PresaleWidget">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#0f0d0d] relative rounded-[17px] shrink-0 w-full">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[21px] items-start justify-end px-[15px] py-[21px] relative w-full">
          <Frame8 />
          <PresaleWidget1 />
        </div>
      </div>
    </div>
  );
}

function PresaleWidget() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="PresaleWidget">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[125.95px] size-[18px] top-[3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p35625ff0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2532d00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[397.333px]" data-name="Text">
      <Icon2 />
      <p className="absolute css-ew64yg font-bold leading-[24px] left-[212.45px] not-italic text-[16px] text-black text-center top-[-1.67px] translate-x-[-50%]">Conectar Wallet</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#01ffe7] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-px py-[17px] relative w-full">
          <Text4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p5eca500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 7.5H16.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center px-[99px] py-[11px] relative w-full">
          <Icon3 />
          <p className="css-ew64yg font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">Pagar con Tarjeta (Fiat)</p>
        </div>
      </div>
    </div>
  );
}

function PresaleWidget3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[118.667px] items-start relative shrink-0 w-full" data-name="PresaleWidget">
      <Button />
      <Button1 />
    </div>
  );
}

export default function GlassCard() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[40px] items-start px-[25px] py-[24px] relative rounded-[16px] size-full" data-name="GlassCard">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Heading />
      <PresaleWidget />
      <PresaleWidget3 />
    </div>
  );
}