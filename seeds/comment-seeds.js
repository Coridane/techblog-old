const { comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "\"Oota-goota, Solo?\""
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "HELP!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "\"What do you mean help? We are helping.\""
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "\"We're helping hands.\""
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "\"When single shines the triple sun... What was sundered and undone... Shall be whole, the two made one... by Gelfling hand or else by none.\""
    },
    {
        user_id: 6,
        post_id: 4,
        comment_text: "\"I've lost the bleeps, I've lost the sweeps, and I've lost the creeps.\""
    },
    {
        user_id: 7,
        post_id: 4,
        comment_text: "\"That's not all he's lost.\""
    }
]

const seedComments = () => comment.bulkCreate(commentData);

module.exports = seedComments;