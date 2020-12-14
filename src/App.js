import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from "./components/buttonComponent";

const styleCard = {
  maxWidth: "21rem",
  margin: "50px auto"
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
  }

  count() {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch(err) {
      this.setState({
        result: "error"
      })
    }
  }

  reset() {
    this.setState({
      result: ""
    })
  }

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  onClick(button) {
    if (button === "=") {
      this.count();
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  render() {
    return(
      <div>
        <div className="card text-white bg-dark mb-3" style={styleCard}>
          <div className="card-header">React Calculator</div>
          <div className="card-body">
            <h5 className="card-title">
              <div className="row">
                <div className="col-sm-12">
                  <input className="form-control" id="result" value={this.state.result}/>
                  <button className="btn btn-outline-light my-1 mx-1" onClick={this.reset.bind(this)}>C</button>
                  <button className="btn btn-outline-light" onClick={this.backspace.bind(this)}>CE</button>
                </div>
              </div>
            </h5>
            <p className="card-text">
              <Button onClick={this.onClick.bind(this)}/>
            </p>
          </div>
        </div>
      </div>  
    );
  }
}