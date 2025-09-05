# Tasya

A marketplace for artists and patrons.

---

## Contribution Guide

Welcome! If you'd like to contribute to this project, please follow these steps. This guide will walk you through forking the repository, cloning it to your local machine, and setting it up to push your changes back.

### Step 1: Fork the Repository

First, you need to create your own copy of this repository. Click the **"Fork"** button at the top-right of this page. This creates a complete copy of the project under your own GitHub account.



### Step 2: Clone Your Fork

Now, clone your forked repository to your local machine. This will download the project files so you can work on them.

- Replace YOUR_USERNAME with your actual GitHub username
```
git clone https://github.com/YOUR_USERNAME/Tasya.git
```
- Navigate into the newly created project directory
```
cd Tasya
```

### Step 3: Add the 'Upstream' Remote
Next, add the original repository as a remote named upstream. This allows you to pull in changes from the original project to keep your fork updated.
```
git remote add upstream https://github.com/Harshvardhansingh19/Tasya.git
```
- You can verify that the new remote was added successfully by running
```
git remote -v
```

### Step 4: Make, Stage, Commit, & Push your changes
Now you are all set to make your contributions!
- **Sync with Upstream**: Before you start working, its a good practice to pull the latest changes from the `upstream` repository.
```
git pull upstream main
```
- **Create a New Branch**: Always create a new branch for your work. This keeps your changes organized.
```
git switch -c new_branch_name
git rebase main
```
- **Make your changes**: Edit the files and work on your feature or bug fix.
- **Commit Your Changes**: Add your changes and write a clear commit message.
```
git add .
git commit -m "msg_content"
```
- **Push to Your Fork**: Push your new branch and its commits to your forked repository (`origin`).

```
git push origin your-new-feature-branch
```

### Step 5: Open a PR
Finally, go to your forked repository on GitHub. You will see a button to "Compare & pull request". Click it, add a descriptive title and comment, and create the pull request.  Don't forget to divert the merge to `main` branch of the original repository.


THANK YOU
