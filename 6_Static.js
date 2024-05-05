class user {
  //Static Propert or methord Class ky under hi stor ho jatii hy
  static id = 1;
  constructor(name, age, incom) {
    this.username = name;
    this.age = age;
    this.incom = incom;
    this.id = user.id++;
  }

  // Ab hum class me ik Static function ko bnaen gen

  static Compairbyage(c, d) {
    return c.age - d.age;
  }
  static Compairbyincom(c, d) {
    return c.incom - d.incom;
  }
}

const user1 = new user("Ali", 40, 500);
const user2 = new user("Ali", 200, 1500);
const user3 = new user("Ali", 800, 950);
const user4 = new user("Ali", 10, 6559);

//sab users ko ik Array  me Stor krwaen gen
const users = [user1, user2, user3, user4];

// Ab os Array ko Compair kr ky sorting krwaen gen

users.sort(user.Compairbyage);
users.sort(user.Compairbyincom);

console.log(users);
