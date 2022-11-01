# Encoding with FFMPEG

FFMPEG is a command line tool that allows you to encode video & images to different formats.  You can also make GIFs from videos!

To install using Homebrew:

```bash
brew install ffmpeg --with-libvpx --with-libvorbis --with-fdk-aac --with-opus 
```

Then to encode a video file, pulled from [here](https://gist.github.com/Vestride/278e13915894821e1d6f), use:

```bash
ffmpeg -i input.mov -vcodec h264 -acodec aac -strict -2 output.mp4
```

To change the resolution, `scale=640:480` is the new aspect ratio:

```bash
ffmpeg -i video_1920.mp4 -vf scale=640:480 video_640.mp4 -hide_banner
```

Or max supported by Alexa:

```bash
ffmpeg -i video_1920.mp4 -vf scale=1280:720 video_640.mp4 -hide_banner
```

To pull the audio off of a video for Alexa devices without screens:

```
ffmpeg -i video.mp4 -f mp3 -ab 192000 -vn music.mp3
```

## Supported Formats

* Alexa Audio Formats | [link](https://developer.amazon.com/en-US/docs/alexa/custom-skills/audioplayer-interface-reference.html#audio-stream-requirements)

* Alexa Video Formats | [link](https://developer.amazon.com/docs/custom-skills/videoapp-interface-reference.html#supported-video-formats-and-resolutions)
