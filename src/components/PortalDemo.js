import {createPortal} from 'react-dom';
// import ReactDOM from 'react-dom';

const PortalDemo = () => {
    return (
       <>
         <div>
            <h1>Portal Demo</h1>
        </div>
        {createPortal(
            <p>This child is placed in the document body.</p>,
            document.getElementById('protal-root')
        )}
       </>
        
    );
}

export default PortalDemo;
