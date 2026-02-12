import imgPadelLogoHorizontal1 from "figma:asset/ac4637c17e39d796f6823439bbcc12c96c23f219.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[1414px] left-0 top-0 w-[2006px]" data-name="padel-logo-horizontal 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[100.71%] left-[-0.02%] max-w-none top-[-0.71%] w-[100.03%]" src={imgPadelLogoHorizontal1} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.5)] inset-0 to-black" />
        </div>
      </div>
    </div>
  );
}