# 增加  husky lint-staged
npx husky-init and npm install
yarn add lint-staged --dev
# 集成git-cz
npm install commitizen -D
npx commitizen init cz-customizable -D --save-exact
# 或者用以下命令
yarn add @commitlint/cli @commitlint/config-conventional cz-customizable -D
# 新建 .cz-config.js 文件
npm i @commitlint/config-conventional @commitlint/cli -D
# 新建 commitlint.config.js 文件
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
# 集成commit命令
"commit": "git add . && git-cz",
# 集成提交日志 conventional-changelog-cli
npm i conventional-changelog-cli -D
# 根目录下新建 CHANGELOG.md
# 配置package.json
"log": "conventional-changelog -p angular -i CHANGELOG.md -s"

# 如果不行看这篇文章
https://qdmana.com/2021/04/20210404032516818j.html
