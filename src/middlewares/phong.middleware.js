const { ErrorCodes } = require('../helpers/constants');
const { responseWithError } = require('../helpers/response-messages');

function validateGetAll(req, res, next) {
    return next();
}

function createPhongMiddleware(req, res, next) {
    const {
        maphong, dientich, dongia, loaiphong,
    } = req.body;
    if (!maphong || !dientich || !dongia || !loaiphong) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'Invalid arguments',
                ),
            );
    }
    return next();
}

function updatePhongMiddleware(req, res, next) {
    const { id } = req.params;
    const {
        maphong, dientich, dongia, loaiphong,
    } = req.body;
    if (!id || !maphong || !dientich || !dongia || !loaiphong) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'Invalid arguments',
                ),
            );
    }

    return next();
}

function findPhongByIdMiddleware(req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'truyen cmm id vao day',
                ),
            );
    }
    return next();
}

function deletePhongByIdMiddleware(req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'truyen cmm id vao day',
                ),
            );
    }
    return next();
}

function findPhongByNameMiddleware(req, res, next) {
    const { maphong } = req.query;
    if (!maphong) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'Hong thay ten',
                ),
            );
    }
    return next();
}

function thuePhongMiddleware(req, res, next) {
    const { makh, phongs, tiencoc } = req.body;
    if (!makh || !phongs || !tiencoc) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'Invalid arguments',
                ),
            );
    }
    if (!Array.isArray(phongs) || phongs.length === 0) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'C???n c?? ??t nh???t 1 ph??ng',
                ),
            );
    }
    if (/^[1-9][0-9]+$/.test(tiencoc) === false) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'Ti???n c???c ph???i l?? s??? nguy??n',
                ),
            );
    }
    return next();
}

function traPhongMiddleware(req, res, next) {
    const { phongs, phieuthueId } = req.body;
    if (!phongs || !phieuthueId) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'Invalid arguments',
                ),
            );
    }
    if (!Array.isArray(phongs) || phongs.length === 0) {
        return res
            .status(ErrorCodes.ERROR_CODE_INVALID_PARAMETER)
            .send(
                responseWithError(
                    ErrorCodes.ERROR_CODE_INVALID_PARAMETER,
                    'C???n c?? ??t nh???t 1 ph??ng',
                ),
            );
    }
    return next();
}

module.exports = {
    validateGetAll,
    createPhongMiddleware,
    updatePhongMiddleware,
    findPhongByIdMiddleware,
    deletePhongByIdMiddleware,
    findPhongByNameMiddleware,
    thuePhongMiddleware,
    traPhongMiddleware,
};
