import React from 'react';
import ReactDom from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element 
// formatting 

function Greeting() {
    return (
    <div>
        <h3>hello people</h3>
        <ul>
            <li>
                <a href="#">hello world
                </a>
            </li>
            <img src='' alt='' />
            <input type='text' name='' id='' />
        </ul>
    </div>
    )
}

// const Greeting = () => {
//     return React.createElement('h1', {}, React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'hello world')
//         ));
// };

ReactDom.render(
<Greeting/>, document.getElementById('root')
);
