# Make every line of the films with your own VoiceStudio voices, on this computer.
#
# 1. Open VoiceStudio and leave it running.
# 2. Put this file and lines.json in the same folder.
# 3. Right-click this file > "Run with PowerShell"
#    (or in PowerShell:  powershell -ExecutionPolicy Bypass -File .\make-voices.ps1 )
# The recordings go to the folder "voicestudio-recordings" (next to this file, or on the Desktop), named ep1-s001.wav and so on.
# Lines that are already there are skipped, so you can run it again after adding a missing voice.
# It only talks to VoiceStudio on this computer (localhost); nothing is sent anywhere else.

$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$Base  = 'http://localhost:3900'
# Works as a saved file or pasted straight into PowerShell (then the lines come from the project on GitHub).
$Here  = if ($PSScriptRoot) { $PSScriptRoot } else { [Environment]::GetFolderPath('Desktop') }
$Out   = Join-Path $Here 'voicestudio-recordings'
New-Item -ItemType Directory -Force -Path $Out | Out-Null
$LocalLines = Join-Path $Here 'lines.json'
$LinesUrl = 'https://raw.githubusercontent.com/dawoodalsaqri29-jpg/mastering-english-library/9c8da940c0a5c49fa8f45554cd2fc2b5eacb3feb/studio/cinematic/voicestudio/lines.json'
if (Test-Path $LocalLines) { $Lines = Get-Content -Raw -Encoding UTF8 $LocalLines | ConvertFrom-Json }
else { $Lines = Invoke-RestMethod $LinesUrl }

try { Invoke-RestMethod "$Base/health" -TimeoutSec 10 | Out-Null }
catch { Write-Host "VoiceStudio is not running. Open the VoiceStudio app first, then run this again." -ForegroundColor Red; Read-Host 'Press Enter to close'; return }

# Your saved voices, found by name. Spaces, quotes and backticks in names do not matter.
function Norm($s) { return (($s -replace '[`''"\s_\-]', '')).ToLower() }
$raw = Invoke-RestMethod "$Base/v1/audio/voices"
$items = @()
foreach ($k in 'voices','data','profiles','items') { if ($raw.$k) { $items = @($raw.$k); break } }
if (-not $items) { $items = @($raw) }
$byName = @{}
foreach ($v in $items) {
  $name = if ($v.name) { $v.name } elseif ($v.display_name) { $v.display_name } else { $null }
  $id   = if ($v.id) { $v.id } elseif ($v.voice_id) { $v.voice_id } else { $name }
  if ($name -and -not $byName.ContainsKey((Norm $name))) { $byName[(Norm $name)] = $id }
}
Write-Host "Voices found in VoiceStudio: $($byName.Keys -join ', ')"

$missing = @{}; $made = 0; $skipped = 0; $failed = 0
foreach ($l in $Lines) {
  $target = Join-Path $Out $l.file
  if (Test-Path $target) { $skipped++; continue }
  $key = Norm $l.voice
  if (-not $byName.ContainsKey($key)) { $missing[$l.voice] = 1 + [int]$missing[$l.voice]; continue }
  $body = @{ input = $l.text; voice = $byName[$key]; response_format = 'wav'; instructions = $l.direction } | ConvertTo-Json -Compress
  try {
    Invoke-RestMethod -Method Post -Uri "$Base/v1/audio/speech" -ContentType 'application/json; charset=utf-8' `
      -Body ([Text.Encoding]::UTF8.GetBytes($body)) -OutFile $target -TimeoutSec 600
    $made++; Write-Host "OK   $($l.file)  ($($l.voice), $($l.emotion))"
  } catch {
    $failed++; Write-Host "FAIL $($l.file): $($_.Exception.Message)" -ForegroundColor Yellow
    if (Test-Path $target) { Remove-Item $target }
  }
}

Write-Host ""
Write-Host "Made $made, already there $skipped, failed $failed." -ForegroundColor Green
if ($missing.Count) {
  Write-Host "Make these voices in VoiceStudio (Design), name them exactly like this, then run again:" -ForegroundColor Yellow
  $missing.GetEnumerator() | ForEach-Object { Write-Host "  - $($_.Key)  ($($_.Value) lines)" }
}
Write-Host "Recordings are in: $Out"
Write-Host "Send the files in that folder to Claude in the chat (select all, drag them in)."
Read-Host 'Press Enter to close'
