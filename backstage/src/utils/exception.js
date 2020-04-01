/**
 *异常基类
 *
 * @class HttpException
 * @extends {Error}
 */
class HttpException extends Error{
    constructor(message='服务器错误',statusCode=400){
        super();
        // 错误信息
        this.message = message;
        // 请求响应错误码
        this.statusCode = statusCode;
    }
}

/**
 *参数错误异常类
 *
 * @class ParameterException
 * @extends {HttpException}
 */
class ParameterException extends HttpException{
    constructor(message,statusCode=400){
        super();
        this.message = message || '参数错误';
        this.statusCode = statusCode;
    }
}

/**
 *操作成功
 *
 * @class Success
 * @extends {HttpException}
 */
class Success extends HttpException{
    constructor(message,statusCode=200){
        super();
        this.message = message || 'ok';
        this.statusCode = statusCode;
    }
}

/**
 *找不到资源
 *
 * @class NotFound
 * @extends {HttpException}
 */
class NotFound extends HttpException{
    constructor(message,statusCode=404){
        super();
        this.message = message || 'Not Found';
        this.statusCode = statusCode;
    }
}

/**
 *登录失败
 *
 * @class AuthFailed
 * @extends {HttpException}
 */
class AuthFailed extends HttpException{
    constructor(message,statusCode=401){
        super();
        this.message = message || '授权失败';
        this.statusCode = statusCode;
    }
}


class Forbidden extends HttpException{
    constructor(message,statusCode=403){
        super();
        this.message = message || '禁止访问';
        this.statusCode = statusCode;
    }
}




module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbidden
};