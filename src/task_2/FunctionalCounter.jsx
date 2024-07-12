import React from "react";

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count has changed to: ${this.state.count}`);
    }
  }

  render() {
    const { count } = this.state;
    return <div>Count: {count}</div>;
  }
}

export default CounterClassComponent;
