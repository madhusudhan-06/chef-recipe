import React from "react";
import MarkDown from 'react-markdown';

function Recipe(props) {
    return (
        <section className="suggested-recipe-container">
            <MarkDown>{props.recipe}</MarkDown>
        </section>
    )
}
export default Recipe;