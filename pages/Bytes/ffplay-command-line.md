---
title: Play an mp3 from command line with ffplay
date: 2026-02-05
tag: CLI, ffmpeg, audio
author: Corin
---

# Play an mp3 from command line with ffplay

When I'm trying to focus I often play white noise quietly in the background. For a long time I've used various YouTube videos of rain, white noise, etc., but wanted to cut out the reliance on a browser and the internet.

I now play an mp3 file using `ffplay`, which is part of `ffmpeg`. The command is:

```bash
ffplay -nodisp -autoexit -volume 10 path/to/song.mp3
```

The flags used are:

`-nodisp`: Suppresses the video/output window and spectrum visualizer

`-autoexit`: Quit automatically when playback finishes (otherwise `ffplay` will wait for more input)

`-volume 10`: Set software playback volume

And then the location of the audio file itself.