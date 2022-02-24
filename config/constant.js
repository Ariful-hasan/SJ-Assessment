export const SUCCESS = 200;
export const UNAUTHORIZED = 401;
export const INTERNAL_SERVER_ERROR = 500;
export const BAD_REQUEST = 400;
export const NOT_FOUND = 404;

export const LOG_DELETE_DAYS = 7 * 24 * 60 * 60 * 1000;
export const LOG_PATH = './log/';

export const DEFAULT_SCHEMA_OPTION = {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
};

export const DEFAULT_ID_FORMAT = "/:id([a-f0-9]{24})";
export const ACTIVE = "A";
export const INACTIVE = "I";
export const SUCCESS_MSG = "SUCCESS";
export const FAILED_MSG = "FAILED";
export const ERROR = "ERROR";
export const INVALID_MSG = "INVALID";
export const UNAUTHORIZED_MSG = "UNAUTHORIZED";
export const TYPE_ADMIN = "D";
export const TYPE_USER = "U";