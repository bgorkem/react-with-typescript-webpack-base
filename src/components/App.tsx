import React from 'react';

type AppProps = { foo: number };

const App: React.FunctionComponent<AppProps> = (props) => {
  return <div>Hello this is App! {props.foo}</div>;
};

export default App;
