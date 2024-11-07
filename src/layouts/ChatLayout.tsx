import Message from "../components/Message";
import MessageForm from "../components/MessageForm";


export default function ChatLayout() {
  return (
    <>
  <header className=" bg-black text-white pt-10 text-center font-montserrat flex flex-col items-center fixed top-0 w-[100vw]">
        <h1 className=" hidden">Chat.U</h1>
        <img src="/whitelogo.svg" alt="Chat.U Logo" className=" w-28 pb-5" />

      </header> 
      <div className=" bg-black text-white  text-center py-5 font-montserrat flex flex-col items-center mt-28" >
      <p className="  text-lg">
          Hola <span className=" text-green font-bold">Juan</span>,
        </p>
        <p className="pb-5 text-white font-bold">¿en qué puedo ayudarte?</p>
      </div>
 
      <section className=" flex flex-col gap-3 mt-8 mb-40 items-center">
        <Message />
      
      </section>

      <MessageForm/>
    </>
  );
}
