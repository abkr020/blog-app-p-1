const { validateToken } = require("../somefunctions/createtoken");

function checkForAuthenticationCookie(cookieName) {
    return (req,res,next)=>{
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            return next();
        }
        try {
            const userpaylode = validateToken(tokenCookieValue)
            req.user = userpaylode;
            // next()
        } catch (error) {
            
        }
        return next()
    }
}



module.exports={
    checkForAuthenticationCookie,
}