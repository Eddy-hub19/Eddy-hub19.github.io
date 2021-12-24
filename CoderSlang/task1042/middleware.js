export const logRequestType = (req, res, next) => {
  console.log(`Received ${req.method} request`);
  next();
}