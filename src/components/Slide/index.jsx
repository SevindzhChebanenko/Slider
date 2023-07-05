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
        <img src={slide.image} alt="slide" />
      </div>
      <div className=" bg-white min-w-[50%] lg:max-h-[462px] md:min-w-[60%]">
        <div className="font-roboto font-light bg-darkBlue text-white py-1 pl-10 text-2xl">
          {slide.date}
        </div>
        <div className="text-darkBlue pl-10 pt-[30px]">
          <div className="text-2xl">{slide.name}</div>
          <div className="text-base font-light pt-[20px]">{slide.info}</div>
          <div className="text-3xl pt-[60px] max-w-[400px]">{slide.title}</div>
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
