import WebsiteArticle from "./WebsiteArticle";

function Websites() {
  return (
    <div className="w-[70dvw] h-[525px] relative top-[80px] mx-auto gap-[25px] flex flex-wrap justify-center after:content[] after:absolute after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:bg-selectedPage after:w-[500px] after:h-[93px] after:blur-[170px] z-[2]">
      <WebsiteArticle id={1} imgSrc={``} />
      <WebsiteArticle id={2} imgSrc={``} />
      <WebsiteArticle id={3} imgSrc={``} />
      <WebsiteArticle id={4} imgSrc={``} />
      <WebsiteArticle id={5} imgSrc={``} />
      <WebsiteArticle id={6} imgSrc={``} />
    </div>
  );
}
export default Websites;
