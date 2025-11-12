@echo off
cd /d %~dp0
git add .
git commit -m "commit"
git push
echo Done!
pause
