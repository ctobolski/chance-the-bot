require('dotenv').config();
import { CommandoClient } from 'discord.js-commando';
import { join } from 'path';

/* eslint-disable no-console */

const client = new CommandoClient({
  commandPrefix: '!',
  owner: process.env.OWNER_ID,
});

client.registry
  .registerDefaultTypes()
  .registerGroups([['first', 'First command group']])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(join(__dirname, 'commands'));

client.once('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}`);
  client.user?.setActivity('with Commando');
});

client.login(process.env.BOT_TOKEN);
