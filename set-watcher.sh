#! /bin/bash

echo 99999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
echo 99999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events


