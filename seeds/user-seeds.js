const { user } = require('../models');

const userData = [
    {
        username: "Greedo",
        twitter: "TwitterNameForGreedo",
        github: "GitNameForGreedo",
        email: "EmailForGreedo@gmail.com",
        password: "randomPw123"
    },
    {
        username: "Sarah",
        twitter: "TwitterNameForSarah",
        github: "GitNameForSarah",
        email: "EmailForSarah@gmail.com",
        password: "randomPw123"
    },
    {
        username: "Talking Hands 1",
        twitter: "TwitterNameForTH1",
        github: "GitNameForTH1",
        email: "EmailForTH1@gmail.com",
        password: "randomPw123"
    },
    {
        username: "Talking Hands 2",
        twitter: "TwitterNameForTH2",
        github: "GitNameForTH2",
        email: "EmailForTH2@gmail.com",
        password: "randomPw123"
    },
    {
        username: "Jen",
        twitter: "TwitterNameForJen",
        github: "GitNameForJen",
        email: "EmailForJen@gmail.com",
        password: "randomPw123"
    },
    {
        username: "Spaceball",
        twitter: "TwitterNameForSpaceball",
        github: "GitNameForSpaceball",
        email: "EmailForSpaceball@gmail.com",
        password: "randomPw123"
    },
    {
        username: "Helmet",
        twitter: "TwitterNameForHelmet",
        github: "GitNameForHelmet",
        email: "EmailForHelmet@gmail.com",
        password: "randomPw123"
    }
]

const seedUsers = () => user.bulkCreate(userData);

module.exports = seedUsers;