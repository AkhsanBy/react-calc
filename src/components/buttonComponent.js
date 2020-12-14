import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const styleButton = {
  width: "4rem",
  height: "4rem",
};

export default class Button extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <button className="btn btn-outline-light my-1 mx-1" name="7" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>7</button>
          <button className="btn btn-outline-light my-1 mx-1" name="8" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>8</button>
          <button className="btn btn-outline-light my-1 mx-1" name="9" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>9</button>
          <button className="btn btn-outline-light my-1 mx-1" name="*" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>x</button>
        </div>
        <div className="col-sm-12">  
          <button className="btn btn-outline-light my-1 mx-1" name="4" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>4</button>
          <button className="btn btn-outline-light my-1 mx-1" name="5" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>5</button>
          <button className="btn btn-outline-light my-1 mx-1" name="6" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>6</button>
          <button className="btn btn-outline-light my-1 mx-1" name="-" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>-</button>
        </div>
        <div className="col-sm-12">  
          <button className="btn btn-outline-light my-1 mx-1" name="1" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>1</button>
          <button className="btn btn-outline-light my-1 mx-1" name="2" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>2</button>
          <button className="btn btn-outline-light my-1 mx-1" name="3" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>3</button>
          <button className="btn btn-outline-light my-1 mx-1" name="+" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>+</button>
        </div>
        <div className="col-sm-12">  
          <button className="btn btn-outline-light my-1 mx-1" name="0" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>0</button>
          <button className="btn btn-outline-light my-1 mx-1" name="." onClick={e => this.props.onClick(e.target.name)} style={styleButton}>.</button>
          <button className="btn btn-outline-light my-1 mx-1" name="=" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>=</button>
          <button className="btn btn-outline-light my-1 mx-1" name="/" onClick={e => this.props.onClick(e.target.name)} style={styleButton}>/</button>
        </div>
      </div>  
    );
  }
}