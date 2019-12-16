import React,{ useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'https://cs8.pikabu.ru/post_img/big/2017/06/06/2/1496710261194222281.jpg',

    },
    {
        id: 2,
        altText: 'https://i.pinimg.com/originals/74/f6/f4/74f6f4c206165ad27e0c2be9186cabe3.jpg',

    },
    {
        id: 3,
        altText: 'http://www.kartinki24.ru/uploads/gallery/main/24/kartinki24_ru_space_200.jpg',

    }
];

const About = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img style={{width:'100%', height: '100%'}} src={item.altText} alt="#"/>

            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
              max-width: 100%;
             height: 600px;
              background: black;
            }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

        </div>
    );
}
export default About