import React, { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
  type: string;
}

const Button: React.FC<IProps> = ({ children, type }) => {
  const [outlined, setOutlined] = useState(false);
  const [contained, setContained] = useState(false);

  useEffect(() => {
    setOutlined(type === "outlined");
    setContained(type === "contained");
  }, [type]);
  return (
    <>
      <button
        className={
          outlined
            ? "my-btn outlined"
            : contained
            ? "my-btn contained"
            : "my-btn"
        }
      >
        {children}
      </button>
    </>
  );
};

export default Button;
