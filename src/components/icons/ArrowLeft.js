export const ArrowLeft = ({color="black", className }) => {
    return (
      <svg
        className={`${className}`}
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.57 5.93L3.5 12L9.57 18.07"
          stroke="#292D32"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          fill={color}
        />
        <path
          d="M20.5 12H3.67"
          stroke="#292D32"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          fill={color}
        />
        <g opacity="0" />
      </svg>
    );
  };