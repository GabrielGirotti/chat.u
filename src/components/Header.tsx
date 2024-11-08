type HeaderProps = {
  handleDark: () => void;
  dark: boolean;
};

export default function Header({ handleDark, dark }: HeaderProps) {
  return (
    <header className=" bg-black text-white pt-10 text-center font-montserrat flex flex-col items-center fixed top-0 w-[100vw] lg:w-[100%] lg:static">
      <nav
        className=" cursor-pointer absolute left-8 top-12"
        onClick={handleDark}
      >
        {" "}
        <img
          src="/darkmodebanner.svg"
          alt="Dark Mode Banner"
          className="w-14"
        />
        <button>
          <img
            src="/darkicon.svg"
            alt="Dark Mode Icon"
            className={`w-7 absolute top-0   ${
              dark === false ? "left-0" : "right-0"
            } `}
          />
        </button>
      </nav>
      <h1 className=" hidden">Chat.U</h1>
      <img src="/whitelogo.svg" alt="Chat.U Logo" className=" w-28 pb-5" />
    </header>
  );
}
