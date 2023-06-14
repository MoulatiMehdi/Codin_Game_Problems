$animationDelay = 500  # Delay between each animation frame in milliseconds
$animationFrames = @('.', '..', '...')
$iterations = 10  # Number of iterations for the animation

# Print the initial "Waiting for Response ..." message
Write-Host -NoNewline "Waiting for Response ..."

# Start the animation loop
for ($i = 0; $i -lt $iterations; $i++) {
    foreach ($frame in $animationFrames) {
        # Print the animation frame
        Write-Host -NoNewline "`rWaiting for Response $frame"
        Start-Sleep -Milliseconds $animationDelay
    }
}

# Clear the line and replace it with "Done"
Write-Host "`r" -NoNewline
Write-Host "Done"(' '*100)
