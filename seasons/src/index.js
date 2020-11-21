import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 40,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ lat: position.coords.latitude }) },
            (error) => { console.log(error.message); this.setState({ errorMessage: error.message }); }
        );
    }


    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <h1>Error: {this.state.errorMessage}</h1>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <h1>Latitude: {this.state.lat}</h1>;
        } else {
            return <h1>Loading...</h1>;
        }
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));