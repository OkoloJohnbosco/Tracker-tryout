import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import styles from "./CountryPicker.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-Instance";

function CountryPicker(props) {
  const [countries, getCountries] = useState([]);

  useEffect(() => {
    const fetchedCountries = async () => {
      try {
        let response = await axios.get(`/countries`);
        let { countries } = response.data;
        getCountries(countries.map((country) => country.name));
      } catch (error) {
        console.log(error);
      }
    };
    fetchedCountries();
  }, []);

  return (
    <div>
      <Container fluid className={styles.CountryPicker + " text-center"}>
        <Form style={{ width: "150px", marginTop: "20px" }}>
          <Form.Group
            controlId="exampleForm.SelectCustom"
            value={props.value}
            onChange={props.changed}
          >
            <Form.Control
              as="select"
              custom
              value={props.country}
              onChange={props.changedCountry}
            >
              <option value="">World-Wide</option>
              {countries.map((country) => (
                <option value={country} key={country}>
                  {country}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default withErrorHandler(CountryPicker, axios);
