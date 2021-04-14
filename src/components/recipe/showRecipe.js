import api from 'api';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { IoHeartDislikeOutline, IoFastFoodOutline } from 'react-icons/io5';
import { ImSpoonKnife } from 'react-icons/im';
import { FcTodoList } from 'react-icons/fc';
import './showRecipe.css';
import shortid from 'shortid';


const RecipeIngredientsList = ({ ingsList }) => {
    if (!ingsList) return null;

    return (
        <ul className="recipe-ings-list">

            {
                ingsList.map(ings => (
                    <li key={shortid.generate()}>{ings}</li>
                ))
            }
        </ul>
    )
}

const RecipeInstructionsList = ({ insList }) => {
    if (!insList) return null;

    return (
        <ul className="recipe-ins-list">

            {
                insList.map(ins => (
                    <li key={shortid.generate()}>{ins}</li>
                ))
            }
        </ul>
    )
}

const ShowRecipe = () => {
    let locationObj = useLocation();
    console.log(locationObj);

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        async function getRecipeById() {
            let response = await api.get('/recipes/getRecipe/' + locationObj.state);
            await console.log(response);
            setRecipe(response.data.recipeData);
            await console.log({ recipe });
        }

        getRecipeById();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <section className="recipe-cover-img-sec-1">
                <div className="recipe-img-wrapper container-sm">
                    <img src={recipe.imgUrl} alt={recipe.name} className="recipe-img" />
                </div>
                <div className="container-sm recipe-info-box">
                    <h4 className="recipe-name">{recipe.name}</h4>
                    <div className="likes-wrapper">
                        <span className="recipe-likes"><FcLike />{recipe.likes}</span>
                        <span className="recipe-dislikes"><IoHeartDislikeOutline />{recipe.disLikes}</span>
                    </div>
                    <div className="recipe-category">
                        <span><ImSpoonKnife /> Category : {recipe.category}</span>
                    </div>
                </div>
            </section>
            <section className="recipe-ingredients-sec-2">
                <div className="recipe-ing-wrapper">
                    <div className="recipe-ing-list-container">
                        <h3 className="recipe-ing-heading"><IoFastFoodOutline />Ingredients</h3>
                        <RecipeIngredientsList ingsList={recipe.ingredients} />
                    </div>
                    <div className="waves">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c8e1ea" fillOpacity="1" d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,192C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    </div>
                </div>
            </section>
            <section className="recipe-instructions-sec-3">
                <div className="recipe-ins-wrapper">
                    <div className="recipe-ins-list-container">
                        <h3 className="recipe-ins-heading"><FcTodoList />Instructions</h3>
                        <RecipeInstructionsList insList={recipe.instructions} />
                    </div>
                    <div className="waves">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c8e1ea" fillOpacity="1" d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,192C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    </div>
                </div>

            </section>

        </>
    );

}


export default ShowRecipe;