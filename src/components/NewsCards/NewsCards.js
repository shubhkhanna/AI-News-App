import {
  Card,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  {
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  {
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
];

const NewsCards = ({ articles, activeArticles }) => {
  if (!articles.length) {
    return (
      <Container>
        <Row className="mx-auto">
          {infoCards.map((infoCard, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              className="mb-3"
              style={{ display: "flex" }}
              key={index}
            >
              <Card
                className="p-3 w-100 text-center"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ecf0f3",
                  boxShadow: "8px 8px 19px #dbdfe2, -8px -8px 19px #fdffff",
                }}
              >
                <CardTitle tag="h2">{infoCard.title}</CardTitle>
                {infoCard.info ? (
                  <CardSubtitle tag="h5" className="text-secondary">
                    {infoCard.title.split(" ")[2]}
                  </CardSubtitle>
                ) : null}
                <br />
                <CardText tag="p">{infoCard.info}</CardText>
                <CardText tag="h6">Say: {infoCard.text}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        {articles.map((article, i) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            className="mb-3"
            style={{ display: "flex" }}
            key={i}
          >
            <NewsCard article={article} activeArticles={activeArticles} i={i} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCards;
