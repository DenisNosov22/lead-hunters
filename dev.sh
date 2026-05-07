#!/usr/bin/env bash
set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export PATH="$SCRIPT_DIR/.tools/node-v24.15.0-win-x64:$PATH"
"$SCRIPT_DIR/.tools/node-v24.15.0-win-x64/npm.cmd" run dev -- --host 127.0.0.1 --port 5173
