interface ITrainProps {
  color: string;
}

export function TrainPlatform({ color }: ITrainProps) {
  return (
    <svg
      width="61"
      height="35"
      viewBox="0 0 61 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.36719"
        y="15.441"
        width="50.921"
        height="9.63171"
        fill={color + '5f'}
        stroke={color}
      />
      <path
        d="M11.4614 31.0123L8.70312 27.392H28.3561L26.115 31.0123H11.4614Z"
        fill="#E8E6ED"
        stroke="#B1ADC2"
      />
      <path
        d="M41.1523 30.8304L38.394 27.2101H58.047L55.8059 30.8304H41.1523Z"
        fill="#E8E6ED"
        stroke="#B1ADC2"
      />
      <circle cx="14.4331" cy="31.4966" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <circle cx="44.124" cy="31.3146" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <circle cx="22.6262" cy="31.4966" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <circle cx="52.3171" cy="31.3146" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <rect
        x="21.604"
        y="31.0125"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="51.2949"
        y="30.8304"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="13.4106"
        y="31.0125"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="43.1016"
        y="30.8304"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="6.31201"
        y="25.1592"
        width="54.1947"
        height="3.18713"
        fill="#E8E6ED"
        stroke="#B1ADC2"
      />
      <rect x="0.90918" y="8.45264" width="15" height="11" fill="#E8E6ED" />
      <rect x="0.90918" y="8.45264" width="15" height="11" stroke="#B1ADC2" />
      <path
        d="M8.90918 11.2026V17.9526H7.92918V13.7026C7.92918 13.3493 7.95585 13.0593 8.00918 12.8326L7.97918 12.8126C7.91251 12.926 7.78918 13.0293 7.60918 13.1226L6.75918 13.5826V12.6026L7.99918 11.7326L8.16918 11.2026H8.90918Z"
        fill="#2F2E34"
      />
    </svg>
  );
}
