function BankAccount(customerName, balence = 0) {
  this.customerName = customerName;
  this.AccountNumber = Date.now();
  this.balence = balence;
}
//Ab hum prototype me ik function ko dyten han

BankAccount.prototype.deposit = function (Amount) {
  this.balence = this.balence + Amount;
};

// Prototype sy with Draw ka function bnaty han or pher os ko use krty han

BankAccount.prototype.withdraw = function (Amount) {
  this.balence -= Amount;
};

// TO Make a Current  Account
function CurrentAccount(customerName, balence = 0) {
  // Parenet Constructor ko call kiya hy Chlid Function me is ko Constructing Linking bi kahten han

  BankAccount.call(this, customerName, balence);

  /*this.customerName = customerName;
  this.AccountNumber = Date.now();
  this.balence = balence;*/

  this.transectionLmit = 5000;
}

// TO take a Loana
CurrentAccount.prototype.takebusinessLoan = function (Amount) {
  console.log("To Take a Business Loan", +Amount);
};

// Chlid Account ky prototype ko parent Account ky prototype sy linkt larwana

CurrentAccount.prototype = Object.create(BankAccount.prototype);

//Ab hum prototype me ik function ko dyten han

/*CurrentAccount.prototype.deposit = function (Amount) {
  this.balence += Amount;
};
// Prototype sy with Draw ka function bnaty han or pher os ko use krty han

CurrentAccount.prototype.withdraw = function (Amount) {
  this.balence -= Amount;
};*/

// TO Make a Saving   Account
function SavingAccount(customerName, balence = 0) {
  /*this.customerName = customerName;
  this.AccountNumber = Date.now();
  this.balence = balence;*/
  this.transectionLmit = 1000;
}

// TO take a Loana
SavingAccount.prototype.takepersonalloan = function (Amount) {
  console.log("To Take a Personal Loan ", +Amount);
};

// Chlid Account ky prototype ko parent Account ky prototype sy linkt larwana

SavingAccount.prototype = Object.create(BankAccount.prototype);

//Ab hum prototype me ik function ko dyten han

/*SavingAccount.prototype.deposit = function (Amount) {
  this.balence += Amount;
};
// Prototype sy with Draw ka function bnaty han or pher os ko use krty han

SavingAccount.prototype.withdraw = function (Amount) {
  this.balence -= Amount;
};*/

const haiderBank = new CurrentAccount("Chal myry bhai ", 20);
haiderBank.deposit(90);
console.log(haiderBank);
