import React, {Component, Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.toggleClick = this.toggleClick.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition>
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.toggleClick}>toggle</button>
      </Fragment>

    )
  }

  toggleClick() {
    this.setState({
      show: !this.state.show,
    })
  }
}

export default App;
