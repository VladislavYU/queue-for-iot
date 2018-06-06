#!/bin/bash
gpio mode 31 output
gpio write 31 $1
gpio read 31
