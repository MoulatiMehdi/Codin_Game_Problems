$files = Get-ChildItem -Recurse -Path '.\'

Write-Host -ForegroundColor Cyan "Replacing ' ' and '_' Characters with '-'  : "

foreach ($file in $files) {

    if ($file -match "[ _]") {

        $newName = $file -replace "[_ ]+", "-"    
        $newName = $newName.Trim()
        $newName = $newName.ToLower()

    
        <# Action to perform if the condition is true #>
        try {
            $null = rename-item -Path $file.FullName -NewName $newName -ErrorAction Stop
            pass($newName)
        }
        catch {
            <#Do this if a terminating exception happens#>
            fail -msg "In file '$file' : "
            Write-Host -ForegroundColor red "`t$err"
        }
    }
    
}

function msg {
    param(
        [System.ConsoleColor]$fg,
        [System.ConsoleColor]$bg,
        [string]$label,
        [string]$text)
    
    $label = $label.ToUpper()
    $text = $text.Trim()
    Write-Host -ForegroundColor $fg -BackgroundColor $bg " $label " -NoNewline 
    Write-Host -ForegroundColor White "`t$msg"
}
function pass {
    param ([string]$msg )
    msg -fg Black -bg Green -label 'Pass' -msg $msg
}
function warn {
    param($msg)
    msg -fg Black -bg Yellow -label 'WARN' -msg $msg
}
function fail {
    param($msg)
    msg -fg Black -bg Red -label 'fail' -msg $msg
}