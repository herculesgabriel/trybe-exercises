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
```git config --global user.email "herculesgabriel00@gmail.com"
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

## Explanations

	### File Status Lifecycle
There are four states for a file: untracked, unmodified, modified and staged.
When you create a new file it will get a ***untracked*** status. Your repository still doesn't know this file, so any modifications won't be saved.<br>
Then you want to start tracking the file and to do so you need to "add" the file. It'll get a ***unmodified*** status and now git know about your file. From now on this will be the default status.<br>
If you modify a file with a unmodified status it'll get to the next status, which is obviously ***modified***. It means that if you want to save it you need to "add" the file again, so it will get back to unmodified status.<br>
Once you finished working on the files and all of them are with unmodified status you can finally "commit" you work. When you do that git creates a new snapshot of all your tracked files so that you can get back to this moment anytime. Notice that the added files with a unmodified status are also ***staged***, which means they are ready to be saved in the next commit.<br>

