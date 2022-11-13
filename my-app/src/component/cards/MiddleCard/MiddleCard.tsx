import React from 'react';
import { PostsArray} from "../../../data/Post";
import {MiddleCardBlock, MiddleCardBookmark,
    MiddleCardDate,MiddleCardDislikes,MiddleCardIcon,MiddleCardImage,MiddleCardLikes, MiddleCardPoints, MiddleCardTitle} from './style';
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import {IoBookmarkOutline} from "react-icons/io5";

const MiddleCard = () => {
    return (
        <>
            {PostsArray.slice(1, 7).map((e) =>
                <MiddleCardBlock key={e.id}>
                    <MiddleCardImage src={e.image}/>
                    <MiddleCardDate>{e.date}</MiddleCardDate>
                       <MiddleCardTitle>{e.title}</MiddleCardTitle>
                            <MiddleCardIcon>
                                <MiddleCardLikes >< FiThumbsUp/>{e.lesson_num}</MiddleCardLikes>
                                <MiddleCardDislikes><FiThumbsDown/></MiddleCardDislikes>
                                <MiddleCardBookmark>  <IoBookmarkOutline/> </MiddleCardBookmark>
                                <MiddleCardPoints>...</MiddleCardPoints>
                            </MiddleCardIcon>

                </MiddleCardBlock>

            )}

        </>
    );
};

export default MiddleCard;