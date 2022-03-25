import Link from 'next/link';
import Image from 'next/image';

const PostItem = ({post}) => {
    const {title, slug, description} = post.fields;
    const featuredImage = post.fields.featuredImage[0].url;

    console.log(featuredImage);


    return (
        <div className="w-1/3">
            <div className="flex justify-center">
                <Image
                    className="mx-auto"
                    objectFit="cover"
                    src={featuredImage}
                    width={400}
                    height={400}
                />
                <div>
                    <h3>
                        {post.fields.title}
                    </h3>
                    <Link href={`/blog/${slug}`}>
                        <a>Poczytaj wincej</a>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PostItem;
