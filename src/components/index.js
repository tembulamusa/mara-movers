import {useLocation, useParams, useSearchParams} from 'react-router-dom';
import {Context} from '../context/store';
import { Link } from 'react-router-dom';
import { GiGamepad } from "react-icons/gi";
import Events from './events/index.js';
import Shop from './shop/index.js';
import AppDownload from './download_app.js';
import News from './news.js';
import Subscribe from './subscribe.js';
import StartBlog from './start-blog.js';
import Jumbotron from './jumbotron.js';
import OurPromise from './our-promise.js';
import { useContext } from 'react';
import FeaturedEvents from './featured-events.js';
import OurCUstomers from './our-customers.js';
import GetQuote from './get-quote.js';


const Index = (props) => {
    const [state, dispatch] = useContext(Context);
    
    return (
        <div className='main w-100'>
            
            <Jumbotron />

            <OurPromise />

            <FeaturedEvents />
            
            <Events /> {/* The why us section*/}
            
            <OurCUstomers />
            <GetQuote />

        </div>
    )
}

export default Index;
