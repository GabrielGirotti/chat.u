import { useEffect, useState } from "react";
import { db } from "../data/db";
import { Msg } from "../types";

export const useMsg = () => {
  const [data, setData] = useState<Msg[]>([]);

  useEffect(() => {
    setData(db);
  }, []);

  return {
    data,
  };
};
