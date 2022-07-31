//@ts-check

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export default function handler(req, res, next) {
  try {
    
    res.sendFile("index.html");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occured on the server. status: 500");
  }
}
