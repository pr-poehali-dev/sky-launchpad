const steps = [
  { num: "01", title: "Заявка", desc: "Напишите нам в Telegram — расскажите о питомце, маршруте и датах." },
  { num: "02", title: "Документы", desc: "Мы поможем оформить ветпаспорт, справки и разрешения для пересечения границы." },
  { num: "03", title: "Перевозка", desc: "Забираем питомца, бережно везём по маршруту с регулярными обновлениями для вас." },
  { num: "04", title: "Передача", desc: "Передаём питомца в пункте назначения живым, здоровым и довольным." },
];

export function Steps() {
  return (
    <section className="relative z-10 bg-white/5 backdrop-blur-sm py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40 text-center mb-4">
          Процесс
        </p>
        <h2 className="font-sentient text-4xl sm:text-5xl text-white text-center mb-16">
          Как это <i className="font-light">работает</i>
        </h2>

        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="flex items-start gap-8 py-8 border-b border-white/10 last:border-0"
            >
              <span className="font-sentient text-5xl text-white/10 leading-none shrink-0 w-16">
                {s.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-mono uppercase text-white text-sm tracking-widest">
                  {s.title}
                </h3>
                <p className="font-mono text-sm text-white/50 leading-relaxed max-w-lg">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
