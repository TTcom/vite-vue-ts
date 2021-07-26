# 增加  husky和lint-staged
npm install husky --save-dev 或者使用下面的命令
npx husky-init and npm install
yarn add lint-staged --dev
# 如果.git文件和项目文件在一个层级
"prepare": "husky install" 
# 如果.git文件和项目文件不在一个层级，在父级文件中
"prepare": "cd .. && husky install driverhomepage/.husky"
# 增加需要的钩子文件
yarn husky add .husky/pre-commit
yarn husky add .husky/post-commit
yarn husky add .husky/commit-msg
在对应的钩子文件下面执行对应的命令
# 注意如果.git文件和项目文件不在一个层级commit-msg文件中需要先打开父级文件
cd my-app
npx --no-install commitlint --edit

# 集成git-cz
npm install commitizen -D
npx commitizen init cz-customizable -D --save-exact
# 新建 .cz-config.js 文件
npm i @commitlint/config-conventional @commitlint/cli -D

# 新建 commitlint.config.js 文件
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
# 集成commit命令
"commit": "git add . && git-cz",
# 如果.git文件和项目文件不在一个层级，在父级文件中执行
yarn add @commitlint/cli @commitlint/config-conventional cz-customizable -D

# 集成提交日志 conventional-changelog-cli
npm i conventional-changelog-cli -D
# 根目录下新建 CHANGELOG.md
# 配置package.json
"log": "conventional-changelog -p angular -i CHANGELOG.md -s"

# 以上参考文章地址
https://juejin.cn/post/6963048999922171917#heading-13
https://blog.csdn.net/Banterise/article/details/115206267
https://typicode.github.io/husky/#/?id=monorepo
https://qdmana.com/2021/04/20210404032516818j.html
