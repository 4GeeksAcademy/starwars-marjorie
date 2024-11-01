import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const Characters = () => {
    const { store, actions } = useState;

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/1")
            .then((response) => result.JSON)
            .then((data) => data.result);

    })
    return (
        <div className="container">
            <div className="row">
                <h1> CHARACTERS </h1>
            </div>

        // mapping people - store?

            <div className="list-group list-group-horizontal inline-scroll" style={{ overflowX: "auto" }}></div>

        //card form ////////
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/the-trickster-flash-raktor_b84df8a2.jpeg?region=953%2C0%2C814%2C813" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>



        </div>
    )



}

export default Characters;
