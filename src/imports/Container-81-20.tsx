import imgPlata1 from "figma:asset/ff4c7438fb1b4a1ba5b98cf37a252a8685120d78.png";
import imgBronce1 from "figma:asset/2f6670d60dd5cc86dab83c47df4253843ecc98b3.png";
import imgOro1 from "figma:asset/e8d9edf8b7198cc8ba5090ca2e709ef02f67625d.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <div className="opacity-20 relative shrink-0 size-[80px]" data-name="plata 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlata1} />
      </div>
      <div className="relative shrink-0 size-[116px]" data-name="bronce 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBronce1} />
      </div>
      <div className="opacity-20 relative shrink-0 size-[80px]" data-name="oro 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOro1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0">
      <Frame />
      <p className="css-ew64yg font-bold leading-[normal] not-italic relative shrink-0 text-[32px] text-center text-white">NIVEL BRONCE</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[20px] text-center w-full">
      <p className="css-ew64yg font-bold relative shrink-0 text-white">Tienes 200 $PSC</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(255,255,255,0.43)]">Faltan 300 $PSC para el nivel Plata</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(217,217,217,0.1)] content-stretch flex flex-col h-[23px] items-start overflow-clip relative rounded-[72px] shrink-0 w-full">
      <div className="bg-[#01ffe7] h-[23px] shrink-0 w-[301px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.427px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-bold leading-[24px] left-[60px] not-italic text-[16px] text-black text-center top-[-1.67px] translate-x-[-50%]">Comprar más</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#01ffe7] h-[57.333px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_0px_20px_0px_rgba(1,255,231,0.2)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[0.667px] pr-[0.677px] py-[0.667px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[48px] items-center p-[50px] relative rounded-[30px] size-full" data-name="Container">
      <Frame2 />
      <Frame4 />
      <Button />
    </div>
  );
}