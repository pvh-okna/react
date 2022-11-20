import React from 'react';
import {
    BigCardBlock,
    BigCardContent,
    BigCardDate,BigCardImage,
    BigCardImageBlock,
    BigCardText,
    BigCardTitle
} from "./style";
import {PostsArray} from "../../../data/Post";
import {Link} from "react-router-dom";
import {
    MiddleCardBookmark,
    MiddleCardDislikes,
    MiddleCardIcon,
    MiddleCardLikes,
    MiddleCardPoints
} from "../MiddleCard/style";
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import {IoBookmarkOutline} from "react-icons/io5";


const BigCard = () => {
    return (
        <BigCardBlock>
            <BigCardContent>
                <BigCardDate>{PostsArray[0].date}</BigCardDate>
                    <BigCardTitle id={String(PostsArray[0].id)}>
                        {PostsArray[0].title}
                    </BigCardTitle>
                <BigCardText>{PostsArray[0].text}</BigCardText>
                <MiddleCardIcon>
                    <MiddleCardLikes >< FiThumbsUp/>{PostsArray[0].lesson_num}</MiddleCardLikes>
                    <MiddleCardDislikes><FiThumbsDown/></MiddleCardDislikes>
                    <MiddleCardBookmark>  <IoBookmarkOutline/> </MiddleCardBookmark>
                    <MiddleCardPoints>...</MiddleCardPoints>
                </MiddleCardIcon>
            </BigCardContent>
            <BigCardImageBlock>
                <BigCardImage src={PostsArray[0].image}></BigCardImage>

            </BigCardImageBlock>

        </BigCardBlock>
    );
};

export default BigCard;