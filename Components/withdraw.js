function Withdraw(props) {
  if (props.user == null) {
    return <Redirect to="/" />;
  }
  const [status, setStatus] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState(0);
  const [disableButton, setDisableButton] = React.useState(true);
  const ctx = React.useContext(UserContext);
  const index = ctx.users.findIndex((user) => user.name == props.user.name);
  const [balance, setBalance] = React.useState(
    parseFloat(ctx.users[index].currentBalance).toFixed(2)
  );
  React.useEffect(() => props.setActivePage(location.hash));

  function validate(field, label) {
    if (!field) {
      setStatus("Error: Must enter a valid number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (Number(balance) - Number(withdrawAmount) < 0) {
      setStatus("Error: You may not overdraft your account");
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

  const handleWithdraw = () => {
    if (!validate(withdrawAmount, "withDraw")) return;
    let newBalance = Number(balance) - Number(withdrawAmount);
    setBalance(newBalance.toFixed(2));
    ctx.users[index].currentBalance = newBalance.toFixed(2);
    setStatus("Success: Your new balance is: $" + newBalance.toFixed(2));
    setWithdrawAmount(0);
    setDisableButton(true);
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <Card
      bgcolor="primary"
      header="Withdraw Funds"
      status={status}
      body={
        <>
          Your Current Balance is:
          <br />${balance}
          <br />
          Enter the Amount of your withdrawal
          <br />
          <input
            input="true"
            type="number"
            min="0.01"
            step="0.01"
            className="form-control"
            id="withDrawAmount"
            placeholder="Enter Withdraw Amount"
            value={Number(withdrawAmount).toFixed(2)}
            onChange={(e) => {
              setWithdrawAmount(e.currentTarget.value);
              setDisableButton(false);
            }}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            disabled={disableButton}
            onClick={handleWithdraw}
          >
            Withdraw Amount
          </button>
        </>
      }
    />
  );
}
