import Image from "next/image";

const SliderPost = ({slider}) => {

    return (
        slider.map((item,i) => (
            <div
                key={item.sys.id}
                className={`carousel-item float-left w-full ${i === 0 && 'active'}`}>
                <Image
                    src={item.fields.image[0].original_url}
                    width={1920}
                    height={800}
                    layout="responsive"
                    alt={item.fields.description}
                    objectFit="cover"
                />
                <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">{item.fields.title}</h5>
                    <p>{item.fields.description}</p>
                </div>
            </div>
        ))

    );
};

export default SliderPost;
