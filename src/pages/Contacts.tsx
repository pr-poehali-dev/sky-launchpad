import { Header } from "@/components/Header";

const BG_IMAGE = "https://cdn.poehali.dev/projects/eae76cf4-4efe-4f5a-9702-5f9d6d5f8d0f/files/9e727769-0975-48ab-97ba-e40117e37bf6.jpg";

export default function Contacts() {
  return (
    <div className="relative min-h-svh flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="background"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)" }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-svh">
        <Header />

        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          {/* Декоративная линия сверху */}
          <div className="w-16 h-[2px] bg-[#EBB800] mb-10" />

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-white mb-12 tracking-tight">
            Контакты компании
          </h1>

          {/* Кнопки */}
          <div className="flex flex-col gap-5 w-full max-w-xs">
            <a
              href="https://t.me/petsperevozka"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 bg-[#EBB800] text-black border-2 border-black font-mono uppercase text-sm tracking-widest font-bold transition-all duration-200 hover:bg-[#EBB800]/80 hover:scale-[1.02]"
              style={{ clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 calc(100% - 12px), 0 12px)" }}
            >
              Мы в телеграмме
            </a>

            <a
              href="https://t.me/perevozkapetts"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 bg-[#EBB800] text-black border-2 border-black font-mono uppercase text-sm tracking-widest font-bold transition-all duration-200 hover:bg-[#EBB800]/80 hover:scale-[1.02]"
              style={{ clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 calc(100% - 12px), 0 12px)" }}
            >
              Наши отзывы
            </a>
          </div>

          {/* Подпись */}
          <p className="font-mono text-sm text-white/50 mt-10 tracking-wide">
            Уточняйте подробности у менеджера в Telegram
          </p>

          {/* Декоративная линия снизу */}
          <div className="w-16 h-[2px] bg-[#EBB800] mt-10" />
        </div>
      </div>
    </div>
  );
}