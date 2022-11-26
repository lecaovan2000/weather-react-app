import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import Routes from '../Routes/Routes';
import Header from '../Header';

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                render={props => (
                    <div>
                        <Header {...props} />
                        <div>
                            <div>
                                <Routes />
                            </div>
                        </div>
                        <Footer />
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout;
