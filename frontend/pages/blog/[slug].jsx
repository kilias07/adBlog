import {createClient} from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async() => {
    const res = await client.getEntries({
        content_type: 'posts',
    })
    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type: 'posts',
        'fields.slug': params.slug,
    });

    return{
        props: {post: items[0]}
    }
}


const MyComponent = ({post}) => {
    const {title, featuredImage, description, postGallery, postText} = post.fields;

    return (
        <div>
            <div>
                <h1>{title}</h1>
                <h2>Opis</h2>
                <div>{documentToReactComponents(postText)}</div>
            </div>
        </div>
    );
};

export default MyComponent;
