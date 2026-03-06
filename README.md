# 1) What is JSX, and why is it used?
# --------------------------Answer------------------------------
JSX  : JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It was created for use with React to describe what the UI should look like.

Used : JSX looks similar to HTML, so it is easier for developers to understand the UI structure. Developers can write JavaScript logic and UI markup in the same file, making code more organized.JSX provides helpful error messages and improves debugging.The UI layout and component logic stay together, which makes the code easier to manage in large applications.

# 2) What is the difference between State and Props?
# --------------------------Answer------------------------------
State and Props are two important concepts in React. Props (short for properties) are read-only data that are passed from a parent component to a child component. A component cannot change the value of its props. On the other hand, State is mutable data that a component manages and can change by itself. Props are used to configure components and pass data down, while State is used to handle user interactions or time-based changes. When State changes, the component re-renders. Props change when the parent component sends new data. A simple example: if a parent component sends a name to a child component, that is Props. If a child component has a counter that increases when a button is clicked, that is State.

# 3) What is the useState hook, and how does it work?
# --------------------------Answer------------------------------
useState is a React Hook that is used to add state to functional components. It returns an array where the first element is the current state value and the second element is a function that is used to update that state. The way useState works is: when the component first renders, useState initializes the state with the initial value. When the update function is called, React re-renders the component with the new value. Example: const [count, setCount] = useState(0);. Here, count is the current state (0), and setCount is the function that updates count. When a user clicks a button and calls setCount(count + 1), the count value increases by 1 and the component re-renders. useState can be used multiple times in the same component for different state variables.

# 4) How can you share state between components in React?
# --------------------------Answer------------------------------

There are several ways to share state between components in React. The first and most common method is "lifting state up" - meaning you place the state in the closest common parent component of all components that need the same data, and then pass it down to child components as Props. The second method is using the Context API, which is useful for passing data to deeply nested components and helps avoid prop drilling. By creating a Context and wrapping a part of the app with a Provider, any child component can access that data using the useContext Hook. These libraries create a global state that can be accessed and updated from anywhere in the application.


# 5) How is event handling done in React?
       
# --------------------------Answer------------------------------

Event handling in React is done similarly to HTML, but with some differences. The first difference is that event names are written in camelCase, such as onClick, onChange, and onSubmit. The second difference is that you pass a function as the event handler, not a string. Example: <button onClick={handleClick}>Click me</button>. React events use synthetic events, which ensure cross-browser compatibility. The event handler function receives an event object as a parameter, through which you can get information like the target's value. For form handling, you typically call preventDefault() on the onSubmit event to prevent page reload. You can pass parameters using inline arrow functions: onClick={() => handleDelete(item.id)}. Event handling in React is very flexible and performant, making user interactions interactive and dynamic.
