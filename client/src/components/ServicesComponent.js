<<<<<<< HEAD
import React, {Component} from 'react';

// const ServicesComponent = () => {
=======
import React from 'react';
import SearchBarComponent from '../components/SearchBarComponent';

const ServicesComponent = ({onSearchPostCode}) => {
>>>>>>> 5a27c4eac1a4097ddd70f6bfb06ac6158276f18a

    const placeHolder = "e.g. SW1A 1AA"

<<<<<<< HEAD
//     return(
//         <h3>Search for your local GP:</h3>
//     )
// }
=======
    return(
        <>
            <h3>Search for your local GP:</h3>
            <SearchBarComponent placeHolder={placeHolder} onSearchPostCode={onSearchPostCode}/>
        </>
    )
}
>>>>>>> 5a27c4eac1a4097ddd70f6bfb06ac6158276f18a

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