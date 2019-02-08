import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //setState is a function to update data
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("Did update");
    }

    //React have to define render
    render() {
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: { this.state.errorMessage }</div>;
            }else if(!this.state.errorMessage && this.state.lat) {
                return <SeasonDisplay lat={ this.state.lat }/>
            }else {
                return <div>Loading!</div>;
            }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);