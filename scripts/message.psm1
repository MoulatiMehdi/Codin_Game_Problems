
function Write-Message {
    
    param([string]$Title,
        [string]$Message,
        [switch]$NoNewline,
        [System.ConsoleColor]$Fg,
        [System.ConsoleColor]$Bg
    )
    
    $Title = $Title.ToUpper().Trim()
    $Message = $Message.Trim()
    Write-Host -ForegroundColor $Fg -BackgroundColor $Bg " $Title " -NoNewline 

    if ($NoNewLine) {
        Write-Host -ForegroundColor $Bg "`t$Message" -NoNewline

    }
    else {
        Write-Host -ForegroundColor $Bg "`t$Message" 

    }
}
function pass {
    param (
        [string]$Message,
        [switch]$NoNewline 
    )
    if ($NoNewLine) {
        Write-Message -fg Black -Bg Green -Title 'Pass' -Message $Message -NoNewLine

    }
    else {
        Write-Message  -fg Black -Bg Green -Title 'Pass' -Message $Message 

    }
}
function fail {
    param (
        [string]$Message,
        [switch]$NoNewline 
    )
    if ($NoNewline) {
        Write-Message -fg Black -Bg Red -Title 'fail' -Message $Message -NoNewLine
    }
    else {
        Write-Message -fg Black -Bg Red -Title 'fail' -Message $Message 
    }
}
function warn {
    param (
        [string]$Message,
        [switch]$NoNewline 
    )


    if ($NoNewline) {
        Write-Message -fg Black -Bg Yellow -Title 'WARN' -Message $Message -NoNewLine
    }
    else {
        Write-Message -fg Black -Bg Yellow -Title 'WARN' -Message $Message
    }    
}

$circle = [char]0x25CF


Export-ModuleMember -Function pass , warn , fail 
Export-ModuleMember -Variable circle