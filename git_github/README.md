# Git & Github

## Instaling Git

	### Install Git on Linux systems:
```sudo apt install git-all```

## Configure Git:
Set the username
```
git config --global user.name "Hercules Gabriel"
```
Set the email
```
git config --global user.email "herculesgabriel00@gmail.com"
```
Set the default text editor
```
git config --global core.editor nano
```
To read all the settings made:
```
git config --list
```

## Create local repository
Start a new repository. Within project directory:
```
git init
```
Check status of the files on repository
```
git status
```
Create a README file to start with
```
touch README.md
```
Add the file to be tracked
```
# to add just specific files use their names
git add README.md
# to add all the files in the current directory
git add .
```
Check all the changes before commiting them
```
git diff
```
Create a new snapshot of the tracked and unmodified files
```
git commit -m "descriptive message about what you did"
```
```
# add linking remote part here
```
Send all snapshots to remote repository
```
git push origin master
# if you already set as upstream:
git push
```

## bunch of codes to explain later
```
git log
```
```
git log --decorate
```
```
git log --author="Hercules"
```
```
git shortlog
```
```
git shortlog -sn
```
```
git log --graph
```
```
git show
```
```
git show 4458fg4f1v8e875s5ii71h24h8if
```
```
git diff --name-only
```
```
# add and commit at once
git commit -am "edit README"
```
```
# get you back to the last snapshot of a file
git checkout README.md
```
```
# undo a "git add"
git reset HEAD README.md
```
```
# undo commit, but the files are ready to commit with all the latest modifications
git reset --soft 8e700hashofcommitbeforethelastone004a8
# undo commit, undo staged, so the files are with modified status
git reset --mixed 8e700hashofcommitbeforethelastone004a8
# undo commit, undo staged, undo modifications, so the files are with unmodified status
git reset --hard 8e700hashofcommitbeforethelastone004a8
```
```
# link local repository with remote one. "origin" is just a nickname for your repository
git remote add origin git@github.com:herculesgabriel/github-course.git
```
```
# list of repositories
git remote
git remote -v
```
```
# send all modifications from master to the repository origin
git push origin master
# to do it automatically in the next times
git push -u origin master

```
```
# clone repository into local machine
git clone git@github.com:herculesgabriel/github-course.git
```
```
# copy the entire project for you to work on it
press "fork" button on Github 
```
```
# create a branch
git branch "new-branch"
```
```
# switch to a existent branch
git checkout "existent-branch"
```
```
# create a branch and switch workspace to it
git checkout -b "new-branch"
```
```
# show list of existent branches
git branch
```
```
# delete a branch
git branch -D "existent-branch"
```
```
# save all the modifications since the last commit in a magic place
# then it will clean my workspace, like a `git checkout file`
git stash
```
```
# take those modifications I had back to to current branch
# which means I can create a new one and bring all those files
git stash apply
```
```
# show the list with all the stashs
git stash list
```
```
# trash out everything on the list
git stash clear
```
```
# create alias for commands
# to create one for `git status`:
git config --global alias.s status
# and I can use it like that:
git s
```
```
# create tag
git tag -a 1.0.0 -m "README file finished"
# -a ==> the "title"
# -m ==> message
```
```
# push your tags
git push origin master --tags
```
```
# revert the state to the last commit, but 
# without trashing out everything you made
git revert 45rcommitthatcausedabugf88fg4gh
```
```
# delete a tag from the local repositroy
git tag -d 1.0.0
```
```
# delete a tag from the remote repository
git push origin :1.0.0
```
```
# delete a branch from the remote repository
git push origin :branch-to-delete
```
```
#
code
```

## Example Situations
```
# beginning of repository
mkdir rebase-merge
cd rebase-merge
git init

## on master
touch foo.txt
git add foo.txt
git commit -m "added foo"	#git log

git checkout -b "merge-branch"

## on merge-branch
touch bar.txt
git add bar.txt
git commit -m "added bar"	#git log

git checkout master

## on master
touch fizz.txt
git add fizz.txt
git commit -m "added fizz"	#git log

git merge merge-branch		#git log --graph

touch buzz.txt
git add buzz.txt
git commit -m "added buzz"	#git log

git checkout -b "rebase-branch"

## on rebase-branch
touch bla.txt
git add bla.txt
git commit -m "added bla"	#git log

git checkout master

## on master
touch any.txt
git add any.txt
git commit -m "added any"	#git log

git rebase rebase-branch	#git log --graph


```




## Explanations

	### File Status Lifecycle
There are four states for a file: untracked, unmodified, modified and staged.<br>
- When you create a new file it will get a ***untracked*** status. Your repository still doesn't know this file, so any modifications won't be saved.<br>
- Then you want to start tracking the file and to do so you need to "add" the file. It'll get a ***unmodified*** status and now git know about your file. From now on this will be the default status.<br>
- If you modify a file with a unmodified status it'll get to the next status, which is obviously ***modified***. It means that if you want to save it you need to "add" the file again, so it will get back to unmodified status.<br>
- Once you finished working on the files and all of them are with unmodified status you can finally "commit" you work. When you do that git creates a new snapshot of all your tracked files so that you can get back to this moment anytime. Notice that the added files with a unmodified status are also ***staged***, which means they are ready to be saved in the next commit.<br>

<br><br>
	### Branches
Branch is a pointer that points to a specific commit. While the "master" branch usually points to the last commit, a can create a branch called "second branch" that points to the last commit and start working on it without following the master commits. It's like creating a new timeline apart from the natural course of life.

<br><br>
	### Gitignore
You can create a file called .gitignore and put all the files you want to hide from git when looking for files to track. Examples of code within .gitignore file:<br><br>
*.json
passwords.db
./assets/*.png


