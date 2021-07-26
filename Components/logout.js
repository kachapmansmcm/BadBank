const Redirect = ReactRouterDOM.Redirect;

function Logout(props){
    const [show, setShow] = React.useState(true);
  
    const handleLogout = () => {
        props.setUser(null);
        setShow(false);
    }        

    return (
      <Card
        bgcolor="primary"
        header="Log Out"
        body={show ? (  
                <div>
                  <button type="submit" className="btn btn-light" onClick={handleLogout}>Log Out</button>
                </div>
        ):(           
                <div>
                  <h5>Successful Logout</h5>
                </div>              
        )
        }
        />
    )

  }