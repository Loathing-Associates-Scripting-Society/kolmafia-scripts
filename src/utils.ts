import { join, resolve } from "path";
import process from "process";
import fs from "fs";

export const getAppRootPath = (): string => {
  let cwd = process.cwd();
  while (!fs.existsSync(join(cwd, "package.json"))) {
    const up = resolve(cwd, "../");
    if (up === cwd) {
      throw new Error("no package.json found for this project");
    }
    cwd = up;
  }
  return cwd;
};
