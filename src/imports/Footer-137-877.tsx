import imgImagePadelSportClubLogo from "figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png";
import imgImagePadelSportClub from "figma:asset/cf422f683fcd4a8eed14062d8cc2c68ff0331705.png";
import imgFooter from "figma:asset/ac4637c17e39d796f6823439bbcc12c96c23f219.png";

function ImagePadelSportClubLogo() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Image (Pádel Sport Club Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePadelSportClubLogo} />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[17px] items-center leading-[0] not-italic px-px relative text-center w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[64px] text-white tracking-[-3px] w-[820px]">
            <p className="css-4hzbpn leading-[69.12px]">Inversión en Padel y tecnología web3</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#99a1af] text-[16px] w-[420px]">
            <p className="css-4hzbpn leading-[24px]">Únete a la revolución del Pádel 3.0. Inversión, deporte y tecnología en un solo lugar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-center left-[calc(50%-0.33px)] top-[calc(50%-0.33px)] translate-x-[-50%] translate-y-[-50%]">
      <ImagePadelSportClubLogo />
      <Heading />
    </div>
  );
}

function DivCenter() {
  return (
    <div className="flex-[1_0_0] h-[562.22px] max-w-[1288px] min-h-px min-w-px relative" data-name="div.center">
      <Frame />
    </div>
  );
}

function Cta() {
  return (
    <div className="h-[648px] relative shrink-0 w-full" data-name="cta">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[76px] py-[40px] relative size-full">
          <DivCenter />
        </div>
      </div>
    </div>
  );
}

function ImagePadelSportClub() {
  return (
    <div className="h-[52px] relative shrink-0 w-[248px]" data-name="Image (Pádel Sport Club)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[127.03%] left-[0.31%] max-w-none top-[-13.51%] w-[99.75%]" src={imgImagePadelSportClub} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start max-w-[924px] overflow-clip pb-px pr-[1.63px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdbdbd] text-[14px]">
        <p className="css-ew64yg leading-[1.2]">Design System</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start max-w-[924px] overflow-clip pb-px pr-[1.63px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdbdbd] text-[14px]">
        <p className="css-ew64yg leading-[1.2]">Privacidad</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start max-w-[924px] overflow-clip pb-px pr-[3.64px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdbdbd] text-[14px]">
        <p className="css-ew64yg leading-[1.2]">Términos</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start max-w-[924px] overflow-clip pb-px pr-[6.11px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdbdbd] text-[14px]">
        <p className="css-ew64yg leading-[1.2]">Cookies</p>
      </div>
    </div>
  );
}

function DivWNodeEf19291E4410C7235E71Fbedf87F33Fb4Eb8139F() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center justify-end min-h-px min-w-px pb-[10px] relative" data-name="div#w-node-ef19291e-4410-c723-5e71-fbedf87f33fb-4eb8139f">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[1196px]">
      <ImagePadelSportClub />
      <DivWNodeEf19291E4410C7235E71Fbedf87F33Fb4Eb8139F />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0">
      <Frame2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic opacity-47 relative shrink-0 text-[#bdbdbd] text-[14px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">© 2026 Pádel Sport Club. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[48px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="footer">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.71%] left-[-0.02%] max-w-none top-[-0.71%] w-[100.03%]" src={imgFooter} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-9.28937e-09deg, rgba(0, 0, 0, 0) 65.023%, rgb(0, 0, 0) 100.03%), linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%)" }} />
      </div>
      <Cta />
      <Footer1 />
    </div>
  );
}