$jsonFile = ".\test.json"
$testFolder = '.\tests'
$initTest = ".\tests\initial-test-file"
$circle = [char]0x25CF

Set-Location  D:\Programming\Solve_Puzzles\Codin_Game_Problems\Equivalent-Resistance

# get the mockup test file as a string
$content = Get-Content -Path $initTest -Raw 
Write-Host -ForegroundColor Magenta "$circle Loading the JSON File..."

try {
    # get the object that contains the inputs and outputs of tests
    $tests = get-content -raw $jsonFile -ErrorAction Stop | convertFrom-json -ErrorAction Stop | Select-Object -ExpandProperty tests -ErrorAction Stop
    Write-Host -ForegroundColor Green "The JSON file has been loaded."
}
catch {
    <#Do this if a terminating exception happens#>
    Write-Host -ForegroundColor red "Exception occurs : " +  ${_.ExceptionMessage}
}

Write-Host -ForegroundColor Magenta "$circle Removing all files with test.js extension ..."
# remove the test folder (will be deleted even if there is file in it)
try {
    Remove-Item -Path "$testFolder\*.test.js" -Force  -Recurse -ErrorAction Stop
    Write-host -ForegroundColor Green "All files with 'test.js' extension have been removed."
}
catch {
    <#Do this if a terminating exception happens#>
    Write-Host -ForegroundColor red "Exception occurs : " + ${_.ExceptionMessage}
}


# re-create the folder again 

Write-Host -ForegroundColor Magenta "$circle Creating Test Files ... "
foreach ($test in $tests) {
    <# $test is the current item #>
    # the name of the test file (snake case) 
    $file = ($test.name -replace ' ', '_').ToLower() 
    # add the extension to the name
    $file += ".test.js"

    # the location of the test files
    $filePath = "$testFolder\$file"
    try {
        $null = New-Item -ItemType File -Path $filePath -Force -ErrorAction Stop

        # throw this message if the file has been created
        Write-Host "  " -NoNewline
        Write-Host -ForegroundColor Black -BackgroundColor Green " pass ".ToUpper() -NoNewline 
        Write-Host -ForegroundColor White " $file"
        
        # change the input and output of the mockup string
        $newContent = $content -replace "input = \[*\]" , ('input = ["' + ($test.input -join '", "') + '"]')
        $newContent = $newContent -replace "output = \[*\]" , ('output = "' + ($test.output -join '", "') + '"')

        # set the string inside the file
        Set-Content -Path $filePath -Value $newContent

    }
    catch {
        <#Do this if a terminating exception happens#>
        Write-Host "  " -NoNewline
        Write-Host -ForegroundColor Black -BackgroundColor Red " fail ".ToUpper() -NoNewline 
        Write-Host -Foreground White " $file"
    }
    
}


