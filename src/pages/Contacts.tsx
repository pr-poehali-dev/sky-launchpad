import { Header } from "@/components/Header";

const BG_IMAGE = "https://cdn.poehali.dev/projects/eae76cf4-4efe-4f5a-9702-5f9d6d5f8d0f/files/aac30b32-4c65-4039-a223-f698d3eaf6ae.jpg";

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
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)" }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-svh">
        <Header />

        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-white mb-8">
            Наши контакты
          </h1>
          <p className="font-mono text-lg sm:text-xl text-foreground/70 mb-4">
            Отписать в телеграмм
          </p>
          <a
            href="https://t.me/petsperevozka"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-primary text-lg sm:text-xl hover:text-primary/80 transition-colors duration-150"
          >
            https://t.me/petsperevozka
          </a>
        </div>
      </div>
    </div>
  );
}
