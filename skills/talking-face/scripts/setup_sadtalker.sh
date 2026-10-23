#!/usr/bin/env bash
# One-shot setup of SadTalker (audio-driven talking face) on a CPU-only workspace.
# Everything comes from PyPI and GitHub releases (allowed through the proxy). ~6 GB disk, ~10 min.
set -e
ROOT=${1:-/home/claude/sadtalker}
mkdir -p "$ROOT" && cd "$ROOT"
python3.11 -m venv venv311 && . venv311/bin/activate
pip install -q --upgrade pip
pip install -q "torch==2.1.2" "torchvision==0.16.2"
pip install -q "numpy==1.23.4" "scipy==1.10.1" "scikit-image==0.21.0" "numba==0.57.1" "llvmlite==0.40.1" \
  "librosa==0.9.2" "resampy==0.3.1" "scikit-learn==1.3.2" "matplotlib==3.7.5" "opencv-python-headless==4.10.0.84" \
  face_alignment==1.3.5 imageio imageio-ffmpeg pydub "kornia==0.6.8" tqdm yacs pyyaml joblib "facexlib==0.3.0" av safetensors \
  basicsr==1.4.2 gfpgan==1.3.8
[ -d repo ] || git clone -q --depth 1 https://github.com/OpenTalker/SadTalker.git repo
cd repo && mkdir -p checkpoints gfpgan/weights
dl() { curl -sSL -C - -o "$2" "$1"; }
dl https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/mapping_00109-model.pth.tar checkpoints/mapping_00109-model.pth.tar
dl https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/mapping_00229-model.pth.tar checkpoints/mapping_00229-model.pth.tar
dl https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/SadTalker_V0.0.2_256.safetensors checkpoints/SadTalker_V0.0.2_256.safetensors
dl https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/SadTalker_V0.0.2_512.safetensors checkpoints/SadTalker_V0.0.2_512.safetensors
dl https://github.com/xinntao/facexlib/releases/download/v0.1.0/alignment_WFLW_4HG.pth gfpgan/weights/alignment_WFLW_4HG.pth
dl https://github.com/xinntao/facexlib/releases/download/v0.1.0/detection_Resnet50_Final.pth gfpgan/weights/detection_Resnet50_Final.pth
dl https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth gfpgan/weights/GFPGANv1.4.pth
dl https://github.com/xinntao/facexlib/releases/download/v0.2.2/parsing_parsenet.pth gfpgan/weights/parsing_parsenet.pth
# verify sizes against GitHub (proxy sometimes resets long downloads; -C - resumes)
for f in mapping_00109-model.pth.tar mapping_00229-model.pth.tar SadTalker_V0.0.2_256.safetensors SadTalker_V0.0.2_512.safetensors; do
  exp=$(curl -sIL "https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/$f" | grep -i content-length | tail -1 | tr -dc '0-9')
  got=$(stat -c %s checkpoints/$f); [ "$exp" = "$got" ] || { echo "size mismatch $f"; dl https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/$f checkpoints/$f; }
done
echo "SadTalker ready in $ROOT/repo (venv: $ROOT/venv311)"
