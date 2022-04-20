import {useState} from "react";
import Link from "next/link";
import FeaturedPosts from "../Posts/FeaturedPosts";
import {GridButtons} from "./GridButttons";

export const GridSection = ({posts}) => {

    //get Unique Tag Values
    const allTag = []
    posts.forEach(post => {
        post.fields.tag && post.fields.tag.forEach(el => allTag.push(el));
    });
    const uniqueValue = [...new Set(allTag)];

    const [activeLink, setActiveLink] = useState(uniqueValue[0]);
    const filteredPosts = posts.filter(post => post.fields.featuredPosts && (post.fields.tag.some(tag => tag === activeLink)));
    return (
        <div>
            <GridButtons uniqueValue={uniqueValue} activeLink={activeLink} setActiveLink={setActiveLink}/>
            <FeaturedPosts posts={filteredPosts} activeLink={activeLink} setActiveLink={setActiveLink}/>
        </div>
    );
};

