import * as React from 'react';

import './spinner.scss';

export const Spinner = () => {
  return(
    <tr>
      <td>
      <div className="lds-css ng-scope">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
      </td>
      
    </tr>
    
  );
}
