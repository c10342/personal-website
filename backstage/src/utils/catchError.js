const {ParameterException,HttpException} = require('../utils/exception');

function catchError(fn){
    return async function (req,res) {
        try {
            if(typeof fn === 'function'){
                await fn(req,res)
            }else{
                throw new ParameterException('fn is not a function');
            }
        }catch (e) {
            if(e instanceof HttpException){
                res.json({
                    message:e.message,
                    statusCode:e.statusCode
                });
            }else{
                res.json({
                    statusCode:999,
                    message:e.toString()
                });
            }
        }
    }
}


module.exports = catchError;