# --------------------------------------- #
#                GIT LESSON               #
# --------------------------------------- #


# --------------------------------------- #
#               CONFIGURATION             #
# --------------------------------------- #

# Displays Git version that's installed on the system:
git version | git -v

# Sets user name and user email (mandatory):
git config --global user.email "johndoe@gmail.come"
git config --global user.name "John Doe"

# Sets the console output with color (to mark Untracked, Modded, Added files):
git config --global color.ui true

# Opens our Git global configuration file:
git config --global --edit

# Configures Git default text editor:
git config --global core.edit "code --wait"

# --------------------------------------- #
#           INITIALIZE PROJECTS           #
# --------------------------------------- #

# Creates a new Git deposit:
git init

# Displays Git status about files:
git status

# --------------------------------------- #
#                 COMMIT                  #
# --------------------------------------- #

# Adds modified files (one or many) to the staging area in order to commit them:
git add file_name | git add .

# Saves the modified files that are now in the staging area 
# Thus creating a new commit with a message prompt to declare the changes done
git commit -m "first commit"

# Modify the last commit:
git commit --amend -m "correction"

# Displays commits history:
git log | git log --oneline

# Move to a specific commit using the commit's id:
git checkout commit_id

# Move back to last commit:
git checkout branch_name

# --------------------------------------- #
#                 BRANCHES                #
# --------------------------------------- #

# Displays branch list
git branch

# Creates a new branch
git branch branch_name

# Changes branches:
git switch branch_name

# Creates and moves to a new branch:
git switch -c branch_name

#Collects modifications on the current branch:
git merge branch_name

#Renames a branch:
git branch -m old_name new_name

# Deletes a branch:
git branch -d branch_name  


# --------------------------------------- #
#                 RESTORE                 #
# --------------------------------------- #

# Return to previous state of a file before a commit:
git restore file_name

# Remove a file from the stagin area (or all of them)
git restore --staged file_name | git restore --staged .

# Creates a new commit in the timeline that's actually an old commit:
git revert commit_id

# --------------------------------------- #
#                  REMOTE                 #
# --------------------------------------- #

# Clones a remote repository into local
git clone url

# Establish a connexion to a remote repo by assigning a name and url:
git remote add alias url # alias is a name you choose to record the url you enter

# Sends the local repo to the remote repo by linking the local branch to the remote branch
# Sends a local new branch to the remote repo 
git push -u alias branch_name

# Sends local repo to remote repo
git push

# Collects the remote upper branch before pushing your modifications:
git pull

#Collects a specific remote branch (not yet linked to the working one)
git pull alias branch_name

# --------------------------------------- #
#                .GITIGNORE               #
# --------------------------------------- #


# After creating a .gitignore file at the base of the repository, 
# you can specify in it the names of all folders and files you want
# to ignore from your git adds and git commits
.gitignore
 