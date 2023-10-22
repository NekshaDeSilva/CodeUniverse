class VideoWithBackground {
    video;
    canvas;
    step;
    ctx;
  
    constructor(videoId, canvasId) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  
      if (!mediaQuery.matches) {
        this.video = document.getElementById(videoId);
        this.canvas = document.getElementById(canvasId);
  
        window.addEventListener("load", this.init, false);
        window.addEventListener("unload", this.cleanup, false);
      }
    }
  
    draw = () => {
      this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    };
  
    drawLoop = () => {
      this.draw();
      this.step = window.requestAnimationFrame(this.drawLoop);
    };
  
    drawPause = () => {
      window.cancelAnimationFrame(this.step);
      this.step = undefined;
    };
  
    init = () => {
      this.ctx = this.canvas.getContext("2d");
      this.ctx.filter = "blur(1px)";
  
      this.video.addEventListener("loadeddata", this.draw, false);
      this.video.addEventListener("seeked", this.draw, false);
      this.video.addEventListener("play", this.drawLoop, false);
      this.video.addEventListener("pause", this.drawPause, false);
      this.video.addEventListener("ended", this.drawPause, false);
    };
  
    cleanup = () => {
      this.video.removeEventListener("loadeddata", this.draw);
      this.video.removeEventListener("seeked", this.draw);
      this.video.removeEventListener("play", this.drawLoop);
      this.video.removeEventListener("pause", this.drawPause);
      this.video.removeEventListener("ended", this.drawPause);
    };
  }
  
  const el = new VideoWithBackground("js-video", "js-canvas");