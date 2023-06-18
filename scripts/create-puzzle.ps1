# Parameter help description
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Name,
    [Parameter(Mandatory = $false)]
    [switch]$Force = $false

)

$LastFolder = Get-Location
$ErrorActionPreference = "stop"

$mainPath = "D:\Programming\Solve_Puzzles\codin-game-problems"
$PathPuzzle = Join-Path $mainPath -ChildPath "\puzzles"
$Name = $Name.ToLower() -replace " ", "-"

Import-Module -Name (Join-Path $mainPath -ChildPath "\scripts\message.psm1")

Write-Host -ForegroundColor Cyan  "$circle Creating New Puzzle :" -NoNewline 
Write-Host -ForegroundColor Magenta " '$Name' " -NoNewline
Write-Host -ForegroundColor Cyan '...' 

$FolderPuzzle = Join-Path $pathPuzzle $Name
$FolderTests = Join-Path $FolderPuzzle "tests"

$FileJson = Join-Path $FolderPuzzle "test.json"
$FileMain = Join-Path $FolderPuzzle "main.js"
$FileJS = (Join-Path $mainPath -ChildPath "js\getAll.js")

try {
    $isExist = Test-Path $FolderPuzzle
    $isConnected = Test-Connection -ComputerName "www.google.com" -Count 1 -Quiet
   
    # test if the connection is available
    if (!$isConnected) {
        throw "No connextion is available."
    }
    if ($isExist) {
        # remove the exist folder if already exist
        if ($Force) {
            Remove-Item -Path $FolderPuzzle -Recurse -Force
        }
        else {
            throw "$Name Puzzle already exists in 'puzzles' Folder."

        }
    }

    # create the puzzle folder
    Write-Host "Creating Puzzle Folder ..."
    $null = mkdir -Path $FolderPuzzle
    # create jest test folder
    Write-Host "`tCreating Tests Folder ..."
    $null = mkdir -Path $FolderTests

    Set-Content $FileMain -Value "function solve(readline){`n`n}`n`nmodule.exports = solve"
    Set-Location $FolderPuzzle

    # get the cases and the description form the codinGame website
    node  $FileJS $Name
    
    # test json file 
    $isJsonExist = Test-Path $FileJson
    $isJsonEmpty = (get-content $FileJson -raw ) -inotmatch "input"
   
    if (!$isJsonExist) {
        throw "File Json doesn't exist in the $Name puzzle Folder."
    }
    if ($isJsonEmpty) {
        throw "Json file is Empty"
    }

    # create jest test files inside the puzzle folder
    npm run create-test-files --name="$Name" --silent
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Script failed : "
    Write-Host -ForegroundColor Red "`t+ Error : " $Error[0]
    

}
finally {
    Set-Location $LastFolder
    exit

}

