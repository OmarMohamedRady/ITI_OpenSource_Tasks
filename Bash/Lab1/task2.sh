#!/bin/bash
#execute the script  every 1 min to monitor system load, and add it to file /var/log/system-load.PS: The script must be run using root.
##Exit codes:
##	0 : Normal terminated
##	1: The user is not the root

# check if the user who run the script is the root
[ ${EUID} -ne 0 ] && exit 1

while true
do

    # Get the system load average for the last minute
    load=$(uptime)

    # Get the current date and time
    timestamp=$(date +"%Y-%m-%d %H:%M:%S")

    # Writing the system load and timestamp to the log file
    echo "${timestamp} - System load: ${load}" >> /var/log/system-load.log

    # logging every 60 seconds
    sleep 60
done

exit 0