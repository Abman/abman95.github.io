import { elements } from "./components/elements.js";
import {
    showFileListDialog,
    closeFileListDialog,
    handleClickOutsideFileListDialog,
} from "./components/dialogHandlers.js";
import {
    handleSliderInput,
    playNextSong,
    playPreviousSong,
    fastForwardAudio,
    rewindAudio,
    togglePlayPause,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMP3ImageTouchStart,
    handleMP3ImageSwipe,
} from "./components/audioControls.js";
import {
    toggleAutoPlay,
    toggleRandomPlay,
    handleFileInputChange,
} from "./services/playlistManagement.js";
import { handlePreviousSongClick } from "./components/uiUpdates.js";

elements.fileListButton.addEventListener("click", showFileListDialog);
elements.dialogCloseButton.addEventListener("click", closeFileListDialog);
document.addEventListener("click", handleClickOutsideFileListDialog);
elements.slider.addEventListener("input", handleSliderInput);
elements.slider.addEventListener("touchstart", handleTouchStart);
elements.slider.addEventListener("touchmove", handleTouchMove);
elements.slider.addEventListener("touchend", handleTouchEnd);
elements.nextSongButton.addEventListener("click", playNextSong);
elements.previousSongButton.addEventListener("click", playPreviousSong);
elements.previousSongButton.addEventListener("click", handlePreviousSongClick);
elements.autoPlayButton.addEventListener("click", toggleAutoPlay);
elements.randomSongButton.addEventListener("click", toggleRandomPlay);
elements.fileInput.addEventListener("change", handleFileInputChange);
elements.fileInput.addEventListener("click", () => togglePlayPause(false));
elements.fastForwardButton.addEventListener("click", fastForwardAudio);
elements.rewindButton.addEventListener("click", rewindAudio);
elements.pausePlayButton.addEventListener("click", togglePlayPause);
document.addEventListener("click", handleTouchStart);
elements.touchSongSlider.addEventListener("touchstart", (e) =>
    handleMP3ImageTouchStart(e),
);
elements.touchSongSlider.addEventListener("touchend", (e) =>
    handleMP3ImageSwipe(e),
);
