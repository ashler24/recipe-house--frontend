import api from 'api';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './showRecipe.css';


const ShowRecipe = ( ) => {
    let locationObj = useLocation();
    console.log(locationObj);

    const[recipe, setRecipe] = useState({});

    useEffect(()=>{
        async function getRecipeById(){
            let response = await api.get('/getRecipe/'+locationObj.state);
            await console.log(response);
            setRecipe(response.data.recipeData);
            await console.log({recipe});
        }

        getRecipeById();
        // eslint-disable-next-line
    },[])

    return (
        <>
            <section className="recipe-cover-img-sec-1">
                <div className="recipe-img-wrapper container-sm">
                    <img src={recipe.imgUrl} alt={recipe.name} className="recipe-img"/>
                </div>
                <div className="container-sm recipe-info-box">
                    <h4 className="recipe-name">{recipe.name}</h4>
                </div>
            </section>
            <section></section>
            <section></section>
        </>
    );

}


export default ShowRecipe;