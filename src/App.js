import React from 'react';

class App extends React.Component {
    render() {
        return (
          <div className="container">
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            {this.props.children}
          </div>
        );
    }
}

export default App;
