import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Language } from '../../models/enum-helpers/index.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';

export class PromptableCommand implements Command {
    public names = [Lang.getRef('chatCommands.promptable', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction,): Promise<void> {
        let args = {
            prompt: intr.options.getString('prompt'),
        }
        console.log(args);
        console.log(intr.user.username);
        const response = `${intr.user.username}'s prompt: ${args.prompt}
Response: This is a response for the prompt, ${args.prompt}`;
        await InteractionUtils.send(intr, response);
    }
}
