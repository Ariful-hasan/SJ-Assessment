import dateformat from "dateformat";
import fs from "fs";
import * as constants from "./constant.js";

/**
 * custom error handler
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
// export const handleError = (err, req, res, next) => {
//   logger(err.stack);
//   return res.sendStatus(constants.INTERNAL_SERVER_ERROR);
// };

/**
 *
 * @param {string/array/object} data
 */
export const logger = (data) => {
  return true;
  data = JSON.stringify(data);
  data = "***************" + dateformat(new Date(), "yyyy-mm-dd HH:MM:ss") + "***************\n" + data;

  let file = constants.LOG_PATH + dateformat(new Date(), "yyyy-mm-dd") + ".txt";
  let log = fs.createWriteStream(file, { flags: "a" });
  log.write(data + "\n\n");
  log.end();
  deleteLogFiles();
  return true;
};

/**
 * delete files
 * from log directory
 */
export const deleteLogFiles = async () => {
  return true;
  let week = new Date(Date.now() - constants.LOG_DELETE_DAYS);

  return fs.readdir(constants.LOG_PATH, (err, files) => {
    try {
      if (err) {
        logger(err.stack);
        return false;
      }

      files.map(function (file) {
        let { birthtime } = fs.statSync(constants.LOG_PATH + file);
        if (birthtime < week) {
          fs.unlink(file);
          return true;
        }
      });

    } catch (e) {
      console.log(e);
      return false;
    }
  });
};


/**
 * 
 * @param {array 1} a1 
 * @param {array 2} a2 
 * @returns only missing items in array 1.
 */
export const getArraysIntersection = (a1, a2) => {
  return a1.filter(function (n) { return a2.indexOf(n) === -1; });
}

export const getRoomId = (userId, currentUserId) => {
  let srt = [userId, currentUserId].sort();
  return srt[0].concat("_"+srt[1]);
}
