import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    profilePicture: {
        type: String,
        default:
          'https://hypesquaremedia.com/wp-content/uploads/2024/01/about_image_bg.png',
      },
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;