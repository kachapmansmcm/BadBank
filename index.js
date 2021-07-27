

function Spa() {
  let admin = new User('admin', 'admin@acme.com', 20, 'password');
  const [user, setUser] = React.useState(null);
  const [userList, setUserList] = React.useState([admin]);
  const [activePage, setActivePage] = React.useState('#/');
  return (
    <HashRouter>
      <NavBar user={user} activePage={activePage}/>
      <UserContext.Provider value={{users:userList}}>
          <div className="container d-flex justify-content-center" style={{padding: "20px"}}>
            <Route path="/" exact render={(props)=>(<Home {...props} user={user} setActivePage={setActivePage}/>) } />
            <Route path="/CreateAccount/" exact render={(props)=>(<CreateAccount {...props} setUserList={setUserList} setActivePage={setActivePage}/>)}/>
            <Route path="/login/" exact render={(props)=>(<Login {...props} setUser={setUser} setActivePage={setActivePage}/>)} />
            <Route path="/deposit/" exact render={(props)=>(<Deposit {...props} user={user} setActivePage={setActivePage}/>)} />
            <Route path="/withdraw/" exact render={(props)=>(<Withdraw {...props} user={user} setActivePage={setActivePage}/>)} />
            <Route path="/balance/" exact render={(props)=>(<Balance {...props} user={user} setActivePage={setActivePage}/>)} />
            <Route path="/alldata/" exact render={(props)=>(<AllData {...props} user={user} setActivePage={setActivePage}/>)} />
            <Route path="/logout/" exact render={(props)=>(<Logout {...props} user={user} setActivePage={setActivePage}/>)} />
          </div>     
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
