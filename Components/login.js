function Login(props){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const ctx = React.useContext(UserContext);
  var authenticatedUser = null;
  React.useEffect(() => props.setActivePage(location.hash));

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  const handleLogin = () => {
    console.log(name,password);
    if (!validate(name,     'name'))     return;
    if (!validate(password, 'password')) return;
    authenticatedUser = ctx.users.find(user =>((user.name == name) && (user.password == password)));
    if (typeof authenticatedUser === 'undefined') {
      setError('Bad Username or Password');
      clearForm();
    }
    else {
      props.setUser(authenticatedUser);
      setShow(false);
    }
  }    

  function clearForm(){
    setName('');
    setPassword('');    
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? (  
              <div>
                <h3 style={{color: 'red'}}> {error} </h3>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </div>
            ):(              
              <div>
                <h5>Success</h5>
              </div>
            )}
    />
  )
}