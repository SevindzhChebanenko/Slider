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
    <div className="flex flex-col-reverse mx-9 md:flex-row">
      <img src={slide.image} alt="slide"/>
      <div className="bg-white w-[600px] h-[462px]">
        <div className="bg-darkBlue text-white pl-10 text-base">{slide.date}</div>
        <div className="text-darkBlue pl-10 pt-[30px]">
          <div className="text-base">{slide.name}</div>
          <div className="text-xs  pt-[20px]">{slide.info}</div>
          <div className="text-2xl pt-[60px] w-[400px]">{slide.title}</div>
          <div className="text-xs pt-[30px] w-[450px]">{slide.descr}</div>
          <button className="text-white bg-bgBtn w-[150px] h-[30px] text-sm/[14px] mt-[40px]">{slide.btn}</button>
        </div>
      </div>
    </div>
  );
}
