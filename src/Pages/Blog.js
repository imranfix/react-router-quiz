import Accordion from 'react-bootstrap/Accordion';

function Blog() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h4>1. What is the purpose of React-Router?</h4> </Accordion.Header>
        <Accordion.Body>
            <p className='fw-semibold'>
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a <br /> React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            Let us create a simple application to <br /> <br /> React to understand how the React Router works. The    application will contain three components: home component, about a <br /> component, and contact    component. We will use React Router to navigate between these components.
            </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><h4>2. How does Context API work?</h4></Accordion.Header>
        <Accordion.Body>
         <p className='fw-semibold'>
         React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.
        <br /> <br />

        Anytime you want! There is no iron-clad rule like when to use Context in your application. Whenever you want a store to keep your states or variables in and use them elsewhere in your program, use Context. Generally, when we have two or more levels(height) in our component tree, it is viable to use a store instead of passing props and then lifting the state as this will create confusion and unnecessary lengthy code.  <br /><br />
        Example: 
        If we have three components in our app, A-B-C where A is the parent of B and B is the parent of C. To change a state from C and pass it to A, keep the state of A in a store, then extract the state from store and use it in C. This completely eliminates the necessity of  the state to pass through B. So the flow is like A-C.


         </p>
        
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header> <h4>3. What is the useRef hook?</h4></Accordion.Header>
        <Accordion.Body>
                    <p className='fw-semibold'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div ref , React will set its .current property to the corresponding DOM node whenever that node changes.
                    <br /> <br />
                    However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

                    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a (current ...) object yourself is that useRef will give you the same ref object on every render. <br /> <br />

                    Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


                    </p>        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Blog;