一  数据传输格式:
        xml、json
        xml:适合数据量较大，如门户类网站
        json:轻量级，适合移动端

二  try{

    }catch(err){
        err //错误对象，try的块中执行错误的信息
        补救代码
    }
    说明：
        1.先执行try语句块中代码
        2.若try语句块中代码执行正常，则不执行catch语句块代码
        3.若try语句块中代码执行异常，则执行catch语句块中代码补救
    // 升级版本写法：try-throw-catch，可以在try语句块中手动添加throw语句以手动抛出错误
    // try{
    //     console.log('1');
    //     throw(console.log('手动抛出错误'));
    //     console.log('2');
    // }catch(err){
    //     console.log(err);
    //     console.log('3');
    // }

三  数据提交方式
    get 
    1.不安全
    2.由于显示在地址栏，而最大限制2kb
    3.无法实现上传

    form表单提交post数据
    1.form标签的action属性填写目标url，method属性填提交方式（这里是post），
        enctype属性填写提交的类型（'application/x-www-form-urlencoded'）