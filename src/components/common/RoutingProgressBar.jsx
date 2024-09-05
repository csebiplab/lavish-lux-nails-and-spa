'use client';
import { AppProgressBar } from 'next-nprogress-bar';
const RoutingProgressBar = () => {
    return (
        <AppProgressBar  
            height="4px"
            color="#ff6348"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
};

export default RoutingProgressBar;