import React from 'react';
import {TabsBlock, TabsList, TabsItem} from "./style";

const Index = () => {

    return (
        <TabsBlock>
            <TabsList>
                <TabsItem
                    onClick={() => console.log("All")}>
                    All

                </TabsItem>
                <TabsItem
                    onClick={() => console.log('My favorite')}>
                    My favorites

                </TabsItem>
                <TabsItem
                    onClick={() => console.log('popular')}>
                    Popular
                </TabsItem>
            </TabsList>
        </TabsBlock>
    );
};

export default Index;