import React from "react";

function IngredientsList(props) {
    const listIngredients = props.ingredientList.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>;
    });

    return(
        <section className="ingredient-recipe">
            <h2>Ingredients on hand</h2>
            <ul className="ingredient-list">
                {listIngredients}
            </ul>
            {listIngredients.length > 2 && <div className="get-recipe">
                <div ref={props.scroller}>
                    <h3>Ready for recipe?</h3>
                    <p>generate the recipe now</p>
                </div>
                <div>
                    <button onClick={props.func}>Get A recipe</button>
                </div>
            </div>}
        </section>
    );
}

export default IngredientsList;