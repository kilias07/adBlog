import Link from "next/link";
import Image from "next/image";

const PostItem = ({post}) => {

    // const linkPath = `/posts/${slug}`

    // const imagePath = `/assets/posts/${slug}/${image}`;
    return (
        <h1>{post.fields.title}</h1>
        // <li>
        //     <Link href={linkPath}>
        //         <a>
        //             <div className="w-96">
        //                 <Image
        //                     layout="responsive"
        //                     src={imagePath}
        //                     alt={title}
        //                     width={300}
        //                     height={200}
        //                 />
        //             </div>
        //             <div>
        //                 <h3>{title}</h3>
        //                 <time>{formattedDate}</time>
        //                 <p>{excerpt}</p>
        //             </div>
        //         </a>
        //     </Link>
        // </li>
    );
};

export default PostItem;
