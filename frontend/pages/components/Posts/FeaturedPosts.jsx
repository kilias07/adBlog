import Link from 'next/link';
import PostsGrid from "./Posts-grid";


const FeaturedPosts = ({posts}) => {
    const filteredPosts = posts.filter(post => post.fields.featuredPosts);

    return (
        <div className="max-w-screen-3xl mx-auto">
            <div className="flex justify-center mt-28">
                <Link href='/blog'>
                    <a className="text-3xl uppercase tracking-widest hover:opacity-75 cursor-pointer">Blog</a>
                </Link>
            </div>
            <PostsGrid posts={filteredPosts}/>
        </div>
    );
};

export default FeaturedPosts;
