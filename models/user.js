import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    folders: [
        {
            name: {
                type: String,
            },
            notes: [
                {
                    title: {
                        type: String,
                    },
                    content: {
                        type: String,
                    },
                    date: {
                        type: String,
                    },
                    content: {
                        type: String,
                    }
                }
            ]
        }
    ]
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;
