//封装byId函数
function byId(id) {
    return typeof (id) ==="string" ? document.getElementById(id):id;
}
//获取元素
var username = byId("username"),
    pwd = byId("pwd"),
    agPwd = byId("agPwd"),
    fullName = byId("fullName"),
    idNumber = byId("idNumber"),
    pemail = byId("pemail"),
    phoneNumber = byId("phoneNumber"),
    subbtn = byId("subbtn"),
    iok = document.getElementsByClassName("iok"),
    usernameIsTrue = false,
    pwdIsTrue = false,
    agPwdIsTrue = false,
    fullNameIsTrue = false,
    idNumberIsTrue = false,
    pemailIsTrue = false,
    phoneNumberIsTrue = false;

//用户名框失去焦点，进行判断 6-20位字母，数字或下划线，字母开头
username.onblur = function () {
    var pattern = /^[a-z]\w{5,19}$/i;
    if(username.value == ""){
        iok[0].innerHTML = "6-20位字母，数字或下划线，字母开头";
        usernameIsTrue = false;
    } else {
        if(username.value.match(pattern)){
            iok[0].innerHTML = "ok";
            usernameIsTrue = true;
        } else {
            iok[0].innerHTML = "6-20位字母，数字或下划线，字母开头";
            usernameIsTrue = false;
        }
    }
};

//密码框失去焦点，进行判断 6-18位字母数字及符号，不能有空格
pwd.onblur = function () {
    var pattern = /^(?:\d|[a-zA-Z]|[^\s]){6,18}$/;
    if(pwd.value==""){
        iok[1].innerHTML = "6-18位字母数字及符号，不能有空格";
        pwdIsTrue = false;
    } else {
        if(pwd.value.match(pattern)){
            iok[1].innerHTML = "ok";
            pwdIsTrue = true;
        } else {
            iok[1].innerHTML = "6-18位字母数字及符号，不能有空格";
            pwdIsTrue = false;
        }
    }
};

//确认密码，同上
agPwd.onblur = function () {
    if(agPwd.value==""){
        iok[2].innerHTML = "密码不一致";
        agPwdIsTrue = false;
    } else {
        if(agPwd.value == pwd.value){
            iok[2].innerHTML = "ok";
            agPwdIsTrue = true;
        }
    }
};

//姓名框失去焦点 真实姓名为两位到四位的中文
fullName.onblur = function () {
    var pattern = /^[\u4e00-\u9fa5]{2,4}$/;
    if(fullName.value==""){
        iok[3].innerHTML="真实姓名为两位到四位的中文";
        fullNameIsTrue = false;
    } else {
        if(this.value.match(pattern)){
            iok[3].innerHTML = "ok";
            fullNameIsTrue = true;
        } else {
            iok[3].innerHTML = "真实姓名为两位到四位的中文";
            fullNameIsTrue = false;
        }
    }
};

//idNumberIsTrue 请输入18位身份证号码
idNumber.onblur = function () {
    var pattern = /^[0-9]{17}([0-9]|x)$/i;
    if(idNumber.value==""){
        iok[4].innerHTML = "请输入18位身份证号码";
        idNumberIsTrue = false;
    } else {
        if(idNumber.value.match(pattern)){
            iok[4].innerHTML = "ok";
            idNumberIsTrue = true;
        } else {
            iok[4].innerHTML = "请输入18位身份证号码";
            idNumberIsTrue = false;
        }
    }
};

//pemailIsTrue 邮箱格式不正确
pemail.onblur = function () {
    var pattern = /^\w+@(?:[a-zA-Z\.]+)(?:\.[a-zA-Z]{2,})$/;
    if(pemail.value==""){
        iok[5].innerHTML = "邮箱格式不正确";
        pemailIsTrue = false;
    } else {
        if(pemail.value.match(pattern)){
            iok[5].innerHTML = "ok";
            pemailIsTrue = true;
        } else {
            iok[5].innerHTML = "邮箱格式不正确";
            pemailIsTrue = false;
        }
    }
};

//phoneNumberIsTrue 电话号码不正确
phoneNumber.onblur = function () {
    var pattern = /^[1-9][0-9]{10}$/;
    if(phoneNumber.value == ""){
        iok[6].innerHTML = "电话号码不正确";
        phoneNumberIsTrue = false;
    } else{
        if(this.value.match(pattern)){
            iok[6].innerHTML = "ok";
            phoneNumberIsTrue = true;
        } else {
            iok[6].innerHTML = "电话号码不正确";
            phoneNumberIsTrue = false;
        }
    }
};

//按钮 点击事件 isTrue全为true
subbtn.onclick = function () {
    if(usernameIsTrue && pwdIsTrue && agPwdIsTrue && fullNameIsTrue && idNumberIsTrue && pemailIsTrue && phoneNumberIsTrue) {
        alert("验证成功！");
    }
}