import Message from "../components/Message";
import MessageForm from "../components/MessageForm";

type ChatLayoutProps = {
  handleOpen: () => void;
  open: boolean;
};

export default function ChatLayout({ handleOpen, open }: ChatLayoutProps) {
  return (
    <>
      <img
        src="/closebutton.svg"
        alt="Close button"
        onClick={handleOpen}
        className={` w-10 lg:hover:scale-110 lg:transition lg:duration-300 ${
          open === true
            ? "cursor-pointer fixed  text-black p-1 font-montserrat font-extrabold right-10 top-20"
            : "hidden"
        }`}
      />

      <header className=" bg-black text-white pt-10 text-center font-montserrat flex flex-col items-center fixed top-0 w-[100vw] lg:w-96 lg:static">
        <h1 className=" hidden">Chat.U</h1>
        <img src="/whitelogo.svg" alt="Chat.U Logo" className=" w-28 pb-5" />
      </header>
      <div className=" bg-black text-white  text-center py-5 font-montserrat flex flex-col items-center mt-28 lg:w-96 lg:mt-0">
        <p className="  text-lg">
          Hola <span className=" text-green font-bold">Juan</span>,
        </p>
        <p className="pb-5 text-white font-bold">¿en qué puedo ayudarte?</p>
      </div>

      <section className=" flex flex-col gap-3 py-4 mb-28 items-center lg:items-start bg-white lg:mb-[70px]">
        <Message />
      </section>

      <MessageForm />
    </>
  );
}
