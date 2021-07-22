module.exports = {
    // type 类型（定义之后，可通过上下键选择）
      types: [
        {      value: 'init',      name: 'init:     初始提交'    },
        {      value: 'feat',      name: 'feat:     增加功能'    },
        {      value: 'fix',      name: 'fix:      修复bug'    },
        {      value: 'refactor',      name: 'refactor:     代码重构'    },
        {      value: 'docs',      name: 'docs:     修改文档'    },
        {      value: 'chore',      name: 'chore:    更改配置'    },
        {      value: 'style',      name: 'style:    样式修改'    },
        {      value: 'revert',      name: 'revert:   版本回退'    },
        {      value: 'add',      name: 'add:      添加依赖'    },
        {      value: 'update',      name: 'update:      升级依赖'    },
        {      value: 'minus',      name: 'minus:    版本回退'    },
        {      value: 'del',      name: 'del:      删除代码'    }
      ],
  
    // scope 类型（定义之后，可通过上下键选择）
    scopes: [
      ['component', '组件相关'],
      ['util', '公共相关'],
      ['style', '样式相关'],
      ['deps', '项目依赖'],
      ['other', '其他修改'],
    ].map(([value, description]) => {
      return {
        value,
        name: `${value.padEnd(20)} ${description}`
      }
    }),
  
    // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
    allowCustomScopes: true,
    // allowTicketNumber: false,
    // isTicketNumberRequired: false,
    // ticketNumberPrefix: 'TICKET-',
    // ticketNumberRegExp: '\\d{1,5}',
  
    // 针对每一个 type 去定义对应的 scopes，例如 fix
    /*
    scopeOverrides: {
      fix: [
        { name: 'merge' },
        { name: 'style' },
        { name: 'e2eTest' },
        { name: 'unitTest' }
      ]
    },
    */
  
    // 交互提示信息
    messages: {
      type: '选择更改类型:',
      scope: '更改的范围:',
      // 选择 scope: custom 时会出下面的提示
      customScope: '请输入自定义的scope:',
      subject: '简短描述:',
      body: '详细描述:',
      breaking: '非兼容性重大变更:',
      footer: '关闭的issues列表:',
      confirmCommit: '确认提交?'
    },
  
    // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
    allowBreakingChanges: ['feat', 'fix'],
  
    // 跳过要询问的步骤
    skipQuestions: ['body', 'footer'],
  
    // subject 限制长度
    subjectLimit: 100,
    breaklineChar: '|',
      // 支持 body 和 footer
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true,
  }
  