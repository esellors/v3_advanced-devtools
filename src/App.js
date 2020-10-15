import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import CharsDisplay from './Components/CharsDisplay';
import FavCharsDisplay from './Components/FavCharsDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      view: 'characters'
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favChars.length !== this.props.favChars.length) {
      this.setState({ showMessage: true })

      setTimeout(() => {
        this.setState({ showMessage: false })
      }, 2000)
    }
  }

  pageView = view => {
    this.setState({ view })
  }

  render() {
    let viewComponent;
    switch (this.state.view) {
      case 'characters':
        viewComponent = <CharsDisplay />
        break;
      case 'favorites':
        viewComponent = <FavCharsDisplay />
        break;
      default: break;

    }

    return (
      <main className="App">
        { this.state.showMessage ? <p className='message'>Favorites Updated!</p> : null}
        <h1>Breaking Bad Characters</h1>
        <ul className='nav-links'>
          <li onClick={() => this.pageView('characters')}>Characters</li>
          <li onClick={() => this.pageView('favorites')}>My Favs</li>
        </ul>
        { viewComponent}
      </main>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    favChars: reduxState.favChars
  }
}

export default connect(mapStateToProps)(App);