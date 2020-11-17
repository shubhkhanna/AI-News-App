import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import main from "./assets/main.svg";
import { Col } from "reactstrap";
import wordsToNumbers from "words-to-numbers";

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticles, setActiveArticles] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadLines") {
          setNewsArticles(articles);
          setActiveArticles(-1);
        } else if (command === "highlight") {
          setActiveArticles((prevActiveArticles) => prevActiveArticles + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <Col md={4} className="mx-auto my-3">
        <img src={main} alt="main" className="img-fluid" />
      </Col>
      <NewsCards articles={newsArticles} activeArticles={activeArticles} />
    </div>
  );
};

export default App;
