const Redis = require("ioredis");
const dotenv = require("dotenv").config();


const redisClient = new Redis(process.env.UPSTASH_REDIS_IO);
// await client.set("foo", "bar");



module.exports = {
    redisClient
}