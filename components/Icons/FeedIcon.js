const FeedIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width={40}
    height={40}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.5 26A3.5 3.5 0 1 0 10.5 33A3.5 3.5 0 1 0 10.5 26Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="M7 18c8.284 0 15 6.716 15 15M7 9c13.255 0 24 10.745 24 24"
    />
  </svg>
)

export default FeedIcon
