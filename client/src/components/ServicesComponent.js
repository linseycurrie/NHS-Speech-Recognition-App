import React, {Component} from 'react';

// const ServicesComponent = () => {


//     return(
//         <h2>Services Search</h2>
//     )
// }

// export default ServicesComponent;

import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class ServicesComponent extends Component {
  static defaultProps = {
    center: {
      lat: 55.86,
      lng: 4.25
    },
    zoom: 8
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={55.8642}
            lng={4.2518}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default ServicesComponent;