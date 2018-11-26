class ReactBit extends React.Component {
      
    render() {
      return (
        <h1>This is a React Component using JSX</h1>
      );
    }
  }
  
  const holder = document.querySelector('#react-app');
  ReactDOM.render(<ReactBit/>, holder);