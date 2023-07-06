export default function Slide() {
  const slide = {
    image: "slider.svg",
    date: "26 ОКТЯБРЯ",
    name: "КАУШИНСКАЯ С.Ю",
    info: "ВРАЧ ОНКОЛОГ",
    title: "МЕДИЦИНА НА ЛАДОШКЕ: СТРЕСС И ОНКОЛОГИЯ",
    descr:
      "Мы запустили новый проект «Медицина на ладошке»: это серия бесплатных вебинаров от наших ведущих врачей.",
    btn: "Подробнее",
  };
  return (
    <div className="font-leksa flex flex-col-reverse mx-9 md:flex-row">
      <div className="min-w[45%]">
        <img className="w-full" src={slide.image} alt="slide" />
      </div>
      <div className=" bg-white min-w-[50%] lg:max-h-[470px]">
        <div className="font-roboto font-light bg-darkBlue text-white  lg:pl-10 lg:static lg:text-2xl md:static md:text-2xl text-sm absolute top-[350px] px-[32px] py-[11px]">
          {slide.date}
        </div>
        <div className="text-darkBlue lg:pl-10 pl-1 pt-[30px]">
          <div className="lg:block flex gap-3 sm:flex sm:gap-10">
            <div className="lg:text-2xl sm:text-base">{slide.name}</div>
            <div className="lg:text-base font-light lg:pt-[20px] text-sm sm:text-sm sm:pt-0">
              {slide.info}
            </div>
          </div>
          <div className="lg:text-3xl lg:pt-[60px] text-2xl pt-[20px] max-w-[400px] sm:text-2xl sm:pt-[20px]">
            {slide.title}
          </div>
          <div className="font-roboto font-light text-base pt-[30px] max-w-[400px]">
            {slide.descr}
          </div>
          <button className="font-roboto font-light text-white bg-bgBtn w-[150px] h-[30px] text-sm mt-[40px] mb-5">
            {slide.btn}
          </button>
        </div>
      </div>
    </div>
  );
}
