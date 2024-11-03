import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
    const { store, actions } = useState(null);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then((response) => response.JSON)
            .then((data) => actions.setPeopleData(data.result));

    })
    return (
        <div className="container">
            <div className="row">
                <h1> CHARACTERS </h1>
            </div>

            <div className="list-group list-group-horizontal inline-scroll" style={{ overflowX: "auto" }}>
                {store.people.map((person) => {
                    return (
                        < div key={person.uid}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://lumiere-a.akamaihd.net/v1/images/the-trickster-flash-raktor_b84df8a2.jpeg?region=953%2C0%2C814%2C813" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <p className="card-text">{person.gender}</p>
                                    <p className="card-text">{person.hair_color}</p>
                                    <p className="card-text">{person.eye_color}</p>
                                    <hr className="my-3" />
                                    <div className="justify-content-between d-flex align-items-center">
                                        <link to={"/singlecharacters/" + person.uid}>
                                            <span className="btn btn-ouliner-black">More</span>
                                        </link>
                                        <button className="btn btn-outline-danger" onClick={() => actions.addFavotite(person.name)}>
                                            <i className="fa fa-heart" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            );
                        </div>
                    })}
            </div>
        </div>
    );
};

export default Characters;
