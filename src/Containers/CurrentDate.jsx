export default function CurrentDate() {
  const date = new Date();

  const CurrentData = `${date.getDate()}`;

  const options1 = {
    month: "long",
  };
  const CurrentMonth = new Intl.DateTimeFormat("en-GB", options1).format(date);
  const CurrentYear = `${date.getFullYear()}`;
  return (
    <div>
      <h2 style={{ color: "#ffffff" }}>
        {CurrentData}
        <sup>th</sup>,&nbsp;
        {CurrentMonth},&nbsp;{CurrentYear}
      </h2>
    </div>
  );
}
