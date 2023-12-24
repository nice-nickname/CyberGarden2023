interface ITrainProps {
  color?: string;
  isSick: boolean
}

export function TrainTank({ isSick, color }: ITrainProps) {
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
      <path
        d="M11.4546 31.0962L8.69629 27.4758H28.3493L26.1081 31.0962H11.4546Z"
        fill={defaultColor}
        stroke={defaultStroke}
      />
      <path
        d="M41.1455 30.9143L38.3872 27.2939H58.0402L55.7991 30.9143H41.1455Z"
        fill={defaultColor}
        stroke={defaultStroke}
      />
      <circle cx="14.4263" cy="31.5804" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <circle cx="44.1172" cy="31.3984" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <circle cx="22.6194" cy="31.5804" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <circle cx="52.3103" cy="31.3984" r="3" fill={defaultStroke} stroke={defaultStroke} />
      <rect
        x="21.5972"
        y="31.0963"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="51.2881"
        y="30.9143"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="13.4038"
        y="31.0963"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="43.0947"
        y="30.9143"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="6.30518"
        y="25.243"
        width="54.1947"
        height="3.18713"
        fill={defaultColor}
        stroke={defaultStroke}
      />
      <rect
        x="27.0884"
        y="4.1051"
        width="12.5083"
        height="2.50012"
        fill={ownerStroke}
        stroke={ownerStroke}
      />
      <rect
        x="16.5161"
        y="4.91553"
        width="3.57275"
        height="2.1897"
        fill={ownerStroke}
      />
      <rect
        x="46.5952"
        y="4.68591"
        width="3.57275"
        height="2.1897"
        fill={ownerStroke}
      />
      <rect
        x="8.2583"
        y="6.51038"
        width="50.2886"
        height="18.7327"
        rx="4.5"
        fill={ownerColor}
        stroke={ownerStroke}
      />
      <rect x="0.902344" y="8.5365" width="15" height="11" fill={defaultColor} />
      <rect x="0.902344" y="8.5365" width="15" height="11" stroke={defaultStroke} />
      <path
        d="M8.90234 11.2865V18.0365H7.92234V13.7865C7.92234 13.4332 7.94901 13.1432 8.00234 12.9165L7.97234 12.8965C7.90568 13.0098 7.78234 13.1132 7.60234 13.2065L6.75234 13.6665V12.6865L7.99234 11.8165L8.16234 11.2865H8.90234Z"
        fill="#2F2E34"
      />
    </svg>
  );
}
