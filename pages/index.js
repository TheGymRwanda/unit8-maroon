import Link from "../components/ui/Link";
import Svg from "../components/ui/Svg";

export default function Home() {
  return (
    <div className="pl-1.2813 ipad:pl-2.25 ipad:pr-2.4375 desktop:w-83 desktop:mx-auto tablet:px-3.85 desktop:px-0">
    <div className="ipad:flex space-y-14 ipad:items-baseline ipad:justify-between">
      <div className="w-11.625 ipad:mt-auto ipad:w-13.875 font-Neufile font-normal text-xl ipad:text-2xl text-black tracking-0.0125">
        Ape Unit GmbH
        Waldemarstraße 38,
        10999 Berlin
      </div>
      <div className="w-6.625">
        <Link style="gap-2" text="Twitter" arrow=<Svg /> />
        <Link style="gap-2" text="FaceBook" arrow=<Svg /> />
        <Link style="gap-2" text="LinkedIn" arrow=<Svg /> />
      </div>
      <p className="w-11.625  ipad:w-13.875 font-Neufile font-normal text-xl ipad:text-2xl text-black tracking-0.0125">Impressum / Privacy</p>
    </div>
  </div>
  );
}
