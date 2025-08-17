import { useEffect, useState } from "react";
import axios from "axios";
import type Article from "./InterfaceAPI";

const useFetchArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?tag=course")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { articles };
};

export default useFetchArticles;
