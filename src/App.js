import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    dashboardBlobUrl: null
  }
  async componentDidMount () {
    document.getElementById('dashboard-hidden-form').submit()
    // const response = await fetch('http://localhost:3300/dashboard', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     type: 'hello'
    //   }),
    //   mode: 'cors'
    // });
    // const dashboardTemplate = await response.text()
    // const blob = new Blob([dashboardTemplate], { type: "text/html" })
    // const dashboardBlobUrl = URL.createObjectURL(blob)
    // this.setState({
    //   dashboardBlobUrl
    // })
  }
  render() {
    // const { dashboardBlobUrl } = this.state
    // return (
    //   <iframe title='dashboard-page' src={dashboardBlobUrl} />
    // )
    return (
      <>
        <form id='dashboard-hidden-form' encType='application/json' target='dashboard-page' method='POST' action='http://localhost:3300/dashboard'>
          <input type='hidden' name='type' value='pr-vs-po' />
        </form>
        <iframe title='dashboard-page' name='dashboard-page' style={{ width: '100%', height: '99vh', border: 0 }} />
      </>
    );
  }
}

export default App;
