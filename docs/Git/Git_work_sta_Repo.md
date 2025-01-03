# Git 工作区、暂存区和版本库

## 基本概念

![image-20250103105221874](https://minio.900218.xyz/aws/image-20250103105221874.png)

- 工作区为电脑上的文件目录，比如vscode上的文件目录，版本库.git文件夹，文件夹中的目录对应index，objects，还有master。

- index是暂存区，用`git add . `命令的时候就是把工作区的目录放到了暂存区。

- master是本地储存库的一个分支，这个分支可以有很多，比如dev、rel、hot等等，头部的”HEAD“类似于指针，指向哪里就是操作哪里，我们常用的命令`git commit -m "first commit"`就是把暂存区的index的目录提交到了分支，也就是本地储存库。

## 工作区、版本库的关联

1. 工作区 -> 暂存区

```git
git add filename //将工作区的某个文件添加到暂存区
git add . //将所有工作区的文件田间到暂存区
```

2. 暂存区-> 版本库

```
git commit -m "message" //将暂存区提交到版本库，引号内是提交的摘要
```

> **注：** 在 Linux 系统中，commit 信息使用单引号 **'**，Windows 系统，commit 信息使用双引号 **"**。
> 所以在 git bash 中 **git commit -m '提交说明'** 这样是可以的，在 Windows 命令行中就要使用双引号 **git commit -m "提交说明"**。

3. 版本库 -> 远程仓库

```
git push orgin master //将版本库推送到远程master分支，可以根据实际需要修改分支名称
```

4. 远程仓库 -> 本地版本库

```
git pull origin master //直接从远程仓库更新并且合并工作区
# 或者
git fetch orgin master //从远程仓库更新到本地版本库，不更新工作区
git merge orgin/master //合并版本库到工作区
```

