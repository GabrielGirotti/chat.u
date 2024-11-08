import Header from "../components/Header";
import Message from "../components/Message";
import MessageForm from "../components/MessageForm";

type ChatLayoutProps = {
  handleOpen: () => void;
  open: boolean;
  handleDark: () => void;
  dark: boolean;
};

export default function ChatLayout({
  handleOpen,
  open,
  handleDark,
  dark,
}: ChatLayoutProps) {
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

      <Header handleDark={handleDark} dark={dark} />

      <div className=" bg-black text-white  text-center py-5 font-montserrat flex flex-col items-center mt-28 lg:w-[100%] lg:-mt-1">
        <p className="  text-lg">
          Hola <span className=" text-green font-bold">Juan</span>,
        </p>
        <p className="pb-5 text-white font-bold">¿en qué puedo ayudarte?</p>
      </div>

      <section
        className={` ${
          dark === false ? "bg-white" : "bg-black"
        } flex flex-col gap-3 py-4 mb-28 items-center lg:items-start  lg:mb-[70px]`}
      >
        <Message dark={dark} />
      </section>

      <MessageForm />
    </>
  );
}
