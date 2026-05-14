import 'dotenv/config';

function getEnvVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',

  port: Number(process.env.PORT) || 3000,

  databaseUrl: getEnvVariable('DATABASE_URL'),

  jwtAccessSecret: getEnvVariable('JWT_ACCESS_SECRET'),

  jwtRefreshSecret: getEnvVariable('JWT_REFRESH_SECRET'),

  redisHost: getEnvVariable('REDIS_HOST'),

  redisPort: Number(getEnvVariable('REDIS_PORT')),
};
