
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

$circle = [char]0x25CF


Export-ModuleMember -Function pass , warn , fail 
Export-ModuleMember -Variable circle
