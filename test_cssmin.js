var Qcloud = require('maxim');

var tools = new Qcloud();

var config = {
    localPath : 'H:\\qcloud-tools',
    destPath : 'H:\\qcloud-tools-dest'
};

var s_time = (new Date()).getTime();
//tools._readFile('H:\\qcloud-tools\\css\\complete.css',function(ret){
//    //ret��һ��������飬ÿһ������һ�����󣬱��棺�ļ������������״̬��1���ɹ���0��ʧ�ܣ�
//    console.log(ret);
//    console.log('total mini seconds is : '+ ((new Date()).getTime() - s_time));
//});

tools.miniCsses(['H:\\qcloud-tools\\css\\iot\\data.css'],config,function(ret){
    //ret��һ��������飬ÿһ������һ�����󣬱��棺�ļ������������״̬��1���ɹ���0��ʧ�ܣ�
    console.log(ret);
    console.log('total mini seconds is : '+ ((new Date()).getTime() - s_time));
});
/*
//����������
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