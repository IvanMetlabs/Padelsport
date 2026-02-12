import svgPaths from "./svg-jz3nhmvw4k";
import imgImagePadelSportClub from "figma:asset/cf422f683fcd4a8eed14062d8cc2c68ff0331705.png";

function ImagePadelSportClub() {
  return (
    <div className="h-[36px] relative shrink-0 w-[173px]" data-name="Image (Pádel Sport Club)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[127.03%] left-[0.31%] max-w-none top-[-13.51%] w-[99.75%]" src={imgImagePadelSportClub} />
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#00ffe6] h-[2px] left-0 top-[22px] w-0" data-name="Text" />;
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.865px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1.33px]">Visión</p>
      <Text />
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#00ffe6] h-[2px] left-0 top-[22px] w-0" data-name="Text" />;
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.479px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1.33px]">Tokenomics</p>
      <Text1 />
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#00ffe6] h-[2px] left-0 top-[22px] w-0" data-name="Text" />;
}

function Link2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.427px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1.33px]">Roadmap</p>
      <Text2 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[22369600px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center px-[33px] py-[9px] relative">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2949e900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22e64900} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[104.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[20px] left-[52px] not-italic text-[14px] text-black text-center top-[-1.33px] translate-x-[-50%]">Conectar Wallet</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00ffe6] h-[41.333px] relative rounded-[14px] shrink-0 w-[169.833px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(1,255,230,0.5)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[20.667px] pr-[0.667px] py-[0.667px] relative size-full">
        <Icon />
        <Text3 />
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between pr-[0.01px] relative size-full" data-name="Navbar">
      <ImagePadelSportClub />
      <Container />
      <Button />
    </div>
  );
}