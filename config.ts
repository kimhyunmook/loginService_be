const { PORT } = process.env;

const config = {
  PORT,
  SUCCESS_MSG: (apiUrl: string) => `${apiUrl} API success`,
  FAlSE_MSG: (apiUrl: string) => `${apiUrl} API false`,
};
export default config;
