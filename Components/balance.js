function Balance(props){
  const ctx = React.useContext(UserContext);
  const index = ctx.users.findIndex(user => user.name == props.user.name);
  let balance = parseFloat(ctx.users[index].currentBalance).toFixed(2)
  return (
    <Card
      bgcolor="primary"
      header="Balance"
      status={status}
      body={
              <>
              Welcome {props.user.name}<br/>
              Your Current Balance is:<br/>
              ${balance}
              </>
            }
    />
  )
}
