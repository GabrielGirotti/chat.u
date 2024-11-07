export default function MessageForm() {
  return (
    <footer className=" w-[100%] m-auto flex flex-col justify-between p-4 fixed bottom-0 bg-white/75">
      <form className="bg-white flex items-end gap-4 shadow-lg rounded-xl px-4 py-2 ">
        <textarea
          id="description"
          placeholder="Escribe tu consulta..."
          className="text-black  w-[100%] max-h-20 overflow-y-auto bg-white rounded-md p-2"
        />

        <button type="button">
          {" "}
          <img
            src="/sendmessage.svg"
            alt="Send Message Icon"
            className=" w-10 pb-5"
          />
        </button>
      </form>
    </footer>
  );
}
