# Demo 说明书流程

### 编写说明书
> <font color="red">demo 说明书是 Markdown 文件，仓库在gitee</font>
> <font color="red">demo 源码管理在 github</font>

- 1、去 gitee 仓库找一说明书模版，可根据自己负责三方包的类型找相应的md文件参考。[gitee地址](https://gitee.com/react-native-oh-library/usage-docs/tree/master/zh-cn)
- 2、不同类型的三方库内容不同 [规则](https://react-native-oh-library.gitee.io/docs/#/zh-cn/usage-docs-checklist)
- 3、涉及修改点
    - 标题
    - LICENSE的 git 链接
    - 仓库的 git 链接
    - 安装命令，必须带上版本号
        -   ``` shell
            npm install react-native-popup-menu@版本号 --save
    - 兼容性（具体根据自己测试环境修改；除了自测用的rom，基本每个人的测试环境都一样）
        -   <code>RNOH：0.72.13; SDK：HarmonyOS NEXT Developer Preview1; IDE：DevEco Studio 4.1.3.500; ROM：NOH-AN00 4.1.0.59;</code>
    - 开源协议 git 链接
    - markdown table 需要格式化对齐
        - 使用 vscode ` Markdown Table Prettifier` 插件，框选 整个table 代码，右键 `format selection`，vscode 菜单 `view` 取消换行
        - table 表头要用英文


### demo 说明书提交流程
- 1、gitee 绑定华为邮箱
    - gitee 进入设置 -> 邮箱管理 -> 新增：邮箱地址为 WeLink 账号邮箱；weLink 会收到邮件确认。（手机操作WeLink）
    - 绑定成功后，邮箱设置 -> 提交邮箱，修改为华为邮箱。
- 2、在 [三方库使用指导仓库](https://gitee.com/react-native-oh-library/usage-docs) 新建一个 [issue](https://gitee.com/react-native-oh-library/usage-docs/issues)
    - 新建 issue 标题为 `添加 XXXX 指导文档`。
    - 完成后有个 issue 号（#开头的），该号用于后面提交代码 commit 使用。
- 3、Fork [三方库使用指导仓库](https://gitee.com/react-native-oh-library/usage-docs) 到个人 gitee 账号下。
- 4、clone 个人账号 fork 三方仓库到本地。
    - 新建个人开发分支
    - 在 `1224` 目录下添加组件的 `demo 说明书` 的 `markdown` 文件。 
    - 完成后提交代码，<font color="red"><b>message 有严格格式要求否则提交不上</b></font>，格式如下：
        -   ```shell
            git commit -m '[Issues: 新建的issus号] 添加 XXX 操作文档'
    - push 到 个人 gitee 仓库
    - 在个人 `三方库使用指导仓库` 新建 `Pull Request`；源分支为 `个人开发分支`，目标分支为 `master`
        - 标题为： `添加 XXX 指导文档` -> 提交
        - 成功后把 pull request 的提交链接，通过weLink 发给 `林嘉诚 wx1001542`


### demo 源码提交流程
- 直接 clone [仓库](https://github.com/react-native-oh-library/RNOHDCS) 到本地
- 补充 demo 直接提交
- 如果没有 [仓库](https://github.com/react-native-oh-library/RNOHDCS) 权限，先查看自己github 注册的邮箱，是否有邀请邮件。如果没有向上反馈。