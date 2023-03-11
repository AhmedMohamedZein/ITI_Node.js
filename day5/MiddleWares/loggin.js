
module.exports =  async function consoleTheRequestIp (req, res , next) {
    console.log(req.socket.remoteAddress , " : loggedin");
    next();
}