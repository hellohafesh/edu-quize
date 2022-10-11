import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>


            <div className='answer'>

                <details>
                    <summary>What is the purpose of react Router</summary>
                    React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.Note that in the documentation and in the API, the actual component is called Browser Router . Some people prefer to simply refer to the component as Router, so you may see it aliased or choose to alias it in code, in which case it will be referred to as Routeras long as it as been imported with an alias.

                </details>
                <details>
                    <summary>Contex API Works Procidure</summary>
                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.Redux is just a concept. If you are comfortable with using reducers and actions and don't find hindering than you may also create reducers and actions that wrap Context API as the store as Redux's author Dan Abramov explained in his medium article about whether Redux is always required.
                </details>
                <details>
                    <summary>About USeRef Hooks</summary>
                    The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. In React components, there are times when frequent changes have to be tracked without enforcing the re-rendering of the component. It can also be that there is a need to re-render the component efficiently. While useState and useReducer hooks are the React API to manage local state in a React component, they can also come at a cost of being called too often making the component to re-render for each call made to the update functions.
                    How values that are stored in a variable are not persisted in a component, and last but not least, how useRef can be used keep track of variables without causing re-render of the component. And give a solution on how to enforce re-render without affecting the performance of a component.
                    After the evolution of functional components, functional components got the ability to have a local state that causes re-rendering of the component once there is an update to any of their local state.
                </details>
            </div>
        </div >
    );
};

export default Blogs;