import React from 'react'

const FallBackComponent = ({componentStack, error}) => (
    
    <div> 
        <p><strong>Oops! An error occured!</strong></p>
        <p>This is what we know…</p>
        <p><strong>Error: {error}</strong></p>
        <p><strong>Stacktrace:</strong> {componentStack}</p>
        </div>
        
    );
        



export default FallBackComponent;