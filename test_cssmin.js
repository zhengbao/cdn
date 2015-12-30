var Qcloud = require('maxim');

var tools = new Qcloud();

var config = {
    localPath : 'H:\\qcloud-tools',
    destPath : 'H:\\qcloud-tools-dest'
};

var s_time = (new Date()).getTime();
//tools._readFile('H:\\qcloud-tools\\css\\complete.css',function(ret){
//    //ret是一个结果数组，每一个都是一个对象，保存：文件名、操作结果状态（1、成功；0、失败）
//    console.log(ret);
//    console.log('total mini seconds is : '+ ((new Date()).getTime() - s_time));
//});

tools.miniCsses(['H:\\qcloud-tools\\css\\iot\\data.css'],config,function(ret){
    //ret是一个结果数组，每一个都是一个对象，保存：文件名、操作结果状态（1、成功；0、失败）
    console.log(ret);
    console.log('total mini seconds is : '+ ((new Date()).getTime() - s_time));
});
/*
//测试用数据
var srcPath = [ 'test.js','node_modules/maxim/index.js' ];
var distPath = '/data/imgcache/htdocs/open_proj/proj_qcloud_v2/test';
var host = '14.17.31.229';
var user = 'isux_proj_qcloud';
var pw = 'qcloud@isux365';
var port = '21000';
tools.ftpUtil(srcPath,distPath,host,user,pw,port,
    function(ret){
        console.log(ret);
    }
);
*/
 /*
tools.miniCss('H:\\qcloud-tools\\css\\complete.css',config,function(ret){
    console.log(ret);
});*/