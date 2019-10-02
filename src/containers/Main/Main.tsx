import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import { MainComponent } from '../../components/MainComponent/MainComponent';
import { FETCH_STATUSES } from "../../constants/fetchStatuses";
import { searchCity } from "../../actions/getLocationAction";
import RecentSearches from "../../containers/RecentSearches/RecentSearches";
import { ListedLocation } from "../../components/ListedLocation/ListedLocation";
import { Error } from "../../components/Error/Error";
import { Spinner } from "../../components/Spinner/Spinner";
import "./main.scss";

interface PropsType {
  searchCity: (city: string) => void;
  fetchStatus: number;
  cities: string[];
}

const Main = (props: PropsType) => {
  const [value, setValue] = useState("");

  const onClickHistory = (values = "") => {
    setValue(values);
    props.searchCity(values);
  };

  const onChange = ({ target }) => setValue(target.value);

  const onClick = (value: string) => () => {
    props.searchCity(value);
  };

  return (
    <MainComponent value={value} onClick={onClick} onChange={onChange} >
      {
        () => {
          switch (props.fetchStatus) {
            case FETCH_STATUSES.REQUEST:
              return <Spinner />;
            case FETCH_STATUSES.SUCCESS:
              return <ListedLocation cities={props.cities} />;
            case FETCH_STATUSES.ERROR:
              return <Error />;
            default:
              return <RecentSearches onClickHistory={onClickHistory} />;
          }
        }
      }
    </MainComponent>
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
