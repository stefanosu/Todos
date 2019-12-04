import React from 'react' 
import FallBackComponent from './FallBackComponent';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    componentDidCatch(error, info) {
        //Show fallback UI 
        this.setState({hasError: true})
        this.logErrorToMyService(error, info);
    }

    logErrorToMyService(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <FallBackComponent/>
            // You can render any custom fallback UI
            // return <h1>Something went wrong!!!</h1>;
        }
        return this.props.children;
        }
    }

export default ErrorBoundary;