import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import styles from "./TableTracker.module.css";
import TableRow from "../TableRow/TableRow";
import axios from "../../axios-Instance";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

function TrackerTable(props) {
  const [countries, getCountries] = useState([]);
  const [countryList, getCountryList] = useState([]);

  const getCountryData = async (country) => {
    let changeUrl = "/";
    if (country) {
      changeUrl = `/countries/${country}`;
    }
    try {
      let {
        data: { confirmed, deaths, recovered, lastUpdate },
      } = await axios.get(changeUrl);

      return {
        confirmed: confirmed.value,
        deaths: deaths.value,
        recovered: recovered.value,
        lastUpdate: lastUpdate,
      };
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchedCountries = async () => {
      try {
        let response = await axios.get(`/countries`);
        let { countries } = response.data;
        getCountries(
          // eslint-disable-next-line array-callback-return
          countries.map((country) => {
            if (country.name !== "Gambia") return country.name;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchedCountries();
  }, []);

  useEffect(() => {
    const fetchedCountryList = async () => {
      let fetchedList = [];
      if (countries.length) {
        countries.slice(0, 15).forEach(async (country) => {
          let res = await getCountryData(country);
          fetchedList.push({ ...res, country });
        });
      }
      getCountryList(fetchedList);
    };
    fetchedCountryList();
  }, [countries]);

  const sortAlpha = () => {
    getCountryList(
      countryList.sort((a, b) => (a.country > b.country ? 1 : -1))
    );
  };
  const sortConfirm = () => {
    getCountryList(countryList.sort((a, b) => b.confirmed - a.confirmed));
  };

  const sortRecover = () => {
    getCountryList(countryList.sort((a, b) => b.recovered - a.recovered));
  };
  const sortDeaths = () => {
    getCountryList(countryList.sort((a, b) => b.deaths - a.deaths));
  };

  let countryData =
    countryList.length > 10 ? (
      countryList.map((cty, index) => (
        <TableRow data={cty} key={cty.country} index={index} />
      ))
    ) : (
      <tr>
        <td colSpan="5">Loading....</td>
      </tr>
    );

  return (
    <div>
      <Table striped bordered hover responsive>
        <thead className={styles.TableHead}>
          <tr>
            <th>#</th>
            <th onClick={sortAlpha}>Country</th>
            <th onClick={sortConfirm}>Confirmed</th>
            <th onClick={sortRecover}>Recovered</th>
            <th onClick={sortDeaths}>Deaths</th>
          </tr>
        </thead>
        <tbody>{countryData}</tbody>
      </Table>
    </div>
  );
}
export default withErrorHandler(TrackerTable, axios);
