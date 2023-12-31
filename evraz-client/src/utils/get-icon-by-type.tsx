import {
  TrainDefault,
  TrainHopper,
  TrainPlatformRoll,
  TrainTank,
} from "../assets/svg/trains";

export const getTrainIconByType = (type: string, isSick: boolean, color?: string) => {
  switch (type) {
    case "RollPlatform":
      return <TrainPlatformRoll isSick color={color} />;
    case "HalfCarriage":
      return <TrainDefault color={color} />;
    case "Hopper":
      return <TrainHopper color={color} />;
    case "Tank":
      return <TrainTank color={color} />;
    default:
      return <TrainDefault color={color} />;
  }
};
