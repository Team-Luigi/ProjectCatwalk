import React from 'react';
import QABody from './QandA/QABody.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <QABody />
      </div>
    );
  }
}

export default App;
