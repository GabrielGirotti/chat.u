type FooterProps = {
  dark: boolean;
};

export default function Footer({ dark }: FooterProps) {
  return (
    <footer className="hidden p-20 lg:flex flex-col items-start font-montserrat  ">
      <p className="font-semibold text-lightblue">
        Realizado por Gabriel Girotti
      </p>
      <a
        className={`${
          dark === false ? "text-black" : "text-white"
        }  flex justify-center items-center gap-1`}
        href="https://github.com/GabrielGirotti/chat.u"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256"
          alt="Github Logo"
          className="w-5"
        />
        <p>Repositorio en GitHub</p>
      </a>
    </footer>
  );
}
