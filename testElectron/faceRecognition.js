const video = document.getElementById("video-input");
const canvas = document.getElementById("canvas-output");

(async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
  let cap = new cv.VideoCapture(video);

  video.srcObject = stream;
  video.play();
})();
