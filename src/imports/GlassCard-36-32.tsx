import imgImage from "figma:asset/14bb6c8ca043393cf68fb2e756369dc5e9b04b44.png";
import imgSerboNetworkLogo1 from "figma:asset/e3a9875e60022da657a0d6766e0369eb5a4c18db.png";

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[361.615px]" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#00ffe6] text-[12px] tracking-[0.6px] uppercase">Creator</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 top-[22px] w-[361.615px]" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">Entidad Creadora</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[62px] w-[325.448px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn leading-[22.75px] left-0 not-italic text-[#99a1af] text-[14px] top-[-1px] w-[320px]">Serbo Network liderando la estrategia y emisión del token.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[107.5px] relative shrink-0 w-[361.615px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex h-[107.5px] items-start justify-between relative shrink-0 w-full" data-name="Features">
      <Container />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[720px] overflow-clip rounded-[22369600px] size-[43px] top-[41.5px]" data-name="Hero">
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Hero1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[361px] overflow-clip rounded-[22369600px] size-[43px] top-[21.5px]" data-name="Hero">
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[43px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Hero2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[532px] overflow-clip rounded-[22369600px] size-[43px] top-[-155px]" data-name="Hero">
      <Image2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[402px] relative rounded-[999px] shrink-0 w-full">
      <div className="absolute left-[305px] size-[439px] top-[-135.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 439 439">
          <circle cx="219.5" cy="219.5" id="Ellipse 2" r="219" stroke="var(--stroke-0, #101010)" strokeOpacity="0.9" />
        </svg>
      </div>
      <div className="absolute left-[calc(50%+142px)] size-[297px] top-[calc(50%-117px)] translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 297 297">
          <circle cx="148.5" cy="148.5" id="Ellipse 1" r="148" stroke="var(--stroke-0, #101010)" />
        </svg>
      </div>
      <div className="absolute h-[147px] left-[calc(50%+141.5px)] top-[calc(50%-117px)] translate-x-[-50%] translate-y-[-50%] w-[118px]" data-name="Serbo-Network-Logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.52%] left-0 max-w-none top-[-0.26%] w-[469.33%]" src={imgSerboNetworkLogo1} />
        </div>
      </div>
      <Hero />
      <Hero1 />
      <Hero2 />
    </div>
  );
}

export default function GlassCard() {
  return (
    <div className="bg-[rgba(1,255,231,0.02)] relative rounded-[16px] size-full" data-name="GlassCard">
      <div className="content-stretch flex flex-col gap-[64px] items-center overflow-clip px-[25px] py-[21px] relative rounded-[inherit] size-full">
        <Features />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(1,255,231,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}