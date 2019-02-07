import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        //necessary
        super(props);

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //setState is a function to update data
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    //React have to define render
    render() {
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: { this.state.errorMessage }</div>;
            }else if(!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: { this.state.lat }</div>;
            }else {
                return <div>Loading!</div>;
            }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);