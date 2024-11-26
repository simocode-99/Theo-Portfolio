import Github from "../Icons/Github";
import Figma from "../Icons/Figma";
import Illustrator from "../Icons/Illustrator";
import Photoshop from "../Icons/Photoshop";
import Git from "../Icons/Git";
import VsCode from "../Icons/VsCode";

function ToolsBar() {
  const IconsNameClassName = `text-[1.4rem] font-semibold`;
  const IconsClassName = `flex gap-[10px] cursor-pointer flex-grow items-center justify-center aniamtion-BarToolsAnimation relative left-[calc(100px * 8)] `;
  return (
    <nav className="w-[105vw] h-[60px] mt-[30px] px-[2.5vw] -translate-x-[2.5vw] bg-toolsBarColor -rotate-[2deg] text-iconsColor flex items-center justify-center flex-shrink text-[2rem] overflow-hidden image-">
      <div className={IconsClassName}>
        <Figma className={``} /> <h1 className={IconsNameClassName}>Figma</h1>
      </div>
      <div className={IconsClassName}>
        <VsCode className={``} /> <h1 className={IconsNameClassName}>VsCode</h1>
      </div>
      <div className={IconsClassName}>
        <Git className={``} /> <h1 className={IconsNameClassName}>Git</h1>
      </div>
      <div className={IconsClassName}>
        <Github className={``} /> <h1 className={IconsNameClassName}>GitHub</h1>
      </div>
      <div className={IconsClassName}>
        <Photoshop className={``} />
        <h1 className={IconsNameClassName}>Photoshop</h1>
      </div>
      <div className={IconsClassName}>
        <Illustrator className={``} />{" "}
        <h1 className={IconsNameClassName}>Illustrator</h1>
      </div>
    </nav>
  );
}
export default ToolsBar;
