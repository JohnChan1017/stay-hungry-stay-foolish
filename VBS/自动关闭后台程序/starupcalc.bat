rem **Code Start

@echo off

echo 正在关闭冗余进程，请稍等.....

echo ----启动程序中------


echo Wscript.Sleep Wscript.Arguments(0) * 1000>Delay.vbs

Delay.vbs 10

start "启动calc.exe" "C:\Windows\System32\calc.exe"

del Delay.vbs

@echo on

rem *Code End***
