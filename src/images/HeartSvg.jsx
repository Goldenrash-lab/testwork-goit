function HeartSvg({ props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        d="M15.63 3.458a4.125 4.125 0 00-5.835 0L9 4.253l-.795-.796A4.126 4.126 0 002.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.127 4.127 0 000-5.835z"
      ></path>
    </svg>
  );
}

export default HeartSvg;
