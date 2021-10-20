import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      padding: '15px 20px',
      backgroundColor: 'black',
      width: '100%',
      color: 'white',
    };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
        </div>
      </footer>
    );
  }
}

export default Footer;
