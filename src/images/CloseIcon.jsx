function CloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#121417"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M18 6L6 18M6 6l12 12"
        {...props}
      ></path>
    </svg>
  );
}

export default CloseIcon;
