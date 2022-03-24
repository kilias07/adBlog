import PostsGrid from "./Posts-grid";

const AllPosts = (props) => {
    return (
        <section>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts}/>
        </section>
    );
};

export default AllPosts;
