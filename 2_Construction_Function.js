function BankAccount(customerName, balence = 0) {
  this.customerName = customerName;
  this.AccountNumber = Date.now();
  this.balence = balence;

  // Create Methord yani ik function bnana
  this.deposit = function (Amount) {
    this.balence = this.balence + Amount;
  };

  // Ab WithDraw krny ky leay bi ik Methord Bnaty
  this.withdraw = (Amount) => {
    this.balence -= Amount;
  };
}

//const haiderBank = new BankAccount("haider", 100);
//console.log(haiderBank);

//Ab hum ik Array bnaty han or os me sare Account ko Stor krty han
const accounts = [];

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#CustomerName");
const balence = document.querySelector("#Balence");
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = new BankAccount(CustomerName.value, +Balence.value);
  accounts.push(account);

  console.log(account);
});

//For Deposit
const deposit = document.querySelector("#deposit");
const accountnumber = document.querySelector("#accountnumber");
const amount = document.querySelector("#amount");

deposit.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.fint(
    (account) => account.accountnumber === accountnumber.value
  );
  account.deposit(+account.value);
  console.log(account);
});
