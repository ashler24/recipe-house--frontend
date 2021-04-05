import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';
import './home.css';
import logo512 from 'assets/logo512.png'

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

const RecipeCard = () => {

    const recipeImgStyle = {
        "width":"100%",
        "height":"5rem",
        "object-fit": "contain",
    }
    return(
        <Card>
            <CardImg top width="10%" src={logo512} alt="Card image cap" style={recipeImgStyle}/>
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
        </Card>
    )
}

const RecipeCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction:true,
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
                <SwiperSlide><RecipeCard /></SwiperSlide>
                <SwiperSlide><RecipeCard /></SwiperSlide>
                <SwiperSlide><RecipeCard /></SwiperSlide>
                <SwiperSlide><RecipeCard /></SwiperSlide>
            </Swiper>
        </>
    )
}

const Home = () => {
    return (
        <>
            <section className="container-sm search-bar-sec-1">
                <RecipeSearchBar />
            </section>
            <section className="recipe-carousel-sec-2">
                <RecipeCarousel />
            </section>
            <section className="featured-recipe-sec-3">
            </section>
            <section className="more-recipes-sec-4">
            </section>
        </>
    );
}


export default Home;