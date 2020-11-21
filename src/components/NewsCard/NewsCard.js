import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
} from "reactstrap";
import News from "../../assets/News.png";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticles,
}) => {
  return (
    <Card
      className={`${activeArticles === i ? "activeCard" : null}`}
      style={{
        borderRadius: "10px",
        backgroundColor: "#ecf0f3",
        boxShadow: "8px 8px 19px #dbdfe2, -8px -8px 19px #fdffff",
      }}
    >
      <CardImg top width="100%" src={urlToImage || News} alt={source.name} />
      <CardBody>
        <div
          className="text-muted"
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <CardSubtitle tag="p">
            {new Date(publishedAt).toDateString()}
          </CardSubtitle>
          <CardSubtitle tag="p">{source.name}</CardSubtitle>
        </div>
        <CardTitle tag="h4">{title}</CardTitle>
        <CardText tag="p">{description}</CardText>
      </CardBody>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "0px 28px 10px 28px ",
        }}
      >
        <CardLink href={url} target="_blank">
          Read More
        </CardLink>
        <h6>{i + 1}</h6>
      </div>
    </Card>
  );
};

export default NewsCard;
