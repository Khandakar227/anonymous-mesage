// @ts-check
import addSheetData from "../helpers/addSheetData.js";
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export default async function handler(req, res, next) {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const data = [...Object.values(req.body), ip]
    const response = await addSheetData(data);
    res.status(201).send();
  }
  catch(error) {
    console.log(error);
    res.status(500);
  }
}
