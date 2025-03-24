import { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <p>Your name is: {name || "Anonymous"}</p>
    </div>
  );
};

export { NameForm };
