import svgPaths from "./svg-nbw3qw3f35";
import imgImageSZ from "figma:asset/da39a5bddb0633611431baad5d771a5ea2364afe.png";
import imgImageDiagonal from "figma:asset/5526274a3f9590a69afb4c761af3417fa21af54f.png";
import imgFrame9 from "figma:asset/90e919ed0d4e7f2c6ef4b72fe2f8998ae8c1fdfb.png";
import imgGame from "figma:asset/3b9e3e34356c873a87e8ea668e669ad165fd3742.png";
import imgGame1 from "figma:asset/a93fb7dd965e5848491705a8308d710afa6a4343.png";
import imgImage from "figma:asset/c4a13dea5fae043146a7bb1e9a5758744c72a3f4.png";
import imgImage5 from "figma:asset/6a05a2a0f6e828fa14f56cbc7f8d93de86892475.png";
import imgSerboNetworkLogo1 from "figma:asset/e3a9875e60022da657a0d6766e0369eb5a4c18db.png";

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Container">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Bold',sans-serif] leading-[21px] min-h-px min-w-px relative text-[#00ffe6] text-[14px] tracking-[1.2px] uppercase">AUTORIDAD Y ALIANZAS CLAVE</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[111.88500213623047%] relative shrink-0 text-[24px] text-white w-[615px]">La credibilidad de Pádel Sport Club se sustenta en alianzas con líderes de la industria española y global.</p>
    </div>
  );
}

function ImageSZ() {
  return (
    <div className="h-[46px] opacity-80 relative shrink-0 w-[78px]" data-name="Image (S&Z)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageSZ} />
    </div>
  );
}

function ImageDiagonal() {
  return (
    <div className="h-[26px] opacity-80 relative shrink-0 w-[107px]" data-name="Image (Diagonal)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.45%] left-[0.25%] max-w-none top-[-1.46%] w-full" src={imgImageDiagonal} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <ImageSZ />
      <ImageDiagonal />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Bold',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white whitespace-pre-wrap">Academias de Élite</p>
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[451px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgFrame9} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[rgba(0,0,0,0.67)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[32px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[rgba(255,255,255,0.12)] items-center justify-center px-[27.126px] py-[12.715px] relative rounded-[56.795px] shrink-0 to-[rgba(153,153,153,0.12)]">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[27.126px] not-italic relative shrink-0 text-[16.954px] text-white">Videojuego en desarrollo</p>
    </div>
  );
}

function Game() {
  return (
    <div className="flex-[1_0_0] h-[341px] min-h-px min-w-px relative rounded-[32px]" data-name="GAME">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-white inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgGame} />
        <div className="absolute bg-[rgba(0,0,0,0.56)] inset-0 rounded-[32px]" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-white w-full whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-full">Ecosistema integral</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[179.25999450683594%] opacity-62 relative shrink-0 text-[16px] w-full">El ecosistema se estructura mediante el token PSC</p>
    </div>
  );
}

function Game1() {
  return (
    <div className="flex-[1_0_0] h-[341px] min-h-px min-w-px relative rounded-[32px]" data-name="GAME">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute inset-0 rounded-[32px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 255, 230, 0) 29.933%, rgb(0, 255, 230) 172.29%), linear-gradient(90deg, rgb(13, 13, 13) 0%, rgb(13, 13, 13) 100%)" }} />
        <div className="absolute inset-0 overflow-hidden rounded-[32px]">
          <img alt="" className="absolute h-[157.84%] left-[-88.99%] max-w-none top-[13.05%] w-[252.85%]" src={imgGame1} />
        </div>
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[330px] left-[-17px] top-[0.5px] w-[393px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.07%] left-0 max-w-none top-[-0.04%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <Image />
    </div>
  );
}

function Game2() {
  return (
    <div className="bg-[#001614] flex-[1_0_0] h-[341px] min-h-px min-w-px relative rounded-[32px]" data-name="GAME">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
          <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full whitespace-pre-wrap">Dirección Legal</p>
          <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[179.25999450683594%] not-italic opacity-62 relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">Expertos en derecho tecnológico garantizando transparencia.</p>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[26px] items-start relative shrink-0 w-full">
      <Game />
      <Game1 />
      <Game2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[26px] h-[87px] items-center py-[9px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#404040] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[179.25999450683594%] min-h-px min-w-px not-italic relative text-[24px] text-white whitespace-pre-wrap">En el desarrollo de la aplicación mobile</p>
      <div className="h-[60px] relative shrink-0 w-[120px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[26px] h-[88px] items-center py-[9px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#404040] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[179.25999450683594%] min-h-px min-w-px not-italic relative text-[24px] text-white whitespace-pre-wrap">Entidad creadora</p>
      <div className="h-[64px] relative shrink-0 w-[240px]" data-name="Serbo-Network-Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSerboNetworkLogo1} />
      </div>
    </div>
  );
}

function LogotipoDefaultWhite() {
  return (
    <div className="h-[30.667px] relative shrink-0 w-[184px]" data-name="Logotipo/Default/white">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 30.6667">
        <g id="Logotipo/Default/white">
          <g id="Vector">
            <path d={svgPaths.p112c70b0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2165ca00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc479480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8d36300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20157600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a6ca400} fill="#A260F6" />
            <path d={svgPaths.p31526a70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2cb68130} fill="var(--fill-0, white)" />
            <path d={svgPaths.p4d47be0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p309ec800} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[26px] h-[87px] items-center py-[9px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#404040] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[179.25999450683594%] min-h-px min-w-px not-italic relative text-[24px] text-white whitespace-pre-wrap">Infraestructura Web3</p>
      <LogotipoDefaultWhite />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Frame4 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start px-[72px] py-[96px] relative size-full" data-name="Section">
      <Container />
    </div>
  );
}