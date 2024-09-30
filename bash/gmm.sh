#!/bin/bash

for arg in "$@"; do
    echo '';
    cal -m $arg | awk '{ print " "$0; getline; print " Mo Tu We Th Fr Sa Su"; \
    getline; if (substr($0,1,2) == " 1") print "                    1 "; \
    do { prevline=$0; if (getline == 0) exit; print " " \
    substr(prevline,4,17) " " substr($0,1,2) " "; } while (1) }';
    echo '';
done


# USAGE

# ➜  tinies git:(main) ./bash/gmm.sh 10 11   

#      October 2024      
#  Mo Tu We Th Fr Sa Su
#      1  2  3  4  5  6 
#   7  8  9 10 11 12 13 
#  14 15 16 17 18 19 20 
#  21 22 23 24 25 26 27 
#  28 29 30 31          


#     November 2024      
#  Mo Tu We Th Fr Sa Su
#               1  2  3 
#   4  5  6  7  8  9 10 
#  11 12 13 14 15 16 17 
#  18 19 20 21 22 23 24 
#  25 26 27 28 29 30    

# ➜  tinies git:(main) 
