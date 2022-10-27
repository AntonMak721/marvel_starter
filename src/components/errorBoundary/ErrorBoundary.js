// import { useState, useEffect } from "react";

// import ErrorMessage from "../errorMessage/ErrorMessage";

// const ErrorBoundery = (props) => {
//   const [error, setError] = useState(false);

//  useEffect( (error, errorInfo) => {
//     console.log(error, errorInfo);
//     setError({ error: true });
//   }, []);

//   if (error) {
//     return <ErrorMessage />;
//   }

//   return props.children;
// };

// export default ErrorBoundery;

import { Component } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundery extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({error:true})
    }

render() {
    if (this.state.error) {
        return (<ErrorMessage/>)
    }

    return this.props.children;
}
}
export default ErrorBoundery;