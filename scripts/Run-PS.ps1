param (
    [Parameter(Position = 0,Mandatory = $true)]
    [string]$scriptName
)

# Construct the full script path using the provided file name
$scriptPath = Join-Path -Path $PSScriptRoot -ChildPath "$scriptName.ps1"

# Check if the script file exists
if (Test-Path $scriptPath) {
    # Execute the PowerShell script
    & $scriptPath
}
else {
    Write-Host -ForegroundColor Black -BackgroundColor -Red "Script '$scriptName' does not exist."
}






