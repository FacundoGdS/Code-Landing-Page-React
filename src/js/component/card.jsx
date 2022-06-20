import React from "react";
import PropTypes from 'prop-types';

export const Card = (props) => {
    return(
        <>
<div className="card" style={{width: "16rem"}}>
  <img src="https://picsum.photos/seed/picsum/200/150" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    );
};

Card.propTypes = {
  title: PropTypes.string
};

