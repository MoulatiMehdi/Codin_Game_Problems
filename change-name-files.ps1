
function msg {
    param(
        [System.ConsoleColor]$fg,
        [System.ConsoleColor]$bg,
        [string]$label,
        [string]$text)
    
    $label = $label.ToUpper().Trim()
    $text = $text.Trim()

    Write-Host -ForegroundColor $fg -BackgroundColor $bg " $label " -NoNewline 
    Write-Host -ForegroundColor $bg "`t$text" -NoNewline
}
function pass {
    param ([string]$msg )
    msg -fg Black -bg Green -label 'Pass' -text $msg + "`n"
}
function fail {
    param($msg)
    msg -fg Black -bg Red -label 'fail' -text $msg
}
function warn {
    param($msg)
    msg -fg Black -bg Yellow -label 'WARN' -text $msg+"`n"
}

Write-Host -ForegroundColor White "- Replacing ' ' and '_' Characters with '-'  ...`n"

$local:files = Get-ChildItem -Path ".\" -Recurse  -Exclude 'node_modules' | Sort-Object -Property @{Expression = { $_.PSIsContainer -eq $true } } | Where-Object { 
    $_.FullName -notlike '*\node_modules\*' -and $_.Name -cmatch "[ _A-Z]+" 
}

if ($files.Count -eq 0) {
    Write-Host -ForegroundColor Cyan "All Files are Names Well"
}
else {

    foreach ($file in $files) {

        $local:newName = $file.Name -replace "[_ ]+", "-"    
        $newName = $newName.Trim()
        $newName = $newName.ToLower()

    
        <# Action to perform if the condition is true #>
        try {
            $null = rename-item -Path $file.FullName -NewName $newName -Force -ErrorAction Stop
            pass("Target : " + $file.Name)
            Write-Host -ForegroundColor Gray "`n`tOld Name : "  -NoNewline
            Write-Host -ForegroundColor White $file.Name 
            Write-Host -ForegroundColor Cyan "`tNew Name : " -NoNewline
            Write-Host -ForegroundColor White  $newName
        }
        catch {
            <#Do this if a terminating exception happens#>
            $local:err = $Error[0]
            fail( "Failed to Rename the item")
            Write-Host -ForegroundColor Cyan " '$($file.Name)' :"
            Write-Host -ForegroundColor red   "`t`t- Error : `t$err"
            Write-Host -ForegroundColor White "`t`t- Path  : `t$file"
        }
    }
}




#Remove-Variable files ,file  