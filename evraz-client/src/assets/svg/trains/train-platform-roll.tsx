interface ITrainProps {
  color?: string;
  isSick: boolean;
}

export function TrainPlatformRoll({ isSick, color }: ITrainProps) {

  const defaultStroke = isSick ? '#E32112' : '#B1ADC2'
  const defaultColor = isSick ? '#EB5835' : '#E8E6ED'

  const ownerColor = (isSick || !color) ? defaultColor : color + '8f'
  const ownerStroke = (isSick || !color) ? defaultStroke : color

  return (
    <svg
      width="61"
      height="36"
      viewBox="0 0 61 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.36719"
        y="15.4829"
        width="50.921"
        height="9.63171"
        fill={ownerColor}
        stroke={ownerStroke}
      />
      <path
        d="M11.4614 31.0542L8.70312 27.4338H28.3561L26.115 31.0542H11.4614Z"
        fill={defaultColor}
        stroke={defaultStroke}
      />
      <path
        d="M41.1523 30.8723L38.394 27.252H58.047L55.8059 30.8723H41.1523Z"
        fill={defaultColor}
        stroke={defaultStroke}
      />
      <circle cx="14.4331" cy="31.5385" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <circle cx="44.124" cy="31.3564" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <circle cx="22.6265" cy="31.5385" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <circle cx="52.3169" cy="31.3564" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <rect
        x="21.604"
        y="31.0543"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="51.2949"
        y="30.8723"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="13.4106"
        y="31.0543"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="43.1016"
        y="30.8723"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="6.31201"
        y="25.201"
        width="54.1947"
        height="3.18713"
        fill={defaultColor}
        stroke={defaultStroke}
      />
      <circle cx="18.4331" cy="24.5385" r="3" fill={ownerStroke} stroke={ownerStroke} />
      <rect
        x="17.4106"
        y="24.0543"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <circle cx="33.124" cy="24.3564" r="3" fill={ownerStroke} stroke={ownerStroke} />
      <rect
        x="32.1016"
        y="23.8723"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <circle cx="48.3169" cy="24.3564" r="3" fill={ownerStroke} stroke={ownerStroke} />
      <rect
        x="47.2949"
        y="23.8723"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect x="0.90918" y="8.49451" width="15" height="11" fill={defaultColor} />
      <rect x="0.90918" y="8.49451" width="15" height="11" stroke={defaultStroke} />
      <path
        d="M8.90918 11.2445V17.9945H7.92918V13.7445C7.92918 13.3912 7.95585 13.1012 8.00918 12.8745L7.97918 12.8545C7.91251 12.9678 7.78918 13.0712 7.60918 13.1645L6.75918 13.6245V12.6445L7.99918 11.7745L8.16918 11.2445H8.90918Z"
        fill="#2F2E34"
      />
    </svg>
  );
}
