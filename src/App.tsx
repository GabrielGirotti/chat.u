import { useState } from "react";
import ChatLayout from "./layouts/ChatLayout";
import Description from "./components/Description";
import Footer from "./components/Footer";

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

        <Description dark={dark} />

        <Footer dark={dark} />
        
      </div>
    </main>
  );
}

export default App;
