const express = require('express');

const { body, validationResult } = require('express-validator');

const checkValidations = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err) => err.msg);

        const message = errorMessages.join('. ');

        return res.status(400).json({
            status: 'error',
            message,
        });
    }
    next();
};

const createUserValidators = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters'),
    checkValidations,
];

module.exports = { createUserValidators };
