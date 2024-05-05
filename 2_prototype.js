function BankAccount(customerName, balence = 0) {
  this.customerName = customerName;
  this.AccountNumber = Date.now();
  this.balence = balence;

  // Create Methord yani ik function bnana
  /* this.deposit = function (Amount) {
    this.balence = this.balence + Amount;
  };

  // Ab WithDraw krny ky leay bi ik Methord Bnaty
  this.withdraw = (Amount) => {
    this.balence -= Amount;
  };*/
}

// Construction ka ik Object bnana vo pher hi use ho ae ga

const haiderBank = new BankAccount("haider", 47);
//Add String in Prototype
BankAccount.prototype.test = "Chal myrey bhai ";

//Ab hum prototype me ik function ko dyten han

BankAccount.prototype.deposit = function (Amount) {
  this.balence = this.balence + Amount;
};

// Prototype sy with Draw ka function bnaty han or pher os ko use krty han

BankAccount.prototype.withdraw = function (Amount) {
  this.balence -= Amount;
};
haiderBank.deposit(13);

console.log(haiderBank);

haiderBank.withdraw(30);
console.log(haiderBank);

//console.log(BankAccount.prototype);

// const haiderBank = new BankAccount("haider", 100);
// const alibank = new BankAccount("Ali", 10);
// console.log(haiderBank, alibank);
