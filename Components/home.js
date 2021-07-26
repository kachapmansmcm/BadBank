function Home(props){
    const ctx = React.useContext(UserContext);
    const loc = React.useContext(CurrentPage);
    loc[0] = 'home';
    React.useEffect(() => props.setActivePage(location.hash));

    if(props.user != null){
      return (
        <div>
          <Card
            txtcolor="black"
            header="BadBank Home"
            title={`Welcome ${props.user.name}`}
            text="You can move around using the navigation bar."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
          />
        </div>
      );
    }
    else {
      return (
        <div>
          <Card
            txtcolor="black"
            header="BadBank Home"
            title="Welcome to the bank"
            text="Please Login to access the Your account."
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
          />
        </div>
      );
    }  

}
