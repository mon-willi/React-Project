import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top zindex-sticky:1020 py-1 bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show  justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link btn btn-secondary text-white" to="/JanInvoices">Jan Invoices</Link>
                            <Link className="nav-link btn btn-secondary text-white" to="/FebInvoices">Feb Invoices</Link>
                            <Link className="nav-link btn btn-secondary text-white" to="/MarInvoices">Mar Invoices</Link>
                            <Link className="nav-link btn btn-secondary text-white" to="/AprInvoices">Apr Invoices</Link>
                            <Link className="nav-link btn btn-secondary text-white" to="/MayInvoices">May Invoices</Link>
                            <Link className="nav-link btn btn-secondary text-white" to="/JunInvoices">Jun Invoices</Link>
                            <Link className="nav-link btn btn-secondary text-white" to="/JulInvoices">Jul Invoices</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;