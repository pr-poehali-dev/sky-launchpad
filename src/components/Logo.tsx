export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Paw icon */}
      <circle cx="12" cy="10" r="3.5" fill="white" />
      <circle cx="22" cy="7" r="3" fill="white" />
      <circle cx="31" cy="10" r="3.5" fill="white" />
      <ellipse cx="21.5" cy="20" rx="9" ry="11" fill="white" />
      <ellipse cx="21.5" cy="20" rx="5.5" ry="7" fill="#0a0a0a" />

      {/* PETS DELIVERY */}
      <text
        x="46"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        letterSpacing="2"
        fill="white"
      >
        <tspan fontWeight="700">PETS</tspan>
        <tspan fontWeight="300" opacity="0.6"> DELIVERY</tspan>
      </text>
    </svg>
  );
};