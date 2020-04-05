import { Command, CommandoClient } from 'discord.js-commando';

export class Random extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: 'random',
      group: 'first',
      memberName: 'random',
      description: 'Randomizes input or users in your discord',
    });
  }

  run(message: any, args: any) {
    return message.say('Meow!');
  }
}
