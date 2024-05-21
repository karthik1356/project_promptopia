import { Schema,model,models } from "mongoose";
const userSchema = new Schema({
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true,'Email is required!']
    },
    username:{
        type:String,
        required:[true,'User Name is required!'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,'Username invalid,is should contain 8-20 alphanumeric letters and be unique!']
    },
    image:{
        type:String,
    }
});
const User=models.User||model('User',userSchema);
export default User;
// The 'models' object is provided by the Mongoose library and stores all the registered models.
// If a model named 'User' already exists in the 'models' object ,it assigns that existing model to the 'User' variable.
// if a model named user does not exist in the model object,the model function from mongoose is called to create a new model.
// The newly created model is then assigned to the 'User' variable
