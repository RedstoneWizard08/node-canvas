#!/bin/sh

set -ex

if [ "$ARCH" = "arm64" ]; then
    export CC=aarch64-linux-gnu-gcc
    export CXX=aarch64-linux-gnu-g++
    export AR=aarch64-linux-gnu-ar
    export AS=aarch64-linux-gnu-as
    export LD=aarch64-linux-gnu-ld
    export RANLIB=aarch64-linux-gnu-ranlib
else
    export CC=x86_64-linux-gnu-gcc
    export CXX=x86_64-linux-gnu-g++
    export AR=x86_64-linux-gnu-ar
    export AS=x86_64-linux-gnu-as
    export LD=x86_64-linux-gnu-ld
    export RANLIB=x86_64-linux-gnu-ranlib
fi

export CFLAGS="--disable-multilib"
export CXXFLAGS="--disable-multilib"
export LDFLAGS="--disable-multilib"

install-node-gyp
npm install --ignore-scripts
. prebuild/Linux/preinstall.sh
cp prebuild/Linux/binding.gyp binding.gyp
node-gyp rebuild -j 2 "--arch=$ARCH"
. prebuild/Linux/bundle.sh
