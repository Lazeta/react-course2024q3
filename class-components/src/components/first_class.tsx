import React from 'react';

interface GreetingProps {
  name: string;
}

export class Greeting extends React.Component<GreetingProps> {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

<Greeting name="Taylor" />;
