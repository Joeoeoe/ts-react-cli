#!/usr/bin/env node
import { program } from "commander";
import path from "path";
import { parseCmd } from "./util/basic";

const version = require("../package.json").version;

program.version(version, "-v, --version");

program
  .command("init <app-name>")
  .description("使用 ts-react-cli 初始化项目")
  .action(async (name: string) => {
    const { init } = await import("./cli-commands/init");

    init(name);
  });

program
  .command("dev")
  .description("进入开发模式")
  .option("-p, --port", "指定开发端口")
  .action(async (cmd) => {
    const optionObj = parseCmd(cmd); // 命令行option选项
    const devWebpackPath = path.join(process.cwd(), "webpack.dev.js"); // 项目webpack.dev.js路径
    const { dev } = await import("./cli-commands/dev");

    dev(optionObj, devWebpackPath);
  });

program
  .command("build")
  .description("打包应用")
  .action(async () => {
    const prodWebpackPath = path.join(process.cwd(), "webpack.prod.js");
    const { build } = await import("./cli-commands/build");

    build(prodWebpackPath);
  });

program
  .command("upload")
  .description("上传至SFTP服务器")
  .action(async () => {
    const cwd = process.cwd()
    const configPath = path.join(cwd, "upload.json");

    const { upload } = await import("./cli-commands/upload");
    upload(configPath);
  });

program.parse(process.argv);
