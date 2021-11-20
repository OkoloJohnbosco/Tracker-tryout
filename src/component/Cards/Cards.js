import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import Col from "react-bootstrap/Col";

function Cards({ data: { confirmed, deaths, recovered, lastUpdate } }) {
  //   const [worldTotal, getWorldSummary] = useState({});

  //   useEffect(() => {
  //     const fetchWorldData = async () => {
  //       let res = await getWorldTotal();
  //       getWorldSummary(res);
  //     };
  //     fetchWorldData();
  //   }, []);
  console.log(confirmed);

  return confirmed || confirmed === 0 ? (
    <div>
      <Container className="text-center">
        <Row>
          <Col xs={12} md={4}>
            <Card body className={styles.Card}>
              <h3 className="h6">Confirmed Cases</h3>
              <CountUp
                start={0}
                end={confirmed}
                duration={2.5}
                separator=","
                className="h5"
              />
              <p className="mt-2">Confirmed Covid19 cases</p>
              <p className="text-secondary">
                Last updated {new Date(lastUpdate).toDateString()}
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card body className={[styles.Card, styles.Recovered].join(" ")}>
              <h3 className="h6">Recovered Cases</h3>
              <CountUp
                start={0}
                end={recovered}
                duration={2.5}
                separator=","
                className="h5"
              />
              <p className="mt-2">Recovered Covid19 cases</p>
              <p className="text-secondary">
                Last updated {new Date(lastUpdate).toDateString()}
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card body className={[styles.Card, styles.Deaths].join(" ")}>
              <h3 className="h6">Deaths</h3>
              <CountUp
                start={0}
                end={deaths}
                duration={2.5}
                separator=","
                className="h5"
              />
              <p className="mt-2">Deaths caused by Covid19</p>
              <p className="text-secondary">
                Last updated {new Date(lastUpdate).toDateString()}
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ) : null;
}

export default Cards;
