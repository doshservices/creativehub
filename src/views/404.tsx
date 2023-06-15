import '../index.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <h2>Page not found</h2>
            <p>Sorry, we coundn't find the page you are looking for or the Page no longer exist.</p>
            <p>Perhaps you could return back to the the <Link to='/'>Homepage</Link>  to see if you can find what you are looking for.</p>
        </section>
    )
}

export default ErrorPage;