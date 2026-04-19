export function CtaBanner() {
  return (
    <section className="relative z-10 bg-black py-24 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="w-16 h-[1px] bg-white/20 mx-auto mb-12" />
        <h2 className="font-sentient text-4xl sm:text-5xl md:text-6xl text-white mb-6">
          Готовы отправить <br />
          <i className="font-light">питомца в путь?</i>
        </h2>
        <p className="font-mono text-sm text-white/50 mb-12 max-w-md mx-auto leading-relaxed">
          Напишите нам — и мы бесплатно проконсультируем по маршруту, документам и стоимости
        </p>
        <a
          href="https://t.me/perevozkapetts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono uppercase text-sm tracking-widest text-black bg-white px-10 py-4 hover:bg-white/80 transition-all duration-200 hover:scale-[1.02]"
          style={{ clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 calc(100% - 12px), 0 12px)" }}
        >
          Написать в Telegram
        </a>
        <div className="w-16 h-[1px] bg-white/20 mx-auto mt-12" />
      </div>
    </section>
  );
}
