// next.config.mjs
import path from "path";

export default {
  outputFileTracingRoot: path.join(process.cwd()), // or __dirname equivalent
};
