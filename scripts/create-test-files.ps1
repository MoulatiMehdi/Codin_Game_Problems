param(
    [string]$Name 
)

# stop after find an error 
$ErrorActionPreference = "Stop"

# absolute paths
$pathModule = "D:\Programming\Solve_Puzzles\codin-game-problems\scripts\message.psm1"
$initTest = "D:\Programming\Solve_Puzzles\codin-game-problems\shared\initial-test-file"
$puzzleFolder = "D:\Programming\Solve_Puzzles\codin-game-problems\puzzles"

# import function and variables
Import-Module -Name $pathModule

# 
$path = join-path $puzzleFolder  $Name
$fileJson = join-path $path "test.json"
$folderTest = join-path $path "tests"

try {
    # get the mockup test file as a string
    $content = Get-Content -Path $initTest -Raw 
    Write-Host -ForegroundColor Magenta "$circle Loading the JSON File..."

    # get the object that contains the inputs and outputs of tests
    $tests = get-content -raw $fileJson  | convertFrom-json  | Select-Object -ExpandProperty tests 
    
    # send message to the console
    pass -Message "The JSON file has been loaded."
    Write-Host ''
    Write-Host -ForegroundColor Magenta "$circle Removing all files with test.js extension ..."
    
    # remove test files with extension '.test.js'
    Remove-Item -Path "$folderTest\*.test.js" -Force  -Recurse 
    pass -Message "All files with '.test.js' extension have been removed."
}
catch {
    <#Do this if a terminating exception happens#>
    fail -Message "Failed to Create test Test files : "
    Write-Host -ForegroundColor Red "`t+ "$Error[0]
    exit 
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
    $filePath = join-path $folderTest $file
    try {
        $null = New-Item -ItemType File -Path $filePath -Force 

        # throw this message if the file has been created
        pass  -Message $file

        
        # change the input and output of the mockup string
        $newContent = $content -replace 'path' , ("$path\main" -replace '\\' , '/' )
        $newContent = $newContent -replace 'name' , $test.name 
        $newContent = $newContent -replace "input = \[*\]" , ('input = ["' + ($test.input -join '", "') + '"]')
        $newContent = $newContent -replace "output = \[*\]" , ('output = ["' + ($test.output -join '", "') + '"]')

        # set the string inside the file
        Set-Content -Path $filePath -Value $newContent

    }
    catch {
        <#Do this if a terminating exception happens#>
        fail -Message $file
        Write-Host "`t+ Error : "$Error[0]

    }
    
}


