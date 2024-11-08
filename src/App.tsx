import { useState } from "react";
import ChatLayout from "./layouts/ChatLayout";

function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <main
      className={`${
        dark === false ? "bg-white" : "bg-black"
      } h-[100vh] overflow-y-auto`}
    >
      <div className="lg:relative lg:h-[100vh]">
        <button
          className="hidden lg:block cursor-pointer lg:absolute lg:bottom-10 lg:right-10 "
          onClick={handleOpen}
        >
          <img
            src="/circleicon.svg"
            alt="Open Chat.U Icon"
            className={` ${
              open === false
                ? "lg:w-14 lg:pb-5 lg:hover:scale-110 lg:transition lg:duration-300  "
                : "lg:hidden"
            } `}
          />
        </button>

        <section
          className={`lg:absolute  lg:overflow-y-auto lg:h-[90vh] lg:mt-10 lg:shadow-2xl duration-300 lg:rounded-tl-3xl ${
            open === true ? "lg:right-0" : "lg:hidden"
          } `}
        >
          <ChatLayout
            handleOpen={handleOpen}
            open={open}
            handleDark={handleDark}
            dark={dark}
          />
        </section>

        <section className=" hidden lg:flex  flex-col items-start font-montserrat font-bold text-center p-20 ">
          <h2 className=" text-green text-2xl">Prueba técnica:</h2>
          <h3 className="text-2xl text-lightblue">
            Diseño y maquetado de chatbot
          </h3>
          <p
            className={`text-base mt-4 font-normal w-[700px] text-left ${
              dark === false ? "text-black" : "text-white"
            } `}
          >
            La siguiente es una prueba técnica donde se realizó el diseño
            completo para un chatbot, dirigido a estudiantes de biología.
            <br />
            Tomando colores relacionados con el campo de la investigación, la
            ciencia, tecnología y la biología, se creó un iso que represente
            tanto el campo de estudio como la comunicación.
            <br />
            Se maqueto una interfaz intuitiva, rápida de usar y fácil de leer,
            para así no generar distracción en el usuario.
            <br />
            El maquetado web está orientado a mobile first, entendiendo que en
            pantallas pequeñas, sería el mayor uso de la aplicación.
          </p>
        </section>
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
      </div>
    </main>
  );
}

export default App;
