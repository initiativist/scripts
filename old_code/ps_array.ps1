 
$myArray = $args
$loop = $true

while ($loop) {
    $command = Read-Host -Prompt "list perform"
    Write-Host $command

    if ($command.Length -ne 1) {
        Write-Host "`n! UNKOWN COMMAND `n"
        continue;
    }

    switch ($command) {
        "h" { 
            Write-Host "`nt: traverse`nx: exit`ni: insert"
            break
        }
        "t" {
            for ( $i = 0; $i -lt $myArray.count; $i++ ) {
                write-host "array[$i] is $($myArray[$i])"
            }
        }
        "x" {
            $loop = $false
            break
        }
        Default {
            Write-Host "`n! UNKOWN COMMAND `n"
        }
    }
}