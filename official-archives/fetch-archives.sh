#!/usr/bin/env bash
# 下载 NICCS 官方 Round 1 提交包原档（支持断点续传，可重复运行）。
#
# 两个 zip 各约 140 MB，超过 GitHub 单文件 100 MB 限制，因此不入 git
# （见仓库根 .gitignore）；克隆后运行本脚本即可取得原件并用 SHA256SUMS.txt 校验。
# NICCS 官网未公布官方 checksum，SHA256SUMS.txt 是首次下载后计算的固定值。
set -u
cd "$(dirname "$0")"

BASE="https://www.niccs.org.cn/niccs/Proposal/Cryptographic%20Hash%20Algorithms/Round%201%20candidates"
DRAGON_SIZE=148150104   # Content-Length, 2026-10-30
THUNDER_SIZE=146828807  # Content-Length, 2026-10-30

fetch() { # fetch <file> <expected_bytes>
  f=$1 want=$2
  while :; do
    cur=0; [ -f "$f" ] && cur=$(wc -c < "$f" | tr -d '[:space:]')
    [ "$cur" -ge "$want" ] && { echo "$f: 已完整 ($cur bytes)"; return 0; }
    echo ">> $f: $cur / $want bytes, 断点续传中..."
    # NICCS 服务器对长连接不稳定，每轮限时 560s，循环续传直至完整
    curl -L -C - --max-time 560 -A "Mozilla/5.0" -o "$f" "$BASE/$f" || sleep 3
  done
}

fetch Dragon.zip  "$DRAGON_SIZE"
fetch Thunder.zip "$THUNDER_SIZE"

echo ">> SHA-256 校验:"
if command -v sha256sum >/dev/null 2>&1; then
  sha256sum -c SHA256SUMS.txt
else
  shasum -a 256 -c SHA256SUMS.txt
fi
