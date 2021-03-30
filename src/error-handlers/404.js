'use strict';

module.exports = (res,req) => {
    res.status(404).json({
        error: 404,
        route: req.path,
        message: 'Invalid Path'
    });
};