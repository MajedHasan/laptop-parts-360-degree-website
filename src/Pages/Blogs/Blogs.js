import React from 'react';

const Blogs = () => {
    return (
        <section className="blog my-8">
            <div className="container mx-auto px-3">
                <h2 className="text-center font-bold text-teal-700 text-3xl mb-8">Our Blogs</h2>
                <div className="w-full max-w-xl mx-auto p-4 shadow rounded">
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            1 How will you improve the performance of a React Application?
                        </div>
                        <div class="collapse-content">
                            <p>React applications provide us a very fast UI by default. But some time we have to may encounter some performance issues. To optimize the performance of a React application we have to follow some way. Like React pre-optimization techniques. Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance.. We’ve learned that a state update in a parent component re-renders the parent and its child components. So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code. Memorizing React components to prevent unnecessary re-renders. </p>
                        </div>
                    </div>
                    <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            02. What are the different ways to manage a state in a React application?
                        </div>
                        <div class="collapse-content">
                            <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of:
                                <ul>
                                    <li> •	Hooks</li>
                                    <li>•	React Context API</li>
                                    <li>•	Apollo Link State</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            03. How does prototypical inheritance work?
                        </div>
                        <div class="collapse-content">
                            <p>In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype. JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes. Syntax:
                                ChildObject.__proto__ = ParentObject</p>
                        </div>
                    </div>
                    <div tabindex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            04. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                        </div>
                        <div class="collapse-content">
                            <p>Ans Will goes here</p>
                        </div>
                    </div>
                    <div tabindex="4" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            05. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </div>
                        <div class="collapse-content">
                            <p>Ans Will goes here</p>
                        </div>
                    </div>
                    <div tabindex="5" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            06. What is a unit test? Why should write unit tests?
                        </div>
                        <div class="collapse-content">
                            <p>Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.
                                One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;