param(
    [string]$Path = ".\"
)

Import-Module -Name "D:\Programming\Solve_Puzzles\codin-game-problems\scripts\message.psm1"


Write-Host -ForegroundColor White "$circle Renaming the files and Folders inside the folder" -NoNewline
Write-Host -ForegroundColor cyan " '$Path' " -NoNewline
Write-Host -ForegroundColor White " ..."

$files = Get-ChildItem -Path $Path -Recurse  -Exclude 'node_modules' | Sort-Object -Property @{Expression = { $_.PSIsContainer -eq $true } } | Where-Object { 
    $_.FullName -notlike '*\node_modules\*' -and $_.Name -cmatch "[ _]+" 
}

if ($files.Count -eq 0) {
    Write-Host -ForegroundColor Green "All Files are Named Well."
}
else {

    foreach ($file in $files) {

        $local:newName = $file.Name -replace "[_ ]+", "-"    
        $newName = $newName.Trim()

    
        <# Action to perform if the condition is true #>
        try {
            $null = rename-item -Path $file.FullName -NewName $newName -Force -ErrorAction Stop
            pass -Message "Target : "$file.Name
            Write-Host -ForegroundColor Gray "`tOld Name : "  -NoNewline
            Write-Host -ForegroundColor White $file.Name 
            Write-Host -ForegroundColor Cyan "`tNew Name : " -NoNewline
            Write-Host -ForegroundColor White  $newName
        }
        catch {
            <#Do this if a terminating exception happens#>
            $local:err = $Error[0]
            fail -Message "Failed to Rename the item : "
            Write-Host -ForegroundColor Cyan " '$($file.Name)' :"
            Write-Host -ForegroundColor red   "`t`t+ Error : `t$err"
            Write-Host -ForegroundColor White "`t`t+ Path  : `t"$file.FullName
        }
    }
}




#Remove-Variable files ,file  