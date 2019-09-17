import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import { FETCH_STATUSES } from "../../constants/fetchStatuses";
import { searchCity } from "../../actions/getLocationAction";
import RecentSearches from "../RecentSearches/RecentSearches";
import ListedLocation from "../ListedLocation/ListedLocation";
import Error from "../Error/Error";
import { Spinner } from "../Spinner/Spinner";
import "./main.scss";

interface PropsType {
  searchCity: (city: string) => void;
  fetchStatus: number;
  cities: string[];
}

const Main = (props: PropsType) => {
  const [value, setValue] = useState("");

  const component = () => {
    switch (props.fetchStatus) {
      case FETCH_STATUSES.REQUEST:
        return <Spinner />;
      case FETCH_STATUSES.SUCCESS:
        return <ListedLocation cities={props.cities} />;
      case FETCH_STATUSES.ERROR:
        return <Error />;
      default:
        return <RecentSearches />;
    }
  };

  const onChange = ({ target }) => setValue(target.value);

  const onClick = (value: string) => () => {
    props.searchCity(value);
  };

  return (
    <main className="main-block">
      <p className="main-block__block1">
        Use the form below to search for houses to buy. You can search by
        place-name, postcode, or click 'My location', to search in your current
        location!
      </p>
      <div className="main-block__block2">
        <input
          type="text"
          className="form-control"
          placeholder="Location"
          onChange={onChange}
        />
        <div className="main-block__block3">
          <input
            type="button"
            value="Go"
            className="btn btn-primary"
            onClick={onClick(value)}
          />
          <input
            type="button"
            value="My location"
            className="btn btn-primary"
          />
        </div>
      </div>
      {component()}
    </main>
  );
};

const mapDispatchToProps = {
  searchCity
};

const mapStateToProps = state => ({
  fetchStatus: state.searchCityReducer.fetchStatus,
  cities: state.searchCityReducer.cities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
