#�ʴ���
##1. 200HTTP��Ӧ��ʲô��˼

    ��ǰ�˷�������󣬷���˿�ʼ����·���Ͳ�ѯ�ַ�����Ȼ��ʼ����������Ӧҳ��
    ��������ɹ���᷵��һ����200��״̬��ʹ�����ɵ�ҳ��һ�����ظ��ͻ���

##2. Connection:Keep-AliveͷΪʲô����Ҫ
        
        ������һֱ���ַ������ӣ�����ÿ�ζ�ȥ����TCP��������
    
##3. ��ε���һ��ģ��

    var http = require('http');  ͨ��global��require���Ե���

##4. ��ΰ�װһ��ģ��

    npm install mime; ʹ��npm

##5. д�� url http fs mime ģ���еļ������÷�������ע��������

    var http = require('http');
    var server = http.createServer(function (req,res){console.log('����������')}); ����һ��http���񣬷���һ���µ�web����������
    server.listen(8080); ����һ��8080�Ķ˿�
    
    var url = require('url');
    url.parse(url,true,); ����һ��url�ַ�������ת��һ������
    url.formate(urlobj); ����һ��url���󣬿�ת��һ���ַ���
    url.resolve(from,to); ����һ��ԭʼ��·�����ɸı䵽Ŀ��·��
    
    var fs = require('fs');
    fs.readFile('index.html',function (err,data){});  �첽��ȡ�ļ�
    fs.readFileSync(); ͬ����ȡ�ļ�������һ���ַ�����buffer
    fs.writeFile(); �첽д��һ���ļ�
    fs.writeFilsSync(); ͬ��д��һ���ļ�
    
    var mime = require('mime');   ʵ���ļ����ͺ��������͵�ת��
    mime.lookup(fileName);
    

##6. д������global�µ�ȫ�ֱ�����ע��������

    global
    process   ���̶���
    Buffer  ������ ��ʱ������ڴ��һ������
    console  ���
    exprots  ����һ��ģ��
    module   ģ�����
    require  ����һ��ģ��
    setInterval 
    setTimeout
    __dirname  ��ǰ�ļ���Ŀ¼
    __filename ��ǰ�ļ��ľ���·��

##7. д������process �µļ������Ի򷽷���ע��������

    process.pid����ǰ���̵Ľ��̺š�
    process.version��Node�İ汾������v0.10.18��
    process.platform����ǰϵͳƽ̨������Linux��
    process.title��Ĭ��ֵΪ��node���������Զ����ֵ��
    process.argv����ǰ���̵������в������顣
    process.env��ָ��ǰshell�Ļ�������������process.env.HOME��
    process.execPath�����е�ǰ���̵Ŀ�ִ���ļ��ľ���·����
    process.stdout��ָ���׼�����
    process.stdin��ָ���׼���롣
    process.stderr��ָ���׼����
 
 
#������
##1. �����node������һ�����񲢼���8080�˿�

    var http = require('http');
    var server = http.createServer(function (req,res){});
    server.listen(8080);

##2. ʵ��һ���򵥵��¼����� ������Ӽ���  �����¼� �Ƴ�����


    var EventEmiter = require('events');
    var util = require('util');
    
    util.inherits(Person,EventEmiter);

    function Person (){ 
        
    }
    
    var p1 = new Person();
    
    p1.on('say',function (){ 
        console.log('������������');
    });
    p1.emit('say');
    

##3. ��ζ�ȡһ��txt�ı������ҽ����������

    var fs = require('fs');
    
    fs.readFile('index.html','utf8',function (err,data){ 
       console.log(data); 
    });


##4. �Լ�ʵ��һ��buffer�Ŀ�������
