const { Composer, InlineKeyboard } = require("grammy");
const { createUserLink } = require("../utils");

const composer = new Composer();

composer.command("start", async (ctx) => {
    await ctx.reply(
        `<b>👋🏻 Hi ${createUserLink(ctx.from)}!</b>

I am Kaori, I let you play music in group calls.

The commands I currently support are:

/play - play the replied audio file or YouTube video
/pause - pause the audio stream
/resume - resume the audio stream
/skip - skip the current audio stream
/stop - clear the queue and remove the userbot from the call`,
        {
            reply_markup: new InlineKeyboard()
                .url("Add me to your chat", "http://t.me/kaoriimusicbot?startgroup=botstart")
                
        }
    );
});

module.exports = composer;
