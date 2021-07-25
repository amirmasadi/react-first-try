
function Navbar(){

    return(
    <div>
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4 d-flex justify-content-around align-items-center" >
                <ul className="w-50 d-flex ">
                    <li><a href="/" className="text-light mx-3">خانه</a></li>
                    <li><a href="/" className="text-light mx-3">پروژه ها</a></li>
                    <li><a href="/" className="text-light mx-3">درباره من</a></li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2 bg-dark text-light  " type="search" placeholder="جست و جو ..." aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">سرچ</button>
                </form>
            </div>
            </div>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container-fluid px-5">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">amirasadi</a>
                </div>
        </nav>
    </div>
    );

}

export default Navbar;