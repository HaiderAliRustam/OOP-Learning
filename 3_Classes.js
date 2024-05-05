class BankAccount {
  customerName;
  accountNumber;
  Blance;

  constructor(customerName, Blance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.Blance = Blance;
  }

  deposit(Amount) {
    this.Blance += Amount;
  }
  withdraw(Amount) {
    this.Blance -= Amount;
  }
}

const haiderBank = new BankAccount("Haider ali ", 45);
haiderBank.deposit(15);
console.log(haiderBank);
haiderBank.withdraw(5);
console.log(haiderBank);
