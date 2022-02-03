import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-principal">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark" id='modi-nav'>
                <div className="container">
                    <a class="navbar-brand" href="#">ConcePrint</a>
                        
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                             <li class="nav-item">
                                 <a class="nav-link active" aria-current="page" href="https://www.inprnt.com/">Home</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="https://www.inprnt.com/">Tienda</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link" href="https://www.inprnt.com/">Artistas</a>
                             </li>
                        </ul>
                    </div>
                    <CartWidget/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon">
                            </span>
                        </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;