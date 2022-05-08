class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createNewError = (msg, statusCode) => {
  return new CustomError(msg, statusCode);
};

module.exports = { CustomError, createNewError };
