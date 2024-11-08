type DescriptionProps = {
  dark: boolean;
};

export default function Description({ dark }: DescriptionProps) {
  return (
    <section className=" hidden lg:flex  flex-col items-start font-montserrat font-bold text-center p-20 ">
      <h2 className=" text-green text-2xl">Prueba técnica:</h2>
      <h3 className="text-2xl text-lightblue">Diseño y maquetado de chatbot</h3>
      <p
        className={`text-base mt-4 font-normal w-[700px] text-left ${
          dark === false ? "text-black" : "text-white"
        } `}
      >
        La siguiente es una prueba técnica donde se realizó el diseño completo
        para un chatbot, dirigido a estudiantes de biología.
        <br />
        Tomando colores relacionados con el campo de la investigación, la
        ciencia, tecnología y la biología, se creó un iso que represente tanto
        el campo de estudio como la comunicación.
        <br />
        Se maqueto una interfaz intuitiva, rápida de usar y fácil de leer, para
        así no generar distracción en el usuario.
        <br />
        El maquetado web está orientado a mobile first, entendiendo que en
        pantallas pequeñas, sería el mayor uso de la aplicación.
      </p>
    </section>
  );
}
