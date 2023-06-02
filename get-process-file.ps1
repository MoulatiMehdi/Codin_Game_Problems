$file = "D:\Programming\Solve_Puzzles\codin-game-problem"

$processes = Get-Process | Where-Object {
    $modules = $_.Modules | Select-Object -ExpandProperty FileName
    $modules -contains $file
}

if ($processes.Count -gt 0) {
    Write-Host "The following processes are using the file '$file':"
    $processes | Select-Object Name, Id, Path | Format-Table -AutoSize
}
else {
    Write-Host "No processes are currently using the file '$file'."
}
