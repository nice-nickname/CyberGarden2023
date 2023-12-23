import { Form } from "react-bootstrap";

interface ISelectProps<TData> {
  mapper: (items: TData) => ISelectData;
  data: TData[];
  selected?: number;
  disabled?: boolean;
}

interface ISelectData {
  value: number;
  text: string;
}

function Select<TData>({
  selected,
  disabled,
  data,
  mapper,
}: ISelectProps<TData>) {
  return (
    <Form.Select defaultValue={selected} disabled={disabled}>
      <option></option>

      {data.map(mapper).map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </Form.Select>
  );
}

export { Select };
