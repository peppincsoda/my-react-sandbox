import * as React from 'react';
import { SimpleGrid } from './SimpleGrid';

export interface AppProps {
    text: String;
};

export const App = (props: AppProps) => {
    return (
        <div>
            <div>App: {props.text}</div>
            <SimpleGrid/>
        </div>
    );
};
