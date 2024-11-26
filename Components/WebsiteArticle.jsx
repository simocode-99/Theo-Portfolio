export default function WebsiteArticle({ id, imgSrc }) {
  return (
    <article className="w-[350px] h-[250px] z-10 bg-topBarColor/50 backdrop-blur-[10px] flex flex-col justify-evenly rounded-[10px] px-[20px] py-[5px] border border-iconsColor/20">
      <div className="img-article border w-[100%] bg-iconsColor h-[70%] rounded-[13px] mx-auto">
        {/* <img src={imgSrc} alt="Website Article" /> */}
      </div>
      <p className="text-textColor text-[1.3rem] font-semibold translate-x-[7px]">
        Website {id}
      </p>
    </article>
  );
}
