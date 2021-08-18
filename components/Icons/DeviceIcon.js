const DeviceIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={50}
    height={50}
    {...props}
  >
    <path fill="#546E7A" d="M6 8h36v26H6z" />
    <path fill="#BBDEFB" d="M8 10h32v21H8z" />
    <path
      fill="#455A64"
      d="M21 34h6v3h-6zm12 3H15c-2 0-2 2-2 2v1h22v-1s0-2-2-2z"
    />
  </svg>
)

export default DeviceIcon
