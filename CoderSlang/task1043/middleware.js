export const logRequestTimestamp = () => {
  console.log('Mon, 23 Nov 3027 10:15:26 GMT');
}

export const logRequestType = (req, res, next) => {
  console.log(`Received ${req.method} request`);
  next();
}