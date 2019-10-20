import React from "react";

export default function HoookButton({ onCountChange = () => {} }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    onCountChange(count);
  });

  return (
    <>
      <p data-test="countState">Count: {count}</p>
      <button
        data-test="incrementBtn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ADD +1
      </button>
    </>
  );
}
