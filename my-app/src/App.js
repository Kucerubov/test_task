import React from 'react';
import getCourses from "./http";
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

getCourses();

const App = () => {
    return (
        <div>
            <Header/>
        </div>
    );
};

export default App;