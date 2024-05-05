function BankAccount(customerName, balence = 0) {
  this.customerName = customerName;
  this.AccountNumber = Date.now();
  this.balence = balence;

  // Create Methiord yani ik function bnana
  this.deposit = function (Amount) {
    this.balence = this.balence + Amount;
  };

  // Ab WithDraw krny ky leay bi ik Methord Bnaty
  this.withdraw = (Amount) => {
    this.balence -= Amount;
  };
}

const haiderBank = new BankAccount("haider", 100);
const alibankk = new BankAccount("Ali");
// console.log(haiderBank, alibankk);

// Agher kisi Property ko Access krna ho to . Dot Lgaa kr hum Access ke skty hna
// console.log(haiderBank.customerName);

// Agher ki Property ki Value Change krni ho to
// Real Project me is tarhan ki Example use ni krni
// is ko incapsulation sy handle kr sty han satter or gatter ky through

//haiderBank.balence = 800;

//Now Methord ko call krna  Deposit ky leaay
alibankk.deposit(80);
haiderBank.deposit(40);
console.log(haiderBank.balence);
console.log(alibankk.balence);

// Now Methord ko call krty han With Draw ky leay
alibankk.withdraw(15);
haiderBank.deposit(25);

console.log(haiderBank.balence);
console.log(alibankk.balence);
