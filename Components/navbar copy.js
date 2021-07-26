function NavBar(props){
  if (props.user != null) {
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/logout/">Logout</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }
  else {
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
          <ul className="navbar-nav">            
            <li className="nav-item">
              <a className="nav-link active" href="#/login/">Login</a>
            </li>     
          </ul>
        </div>
      </nav>
      </>
    );
  }
}