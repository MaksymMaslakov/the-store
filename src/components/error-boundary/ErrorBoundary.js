import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component{

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log('Error', error.code);
    this.setState({ hasError: true });
  }

  render() {
    if(this.state.hasError)
      return <ErrorIndicator error={this.props.error}/>;
    return this.props.children;
  }
}
