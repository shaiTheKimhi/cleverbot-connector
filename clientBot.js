var cleverbot = require("cleverbot.io");
bot = new cleverbot("xS8Vvf6QuVUQQhB8", "99mlxrCPILWNjtKgVQ6FdrkLPlrhdlaH");

bot.setNick("nick");
bot.create(function (err, session) {
});


//////
const ws = require("ws").Server;

var clients = {}

const server = new ws({port: 9899});
server.on("connection", function(conn) {
    console.log("connected");
    conn.on("message", function(data) {
        console.log("recieved data"+data);
            bot.ask(data,function(err,response){
                console.log(response);
                conn.send(response);
            });
        
    });
   /* conn.on("close", function() {
        if (clients[conn]) {
			if (clients[conn].stopListening) {
				clients[conn].stopListening();
			}
			clients[conn].api.logout(function(){});
			delete clients[conn];
		}
    })*/
});