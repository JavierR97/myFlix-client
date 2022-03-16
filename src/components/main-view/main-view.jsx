// imports React into this file.
import React from 'react';

// (export) - makes the new component usable by other components, modules, and can be inported into files. 
// (class) - states that the component is a class component (as apposed to a function component)
// (MainView) - new component name
// (extends React.Component) - Tells React to create a new MainView componint using the generic react.component template
export class MainView extends React.Component {

// ( render() )- controles what the component displays 
    render() {
        // what the component is gonna display / "render()"
        return (
            <div className="main-view">
                <div>Inception</div>
                <div>The Shawshank Redemption</div>
                <div>Gladiator</div>
            </div>
        );
    }
}