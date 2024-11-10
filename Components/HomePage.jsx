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
        className="2xl:w-[349px] 2xl:h-[699px] xl:w-[349px] xl:h-[699px] md:w-[303] md:h-[607px] 2xl:absolute 2xl:top-[95vh] 2xl:right-[45px] 2xl:-translate-y-[100%] absolute top-[95vh] right-[40px] -translate-y-[100%]"
      />
    </section>
  );
}
export default HomePage;
