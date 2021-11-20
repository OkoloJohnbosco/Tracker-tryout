import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../../component/Cards/Cards";
import CountryPicker from "../../component/CountryPicker/CountryPicker";
import RecoveryRate from "../../component/RecoveryRate/RecoveryRate";
import GoogleMap from "../../component/GoogleMap/GoogleMap";
import axios from "../../axios-Instance";
import TrackerTable from "../../component/TrackerTable/TrackerTable";
import styles from "./Tracker.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Tracker extends Component {
  state = {
    country: "",
    data: {},
  };

  async componentDidMount() {
    this.getCountryData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      let { country } = this.state;
      this.getCountryData(country);
    }
  }

  getCountryData = async (country) => {
    let changeUrl = "/";
    if (country) {
      changeUrl = `/countries/${country}`;
    }
    try {
      let {
        data: { confirmed, deaths, recovered, lastUpdate },
      } = await axios.get(changeUrl);

      let modifiedData = {
        confirmed: confirmed.value,
        deaths: deaths.value,
        recovered: recovered.value,
        lastUpdate: lastUpdate,
      };
      this.setState({ data: modifiedData });
    } catch (error) {
      console.log(error);
    }
  };

  changedCountryHandler = async (e) => {
    console.log(e.target.value);
    this.setState({ country: e.target.value });
  };

  render() {
    return (
      <div className={styles.Tracker}>
        <Container fluid className="text-center">
          <CountryPicker changedCountry={this.changedCountryHandler} />
          <Row className="mb-3">
            <Col xs={12} md={8}>
              <Cards data={this.state.data} />
            </Col>
            <Col xs={12} md={4}>
              <RecoveryRate
                data={this.state.data}
                country={this.state.country}
              />
            </Col>
          </Row>
        </Container>
        <Container fluid className="text-center">
          <Row className="px-2">
            <Col xs={12} md={6}>
              <div className={styles.Map}>
                <GoogleMap />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <TrackerTable />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withErrorHandler(Tracker, axios);
