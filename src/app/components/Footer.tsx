import React from 'react';
import imgImagePadelSportClubLogo from "figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png";
import imgImagePadelSportClub from "figma:asset/cf422f683fcd4a8eed14062d8cc2c68ff0331705.png";
import imgFooter from "figma:asset/ac4637c17e39d796f6823439bbcc12c96c23f219.png";

// --- Subcomponents ---

function ImagePadelSportClubLogo() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Image (Pádel Sport Club Logo)">
      <img alt="Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePadelSportClubLogo} />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[17px] items-center leading-[0] not-italic px-px relative text-center w-full">
          <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[40px] md:text-[64px] text-white tracking-[-1px] md:tracking-[-3px] max-w-[90%] md:w-[820px]">
            <p className="leading-[1.1] md:leading-[69.12px]">Inversión en Padel y tecnología web3</p>
          </div>
          <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#99a1af] text-[16px] max-w-[90%] md:w-[420px]">
            <p className="leading-[24px]">Únete a la revolución del Pádel 3.0. Inversión, deporte y tecnología en un solo lugar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <ImagePadelSportClubLogo />
      <Heading />
    </div>
  );
}

function DivCenter() {
  return (
    <div className="flex-[1_0_0] h-[400px] md:h-[562.22px] max-w-[1288px] min-h-px min-w-px relative" data-name="div.center">
      <Frame />
    </div>
  );
}

function Cta() {
  return (
    <div className="min-h-[400px] md:h-[648px] relative shrink-0 w-full" data-name="cta">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-4 md:px-[76px] py-[40px] relative size-full">
          <DivCenter />
        </div>
      </div>
    </div>
  );
}

function ImagePadelSportClub() {
  return (
    <div className="h-[40px] md:h-[52px] relative shrink-0 w-[180px] md:w-[248px]" data-name="Image (Pádel Sport Club)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="Padel Sport Club" className="absolute h-[127.03%] left-[0.31%] max-w-none top-[-13.51%] w-[99.75%]" src={imgImagePadelSportClub} />
      </div>
    </div>
  );
}

function FooterLink({ text, onClick, href }: { text: string, onClick?: () => void, href?: string }) {
  const content = (
    <div className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdbdbd] text-[14px] hover:text-white transition-colors">
      <p className="css-ew64yg leading-[1.2]">{text}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="content-stretch flex items-start max-w-[924px] overflow-clip pb-px pr-[1.63px] relative shrink-0">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="content-stretch flex items-start max-w-[924px] overflow-clip pb-px pr-[1.63px] relative shrink-0">
      {content}
    </button>
  );
}

function FooterLinks({ onShowStyleGuide }: { onShowStyleGuide?: () => void }) {
  return (
    <div className="content-stretch flex flex-wrap gap-[20px] md:gap-[32px] items-center justify-center md:justify-end min-h-px min-w-px pb-[10px] relative">
      <FooterLink text="Design System" href="/style-guide" />
      <FooterLink text="Privacidad" href="#" />
      <FooterLink text="Términos" href="#" />
      <FooterLink text="Cookies" href="#" />
    </div>
  );
}

function Frame2({ onShowStyleGuide }: { onShowStyleGuide?: () => void }) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[24px] items-center justify-between relative shrink-0 w-full max-w-[1196px]">
      <ImagePadelSportClub />
      <FooterLinks />
    </div>
  );
}

function Copyright() {
  return (
    <div className="flex flex-col font-normal justify-center leading-[0] min-w-full not-italic opacity-47 relative shrink-0 text-[#bdbdbd] text-[12px] md:text-[14px] text-center w-[min-content]">
      <p className="leading-[20px]">© 2026 Pádel Sport Club. Todos los derechos reservados.</p>
    </div>
  );
}

function FooterContent({ onShowStyleGuide }: { onShowStyleGuide?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center md:items-start relative shrink-0 w-full max-w-[1196px]">
      <Frame2 />
      <Copyright />
    </div>
  );
}

function FooterBottom({ onShowStyleGuide }: { onShowStyleGuide?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-6 md:p-[48px] relative w-full">
          <FooterContent />
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export const Footer = ({ onShowStyleGuide }: { onShowStyleGuide?: () => void } = {}) => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-black overflow-hidden" data-name="footer">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full md:h-[100.71%] left-0 md:left-[-0.02%] max-w-none top-0 md:top-[-0.71%] w-full md:w-[100.03%] object-cover opacity-30 md:opacity-100" src={imgFooter} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-9.28937e-09deg, rgba(0, 0, 0, 0) 65.023%, rgb(0, 0, 0) 100.03%), linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgb(0, 0, 0) 100%)" }} />
      </div>
      <Cta />
      <FooterBottom />
    </div>
  );
};