import PostItem from "./Post-item";

const PostsGrid = ({posts}) => {
    return (
            <div className="flex justify-between">
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
