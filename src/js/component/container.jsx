import React from "react";
import {Card} from "./card.jsx";

export const Container = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col"><Card/></div>
                <div className="col"><Card/></div>
                <div className="col"><Card/></div>
                <div className="col"><Card/></div>
            </div>
        </div>
    );
};