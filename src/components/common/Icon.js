import React from "react";
import PropTypes from "prop-types";

const icons = {
  google:
    "M29.813-1h-27.625c-1.753 0-3.188 1.434-3.188 3.188v27.625c0 1.753 1.434 3.188 3.188 3.188h27.625c1.753 0 3.188-1.434 3.188-3.188v-27.625c0-1.753-1.434-3.188-3.188-3.188zM16.252 28.75c-7.046 0-12.75-5.704-12.75-12.75s5.704-12.75 12.75-12.75c3.44 0 6.322 1.255 8.54 3.334l-3.46 3.334c-0.95-0.91-2.603-1.966-5.080-1.966-4.356 0-7.902 3.606-7.902 8.048s3.553 8.048 7.902 8.048c5.047 0 6.94-3.626 7.232-5.498h-7.232v-4.37h12.040c0.106 0.637 0.199 1.275 0.199 2.112 0.007 7.285-4.874 12.458-12.239 12.458z",
  facebook:
    "M30.235 0h-28.469c-0.975 0-1.765 0.791-1.765 1.765v28.469c0 0.976 0.791 1.765 1.765 1.765h15.325v-12.392h-4.172v-4.828h4.172v-3.567c0-4.132 2.525-6.38 6.212-6.38 1.767 0 3.285 0.129 3.728 0.188v4.32h-2.561c-2 0-2.389 0.961-2.389 2.361v3.081h4.779l-0.62 4.84h-4.159v12.376h8.153c0.977 0 1.767-0.789 1.767-1.765v-28.469c0-0.975-0.789-1.765-1.765-1.765z"
};

const Icon = ({ icon, width, height, style }) => (
  <svg width={width} height={height} style={style} viewBox="0 0 32 32">
    <path d={icons[icon]} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Icon;