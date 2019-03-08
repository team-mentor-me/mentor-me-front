# Mentor Me 
___

### Hunter's couple of notes
#### Don't **Fork** the Repo
- every frontend/UI developer will be working on this repo, but on separate branches.

- after git cloning THIS repo, do:
   
   - you may need to `git pull` before creating a new branch
   
  - `git branch [firstname-lastname]` <-----  creates the branch with your first and last name as branch name 
     
  - `git checkout [firstname-lastname]` <---- switches your working directory into your newly created branch
  
  - `git push -u origin [firstname-lastname]` <--pushes that branch to github

      - subsequent pushes after the above push can be done with `git push [firstname-lastname]`
   
   you can then `git commit` into that branch wth all your changes.


- you still need to run `yarn install` to get your node_modules
- this is the front end repo, I forgot to include front end in the name and changing it would be rough. 
- reach out if you need help
- netlify deployed site: https://epic-meitner-afa3b4.netlify.com/
