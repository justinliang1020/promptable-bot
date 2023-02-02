/* eslint-disable quotes */


export default {
    "developers": ["<YOUR_DISCORD_ID>"],
    "client": {
        "id": "1070439174144012288",
        "token": "MTA3MDQzOTE3NDE0NDAxMjI4OA.GtHRGB.FdRijtPkAuwMzxvSDAeMuXAJDkiXXkb5K2VsbE",
        "intents": [
            "Guilds",
            "GuildMessages",
            "GuildMessageReactions",
            "DirectMessages",
            "DirectMessageReactions"
        ],
        "partials": ["Message", "Channel", "Reaction"],
        "caches": {
            "BaseGuildEmojiManager": 0,
            "GuildBanManager": 0,
            "GuildInviteManager": 0,
            "GuildStickerManager": 0,
            "MessageManager": 0,
            "PresenceManager": 0,
            "StageInstanceManager": 0,
            "ThreadManager": 0,
            "ThreadMemberManager": 0,
            "VoiceStateManager": 0
        }
    },
    "api": {
        "port": 3001,
        "secret": "00000000-0000-0000-0000-000000000000"
    },
    "sharding": {
        "spawnDelay": 5,
        "spawnTimeout": 300,
        "serversPerShard": 1000
    },
    "clustering": {
        "enabled": false,
        "shardCount": 16,
        "callbackUrl": "http://localhost:3001/",
        "masterApi": {
            "url": "http://localhost:5000/",
            "token": "00000000-0000-0000-0000-000000000000"
        }
    },
    "jobs": {
        "updateServerCount": {
            "schedule": "0 */10 * * * *",
            "log": false
        }
    },
    "rateLimiting": {
        "commands": {
            "amount": 10,
            "interval": 30
        },
        "buttons": {
            "amount": 10,
            "interval": 30
        },
        "triggers": {
            "amount": 10,
            "interval": 30
        },
        "reactions": {
            "amount": 10,
            "interval": 30
        }
    },
    "logging": {
        "pretty": true,
        "rateLimit": {
            "minTimeout": 30
        }
    }
}
