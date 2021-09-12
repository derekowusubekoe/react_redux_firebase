Node is an open source runtime environment which runs JavaScript code on a server.

$ node -v (node version installed)
$ npm -v (node package manager version installed)

NPM is the node package manager and it is used to install various dependencies and frameworks onto a project

# Start a Fresh Project
1. Create a local folder on your computer and run
    $ echo "# project-name" >> README.md
    $ git init
    $ git add README.md
    $ git commit -m "first commit"
2. Create a folder on Github
3. Run the command to create a branch called main
    $ git checkout -b main
4. Copy the url from git and run
    $ git remote add origin https://github.com/username/projectname.git
5. Run this command to push update to remote repository
    $ git push -u origin main

# After any updates
1. Check the status for any changes
    $ git status
2. Add all new changes to Stagging area
    $ git add .
3. Commit to all added changes
    $ git commit -m "commit message"
4. Run this command to push update to remote repository
    $ git push -u origin main
