type ButtonTypesProps = {
  onclick: () => void;
  label: string;
};

const ButtonTypes = ({ onclick, label }: ButtonTypesProps) => {
  return <button onClick={onclick}>{label}</button>;
};

export { ButtonTypes };
