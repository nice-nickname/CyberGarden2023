import { Form } from "react-bootstrap";

interface ISelectProps<TData> {
    mapper: (items: TData) => ISelectData,
    data: TData[]
    selected?: number,
    disabled?: boolean,
    onChange?: (value: number) => void
}

interface ISelectData {
  value: number;
  text: string;
}

function Select<TData>({ selected, disabled, data, mapper, onChange }: ISelectProps<TData>) {

    return (
        <Form.Select defaultValue={selected} disabled={disabled} onChange={el => {
          const valueAsNumber = Number(el.target.value)
          onChange?.call(null, valueAsNumber)
        }}>
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
