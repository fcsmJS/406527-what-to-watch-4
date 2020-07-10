
import React from "react";
import PropTypes from "prop-types";


const FullVideoPlayer = (props) => {
  const {
    title,
    progress,
    duration,
    time,
    onExitClick,
    playbackToggle,
    isPlaying,
    onFullScreenClick,
    children
  } = props;


  return (
    <div className="player">
      {children}
      <button
        type="button"
        className="player__exit"
        onClick = {onExitClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max={duration}>
            </progress>
            <div
              className="player__toggler"
              style={{left: ((progress * 100) / duration) + `%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={playbackToggle}
          >
            {
              isPlaying ?
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"/>
                  </svg>
                  <span>Pause</span>
                </>
                :
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </>
            }
          </button>

          <div className="player__name">{title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

FullVideoPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  onExitClick: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  playbackToggle: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default FullVideoPlayer;
