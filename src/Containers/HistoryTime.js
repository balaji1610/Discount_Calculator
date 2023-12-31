const HistoryTime = {
  time: () => {
    const day = new Date();
    const options1 = {
      dateStyle: "long",
      timeStyle: "short",

      hour12: true,
    };

    const HistoryTime = new Intl.DateTimeFormat("en-GB", options1).format(day);

    return HistoryTime;
  },
};

export default HistoryTime;
