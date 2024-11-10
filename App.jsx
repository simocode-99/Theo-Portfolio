import HomePage from "./Components/HomePage";
import HLines from "./Components/HLines";
import XLayout from "./Components/XLayout";
import VLines from "./Components/VLine";

function App() {
  return (
    <div className="*:m-0 *:p-0 h-screen w-full scroll-smooth bg-backgroundColor">
      <HLines />
      <VLines />
      <XLayout className="absolute top-[95vh] left-[40px] -translate-x-[30%] -translate-y-[45%] " />
      <XLayout className="absolute top-[95vh] right-[40px] translate-x-[52%] -translate-y-[45%] " />
      <HomePage />
    </div>
  );
}

export default App;
