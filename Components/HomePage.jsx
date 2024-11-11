import TopBar from "./TopBar";
import Robot1 from "../assets/Robot 1.png";
import Robot2 from "../assets/Robot 2.png";

function HomePage() {
  return (
    <section className="h-screen w-full relative" id="homePage">
      <TopBar />
      <img
        src={Robot1}
        alt=""
        className="2xl:w-[386px] 2xl:h-[686px] xl:w-[386px] xl:h-[686px] md:w-[341px] md:h-[606px] 2xl:absolute 2xl:top-[95vh] 2xl:left-[45px] 2xl:-translate-y-[100%] 2xl:block xl:block lg:block md:hidden sm:hidden absolute top-[95vh] left-[40px] -translate-y-[100%] "
      />
      <img
        src={Robot2}
        alt=""
        className="2xl:w-[349px] 2xl:h-[699px] xl:w-[349px] xl:h-[699px] 2xl:top-[95vh] 2xl:right-[45px] 2xl:-translate-y-[100%] lg:right-[40px] md:top-[95vh] md:right-[30px] md:opacity-[.5] sm:opacity-[.5] md:w-[349px] md:h-[699px] sm:w-[349px] sm:h-[699px] absolute top-[95vh] right-[40px] -translate-y-[100%]"
      />
      <div className="InterfaceInfo text-center">
        <h2 className="text-[2rem] text-textColor">Hi There!</h2>
        <h1 className="text-textColor text-[40px] underline">
          <span className="text-[2rem] no-underline">I'm</span> Theo Code
        </h1>
        <p className="w-[475px] text-textColor text-[22px] text-center">
          I’m a front-end developer who’s all about creating smooth, responsive
          user interfaces with ReactJS and Tailwind CSS. I’m focused on building
          clean, intuitive designs that feel great to use. Always learning and
          pushing to make every project better than the last!
        </p>
      </div>
    </section>
  );
}
export default HomePage;
