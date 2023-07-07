import Icon from "../primitives/Icon/Icon";
import PropTypes from "prop-types";

function Logo({ label }) {
  return (
    <Icon label={label}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 72 72"
      >
        <path
          d="M0 0h52c11.046 0 20 8.954 20 20v32c0 11.046-8.954 20-20 20H0V0z"
          fill="#7c5dfa"
        />
        <mask id="A">
          <path
            d="M0 0h52c11.046 0 20 8.954 20 20v32c0 11.046-8.954 20-20 20H0V0z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#A)">
          <path
            d="M72 36.35H20c-11.046 0-20 8.954-20 20v32c0 11.046 8.954 20 20 20h52v-72z"
            fill="#9277ff"
          />
        </g>
        <path
          d="M29.486 23L36 35.899 42.514 23C46.965 25.309 50 29.91 50 35.21 50 42.826 43.732 49 36 49s-14-6.174-14-13.79c0-5.299 3.035-9.901 7.486-12.21z"
          fill="#fff"
        />
      </svg>
    </Icon>
  );
}

Logo.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Logo;
