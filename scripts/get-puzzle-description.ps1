Param(
    [string]$Name
)
$Master = "D:\Programming\Solve_Puzzles\codin-game-problems"
$FileJs = Join-Path $Master -ChildPath ".\js\getDescription.js"
$FolderPuzzle = Join-Path $Master -ChildPath "\puzzles" | Join-Path -ChildPath $Name
$ModuleMessage = Join-Path $Master -ChildPath ".\scripts\message.psm1"

Import-Module -Name $ModuleMessage
try {
    $isConnected = Test-Connection -ComputerName "www.google.com" -Count 1 -Quiet
    $isPathExist = Test-Path $FolderPuzzle 
    if (!$isConnected) {
        throw "No Connection is Available."
    }
    if (!$isPathExist) {
        throw "Puzzle '$Name' isn't exist in the puzzles Folder"
    }
    
    Write-Host -ForegroundColor White "$circle Getting  Description of '$Name' Puzzle ..."
    Set-Location $FolderPuzzle
    node $FileJs $Name
    Write-Host -ForegroundColor Green "Done "
    Set-Location $Master
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Failed To Create Description File : "
    Write-Host -ForegroundColor Red "Error :`t"$Error[0] 
}





