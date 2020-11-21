import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: '',
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ lat: position.coords.latitude }) },
            (error) => { console.log(error.message); this.setState({ errorMessage: error.message }); }
        );
    }


    render() {
        console.log(this.state.errorMessage);
        if (this.state.errorMessage && !this.state.lat) {
            return <h1>Error: {this.state.errorMessage}</h1>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <h1>Latitude: {this.state.lat}</h1>;
        }
        return <h1>Loading...</h1>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));