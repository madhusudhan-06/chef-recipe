import React, { useRef, useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import  {generateRecipe}  from "../ai";
import Header from './Header';

const Main = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [recipeResult, setRecipeResult] = useState('');
    const RecipeSection = useRef(null);

    async function getRecipe() {
        const result = await generateRecipe(ingredientList);
        setRecipeResult(recipeResult + result);
    }

    React.useEffect(()=>{
        if(recipeResult !== null && RecipeSection.current !== null){
            RecipeSection.current.scrollIntoView({behavior:"smooth",block: 'start',});
        }
    },[recipeResult]);

    function HandleOnSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredientList((prevIngredients) => [...prevIngredients, newIngredient]);

    }

    return (
        <div className="container">
            <div className="main-ing-rec">
                <Header />
                <form className="input-form" action={HandleOnSubmit}>
                    <input
                        type="text"
                        aria-label="Add ingredient"
                        placeholder="e.g carrot"
                        name="ingredient" />
                    <button>Add ingredient</button>
                </form>
                {ingredientList.length > 0 && <IngredientsList
                    ingredientList={ingredientList}
                    func={getRecipe} scroller={RecipeSection}/>}
            </div>

            {
                (recipeResult != '') && <Recipe recipe={recipeResult} />
            }

        </div>
    );
}
export default Main;