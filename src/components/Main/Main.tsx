import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { getLocation } from '../../actions/getLocationAction';
import './main.scss';

interface PropsType {
  getLocation: (city: string) => void;
};

interface StateType {
  value: string
}

class Main extends Component<PropsType, StateType> {

  state = { value: '' };

  onChange = ({target}) => {
    this.setState({ value: target.value });
  }

  onClick = () => {
    this.props.getLocation(this.state.value);
  }

  render() {
    return(
      <main className="main-block">
        <p className="main-block__block1">
          Use the form below to search for houses to buy. You can search by place-name, 
          postcode, or click 'My location', to search in your current location!
        </p>
        <div className="main-block__block2">
          <input type="text" className="form-control" placeholder="Location" onChange={this.onChange} />
          <div className="main-block__block3">
            <input type="button" value="Go" className="btn btn-primary" onClick={this.onClick} />
            <input type="button" value="My location" className="btn btn-primary" />
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = {
  getLocation,
}

export default connect(null, mapDispatchToProps)(Main);
