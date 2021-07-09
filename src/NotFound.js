import {useHistory} from 'react-router-dom';
const NotFound = () => {

    const history = useHistory();

    const handleClick = () =>{
        history.push('/');
    }
    return (  
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <button onClick={handleClick}>back to home page...</button>
        </div>
    );
}
 
export default NotFound;