import Link from 'next/link';
import Image from 'next/image';

const PostItem = ({post}) => {
    const {title, slug, description} = post.fields;
    const featuredImage = post.fields.featuredImage[0].url;


    return (
        <div className="max-w-sm">
            <Link href={`/blog/${slug}`}>
                <a>
                    <div className="rounded overflow-hidden shadow-lg cursor-pointer">
                        <Image
                            alt={description}
                            className="mx-auto"
                            objectFit="cover"
                            src={featuredImage}
                            width={400}
                            height={400}
                        />
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-xl mb-2">{title}</h3>
                            <p className="text-gray-700 text-base">{description}</p>

                        </div>
                    </div>
                </a>
            </Link>
                    <div className="px-6 pt-4 pb-2">
                        {post.fields.tag.map(tag => (
                            <span key={tag}
                                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                        ))}
                    </div>


        </div>


    );
};

export default PostItem;
