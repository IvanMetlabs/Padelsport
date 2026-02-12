import svgPaths from "./svg-n8ftrq1ngx";
import imgImageZarappsGame from "figma:asset/1e9411784a9d3c507c948eb51fcccc51be234aaf.png";

function Container2() {
  return (
    <div className="h-[28px] relative shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-sans font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">Padel Game 2026</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-sans leading-[15px] left-0 not-italic text-[10px] text-white top-[-1.33px]">iOS</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-[24.333px] relative rounded-[4px] shrink-0 w-[32.615px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8.667px] pr-[0.667px] py-[0.667px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.646px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-sans leading-[15px] left-0 not-italic text-[10px] text-white top-[-1.33px]">Android</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] h-[24.333px] relative rounded-[4px] shrink-0 w-[52.979px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8.667px] pr-[0.667px] py-[0.667px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[60.333px] relative shrink-0 w-[146.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 9.16667H8.33333" id="Vector" stroke="var(--stroke-0, #00FFE6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #00FFE6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 10H12.5083" id="Vector_3" stroke="var(--stroke-0, #00FFE6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 8.33333H15.0083" id="Vector_4" stroke="var(--stroke-0, #00FFE6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fcc8f00} id="Vector_5" stroke="var(--stroke-0, #00FFE6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(1,255,230,0.2)] relative rounded-[22369600px] shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(1,255,230,0.4)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.667px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[60.333px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container6 />
    </div>
  );
}

function ImageZarappsGame() {
  return (
    <div className="absolute content-stretch flex flex-col h-[464px] items-start left-[87px] overflow-clip p-[40px] rounded-[9px] top-[189.67px] w-[624px]" data-name="Image (Zarapps Game)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[9px] size-full" src={imgImageZarappsGame} />
        <div className="absolute inset-0 rounded-[9px]" style={{ backgroundImage: "linear-gradient(3.46435deg, rgba(0, 0, 0, 0) 3.7642%, rgb(0, 0, 0) 92.974%)" }} />
      </div>
      <Container />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-t from-[#050511] h-[622.667px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(5,5,17,0.4)] w-[758.667px]" data-name="Container" />;
}

function Features() {
  return (
    <div className="absolute h-[622.667px] left-0 top-0 w-[758.667px]" data-name="Features">
      <ImageZarappsGame />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[694.667px]" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-sans font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#00ffe6] text-[12px] tracking-[0.6px] uppercase">Partner</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 top-[24px] w-[694.667px]" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-sans font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">Zarapps Games</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[64px] w-[448px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-sans leading-[22.75px] left-0 not-italic text-[#99a1af] text-[14px] top-[-1px] w-[436px]">Partners en el desarrollo del videojuego oficial para Android e iOS, con un objetivo de +1 millón de descargas.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[109.5px] relative shrink-0 w-[694.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Features1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[622.667px] items-start justify-between left-0 pl-[32px] pt-[32px] top-0 w-[758.667px]" data-name="Features">
      <Container8 />
    </div>
  );
}

export default function GlassCard() {
  return (
    <div className="bg-[#030d0c] border-[#0d6059] border-[0.667px] border-solid overflow-clip relative rounded-[16px] size-full" data-name="GlassCard">
      <Features />
      <Features1 />
    </div>
  );
}