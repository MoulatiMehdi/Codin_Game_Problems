# Parameter help description
param(
    [string]$Name
)
Import-Module -Name "D:\Programming\Solve_Puzzles\codin-game-problems\scripts\message.psm1"
$ErrorActionPreference = "stop"
$PathPuzzle = "D:\Programming\Solve_Puzzles\codin-game-problems\puzzles"

Write-Host -ForegroundColor White  "$circle Creating New Puzzle Folder :" -NoNewline 
Write-Host -ForegroundColor Cyan " '$Name' " -NoNewline
Write-Host -ForegroundColor White '...' 

$FolderPuzzle = Join-Path $pathPuzzle $Name
$FolderTests = Join-Path $FolderPuzzle "tests"

$FileJson = Join-Path $FolderPuzzle "test.json"
$FileMain = Join-Path $FolderPuzzle "main.js"

try {
    $null = mkdir -Path $FolderTests
    pass -Message "Tests folder have been created."
    $null = New-Item -Path $FileJson
    pass -Message "JSON File have been created."
    $null = New-Item -Path $FileMain
    pass -Message "main.js File have been created."
    Set-Content $FileMain -Value "function solve(readline){`n`n}`n`nmodule.export = solve"
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Failed to Create Item : "
    Write-Host -ForegroundColor Red "`t+ Error : " $Error[0]
    exit
}

