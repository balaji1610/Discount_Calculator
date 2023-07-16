export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const footerCard_Flex = {
    display: "flex",
    height: "15vh",
    backgroundColor: "#ffeb3b",
    justifyContent: "center",
    alignItems: "center",
  };

  const innerDiv = { backgroundColor: "#ffffff", padding: "4px" };

  const buildBy = {
    display: "flex",
    height: "9vh",
    backgroundColor: "#212121",
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  };

  const balaji = {
    color: "#ffeb3b",
    fontWeight: "bold",
  };

  const balajiLink = {
    color: "#ffeb3b",
    textDecoration: "none",
    fontSize: "17px",
  };
  return (
    <div>
      <div style={footerCard_Flex}>
        <div style={innerDiv}>
          <a href="https://github.com/balaji1610" target="_blank">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/github.png"
              alt="github"
            />
          </a>
        </div>
        &nbsp; &nbsp;
        <div style={innerDiv}>
          <a
            href="https://www.linkedin.com/in/balaji-m-05778a218/"
            target="_blank"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>

      <div style={buildBy}>
        <div>
          {" "}
          {currentYear}&nbsp; &copy; &nbsp;Developed by{" "}
          <span style={balaji}>
            <a
              href="https://balajicv.onrender.com"
              target="_blank"
              style={balajiLink}
            >
              BALAJI
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
