// Type definitions for rate-limit-redis
// Project: https://github.com/wyattjoh/rate-limit-redis
// Definitions by: Steven Russell <https://github.com/srussellextensis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3.3


declare module 'rate-limit-redis' {
    import RateLimit = require('express-rate-limit');
    import Redis     = require('redis');

    namespace RateLimitRedis {
        interface Options {
            // seconds - how long each rate limiting window exists for. Defaults to 60.
            expiry?: number;

            // if the expiry time should be reset every time a key is incremented/decremented. This means that when the
            // limit is reached and the user is given a 429 response, the rate limit window is extended. Defaults to false.
            resetExpiryOnChange?: boolean;

            // prefix to add to entries in Redis. Defaults to rl:.
            prefix?: string;

            // Redis Client - A Redis Client to use. Defaults to require('redis').createClient();
            client?: Redis.RedisClient;
        }
    }

    let RateLimitRedis: new (options: RateLimitRedis.Options) => RateLimit.Store;
    export = RateLimitRedis;
}