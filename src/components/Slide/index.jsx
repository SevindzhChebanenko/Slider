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
    <div>
      <img src={slide.image} />
      <div>{slide.date}</div>
      <div>{slide.name}</div>
      <div>{slide.info}</div>
      <div>{slide.title}</div>
      <div>{slide.descr}</div>
      <button>{slide.btn}</button>
      <img src="vector.svg" />
    </div>
  );
}
