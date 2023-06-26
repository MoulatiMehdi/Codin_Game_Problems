<!-- @format -->

# 1. Goal 🎯:

The goal of this repository is **Solve Puzzles** from the <a href="https://www.codingame.com/home">CodinGame</a> WebSite to improve my programming skills

# 2. Don 't Cheat 🚫:

Copy Paste the code to get some XP is just a **Stupid thing** to do.
you need to solve it by yourself.
Don't be Lazy. **GO SOLVE IT BY YOUR OWN**.

# 3. Features 🌟

This project is for javascript Windows users.
since it use PowerShell or node packages to :

-   Get puzzle statement from the website :
    -   convert it to a `readme.md` file
-   Get puzzle cases for the website

    -   convert it to a `test.json` file :
    -   this file contains for each cases :
        -   input
        -   output
        -   name

-   Create jest test files for your puzzle

# 4. Commands 🤖

-   `.\Rename-Files` :

    -   **DESCRIPTION** :
        -   rename files with space and underscore and change them to minus sign
    -   **PARAMETERS** :
        -   `-Path <string>` : the path where to apply it
            -   Required : true
            -   Position : 0
            -   Default Value : Current directory
            -   Accept pipeline :False
            -   Accept wildcard characters : False

-   `.\Get-Cases` :

    -   **DESCRIPTION** :

        -   Get the puzzle's cases From CodinGame Website as a JSON file called 'test.json'
        -   the file will be created inside the puzzle folder
        -   Connection is Required

    -   **PARAMETERS** :
        -   `-Name <string>` : name of the puzzle
            -   Required : true
            -   Position : 0
            -   Default Value : False
            -   Accept pipeline :False
            -   Accept wildcard characters : False

-   `.\Get-Description` :

    -   **Syntax** :
        ```ps1
            .\Get-Description [-Name <string>]
        ```
    -   **DESCRIPTION** :

        -   load the description of the puzzle from the codinGame website as a markdown file called 'readme.md' inside the puzzle folder
        -   Connection is Required

    -   **PARAMETERS** :
        -   `-Name <string>` : Name of the puzzle
            -   Required : true
            -   Position : 0
            -   Default Value : False
            -   Accept pipeline :False
            -   Accept wildcard characters : False

-   `.\Create-Test` :

    -   **Syntax** :

    ```ps1
        .\Create-Test [-Name <string>]
    ```

    -   **DESCRIPTION**
        -   Create Jest test Files inside the puzzle folder based on the `test.json` file.
    -   **PARAMETERS** :
        -   `-Name <string>` : name of the puzzle of the target
            -   Required : true
            -   Position : 0
            -   Default Value : False
            -   Accept pipeline :False
            -   Accept wildcard characters : False

-   `.\Create-Puzzle` :

    -   **SYNTAX** :

    ```ps1
        .\Create-Puzzle [-Name <string> -Force]
    ```

    -   **DESCRIPTION**
        -   Create a new puzzle folder that contains :
            -   Files 📝:
                -   `test.json` : contains input output of the puzzle
                -   `readme.md` : contains the question of the puzzle
                -   `main.js` : contains the main function that will solve the puzzle
            -   Folders 📁:
                -   `tests` : contains jest test files '.test.js'
        -   Connection is Required.
    -   **PARAMETERS**

        -   `-Name <string>` :
            name of the new puzzle the will be created in the `puzzles` folder

            -   Required : true
            -   Position : 0
            -   Default Value : False
            -   Accept pipeline :False
            -   Accept wildcard characters : False

        -   `-Force` : re-create the puzzle if it already exist
            -   Required : false
            -   Position : Named
            -   Default Value : False
            -   Accept pipeline :
            -   Accept wildcard characters :
