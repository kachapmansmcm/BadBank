function Deposit(props) {
  const [status, setStatus] = React.useState("");
  const [depositAmount, setDepositAmount] = React.useState(0.0);
  const ctx = React.useContext(UserContext);
  const index = ctx.users.findIndex((user) => user.name == props.user.name);
  const [balance, setBalance] = React.useState(
    parseFloat(ctx.users[index].currentBalance).toFixed(2)
  );
  React.useEffect(() => props.setActivePage(location.hash));

  function validate(field) {
    if (!field) {
      setStatus("Error: must add a valid value");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field === NaN) {
      setStatus("Error: Must be a number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field < 0) {
      setStatus("Error: Must not be negative");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  const handleDeposit = () => {
    if (!validate(depositAmount, "deposit")) return;
    let newBalance = Number(balance) + Number(depositAmount);
    setBalance(newBalance.toFixed(2));
    ctx.users[index].currentBalance = newBalance.toFixed(2);
    setStatus("Success: Your new balance is: $" + newBalance.toFixed(2));
    setDepositAmount(0.0);
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={
        <>
          Your Current Balance is:
          <br />${balance}
          <br />
          Enter the Amount of your Deposit
          <br />
          <input
            input="True"
            type="number"
            min="0.01"
            step="0.01"
            className="form-control"
            id="depositAmount"
            placeholder="Enter Deposit Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Deposit Amount
          </button>
        </>
      }
    />
  );
}
