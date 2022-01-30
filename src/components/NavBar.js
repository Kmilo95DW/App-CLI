import 'bootstrap/dist/css/bootstrap.min.css';
import cart2 from './cart2.png';

const Navbar = () => {
    return (
        <div className="navbar-principal">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a class="navbar-brand" href="#">ConcePrint</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
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
                    <button type="button" class="btn btn-primary position-relative">
                         Carrito
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                         5
                                <span class="visually-hidden">unread messages</span>
                            </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;