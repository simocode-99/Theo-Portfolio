import ToolsBar from "./ToolsBar";
import Websites from "./Websites";

function PortfolioPage() {
  return (
    <section id="portfolioPage" className="portfolioPage h-[100vh] w-full bg-backgroundColor absolute top-[100vh] left-0 overflow-x-hidden">
      <ToolsBar />
      <Websites />
    </section>
  );
}
export default PortfolioPage;
