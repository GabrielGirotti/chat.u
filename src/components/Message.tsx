export default function Message() {
  return (
    <>
      <article className="  w-[90vw] flex flex-col items-end lg:w-96 bg-white">
        <div className=" rounded-lg  font-montserrat p-4 ml-4 shadow-lg flex flex-col items-end">
          <h3 className=" text-green font-bold">Juan</h3>
          <p className="text-right text-black">
            {" "}
            Hola, me gustaria tener una breve informacion acerca de la Matriz
            extracelular
          </p>
        </div>
      </article>

      <article className=" w-[90vw]  flex flex-col items-start lg:w-96 bg-white">
        <div className=" rounded-lg  font-montserrat p-4 mr-4 shadow-lg">
          <h3 className=" text-lightblue font-bold">Chat.U</h3>
          <p className="text-black">
            {" "}
            La matriz extracelular corresponde a un conjunto de proteínas y
            polisacáridos secretados por las células animales, los que se
            acumulan sobre la superficie externa de la membrana plasmática
            permitiendo a las células mantenerse unidas en los tejidos y
            generando un ambiente intercelular que otorga protección y firmeza.{" "}
          </p>
        </div>
      </article>

      <article className=" w-[90vw]  flex flex-col items-start lg:w-96 bg-white">
        <div className=" rounded-lg  font-montserrat p-4 mr-4 shadow-lg">
          <h3 className=" text-lightblue font-bold">Chat.U</h3>
          <p className="text-black">¿Necesitas más información acerca de este u otro tema? </p>
        </div>
      </article>

      <article className="  w-[90vw] flex flex-col items-end lg:w-96 bg-white">
        <div className=" rounded-lg  font-montserrat p-4 ml-4 shadow-lg flex flex-col items-end">
          <h3 className=" text-green font-bold">Juan</h3>
          <p className="text-right text-black">¿Cómo es la composición de la misma?</p>
        </div>
      </article>

      <article className=" w-[90vw]  flex flex-col items-start lg:w-96 bg-white">
        <div className=" rounded-lg  font-montserrat p-4 mr-4 shadow-lg">
          <h3 className=" text-lightblue font-bold">Chat.U</h3>
          <p className="text-black">
            {" "}
            La composición de la matriz consta principalmente de tres tipos de
            moléculas:{" "}
          </p>
          <ul className="flex flex-col gap-3 mt-3 text-black">
            <li>
              <strong>Proteínas fibrosas:</strong> El <strong>colágeno</strong>{" "}
              y la <strong>elastina</strong> forman una fina red que proporciona
              las características estructurales, resistentes y elásticas de la
              matriz extracelular. El colágeno otorga resistencia, estructura y
              consistencia a la matriz; y la elastina es la responsable de la
              elasticidad de la matriz.
            </li>
            <li>
              <strong>Proteoglucanos:</strong> Macromoléculas formadas por una
              proteína central unida a largas cadenas de polisacáridos
              denominadas <strong>glucosaminoglucanos.</strong> Los
              proteoglucanos forman un gel altamente hidratado donde están
              inmersos los otros componentes de la matriz extracelular. El gel
              que forman los proteoglucanos confiere la resistencia frente a la
              compresión y permite que las células puedan moverse y migrar a
              través de él. Este gel también permite la filtración selectiva de
              moléculas.
            </li>
            <li>
              <strong>Proteínas de adhesión:</strong> Son
              <strong> glucoproteínas</strong> que participan en la adhesión de
              los componentes de la matriz entre sí, entre la célula y la
              matriz, y entre células. Algunos ejemplos de estas proteínas son
              la <strong>fibronectina</strong> y la<strong> laminina.</strong>{" "}
              La fibronectina facilita la adhesión entre células y entre células
              y fibras de colágeno.
            </li>
          </ul>
        </div>
      </article>

      <article className=" w-[90vw]  flex flex-col items-start lg:w-96 bg-white">
        <div className=" rounded-lg  font-montserrat p-4 mr-4 shadow-lg">
          <h3 className=" text-lightblue font-bold">Chat.U</h3>
          <p className="text-black">¿Necesitas más información acerca de este u otro tema? </p>
        </div>
      </article>
    </>
  );
}
