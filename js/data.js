// GitReminder - Git command reference data
// Each command has a category, the command itself, and a short description.

const gitCommands = [
  // ---------- SETUP ----------
  {
    category: "Setup",
    command: "git init",
    description: "Turn the current folder into a Git repository."
  },
  {
    category: "Setup",
    command: "git clone <url>",
    description: "Download a copy of a remote repository to your computer."
  },
  {
    category: "Setup",
    command: "git config --global user.name \"Your Name\"",
    description: "Set the name that will appear on your commits."
  },

  // ---------- BASIC SNAPSHOTTING ----------
  {
    category: "Snapshotting",
    command: "git status",
    description: "Show which files have changed, are staged, or are untracked."
  },
  {
    category: "Snapshotting",
    command: "git add <file>",
    description: "Stage a specific file so it will be included in the next commit."
  },
  {
    category: "Snapshotting",
    command: "git add .",
    description: "Stage all changed files in the current folder."
  },
  {
    category: "Snapshotting",
    command: "git commit -m \"message\"",
    description: "Save staged changes as a new commit with a message."
  },

  // ---------- BRANCHING ----------
  {
    category: "Branching",
    command: "git branch",
    description: "List all local branches."
  },
  {
    category: "Branching",
    command: "git branch <name>",
    description: "Create a new branch."
  },
  {
    category: "Branching",
    command: "git checkout <branch>",
    description: "Switch to another branch."
  },
  {
    category: "Branching",
    command: "git checkout -b <branch>",
    description: "Create a new branch and switch to it immediately."
  },

  // ---------- MERGING ----------
  {
    category: "Merging",
    command: "git merge <branch>",
    description: "Merge another branch into the current one."
  },
  {
    category: "Merging",
    command: "git merge --abort",
    description: "Cancel a merge that has conflicts and go back to before it started."
  },

  // ---------- REMOTE ----------
  {
    category: "Remote",
    command: "git remote -v",
    description: "Show the remote repositories linked to this project."
  },
  {
    category: "Remote",
    command: "git remote add origin <url>",
    description: "Link a remote repository (usually on GitHub) to this project."
  },
  {
    category: "Remote",
    command: "git push",
    description: "Send your local commits to the remote repository."
  },
  {
    category: "Remote",
    command: "git pull",
    description: "Download and merge changes from the remote repository."
  },
  {
    category: "Remote",
    command: "git fetch",
    description: "Download changes from the remote without merging them."
  },

  // ---------- HISTORY ----------
  {
    category: "History",
    command: "git log",
    description: "Show the full commit history."
  },
  {
    category: "History",
    command: "git log --oneline",
    description: "Show commit history in a compact one-line-per-commit format."
  },
  {
    category: "History",
    command: "git diff",
    description: "Show changes between your working files and the last commit."
  },
  {
    category: "History",
    command: "git show <commit>",
    description: "Show detailed information about a specific commit."
  },

  // ---------- UNDOING ----------
  {
    category: "Undoing",
    command: "git restore <file>",
    description: "Discard changes in a file and go back to the last committed version."
  },
  {
    category: "Undoing",
    command: "git reset HEAD <file>",
    description: "Unstage a file while keeping its changes."
  },
  {
    category: "Undoing",
    command: "git reset --soft HEAD~1",
    description: "Undo the last commit but keep the changes staged."
  },
  {
    category: "Undoing",
    command: "git reset --hard HEAD~1",
    description: "Undo the last commit and permanently delete its changes."
  },
  {
    category: "Undoing",
    command: "git revert <commit>",
    description: "Create a new commit that undoes a previous commit safely."
  },

  // ---------- STASHING ----------
  {
    category: "Stashing",
    command: "git stash",
    description: "Temporarily save your changes without committing them."
  },
  {
    category: "Stashing",
    command: "git stash list",
    description: "Show all saved stashes."
  },
  {
    category: "Stashing",
    command: "git stash pop",
    description: "Apply the most recent stash and remove it from the stash list."
  }
];