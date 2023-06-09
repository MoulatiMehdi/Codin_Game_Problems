# Parameter help description
param(
    [string]$Name
)
$ErrorActionPreference = "stop"

$mainPath = "D:\Programming\Solve_Puzzles\codin-game-problems"
$PathPuzzle = Join-Path $mainPath -ChildPath "\puzzles"
$Name = $Name.ToLower() -replace " ", "-"

Import-Module -Name (Join-Path $mainPath -ChildPath "\scripts\message.psm1")

Write-Host -ForegroundColor White  "$circle Creating New Puzzle Folder :" -NoNewline 
Write-Host -ForegroundColor Cyan " '$Name' " -NoNewline
Write-Host -ForegroundColor White '...' 

$FolderPuzzle = Join-Path $pathPuzzle $Name
$FolderTests = Join-Path $FolderPuzzle "tests"

$FileJson = Join-Path $FolderPuzzle "test.json"
$FileMain = Join-Path $FolderPuzzle "main.js"
$FileJS = (Join-Path $mainPath -ChildPath "js\puzzle.js")

try {
    if (Test-Path $FolderPuzzle) {
        throw "$Name Puzzle already exists in the puzzles Folder."
    }
    
    $null = mkdir -Path $FolderTests
    pass -Message "Tests folder have been created."
    $null = New-Item -Path $FileJson
    pass -Message "main.js File have been created."
    Set-Content $FileMain -Value "function solve(readline){`n`n}`n`nmodule.exports = solve"
    Set-Location $FolderPuzzle
    node  $FileJS $Name


    if (Test-Path $FileJson ) {
        if ((get-content readme.md -raw ) -imatch "[input|output]" ) {
            npm run create-test-files --name="$Name" --silent
        }
        else {
            throw "Json file is Empty"
        }
    }
    else {
        throw "File Json doesn't exist in the $Name puzzle Folder."
    }
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Failed to Create Item : "
    Write-Host -ForegroundColor Red "`t+ Error : " $Error[0]
    exit
}

