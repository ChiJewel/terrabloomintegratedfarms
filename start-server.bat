@echo off
title TerraBloom Integrated Farms - Local Server
echo ========================================================
echo Starting TerraBloom Integrated Farms Web Server...
echo Location: Plot 1-6 Freedom Way, Lagos-Ibadan Expressway
echo ========================================================
echo.
start http://localhost:3000/
node scripts/local-server.js
pause

