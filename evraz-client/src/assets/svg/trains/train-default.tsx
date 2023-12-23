interface ITrainProps {
  color?: string;
}

export function TrainDefault({ color }: ITrainProps) {
  return (
    <svg
      width="62"
      height="35"
      viewBox="0 0 62 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.58496"
        y="4.83264"
        width="50.921"
        height="20.2404"
        fill={color + '5f'}
        stroke={color}
      />
      <path
        d="M11.679 31.0126L8.92065 27.3922H28.5736L26.3325 31.0126H11.679Z"
        fill="#E8E6ED"
        stroke="#B1ADC2"
      />
      <path
        d="M41.3699 30.8307L38.6116 27.2103H58.2645L56.0234 30.8307H41.3699Z"
        fill="#E8E6ED"
        stroke="#B1ADC2"
      />
      <circle cx="14.6504" cy="31.4968" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <circle cx="44.3413" cy="31.3148" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <circle cx="22.8438" cy="31.4968" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <circle cx="52.5347" cy="31.3148" r="3" fill="#B1ADC2" stroke="#B1ADC2" />
      <rect
        x="21.8215"
        y="31.0127"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="51.5125"
        y="30.8307"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="13.6284"
        y="31.0127"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="43.3193"
        y="30.8307"
        width="2.04443"
        height="0.968384"
        fill="white"
      />
      <rect
        x="6.52954"
        y="25.1594"
        width="54.1947"
        height="3.18713"
        fill="#E8E6ED"
        stroke="#B1ADC2"
      />
      <rect x="1.32153" y="9.44128" width="15" height="11" fill="#E8E6ED" />
      <rect x="1.32153" y="9.44128" width="15" height="11" stroke="#B1ADC2" />
      <path
        d="M9.32153 12.1913V18.9413H8.34153V14.6913C8.34153 14.338 8.3682 14.048 8.42153 13.8213L8.39153 13.8013C8.32487 13.9146 8.20153 14.018 8.02153 14.1113L7.17153 14.5713V13.5913L8.41153 12.7213L8.58153 12.1913H9.32153Z"
        fill="#2F2E34"
      />
    </svg>
  );
}
