use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Victor McDade",
    email: "old.duffer@gmail.com",
    date: "2017-06-01",
    checked: false
  },
  {
    name: "Jack Jarvis",
    email: "jackie@hotmail.co.uk",
    date: "2017-01-22",
    checked: false
  },
  {
    name: "Isa Drennan",
    email: "gossipmonster@virgin.com",
    date: "2018-08-15",
    checked: true
  },
  {
    name: "Winston Ingram",
    email: "oneleg@aol.com",
    date: "2019-08-15",
    checked: false
  },
  {
    name: "Navid Harrid",
    email: "cornershop@msn.com",
    date: "2019-08-15",
    checked: true
  },
  {
    name: "Tam Mullen",
    email: "imnopaying@ntlworld.co.uk",
    date: "2019-08-15",
    checked: true
  }
]);