import React from 'react';
import webpack from 'webpack';

type AppProps = { foo: number };

const App: React.FunctionComponent<AppProps> = ({ foo }) => {
  return <div>Hello this is App! {foo}</div>;
};

export default App;
