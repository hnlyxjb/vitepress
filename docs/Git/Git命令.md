# Git 命令

Git有命令行和图形界面版本，一般用命令行。

## git init

使用当前目录作为git仓库，我们对它进行初始化。

```javascript
git init
```

也可以指定目录进行初始化将`newrepo`替换成你自己的目录

```javascript
git init newrepo
```

初始化后再你的仓库目录会有个名为`.git`的目录，里面存放着git需要的资源和数据

## git clone

我们使用 `git clone` 从现有 Git 仓库中拷贝项目，比如从github、gitee等克隆,repo为克隆地址。

```js
git clone <repo>
```

如果要克隆到指定目录可以使用下面命令,directory替换为你要到本地计算机的目录。

```js
git clon <repo> <directory>
```

