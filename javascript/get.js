function GET(url, _id){
    var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
        httpRequest.open('GET', url, true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
        /**
        * 获取数据后的处理程序
        */
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText; //获取到json字符串，还需解析
                if (_id == 0){
                var jsonObject = JSON.parse(json);
                if (jsonObject.tf) {
                    // 存储数据到本地
                    sessionStorage.setItem('tf', json);
                    alert("密钥正确，恭喜获得管理权限(下次登录你还需输入密钥，因为密钥会每隔一段时间换一个)");

                }else {
                    alert("密钥错误");
                }
                }
                
            }
        };
}
