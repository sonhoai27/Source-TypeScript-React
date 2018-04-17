let {validate} = require("validate.js");
let  {checkPassword} = require("../lib/pass.js")

const msgPass1 = 'Phải có ký tự hoa, thường, số và đặt biệt, độ dài hơn 8'
const msgPass2 = 'Phải có ký tự hoa, thường, số và đặt biệt'
const msgPass3 = 'Độ dài phải lớn hơn 8'

const msgEmail1 = "Vui lòng nhập giá trị lớn hơn 3"
const msgEmail2 = "Địa chỉ email không hợp lệ"

const password = (pass)=> {
    //khong phai pass va be hon 8
    if(!checkPassword(pass) && pass.length < 8){
        return {
            status: false,
            message: msgPass1
        }
    }else if(!checkPassword(pass) && pass.length > 8){
        return {
            status: false,
            message: msgPass2
        }
    }
    else if(checkPassword(pass) && pass.length >= 8){
        return {
            status: true,
            message: ''
        }
    }else if(checkPassword(pass) && pass.length < 8){
        return {
            status: false,
            message: msgPass3
        }
    }
}

const email = (e)=> {
    let constraints = {
        from: {
            email: true
        }
    }
    if((e.length <= 3 && e.length > 0) || e.length == 0){
        return {
            status: false,
            message: msgEmail1
        }
    }else if(e.length > 3 && typeof( validate({from: e}, constraints)) !== "undefined"){
        return {
            status: false,
            message: msgEmail2
        }
    }else if(typeof(validate({from: e}, constraints)) === "undefined" && e.length > 3){
        return {
            status: true,
            message: ""
        }
    }
}
module.exports = {password, email}
