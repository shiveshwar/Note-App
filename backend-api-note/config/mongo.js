var user = [{
    username  : "navjot",
    firstname : "Navjot",
    lastname : "Dhanawat"
},{
    username  : "vitthal",
    firstname : "Vitthal",
    lastname : "Hajare"
},{
    username  : "shiv",
    firstname : "Shiv",
    lastname : "Sakle"
}];

db.users.insertMany(user);