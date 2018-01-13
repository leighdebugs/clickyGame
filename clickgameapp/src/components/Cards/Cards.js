import React from "react";
import "./Cards.css";

const Cards = props => (
	<div className="card">

		<span onClick={() => props.shuffleCards(props.id)} className="shuffle">
			<div className="img-container">
				<img alt={props.id} src={props.image} />
			</div>
		</span>
	</div>
);

export default Cards;