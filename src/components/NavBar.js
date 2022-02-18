import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-principal">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id='modi-nav'>
                <div className="container">
                    <Link to="/" className="navbar-brand">ConcePrint</Link>  
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                             <li className="nav-item">
                                 <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                             </li>
                             <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/category/2D" className="dropdown-item">2D</Link></li>
                                    <li><Link to="/category/3D" className="dropdown-item">3D</Link></li>
                                </ul>
                             </li>
                             <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Artistas
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/artist/daverapoza" className="dropdown-item" >Dave Rapoza</Link></li>
                                    <li><Link to="/artist/alexkonstad" className="dropdown-item" >Alex Konstad</Link></li>
                                    <li><Link to="/artist/kyounghwankim" className="dropdown-item" >Kyoung Hwan Kim</Link></li>
                                    <li><Link to="/artist/nathanprunier" className="dropdown-item" >Nathan Prunier</Link></li>
                                </ul>
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