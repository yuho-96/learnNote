//点击弹出对应索引
let a;
for(let i = 0;i<10;i++){//i 在块级作用域里
    a = document.createElement('a');
    a.innerHTML = i +'<br/>';
    a.addEventListener('click',function (e) {
        e.preventDefault();
        alert(i);
    })
    document.body.appendChild(a);
}


//promise解决callback hall
function getData(url) {
    return new Promise((resolve,reject) => {
        $.ajax({
            url,
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

