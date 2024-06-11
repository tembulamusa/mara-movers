import React, { useEffect} from 'react'

import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteChangeTracker = ({ history }) => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }, [location])

    return <div></div>;
};

export default RouteChangeTracker;
