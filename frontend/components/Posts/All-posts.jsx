import PostsGrid from "./Posts-grid";

const AllPosts = ({posts}) => {
    return (
        <section>
            <h1>All Posts</h1>
            <PostsGrid posts={posts}/>
        </section>
    );
};

export default AllPosts;
