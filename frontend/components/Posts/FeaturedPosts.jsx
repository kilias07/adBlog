import PostsGrid from "./Posts-grid";


const FeaturedPosts = ({posts, activeLink}) => {

    return (
        <div className="max-w-screen-3xl mx-auto">
            <PostsGrid posts={posts}/>
        </div>
    );
};

export default FeaturedPosts;
