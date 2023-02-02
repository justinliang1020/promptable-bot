import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

import { Language } from '../../models/enum-helpers/index.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';

dotenv.config();

export class PromptableCommand implements Command {
    public names = [Lang.getRef('chatCommands.promptable', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction,): Promise<void> {
        let args = {
            prompt: intr.options.getString('prompt'),
        }

        // call OpenAI API
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: args.prompt,
            temperature: 0.3
        });

        const response = `${intr.user.username}'s prompt: ${args.prompt}
${completion.data.choices[0].text}`;
        
        await InteractionUtils.send(intr, response);
    }
}
