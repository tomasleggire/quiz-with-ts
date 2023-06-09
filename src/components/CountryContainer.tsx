import React from "react";
import "../styles/CountryContainer.css";

interface MyProps {
  countryData: Object;
  id: string;
  toggleModal: () => void;
  changeFocusCountry: () => void;
}

export default function CountryContainer(props: MyProps) {
  const onClickCountry = (): void => {
    props.changeFocusCountry(props.id);
    props.toggleModal();
  };

  return (
    <div className="country-main" onClick={onClickCountry}>
      <div className="country-flag-div">
        <img
          className="country-flag"
          src={props.countryData.flags.png}
          alt={props.countryData.flags.alt}
        />
      </div>
      <div className="contry-info">
        <h3 className="country-name">{props.countryData.name.common}</h3>
        <h4 className="country-population">
          Population:{" "}
          <span className="country-population-num">
            {props.countryData.population}
          </span>
        </h4>
        <h4 className="country-region">
          Region:{" "}
          <span className="country-region-detail">
            {props.countryData.region}
          </span>
        </h4>
        <h4 className="country-capital">
          Capital:{" "}
          <span className="country-capital-detail">
            {props.countryData.capital}
          </span>
        </h4>
      </div>
    </div>
  );
}
