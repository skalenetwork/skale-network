#!/bin/bash

set -e

has_errors=false

for json_file in $(find ./metadata -name "*.json" 2>/dev/null || true); do
    echo "Validating $json_file..."    
    temp_file="temp_$(basename "$json_file" .json).ts"
    cat > "$temp_file" << EOF
import { types } from '@skalenetwork/portal-core';

const data: types.ChainsMetadataMap = $(cat "$json_file");
EOF
    
    # Try to compile
    if bunx tsc --noEmit --strict --skipLibCheck  "$temp_file" 2>/dev/null; then
        echo "✅ $json_file: Valid"
    else
        echo "❌ $json_file: Invalid"
        bunx tsc --noEmit --strict --skipLibCheck "$temp_file" 2>&1 || true
        has_errors=true
    fi
    rm -f "$temp_file"
done

if [ "$has_errors" = true ]; then
    echo "Some JSON files failed validation"
    exit 1
else
    echo "🎉 All JSON files are valid!"
fi