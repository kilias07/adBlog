import {createClient} from "contentful";
import Carousel from "../components/Carousel";
import {GridSection} from "../components/gridPosts/GridSection";


export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const resPosts = await client.getEntries({
        content_type: "posts"
    })
    const resSlider = await client.getEntries({
        content_type: "slider"
    })
    return {
        props: {
            posts: resPosts.items,
            slider: resSlider.items,
        },
        revalidate: 30,
    }
}


const Home = ({posts, slider}) => {
    return (
        <>
            <Carousel slider={slider}/>
            <GridSection posts={posts}/>
        </>
    )
}

export default Home;