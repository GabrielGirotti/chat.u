import { useMsg } from "../hooks/useMsg";

type MessageProps = {
  dark: boolean;
};

export default function Message({ dark }: MessageProps) {
  const { data } = useMsg();

  return (
    <>
      {data?.map((message) => (
        <article
          className={` ${
            dark === false
              ? "bg-white text-black"
              : "from-lightblue/15 text-white"
          } ${
            message.name !== "Chat.U"
              ? "bg-gradient-to-l "
              : "bg-gradient-to-r "
          } w-[90vw] lg:w-96 lg:mx-4 lg:py-1  rounded-lg shadow-lg`}
        >
          <div
            className={`${
              message.name !== "Chat.U"
                ? "flex-col items-end"
                : "flex-col items-start"
            } font-montserrat p-4 ml-4 flex `}
          >
            <h3
              className={` ${
                message.name !== "Chat.U" ? "text-green" : "text-lightblue"
              }  font-bold`}
            >
              {message.name}
            </h3>
            <p
              className={`${
                message.name !== "Chat.U" ? "text-right " : "text-left"
              }`}
            >
              {message.message}
            </p>
          </div>
        </article>
      ))}
    </>
  );
}
