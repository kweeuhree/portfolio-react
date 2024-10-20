import React from 'react';
import { ErrorFallback } from './ErrorFallback';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorInfo: '' };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        console.error('Error caught in ErrorBoundary:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <ErrorFallback error={this.state.errorInfo}/>;
      }
  
      return this.props.children; 
    }
  }

  export { ErrorBoundary };