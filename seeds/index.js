const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n Database synched\n');
  
  await seedUsers();
    console.log('\nUsers seeded\n');
  
  await seedPosts();
    console.log('\nPosts seeded\n');

  await seedComments();
    console.log('\nComments seeded\n');

  process.exit(0);
};

seedAll();