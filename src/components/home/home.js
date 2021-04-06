import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
import { BsArrowRight } from 'react-icons/bs';
import './home.css';
import API from '../../api';
import shortid from 'shortid';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const RecipeSearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <Form>
                <FormGroup>
                    <Label for="searchRecipe">Search Recipe</Label>
                    <Input type="text" name="recipeName" id="recipeName" placeholder="search recipe by name..." />
                </FormGroup>
            </Form>
        </div>
    );
}

const RecipeCard = ({ recipe }) => {

    const recipeImgStyle = {
        "width": "100%",
        "objectFit": "cover",
    }


    return (
        <>
            <Card key={shortid.generate()}>
                <CardImg top src={recipe.imgUrl} alt="Card image cap" style={recipeImgStyle} />
                <CardBody>
                    <CardTitle tag="h5">{recipe.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{recipe.category}</CardSubtitle>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <div className="show-recipe-btn-wrapper">
                        <Link to={{
                            pathname: "/getRecipe",
                            state: recipe._id
                        }} fade="false"> <button className="btn show-recipe-btn"><BsArrowRight /></button></Link>

                    </div>
                </CardBody>
            </Card>
        </>
    )
}

const RecipeCarousel = ({ recipeList }) => {
    if (!recipeList) return null;
    return (
        <>
            <Swiper
                key={shortid.generate()}
                spaceBetween={5}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
            >
                {recipeList.map((recipe, i) => {
                    return (
                        <>
                            <SwiperSlide key={shortid.generate()}><RecipeCard recipe={recipe} key={shortid.generate()} /></SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    )
}


const Home = () => {

    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        async function getRecipeList() {
            let response = await API.get('/');
            await console.log([...response.data]);
            setRecipeList([...response.data]);
            await console.log({ recipeList });
        }

        getRecipeList();
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <section className="container-sm search-bar-sec-1">
                <RecipeSearchBar />
            </section>
            <section className="recipe-carousel-sec-2">
                <RecipeCarousel recipeList={recipeList} />
            </section>
            <section className="featured-recipe-sec-3">
            </section>
            <section className="more-recipes-sec-4">
            </section>
        </>
    );
}


export default Home;