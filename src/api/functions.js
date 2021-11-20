export const getPercentage = (confirmed, recovered) => {
  let num1 = +confirmed;
  let num2 = +recovered;
  if (num1 !== 0 && num2 !== 0) {
    let percentage = (num2 * 100) / num1;
    return +percentage.toFixed(1);
  } else {
    return 0;
  }
};

// let country = e.target.value;
// this.setState({ country });
// let countryData = await getCountryData(country);
// this.setState({ data: countryData });
