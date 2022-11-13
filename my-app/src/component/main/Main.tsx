import React from 'react';
import WrapperCard from "../cards/WrapperCard";
import Tab from "./tabs/Tab";
import Title from "../title/Title";

const Main = () => {
    return (
        <>
            <Title children={"Blog"}/>
            <Tab/>

            <WrapperCard/>
        </>
    );
};

export default Main;