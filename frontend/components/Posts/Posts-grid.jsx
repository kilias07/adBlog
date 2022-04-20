import PostItem from "./Post-item";

const PostsGrid = ({posts}) => {
    return (
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {posts.map(post => (
                <PostItem
                key={post.sys.id}
                post={post}
                />
            ))}
            </div>
    );
};

export default PostsGrid;
