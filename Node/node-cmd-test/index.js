var nodeCmd = require('node-cmd');
function runCmdTest() {
    nodeCmd.run(
        'node test.js',
        function(err, data, stderr){
            if(err) {
                console.log('发现错误:',err);
            } else if (data) {
                console.log('命令执行且test.js文件执行结果:',data);
            } else {
                console.log('index.js中命令已执行',stderr);
            }
        }
    );
}
runCmdTest();