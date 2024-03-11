#!/bin/bash

rm -rf dist
mkdir -p dist/src/database
cp -r src/database dist/src/database

# Run the build script
tsc
