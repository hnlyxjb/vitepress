# Git 命令

Git有命令行和图形界面版本，一般用命令行。

## git init

使用当前目录作为git仓库，我们对它进行初始化。

```bash
git init
```

也可以指定目录进行初始化将`newrepo`替换成你自己的目录

```bash
git init newrepo
```

初始化后再你的仓库目录会有个名为`.git`的目录，里面存放着git需要的资源和数据

## git clone

我们使用 `git clone` 从现有 Git 仓库中拷贝项目，比如从github、gitee等克隆,repo为克隆地址。

```bash
git clone <repo>
```

如果要克隆到指定目录可以使用下面命令,directory替换为你要到本地计算机的目录。

```bash
git clon <repo> <directory>
```

## git config

git的配置文件，git的配置文件通常在三个地方存放，有三个级别**仓库级别 、全局级别 、 系统级别**优先级由大到小**仓库级别 > 全局级别 > 系统级别**

### **配置文件路径**

- **系统级别配置**：

  - Linux/macOS: `/etc/gitconfig`

  - Windows: `C:\Program Files\Git\etc\gitconfig`

- **全局级别配置**：

  - Linux/macOS: `~/.gitconfig` 或 `~/.config/git/config`

  - Windows: `C:\Users\<用户名>\.gitconfig`

- **仓库级别配置**：

  - 当前仓库的 `.git/config` 文件。

1. `git config --list`参数是列出配置，可分别用`--local`、`--global`、`--system`参数来指定列出是什么级别的配置

```bash
git config --list //列出所有配置项，包括仓库、全局、系统级别
git config --list --show-orgin //查看所有 Git 配置及其来源
git config --list --local //列出仓库级别配置文件
```

2. `git config -e`是列出参数并可直接编辑，默认模式是列出仓库级别的配置文件，可以通过`--local`、`--global`、` --system`来列出并编辑其他级别的配置文件

```bash
git config -e //列出仓库级别配置文件并可以直接编辑
git config -e --global //列出全局级别配置文件可以直接编辑
git config --file /path/to/custom/config -e //如果想编辑特定配置文件可以用 --file 和路径的方式
```

3. 修改某个参数比如说添加用户名和邮箱，你可以添加全局的配置。代码为`git config --global 参数名 值`

```js
git config --global user.name "zhangsan" //添加git用户名为“张三”
git config --global user.mail xxx@xxx.com
```

4. 删除参数用`git config --unset`下面举几个例子,假设你的 `.git/config` 文件中有以下内容，一下内容可以用`git config -e`显示出来

```ini
[core]
    filemode = false
[remote "origin"]
    url = https://github.com/user/repo.git
[branch "master"]
    remote = origin
    merge = refs/heads/master
```

- 删除`core.filemode`配置：删除单个配置项

```bash
git config --local --unset core.filemode
```

- 如果某个配置项有多个值（例如`remote.origin.fetch`）可以用一下命令删除多个值

```bash
git config --local --unset-all remote.origin.fetch
```

- 删除整个 `[branch "master"]` 段：

```bash
git config --local --remove-section branch.master
```

