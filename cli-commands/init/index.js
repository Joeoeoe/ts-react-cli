const path = require("path");
const mkdirp = require("mkdirp"); //使用mkdirp包，可以避免一级一级创建目录
const copyDir = require("../../util/copyDir");
const { writeFile } = require("../../util");

module.exports = function (name) {
  // process.cwd()获取工作区目录
  const projectDir = path.join(process.cwd(), name); // 项目创建路径
  const sourceDir = path.join(__dirname, "./template"); // 资源文件路径

  mkdirp(projectDir).then(async (made) => {
    if (made === undefined) {
      console.log("创建失败");
      console.error("ERROR:存在同名目录");
    } else {
      // copy 模板文件
      const dirRes = await copyDir(sourceDir, projectDir);
      // 修改package.json项目名
      const packageJsonPath = path.join(projectDir, "package.json");
      const packageJson = require(packageJsonPath);
      packageJson.name = name;

      const writePackageJsonRes = await writeFile(
        packageJsonPath,
        JSON.stringify(packageJson, null, 2)
      );

      console.log("创建成功");
    }
  });
};