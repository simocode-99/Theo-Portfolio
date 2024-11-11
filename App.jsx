import HomePage from "./Components/HomePage";
import HLines from "./Components/HLines";
import XLayout from "./Components/XLayout";
import VLines from "./Components/VLine";

function App() {
  return (
    <div className="*:m-0 *:p-0 h-screen w-full scroll-smooth bg-backgroundColor">
      <HLines />
      <VLines />
      <XLayout className="absolute 2xl:top-[95vh] 2xl:left-[45px] 2xl:-translate-x-[50%] 2xl:-translate-y-[45%] xl:top-[95vh] xl:left-[40px] xl:-translate-x-[45%] xl:-translate-y-[45%] lg:top-[95vh] lg:left-[40px] lg:-translate-x-[50%] lg:-translate-y-[45%] md:top-[95vh] md:left-[30px] md:-translate-x-[50%] md:-translate-y-[45%]" />
      <XLayout className="absolute 2xl:top-[95vh] 2xl:right-[45px] 2xl:translate-x-[50%] 2xl:-translate-y-[45%] xl:top-[95vh] xl:right-[40px] xl:translate-x-[50%] xl:-translate-y-[45%] lg:top-[95vh] lg:right-[40px] lg:translate-x-[50%] lg:-translate-y-[45%] md:top-[95vh] md:right-[30px] md:translate-x-[50%] md:-translate-y-[45%]" />
      <HomePage />
    </div>
  );
}

export default App;
