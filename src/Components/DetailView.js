import React from "react"

const DetailView = props => (
    <div className="container">
        <div className="row">
            <h3 className="col">{props.todo}</h3>
        </div>
        <div className="row">
            <h6 className="col">{props.time}</h6>
        </div>
        <div className="row">
            <p className="col">{props.description}</p>
        </div>
        <button className="btn btn-primary" onClick={props.resetShowDetail}>Hide</button>
    </div>
);

export default DetailView;