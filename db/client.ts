import { Client } from "https://deno.land/x/mysql/mod.ts";
// config
import { DATABASE, TABLE } from "./config.ts";

const client = await new Client();

client.connect({
  hostname: "server IP",
  username: "",
  password: "",
  db: "breathe",
});

const run = async () => {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS ${TABLE.TODO} (
        id int(11) NOT NULL AUTO_INCREMENT,
        todo varchar(100) NOT NULL,
        isCompleted boolean NOT NULL default false,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  `);
};

run();

export default client;
