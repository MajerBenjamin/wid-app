import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from'./components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'what is react?',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'why use react?',
        content: 'Because it is awesome'
    },
    {
        title: 'How do you use react?',
        content: 'By creating components'
    },
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
];

    /* const showAcordion = () => {
        if (window.location.pathname === '/') {
            return <Accordion items={items} />;
        }
    };

    const showList = () => {
        if (window.location.pathname === '/list') {
            return <Search />;
        }
    };

    const showDropdown = () => {
        

        if (window.location.pathname === '/dropdown') {
            return <Dropdown 
            
            />;
        }
    };

    const showTranslate = () => {
        if (window.location.pathname === '/translate') {
            return <Translate />;
        }
    }; */


export default () => {
    const [selected, setSelected] = useState(options[0]);
    //const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
           <Route path="/">
               <Accordion items={items} />
           </Route>
           <Route path="/list">
               <Search />
           </Route>
           <Route path="/dropdown">
               <Dropdown
                label="select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected} 
               />
           </Route>
           <Route path="/translate">
               <Translate />
           </Route>
        </div>
    );
};


    {/* <hr />
    <Search />
    <hr />
    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    {showDropdown ?
        <Dropdown 
            selected={selected}
            onSelectedChange={setSelected} 
            options={options} 
        /> : null
    }
    <hr />
    <Translate /> */}