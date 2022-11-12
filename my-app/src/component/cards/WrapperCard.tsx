import React, {useEffect, useState} from 'react';
import {BlockPosts, WrapperBlockPosts} from './style';

import BigCard from "./BigCard/BigCard";
import MiddleCard from "./MiddleCard/MiddleCard";
import { WrapperMiddleCardsBlock } from './MiddleCard/style';
import axios from "axios";


export type itemsProps = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number
}

const WrapperPosts = () => {

    // const [items, setItems] = useState<itemsProps[]>([])
    // // useEffect(() => {
    // //     fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
    // //         .then(res => res.json())
    // //         .then(data => setItems(data.results))
    // // }, [])


    return (
        <WrapperBlockPosts>
            <BlockPosts>
                <BigCard/>
                <WrapperMiddleCardsBlock>
                    <MiddleCard />
                </WrapperMiddleCardsBlock>
            </BlockPosts>
        </WrapperBlockPosts>
    );
};

export default WrapperPosts;