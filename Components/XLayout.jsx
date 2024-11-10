function XLayout({ className }) {
  return (
    <div
      className={`content w-[30.5px] h-[29px] z-40 2xl:block xl:block lg:block md:block sm:hidden xs:hidden ${className}`}
    >
      <div className=" h-[6.5px] scale-[.8] translate-y-[10px] absolute top-0 left-0 w-[30px] rotate-[45deg] bg-iconsColor rounded-[1px]"></div>
      <div className=" h-[6.5px] scale-[.8] translate-y-[10px] absolute top-0 left-0 w-[30px] rotate-[135deg] bg-iconsColor rounded-[1px]"></div>
    </div>
  );
}
export default XLayout;
