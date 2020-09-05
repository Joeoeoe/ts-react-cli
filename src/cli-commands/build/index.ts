import webpack from "webpack";
import { TipObj } from "../../util";

const webpackPromise = function (config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err);
      }
      resolve(true);
    })
  })
}

export async function build(path: string) {
  const tip = new TipObj();
  const config = require(path);

  let buildRes = null;
  try {
    tip.loading('打包中');
    buildRes = await webpackPromise(config);
  } catch (error) {
    tip.fail(error.message);
    return false;
  }

  if (buildRes === true) {
    tip.success('打包成功!');
  }

  return true;
}
