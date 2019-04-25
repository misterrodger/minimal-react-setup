// import React from 'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(<div>hello world</div>, document.getElementById('🤡'));

import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from './utils/data_helpers';
import Form from './components/input/index.js';
import App from './components/app.js';

class Card extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        getData('http://history.muffinlabs.com/date/01/01')
        .then(data => console.log(data));
        // getData('https://api.github.com/users/misterrodger?access_token=72f21f76c68988867e1df798d69bc1ff2cf9dee5')
        // .then(data => this.setState({ data }));
        // .then(data => {
        //   return console.log(data);
        }

// 72f21f76c68988867e1df798d69bc1ff2cf9dee5
    render() {
        const {
            data,
            url,
        } = this.state.data;

        if( data ){
            // console.log("satra",data['Births']);
            // var y = data['Births'].length;
            // var x = this.state.data.data['Briths'].text;
            // console.log(data['Births'][y-1].text);
        }

        return (
            <div>
            </div>
        );
    }
}

export default Card;

ReactDOM.render(<Card />, document.getElementById('root'));
