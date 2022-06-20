import React from "react";
import {Card} from "./card.jsx";
import PropTypes from 'prop-types';

export const Container = () => {
    const titles = ["First card", "Second card", "Third card", "Fourth card"];
    return (
        <div className="container">
            <div className="row">
            {titles.map((item, index, arr)=>{return <div className="col"><Card key={index} title={item}/></div>})}
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string
  };

//Something about <React.StrictMode> is a tool for warnings but it renders nothing...