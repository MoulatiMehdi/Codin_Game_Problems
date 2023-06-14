Param(
    [Parameter(Position = 0, Mandatory = $true)]
    [string]$PuzzleName
)
$ErrorActionPreference = "Stop"

$Master = Join-Path $PSScriptRoot -ChildPath ".."  
$Launch = Join-Path $Master -ChildPath ".\.vscode\launch.json"
$PuzzlePath = Join-Path $Master -ChildPath ".\puzzles\$PuzzleName"


try {
    $isPathExist = Test-Path $PuzzlePath
    $isCheckjsExist = Join-Path $PuzzlePath -ChildPath '.\check.js' | Test-Path
    if (!$isPathExist) {
        throw "Puzzle $PuzzleName Doesn't Exist"
    }
    if (!$isCheckjsExist) {
        throw "Check.js of the Puzzle '$PuzzleName' doesn't Exist"
    }
    $Content = (Get-Content  -Path $Launch -Raw ) -replace "`"program`":\s+`".*?`"", "`"program`": `"`${workspaceFolder}\\puzzles\\$PuzzleName\\check.js`""

    Set-Content -Path $Launch -Value $Content
}
catch {
    <#Do this if a terminating exception happens#>
    Write-Host -ForegroundColor Red "Failed To modify the launch.json Script :"
    Write-Host -ForegroundColor red "`t+Error: "$Error[0]
    exit
}
