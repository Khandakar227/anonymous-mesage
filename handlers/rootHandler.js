import { join } from "path";
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export default function handler(req, res, next) {
  try {
    const root = join(__dirname, "views/index.html");
    res.sendFile(root);
  }
  catch(error) {
    res.status(500).send("Error occured on the server. status: 500")
  }
}