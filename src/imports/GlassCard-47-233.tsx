import imgPaper1 from "figma:asset/c4a13dea5fae043146a7bb1e9a5758744c72a3f4.png";

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[297.333px]" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-sans font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#00ffe6] text-[12px] tracking-[0.6px] uppercase">Legal</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 top-[22px] w-[297.333px]" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-sans font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">Dirección Legal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[62px] w-[267.594px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-sans leading-[22.75px] left-[-0.33px] not-italic text-[#99a1af] text-[14px] top-[-0.83px] w-[286px]">Expertos en derecho tecnológico garantizando transparencia.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[107.5px] relative shrink-0 w-[297.333px]" data-name="Container">
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
    <div className="content-stretch flex h-[107.5px] items-start justify-between relative shrink-0 w-[345.333px]" data-name="Features">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="absolute h-[275px] left-1/2 top-0 translate-x-[-50%] w-[328px]" data-name="paper 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaper1} />
      </div>
    </div>
  );
}

export default function GlassCard() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="GlassCard">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Features />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(1,255,231,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}