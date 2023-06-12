# Parameter help description
param(
    [string]$Name
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

    if ($isExist) {
        throw "$Name Puzzle already exists in the puzzles Folder."
    }

    <# Action when all if and elseif conditions are false #>
    Write-Host "Creating Puzzle Folder ..."
    $null = mkdir -Path $FolderPuzzle
    Write-Host "`tCreating Tests Folder ..."
    $null = mkdir -Path $FolderTests

    Set-Content $FileMain -Value "function solve(readline){`n`n}`n`nmodule.exports = solve"
    Set-Location $FolderPuzzle

    if (!$isConnected) {
        throw "No connextion is available."
    }
        
    node  $FileJS $Name
    $isJsonExist = Test-Path $FileJson
    $isJsonEmpty = (get-content $FileJson -raw ) -imatch "(input)|(output)"
    if (!$isJsonExist) {
        throw "File Json doesn't exist in the $Name puzzle Folder."
    }
    if ($isJsonEmpty) {
        throw "Json file is Empty"
    }
    npm run create-test-files --name="$Name" --silent

    Set-Location $LastFolder
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Script failed : "
    Write-Host -ForegroundColor Red "`t+ Error : " $Error[0]
    Set-Location $LastFolder
    exit

}

