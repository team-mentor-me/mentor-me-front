# Mentor Me
___

### Hunter's notes
#### Don't **Fork** the Repo
##### Git Instructions

- Every frontend/UI developer will be working in this repo, but on separate branches.

- After git cloning THIS repo:
   - `git checkout master` <---- Puts you on master branch.

   - You may need to `git pull` before creating a new branch. <--- Git pull fetches and downloads from the branch you are in and merges it with local repo
   
  - `git branch [firstname-lastname]` <-----  Creates the branch with your first and last name as branch name. 
     
  - `git checkout [firstname-lastname]` <---- Switches your working directory into your newly created branch.
  
  - `git push -u origin [firstname-lastname]` <-- Pushes that branch to GitHub.
      - Subsequent pushes after the above push can be done with `git push [firstname-lastname]`.
   
   - You can then `git commit` into that branch with all your changes.

   - **Once you have a fully functional feature:**
           -  `git merge master` <---- Merges your branch to the master repo.
           -  If you get any conflicts merging, contact me to help resolve them.


##### Initial Instructions

- You still need to run `yarn install` to get your node_modules.

- Netlify deployed site: https://epic-meitner-afa3b4.netlify.com/

- Reach out if you need help.
