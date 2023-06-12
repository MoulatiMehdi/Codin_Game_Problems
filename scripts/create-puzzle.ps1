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
$FileJS = (Join-Path $mainPath -ChildPath "js\getAll.js")

try {
    if (Test-Path $FolderPuzzle) {
        throw "$Name Puzzle already exists in the puzzles Folder."
    }
    else {
        <# Action when all if and elseif conditions are false #>
        Write-Host "Creating Puzzle Folder ..."
        $null = mkdir -Path $FolderPuzzle
        Write-Host "`tCreating Tests Folder ..."
        $null = mkdir -Path $FolderTests

        Set-Content $FileMain -Value "function solve(readline){`n`n}`n`nmodule.exports = solve"
        Set-Location $FolderPuzzle

        if (Test-Connection -ComputerName "www.google.com" -Count 1 -Quiet) {
            node  $FileJS $Name
            if (Test-Path $FileJson ) {
                if ((get-content $FileJson -raw ) -imatch "[input|output]" ) {
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
        else {
            throw "No connextion is available."
        }
        
    }
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Script failed to create the puzzle"
    Write-Host -ForegroundColor Red "`t+ Error : " $Error[0]
    exit
}

