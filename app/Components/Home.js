var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
    render() {
        return (
            <div className='home-contianer'>
                <h1>Github Battle: Battle your friends...add stuff.</h1>

                <Link className='button' to='/battle'>Battle</Link>
            </div>
        )
    }
}

module.exports = Home;