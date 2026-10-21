const bcrypt = require("bcryptjs");

const password = "Sneha@12345";

bcrypt.hash(password, 12).then((hash) => {
    console.log(hash);
});