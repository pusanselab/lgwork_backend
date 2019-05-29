function Pageable(req, content) {
    page = req.query.page
    size = req.query.size
    totalElements = content.count
    totalPages = Math.ceil(totalElements / size)
    isFirst = parseInt(page) === 0
    isLast = (totalPages === 0) ? true : parseInt(page) === (totalPages - 1)
    return {
        'content': content.rows,
        'page': page,
        'size': size,
        'totalPages': totalPages,
        'totalElements': totalElements,
        'isFirst': isFirst,
        'isLast': isLast
    }
}

// 에러 폼

function ErrForm(res, err) {
    let status
    let errCode
    let errMsg
    if (typeof err === "object") {
        if (!e[err.name]) status = 500
        else status = e[err.name].status
        errCode = err.name
        errMsg = err
    } else {
        status = e[err].status
        errCode = err
        errMsg = e[errCode].msg
    }

    return res.status(status).json({
        errCode: errCode,
        errMsg: errMsg
    })
}

module.exports = ( app, appRoot, express) => {
    // global.db = db
    global.app = app
    global.appRoot = appRoot
    global.express = express
    global.ErrForm = ErrForm
    global.Pageable = Pageable     // global 로 쓸 변수들을 global 에 넣어줌.

    global.e = {
        SequelizeValidationError: {
            status: 400,
            code: 'SequelizeValidationError',
            msg: '요청값이 잘못되었습니다.'
        },
    }
}