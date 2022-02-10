import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-principal">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id='modi-nav'>
                <div className="container">
                    <a className="navbar-brand" href="#">ConcePrint</a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                             <li className="nav-item">
                                 <a className="nav-link active" aria-current="page" href="https://www.inprnt.com/">Home</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="https://www.inprnt.com/">Tienda</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="https://www.inprnt.com/">Artistas</a>
                             </li>
                        </ul>
                    </div>
                    <CartWidget/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;