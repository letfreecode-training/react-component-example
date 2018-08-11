import React, { Component } from 'react';
import './App.css';

// HOC
const timerHOC = WrapperComponent => {
  return class TimerHOC extends Component {
    constructor() {
      super();
      this.state = {
        timer: ''
      };
    }
    timerRun = () => {
      this.setState(state => ({
        timer: new Date()
      }));
    };
    componentDidMount() {
      setInterval(this.timerRun, 1000);
    }
    render() {
      return (
        <div>
          <WrapperComponent timer={this.state.timer} />
        </div>
      );
    }
  };
};

//Render Props Component
class TimerRenderPropsComponent extends Component {
  constructor() {
    super();
    this.state = {
      timer: ''
    };
  }
  timerRun = () => {
    this.setState(state => ({
      timer: new Date()
    }));
  };
  componentDidMount() {
    setInterval(this.timerRun, 1000);
  }
  render() {
    return this.props.render(this.state.timer);
  }
}

class TimerFunctionOfChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      timer: ''
    };
  }
  timerRun = () => {
    this.setState(state => ({
      timer: new Date()
    }));
  };
  componentDidMount() {
    setInterval(this.timerRun, 1000);
  }
  render() {
    return this.props.children(this.state.timer);
  }
}

class Text extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TimerFunctionOfChildComponent>
            {timer => (
              <div style={{ backgroundColor: 'red' }}>
                <div>{timer.toString()}</div>
              </div>
            )}
          </TimerFunctionOfChildComponent>
        </div>
      </div>
    );
  }
}

// timerHOC 來自於套件
// const TimerHOC = timerHOC(Text);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Text />
      </div>
    );
  }
}

export default App;
