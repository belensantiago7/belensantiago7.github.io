class MyVisualizer extends AbstractVisualizer {
    constructor(analyzedAudio = []) {
      super();
      this.peaks = analyzedAudio.peaks;
    }

    startVisual() {
      this.updateVisual(/* peakIndex */ 0);
    }

    /**
     * TODO(week 4):
     * 1) Call drawShapes() to re-draw the visual at the current time index.
     *    -- If you want to "conditionally" draw (ex. only draw at a certain
     *    BEAT in the song), what do you need to add?
     * 2) Add the requestAnimationFrame loop which recursively calls
     * itself ("updateVisual") to repeatedly update the visual.
     */
    updateVisual(peakIndex) {
      const audioEl = document.querySelector('#audio');

      //
      if (peakIndex >= this.peaks.length) {
          return;
      }

      // TODO(you): "If"-statement here.
      // 1) Inspect the audioEl for time-related properties.
      // 2) Access the peak at peakIndex from the peaks array.
      // 3) Compare the time properties to peak properties (part 1 and 2 above):
      //    -- If the audio's current time is greater or equal to the time of
      //    the peak, draw visualizations (drawShapes).
let currentPeak = this.peaks[peakIndex]
      if (currentPeak.timeOfPeak<= audioEl.currentTime) {

        this.drawShapes();
        // Update the frame.
        requestAnimationFrame(() => {
          this.updateVisual(peakIndex + 1)
        });
      } else {
        // Otherwise, render the current (existing) visualization)
        requestAnimationFrame(() => {
          this.updateVisual(peakIndex)
        });
      }
    }

    /**
     * TODO(week 4): Draw the shapes you'd expect to see in your visual.
     */
    drawShapes() {
    //  this.drawSquare(generateRandomPoint(), 100);
      this.drawSquare(generateRandomPoint(), 100, generateRandomPoint());

        // Look at AbstractVisualizer class for functions.
    }
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const data = new Uint8Array(analyser.frequencyBinCount);

const spotifyApi = new SpotifyWebApi();

getToken().then((token) => {
  spotifyApi.setAccessToken(token);
});

/**
 * TODO(you): Add a 'click' event listener that starts the music.
 */
document.getElementById('playButton').addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const audioEl = document.querySelector('#audio');
  const queryInput = document.querySelector('#query')
  document.getElementById('playCircle').setAttribute("class", "playing");

  if(!audioEl.src) {
    // TODO(you): Use the spotifyApi to searchTracks for your input. Documentation can be found at:
    // https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.searchtracks
    spotifyApi.searchTracks(queryInput.value, {limit: 1})
      .then((results) => {
          // TODO(you): Access track from results to find a previewUrl.
        let track = results.tracks.items[0];
        let previewUrl = track.preview_url;
        if (previewUrl) {
          // Sets the HTML audio element source to the music.
          audioEl.src = previewUrl;

          requestAudio(previewUrl, (audio) => {
            let analyzedAudio = analyzeAudio(audio);
            // TODO(you): Create an instance of MyVisualizer using the
            let visualizer = new MyVisualizer(analyzedAudio);

            audioEl.play();

            // Use MyVisualizer's startVisual to start visualization.
            visualizer.startVisual();
          });
        } else {
          console.warn('This song does not have a preview');
          document.getElementById('playCircle').setAttribute("class", "");
        }
      })
      .catch((error) => {
        console.warn('Something went wrong');
        console.warn(error);
        document.getElementById('playCircle').setAttribute("class", "");
      });
  } else if (!audioEl.paused) {
    audioEl.pause();
		document.getElementById('playCircle').setAttribute("class", "");
  } else {
    audioEl.play();
		document.getElementById('playCircle').setAttribute("class", "playing");
  }
});
