import svgPaths from "./svg-r8cl9jfbh9";
import imgImageHeroBackground from "figma:asset/c149b844f16843a97cff37c04bf152399684e026.png";
import imgLogoBlack1 from "figma:asset/14bb6c8ca043393cf68fb2e756369dc5e9b04b44.png";

function ImageHeroBackground() {
  return (
    <div className="absolute h-[1100.5px] left-0 top-0 w-[1328.667px]" data-name="Image (Hero Background)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHeroBackground} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(0,0,0,0.6)] h-[1100.5px] left-0 top-0 w-[1328.667px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute bg-black h-[1100.5px] left-0 overflow-clip top-0 w-[1328.667px]" data-name="Container">
      <ImageHeroBackground />
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-center relative shrink-0">
      <div className="relative rounded-[44px] shrink-0 size-[43px]" data-name="logo-black 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full" src={imgLogoBlack1} />
      </div>
      <p className="css-ew64yg font-sans leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[18px] text-center tracking-[1.2px] uppercase">$PSC Presale</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[97.5px] relative shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-[672px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-sans leading-[32.5px] left-[336px] not-italic text-[#e5e7eb] text-[20px] text-center top-[-2px] translate-x-[-50%] w-[492px]">El primer ecosistema integral que conecta de forma única el entorno digital con el deporte</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[896px]" data-name="Container">
      <Frame />
      <p className="css-ew64yg font-sans font-bold leading-[90px] not-italic relative shrink-0 text-[72px] text-center text-white">Redefiniendo el deporte</p>
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96.573px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center tracking-[1.2px] uppercase">COMPRA $PSC</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[21.333px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Consolas:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white">29</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[37.333px] relative rounded-[10px] shrink-0 w-[37.135px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[8px] px-[8.667px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Consolas:Regular',sans-serif] leading-[20px] left-[4px] not-italic text-[#6a7282] text-[14px] text-center top-0 translate-x-[-50%] uppercase">D</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[52.833px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container8 />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[21.333px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Consolas:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white">23</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[37.333px] relative rounded-[10px] shrink-0 w-[37.135px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[8px] px-[8.667px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Consolas:Regular',sans-serif] leading-[20px] left-[4px] not-italic text-[#6a7282] text-[14px] text-center top-0 translate-x-[-50%] uppercase">H</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[52.833px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container10 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[21.333px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Consolas:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white">59</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[37.333px] relative rounded-[10px] shrink-0 w-[37.135px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[8px] px-[8.667px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Consolas:Regular',sans-serif] leading-[20px] left-[4px] not-italic text-[#6a7282] text-[14px] text-center top-0 translate-x-[-50%] uppercase">M</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[52.833px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container12 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[21.333px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Consolas:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white">58</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[37.333px] relative rounded-[10px] shrink-0 w-[37.135px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[8px] px-[8.667px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.698px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Consolas:Regular',sans-serif] leading-[20px] left-[4px] not-italic text-[#6a7282] text-[14px] text-center top-0 translate-x-[-50%] uppercase">S</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[52.833px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container14 />
        <Text7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[235.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container7 />
        <Container9 />
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[37.333px] items-center justify-between left-[24.67px] top-[24.67px] w-[400.667px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 3.75">
            <path d={svgPaths.p6cc8300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.42px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.833333 6.66667">
            <path d="M0.416667 6.25V0.416667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[22369600px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[53.333px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Pagas con</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Text8 />
    </div>
  );
}

function NumberInput() {
  return (
    <div className="h-[40px] relative shrink-0 w-[283.323px]" data-name="Number Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[36px] text-[rgba(255,255,255,0.3)]">4551</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex h-[18.667px] items-start opacity-50 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Arial:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">USDT</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#050511] h-[49.333px] relative rounded-[14px] shrink-0 w-[69.344px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[16px] px-[16.667px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[49.333px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <NumberInput />
      <Container19 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#0f0d0d] content-stretch flex flex-col gap-[8px] h-[107.333px] items-start left-[24.67px] pb-0 pt-[16px] px-[16px] rounded-[17px] top-[86px] w-[400.667px]" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[10px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.42px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.833333 6.66667">
            <path d="M0.416667 0.416667V6.25" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-14.29%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 3.75">
            <path d={svgPaths.p5ac5080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[22369600px] shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[39.979px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">Recibes</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-[16px] top-[16px] w-[65.979px]" data-name="Container">
      <Container22 />
      <Text10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[40px] relative shrink-0 w-[159.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[40px] left-[76.5px] not-italic text-[36px] text-center text-white top-[-3px] translate-x-[-50%]">91.020,00</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex h-[18.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Arial:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">PSC</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#050511] h-[49.333px] relative rounded-[14px] shrink-0 w-[58.521px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[16px] px-[16.667px] relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[49.333px] items-end justify-between left-[16px] top-[38px] w-[368.667px]" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[55.44px] top-[0.67px] w-[47.927px]" data-name="Text">
      <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white">$1,245,000</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[103.365px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[15px] left-[28px] not-italic text-[#99a1af] text-[10px] text-center top-[-1.33px] translate-x-[-50%]">Recaudado:</p>
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[13.333px] items-start left-[43.86px] top-[0.67px] w-[49.24px]" data-name="Text">
      <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-center text-white">$2,000,000</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[15px] relative shrink-0 w-[93.104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[15px] left-[22px] not-italic text-[#99a1af] text-[10px] text-center top-[-1.33px] translate-x-[-50%]">Objetivo:</p>
        <Text13 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return <div className="h-[6.667px] opacity-50 rounded-[22369600px] shadow-[0px_0px_10px_0px_rgba(1,255,231,0.3)] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(1.6952deg, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(1, 255, 231) 0%, rgb(1, 255, 231) 100%)" }} />;
}

function Container30() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] h-[12px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pl-[2.667px] pr-[140.74px] pt-[2.667px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[33px] items-start left-[16px] top-[111.33px] w-[368.667px]" data-name="Container">
      <Container27 />
      <Container30 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#0f0d0d] h-[160.333px] left-[24.67px] rounded-[17px] top-[203.33px] w-[400.667px]" data-name="Container">
      <Container21 />
      <Container23 />
      <Container26 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p35625ff0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2532d00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.427px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[24px] left-[60.5px] not-italic text-[16px] text-black text-center top-[-1.67px] translate-x-[-50%]">Conectar Wallet</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#01ffe7] h-[57.333px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_20px_0px_rgba(1,255,231,0.2)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative size-full">
          <Icon2 />
          <Text14 />
        </div>
      </div>
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

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[173.854px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[24px] left-[87.5px] not-italic text-[16px] text-center text-white top-[-1.67px] translate-x-[-50%]">Pagar con Tarjeta (Fiat)</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[53.333px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[0.667px] relative size-full">
          <Icon3 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[122.667px] items-start left-[24.67px] top-[379.67px] w-[400.667px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function PresaleWidget() {
  return (
    <div className="bg-black h-[527px] relative rounded-[16px] shrink-0 w-[450px]" data-name="PresaleWidget">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container4 />
      <Container15 />
      <Container20 />
      <Container32 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-center px-[192px] py-0 relative shrink-0" data-name="Container">
      <Container3 />
      <PresaleWidget />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[187px] relative size-full" data-name="Hero">
      <Container />
      <Container2 />
    </div>
  );
}