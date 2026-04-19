import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "ShieldCheck",
    title: "Безопасность",
    desc: "Все животные перевозятся в сертифицированных переносках с вентиляцией. Ветеринарный контроль на каждом этапе.",
  },
  {
    icon: "Globe",
    title: "Вся Европа",
    desc: "Доставляем питомцев в Германию, Францию, Испанию, Польшу и ещё 20+ стран. С оформлением всех документов.",
  },
  {
    icon: "Clock",
    title: "Точно в срок",
    desc: "Строго соблюдаем маршрут и временные рамки. Вы получаете трекинг и уведомления на каждом этапе пути.",
  },
  {
    icon: "HeartHandshake",
    title: "Забота о питомце",
    desc: "Наши курьеры — настоящие зоолюбители. Кормление, выгул и уход включены в стоимость перевозки.",
  },
];

export function Features() {
  return (
    <section className="relative z-10 bg-black/80 backdrop-blur-sm py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40 text-center mb-4">
          Почему выбирают нас
        </p>
        <h2 className="font-sentient text-4xl sm:text-5xl text-white text-center mb-16">
          Всё для комфорта <br />
          <i className="font-light">вашего питомца</i>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-black/60 p-10 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-white/20">
                <Icon name={f.icon as "ShieldCheck"} size={20} className="text-white" />
              </div>
              <h3 className="font-mono uppercase text-white text-sm tracking-widest">
                {f.title}
              </h3>
              <p className="font-mono text-sm text-white/50 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
