# Getting started

1.  If you don't have one, [create a GitHub account](https://github.com/join)
     *I'd recommend using your personal email, but you can use any ever email*
2.  Fork this repository, but clicking **Fork** in the upper right hand corner
    ![fork screenshot](fork.png)
3.  Go to settings in your new repository
    ![Settings screenshot](settings.png)
    ![Name screenshot](rename.png)
4.  Change the name to match your username.
5.  Visit your new website at http://[Insert you username].github.io if you load a
    website then it worked!


# Cloning Repository

1.  First you'll need to clone your repository to your Desktop directory, to do this
    we'll use the command line.
2.  Open up an app on your computer called **Terminal**
3.  Type `cd Desktop` and press enter
4.  Type `git clone https://github.com/[Insert your username]/[Insert your username].github.io.git`
    and press enter
5.  Type `ls` and press enter and you should see a `[Insert your username].github.io` in the
    list of outputted text. Also you can test this by looking at your compuers desktop you
    should see a folder with the same name

# Using terminal

## Saving changes to GitHub

```bash
cd ~/Desktop/[Insert you username].github.io
git add .
git commit -m "Insert your message"
git push
```

*If your forget to add `-m "Insert your message"` you'll get put into a program called VIM. In order to leave VIM, type `:q` and press enter.*

## Adding remote branch
1.  Commit all your local changes by following the instruction in *Saving changes to GitHub* above
2.  `git remote add upstream https://github.com/jamieyu96/jamieyu96.github.io.git`
3.  `git fetch upstream`
4.  `git merge upstream/master`

## Merging remote changes
To merge remote changes you'll first need to add a remote branch. See the instruction above

1.  `git fetch upstream`
2.  `git merge upstream/master`

## git commands
All git commands must be done from inside of your project folder

1. `git add .` - Adds current changes to git.
2. `git commit -m "instert your own message her"` - Makes a new git commit .
3. `git push` - Pushes your commit to GitHub
4. `git pull` - Pulls changes from GitHub to your project
5. `git status` - Prints out the current status of your git project

## I typed `git commit` and I for got to add a message
You're now in a program called ***VIM*** Do not panic. Simply type `:q` and
press enter.

![VIM meme](vim_meme.png)

 
## Other useful terminal commands
*  `cd <folder>` - Stands for "change directory" lets you change what folder your
   in (directory is a synonym for folder).
*  `cd` - *cd* without an argument takes you to your home folder.
*  `ls` - List the contents of your current folder.
*  `pwd` - Prints out the full file path that you're currently in.

# Excercies
* [Week 3](/exercises/week3.md)
* [Week 4](/exercises/week4.md)
* [week 5](/exercises/week5.md)
* [week 6](/exercises/week6.md)
* [week 7](/exercises/week7.md)
* [week 8](/exercises/week8.md)
* [week 9](/exercises/week9.md)


# Other links
* [Slide deck](https://docs.google.com/presentation/d/15rT3DGiQTCAWaJULosnOFOMp0r36O1FfkeS_KMdputo/edit#slide=id.p)
* [Game of Life demo](https://bitstorm.org/gameoflife/)

