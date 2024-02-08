import mysql from "mysql";
import config from "../config/environment";
import { logger } from "./logger";

const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

con.connect((err) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }

  logger.info("Database has connected!");
});
