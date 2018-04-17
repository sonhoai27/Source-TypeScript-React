import * as React from 'react';
import Form from "./Form";
import Header from "./Header";

class App extends React.Component {
   render() {
    return (
      <div className="col-12 app">
          <div className="container">
              <div className="row">
                  <div className="col-4"/>
                  <div className="col-4">
                      <Header/>
                      <Form/>
                  </div>
                  <div className="col-4"/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
