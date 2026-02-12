import imgFreepikTalk470071 from "figma:asset/312ed84077dbdf46c9c36738bc96ef89d8e60ab6.png";

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[210.74px]" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-bold leading-[16px] min-h-px min-w-px not-italic relative text-[#00ffe6] text-[12px] tracking-[0.6px] uppercase">Tech</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-0 top-[22px] w-[210.74px]" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-bold leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">Tecnología</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[62px] w-[189.656px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn leading-[22.75px] left-0 not-italic text-[#99a1af] text-[14px] top-[-1px] w-[155px]">Infraestructura Web3 por Metlabs.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[107.5px] relative shrink-0 w-[210.74px]" data-name="Container">
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
      <div className="absolute left-[82px] opacity-33 size-[291px] top-[0.5px]" data-name="freepik__talk__47007 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreepikTalk470071} />
      </div>
      <div className="absolute flex items-center justify-center left-[18px] size-[73px] top-[55.5px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="opacity-33 relative size-[73px]" data-name="freepik__talk__47007 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreepikTalk470071} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlassCard() {
  return (
    <div className="bg-[rgba(1,255,231,0.02)] relative rounded-[16px] size-full" data-name="GlassCard">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Features />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(1,255,231,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}