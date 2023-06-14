<!-- @format -->

# 1. Goal 🎯:

Solve puzzles from the <a href="https://www.codingame.com/home">CodinGame</a> WebSite to :

-   Improve my skills in programming
-   Learn new algorithms etc ...
-   Create Bots

# 2. Don 't Cheat 🚫:

Copy Paste the code to get some XP is just a Stupid thing to do.
you need to solve it by yourself . since your goal is to improve your programming skills .
Don't be Lazy. Go solve it by your own.

# 3. Commands :

-   `.\Rename-Files -Path "Path-Name"` :

    -   Replace spaces and underscore of files name with the minus sign

-   `.\Get-Cases "Puzzle-Name"` :

    -   Get the puzzle's cases as a JSON file called 'test.json'
    -   Connection is Required

-   `.\Get-Description "Puzzle-Name"` :

    -   Get the description of the puzzle as a markdown file called 'readme.md'
    -   Connection is Required

-   `.\Create-Test -Name "Puzzle-Name"` :

    -   Create Jest test File based on the `test.json` file
        -   Create jest test files of a puzzle
        -   Exit when the puzzle Folder is already Exist

-   `.\Create-Puzzle -Name "Puzzle-Name"` :

    -   Create a new puzzle folder that contains :
        -   Files 📝:
            -   `test.json` : contains input output of the puzzle
            -   `readme.md` : contains the question of the puzzle
        -   Folders 📁:
            -   `tests` : contains jest test files '.test.js'
    -   Connection is Required.
