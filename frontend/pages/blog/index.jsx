import AllPosts from "../../components/Posts/All-posts";
import {createClient} from "contentful";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const resPosts = await client.getEntries({
        content_type: "posts"
    })

    return {
        props: {
            posts: resPosts.items,
        },
        revalidate: 30,
    }
}

const Blog = ({posts}) => {


    return (
        <>
            <AllPosts posts={posts}/>
        </>
    )
}

export default Blog;