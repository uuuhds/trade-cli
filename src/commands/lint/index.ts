import { simpleGit } from 'simple-git';

export const lint = () => {
  // 创建新分支
  const git: SimpleGit = simpleGit({
    baseDir: process.cwd(),
    binary: 'git',
  });
  // TS 是否自动升级
  // 安装eslint
  // 添加eslint脚本
  // 添加eslint配置文件
  // 自动添加submodule到eslintignore中
  // stylelint可选
  // 安装stylelint
  // 添加stylelint配置文件
  // 添加ignore文件
  // 添加脚本
  // 安装prettier
  // 添加脚本
  // 添加prettier ignore
  // 自动格式化
  // 创建提交记录
  // 配置.prettierrc
  // 引入husky
  // 引入lint-staged
  // 引入commitlint
  // 配置package.json
};
