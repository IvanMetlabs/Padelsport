import imgImageNivelPlata from "figma:asset/ff4c7438fb1b4a1ba5b98cf37a252a8685120d78.png";
import imgImageNivelBronce from "figma:asset/2f6670d60dd5cc86dab83c47df4253843ecc98b3.png";
import imgImageNivelOro from "figma:asset/e8d9edf8b7198cc8ba5090ca2e709ef02f67625d.png";
import { imgFrame5 } from "./svg-9t7qh";

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[21px] left-[384.6px] not-italic text-[#00ffe6] text-[14px] text-center top-0 tracking-[1.2px] uppercase">Utility</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[40px] left-[383.8px] not-italic text-[36px] text-center text-white top-[0.5px] tracking-[-1px]">Membresía Gamificada</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[26px] left-[384.43px] not-italic text-[#99a1af] text-[16px] text-center top-[-0.5px] w-[767px] whitespace-pre-wrap">{`Hemos sustituido el concepto técnico de "staking" por un sistema de Membresía por niveles basada en los golpes del pádel para incentivar la pertenencia.`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[153px] items-start relative shrink-0 w-[768px]" data-name="Container">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function ImageNivelPlata() {
  return (
    <div className="relative shrink-0 size-[353.119px]" data-name="Image (Nivel Plata)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNivelPlata} />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-[353.119px]" data-name="Container">
      <ImageNivelPlata />
    </div>
  );
}

function ImageNivelBronce() {
  return (
    <div className="relative shrink-0 size-[374.793px]" data-name="Image (Nivel Bronce)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNivelBronce} />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-[374.793px]" data-name="Container">
      <ImageNivelBronce />
    </div>
  );
}

function ImageNivelOro() {
  return (
    <div className="absolute left-[266.01px] size-[443.696px] top-[0.85px]" data-name="Image (Nivel Oro)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageNivelOro} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[482.385px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-362.4px_-325.4px] mask-size-[1671.8px_702.8px] top-0 w-[975.909px]" style={{ maskImage: `url('${imgFrame5}')` }}>
      <div className="absolute flex items-center justify-center left-[532.49px] size-[443.416px] top-[17.91px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "522" } as React.CSSProperties}>
        <div className="flex-none rotate-[17.61deg]">
          <Container2 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[482.385px] top-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "522" } as React.CSSProperties}>
        <div className="flex-none rotate-[-20.52deg]">
          <Container3 />
        </div>
      </div>
      <ImageNivelOro />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[340px] overflow-clip relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Bold',sans-serif] gap-[13px] items-center leading-[normal] min-h-px min-w-px not-italic relative text-center w-full whitespace-pre-wrap" data-name="title">
      <p className="relative shrink-0 text-[36px] text-white w-full">Bandeja</p>
      <p className="relative shrink-0 text-[#ffd700] text-[24px] tracking-[0.7px] uppercase w-full">+100 PSC</p>
    </div>
  );
}

function List() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[10px] shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#413a3a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[13.2px] items-start leading-[20px] not-italic p-[24px] relative text-[14px] text-white w-full whitespace-pre-wrap">
        <p className="relative shrink-0 w-full">{` Acceso básico`}</p>
        <p className="relative shrink-0 w-full">{` Descuentos en marcas`}</p>
        <p className="relative shrink-0 w-full">{` Acceso al videojuego`}</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(13,13,13,0)] h-full min-h-px min-w-px relative rounded-[16px] to-[#171c17]">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-[16px] py-[33px] relative size-full">
        <Title />
        <List />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Bold',sans-serif] gap-[13px] items-center leading-[normal] min-h-px min-w-px not-italic relative text-center w-full whitespace-pre-wrap" data-name="title">
      <p className="relative shrink-0 text-[36px] text-white w-full">Smash</p>
      <p className="relative shrink-0 text-[#ffd700] text-[24px] tracking-[0.7px] uppercase w-full">+1.000 PSC</p>
    </div>
  );
}

function List1() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[10px] shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#413a3a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[13.2px] items-start leading-[20px] not-italic p-[24px] relative text-[14px] text-white w-full whitespace-pre-wrap">
        <p className="relative shrink-0 w-full">{` Experiencias exclusivas`}</p>
        <p className="relative shrink-0 w-full">{` Clínicas profesionales`}</p>
        <p className="relative shrink-0 w-full">{` Mayor participación`}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]" style={{ backgroundImage: "linear-gradient(179.772deg, rgba(13, 13, 13, 0) 0.16134%, rgb(64, 69, 10) 144.42%)" }}>
      <div className="content-stretch flex flex-col gap-[15px] items-start px-[16px] py-[33px] relative size-full">
        <Title1 />
        <List1 />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Bold',sans-serif] gap-[13px] items-center leading-[normal] min-h-px min-w-px not-italic relative text-center w-full whitespace-pre-wrap" data-name="title">
      <p className="relative shrink-0 text-[36px] text-white w-full">Víbora</p>
      <p className="relative shrink-0 text-[#ffd700] text-[24px] tracking-[0.7px] uppercase w-full">+500 PSC</p>
    </div>
  );
}

function List2() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[10px] shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#413a3a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[13.2px] items-start leading-[20px] not-italic p-[24px] relative text-[14px] text-white w-full whitespace-pre-wrap">
        <p className="relative shrink-0 w-full">{` Prioridad reservas pistas`}</p>
        <p className="relative shrink-0 w-full">{` Mejores recompensas`}</p>
        <p className="relative shrink-0 w-full">{` Contenido premium`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(13,13,13,0)] h-full min-h-px min-w-px relative rounded-[16px] to-[#2c2c2c]">
      <div className="content-stretch flex flex-col gap-[15px] items-start px-[16px] py-[33px] relative size-full">
        <Title2 />
        <List2 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[385px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[24px] relative w-full">
          <Container1 />
          <Frame />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start px-[72px] py-[80px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}