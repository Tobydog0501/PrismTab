#!/usr/bin/env bash
# Build unpacked + zipped packages for Chrome (MV3) and Firefox (MV2) into dist/.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"

build() {
  local target="$1" manifest="$2"
  local out="$DIST/$target"
  rm -rf "$out" "$DIST/PrismTab-$target.zip"
  mkdir -p "$out"
  cp -r "$ROOT/assets" "$ROOT/src" "$out/"
  cp "$ROOT/$manifest" "$out/manifest.json"
  (cd "$out" && zip -qr "$DIST/PrismTab-$target.zip" .)
  echo "Built $out and dist/PrismTab-$target.zip"
}

build chrome manifest.json
build firefox manifest.firefox.json
