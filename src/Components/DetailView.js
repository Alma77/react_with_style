import React from "react"
import '../App.css'

alert(`Detail View being shown`)

const DetailView = props => (
    <div className="container">
        <div className="row">
            <h3 className="col">{props.todoItem}</h3>
        </div>
        <div className="row">
            <h6 className="col">{props.time}</h6>
        </div>
        <div className="row">
            <p className="col">{props.description}</p>
        </div>
        <button className="btn btn-primary App-btn" onClick={props.hideDetail}>Hide Detail View</button>
    </div>
);

export default DetailView;