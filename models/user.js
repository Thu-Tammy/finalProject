var mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema({
  email:  { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

userSchema.methods.encryptPasswood = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5),null)
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
};

var User = mongoose.model('User', userSchema);

module.exports = User;