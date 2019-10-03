import * as React from 'react';

import { connect } from "react-redux";
import { useEffect } from "react";
import { searchProperties } from "../../actions/getPropertyAction";
import './pagination.scss';

const Pagination = () => {


  return(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

const mapDispatchToProps = {

};

export default connect(null, mapDispatchToProps)(Pagination)

