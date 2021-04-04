/* | |_   _| || | __| / __|| ||  \/  | _ \/ __|/ _ \| \| |/ __|  |
   |   | | | _  | _|  \__ \| || |.,| |  _/\__ \ (_) | .` |\__ \  |
   |   |_| |_||_|___| |___/|_||_|  |_|_|  |___/\___/|_|\_||___/  |
   |   _     __   _   __ ___   __   _      __         __     ___ |
   |  /_\   | _) /_\ |__) |   |  \ /_\\ /'(__   |\ ||/ _ |__| |  |
   | /___\__|__)/___\|__\_|___|__//___\|__ __)__|_\||\__||__|_|_ |
   ||         _.-'-``-._          |      \:::::::::'      /     ||
   ||       ,'::::::''  `.        |      /::::::'         \     ||
   ||      ::::::'        :       |      \:::::           /     ||
   ||      |:::'          |       |      /;'`--'`--'`--'`.\     ||
   ||      ;:::  .  ,     :       |      \_.`--'.  ,'- '._/     ||
   ||     :-------::-------:      |      /:  o   ::  o   :\     ||
   ||     `.__o__.;:.__o__.'      |      \:.____.;:.____.'/     ||
   ||_____(.:::::(:_)_____.)______|______(.:::::(:_)_____.)_____||
   ||          _     _            |                             ||
   ||        ,':`._.':`.          |       \`.`.'`.'`.'`'(       ||
   ||    ..-':::::::'   `--..     |        :::::::::''  :       ||
   ||   \:::::::::          /     |        |:::::'      |       ||
   ||   _`.::::::          `._    |        |::::        |       ||
   || .':::_.`--'.  ,'--'._   `,  |       (.----.  ,----.)      ||
   ||  `.:::  o   ::  o   :  ,'   |       :  o   ::  o   :      ||
   ||   ,':`.____.;:.____.' `.    |       `.____.;:.____.'      ||
   ||__`.:(.:::::(:_)_____.)_,'___|_______(.::::(:_)____.)___SSt||
   '-------------------------------------------------------------' */

const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
