import React from 'react';

import style from './iconbay.less';

class Iconbay extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className={style.iconbay}>
        { props.children }
      </div>
    );
  }
}

export default Iconbay;
