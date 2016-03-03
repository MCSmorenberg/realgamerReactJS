import React from 'react';
import { Link } from 'react-router';
import './assets/stylesheets/_bootstrap.scss';

class App extends React.Component {
    render() {
        return (
          <div className="container">
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gamelist">Games</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            {this.props.children}
          </div>
        );
    }
}

export default App;
