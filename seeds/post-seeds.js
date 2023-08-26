const { post } = require('../models');

const postData = [
    {
        title: "First Post",
        post_content: "This is a very interesting topic. I can't wait to reveal this revolutionary idea and really unpack this idea with you.",
        user_id: 1
    },
    {
        title: "Second Post",
        post_content: "This is another very interesting topic. I can't wait to reveal this revolutionary idea and really unpack this idea with you.",
        user_id: 2
    },
    {
        title: "Third Post",
        post_content: "This is another very interesting topic. I can't wait to reveal this revolutionary idea and really unpack this idea with you.",
        user_id: 3
    },
    {
        title: "Fourth Post",
        post_content: "This is another very interesting topic. I can't wait to reveal this revolutionary idea and really unpack this idea with you.",
        user_id: 4
    },
    {
        title: "Fifth Post",
        post_content: "This is another very interesting topic. I can't wait to reveal this revolutionary idea and really unpack this idea with you.",
        user_id: 5
    },
]

const seedPosts = () => post.bulkCreate(postData);

module.exports = seedPosts;