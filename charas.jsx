import Carousel from 'react-bootstrap/Carousel';
import './charaCarousel.css'

function CharaCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src ="/reverie_test.jpg" alt="Reverie"></img>
            </Carousel.Item>
            {/*<Carousel.Item>*/}
            {/*    <ExampleCarouselImage text="Second slide" />*/}
            {/*    <Carousel.Caption>*/}
            {/*        <h3>Second slide label</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
            {/*<Carousel.Item>*/}
            {/*    <ExampleCarouselImage text="Third slide" />*/}
            {/*    <Carousel.Caption>*/}
            {/*        <h3>Third slide label</h3>*/}
            {/*        <p>*/}
            {/*            Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
            {/*        </p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    );
}

export default CharaCarousel;