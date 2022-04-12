import SliderPost from "./SliderPost";

const Carousel = ({slider}) => {


    return (
        <div id="carouselExampleCaptions" className="carousel relative slide max-w-screen-3xl mx-auto pt-18"
             data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {slider.map((item, i) => (
                    <button
                        key={item.sys.id}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={`${i}`}
                        aria-label={`Slide ${i+1}`}
                        className={`${i === 0 && 'active'}`}
                    />
                ))}
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <SliderPost slider={slider}/>
            </div>

            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
