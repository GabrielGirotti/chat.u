import { useState } from "react";
import ChatLayout from "./layouts/ChatLayout";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <main className="lg:relative lg:h-[100vh]">
        <div
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
        </div>

        <section
          className={`lg:absolute  lg:overflow-y-auto lg:h-[90vh] lg:mt-10 lg:shadow-2xl duration-300 lg:rounded-t-3xl ${
            open === true ? "lg:right-0" : "lg:hidden"
          } `}
        >
          <ChatLayout handleOpen={handleOpen} open={open} />
        </section>

        <div className=" hidden lg:flex  flex-col items-start font-montserrat font-bold text-white text-center p-20 ">
          <h2 className=" text-green text-2xl">Prueba técnica:</h2>
          <h3 className="text-2xl">Diseño y maquetado de chatbot</h3>
          <p className="text-base mt-4 font-normal w-[700px] text-left">
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
        </div>
        <footer className="hidden p-20 lg:flex flex-col items-start font-montserrat  ">
          <p className="font-semibold text-green">
            Realizado por Gabriel Girotti
          </p>
          <a
            className=" text-white"
            href="https://github.com/GabrielGirotti/chat.u"
          >
            Repositorio en GitHub
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;
