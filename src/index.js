import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/*
//function component
const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>lat: </div>;
};*/

//class component

class App extends React.Component  {
   /* constructor(props) {
        super(props);
        this.state ={'lat': null, errorMessage:''};

    }*/

    state ={'lat': null, errorMessage:''};

    //one time when component shows up
    componentDidMount () {
    console.log('one time when component shows up, load data here');
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({'lat': position.coords.latitude}),
            err => this.setState({'errorMessage': err.message})
       );
    }

    //component updated/rerendered because of props or state change
    componentDidUpdate () {
        console.log('component updated/rerendered');
    }

    //when component will be removed
    componentWillUnmount () {

    }

    //getSnapshotBeforeUpdate
    //getDerivedStateFromProps
   // shouldComponentUpdate


    renderContent () {
        if (this.state.errorMessage &&  !this.state.lat)  {
            return <div>
                err: {this.state.errorMessage}
            </div>;
        }

        if (!this.state.errorMessage &&  this.state.lat)  {
            return <SeasonDisplay lat ={this.state.lat}/>;
        }

        if (!this.state.errorMessage &&  !this.state.lat)  {
            return <Spinner message="Please allow geolocation request"/>;
        }

    }

    // return jsx here only
    render() {
      return  <div className="red-border">{this.renderContent()}</div>

    }
}

ReactDOM.render(<App />, document.getElementById('root'));


