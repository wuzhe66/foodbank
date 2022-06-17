
export default function validateInfo(values){
    let errors={}

    //username empty
    if(!values.username.trim()){
        errors.username = "Username is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 6 ){
        errors.password = 'Password must be at least 6 characters long'
    }

    if(!values.password2){
        errors.password2 = "Confirm Password is required"
    }else if(values.password2 !== values.password){
        errors.password2 = "Password do not match"

    }

    return errors;
}