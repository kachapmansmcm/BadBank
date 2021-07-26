function AllData(props) {
  const ctx = React.useContext(UserContext);
  React.useEffect(() => props.setActivePage(location.hash));
  const [users, setUsers] = React.useState(ctx.users);
  users.forEach((element) => {
    console.log(element.name);
  });
  console.log(users);

  function renderTableData() {
    return users.map((user, i) => {
      const {name, email, password, currentBalance} = user;
      let convertedBalance = Number(currentBalance).toFixed(2);
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>${convertedBalance}</td>
        </tr>
      );
    });
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
}
