export default {
  cart: {
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
    borderRadius: "5px",
    padding: "0 10px",
    position: "relative",
    transition:".2s all ease-in-out",
  },
  info: {
    padding: "10px",
    textAlign: "left",
    marginRight: "10px",
  },
  buttonText: {
    fontSize: "16px",
    marginRight: "10px",
  },
  buttonButton: {
    padding: "14px 18px",
  },
  amount: {
    color:"#666",
    fontSize: "13px",
  },
  expand: {
    position: "absolute",
    top: "100%",
    right: "0",
    background: "rgba(0, 0, 0, 0.9)",
    marginTop:"20px",
    borderRadius: "4px",
    padding:"20px",
    minWidth: "300px",
    width: "auto",
    whiteSpace: "nowrap",
    color: "#fff",
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid #eee",
    position: "absolute",
    top: "-5px",
    right: "15px",
  },
  items: {
    maxHeight:"500px",
    overflowY: "auto",
  },
  item: {
    textAlign: "left",
    marginBottom: "11px",
    paddingBottom: "11px",
    borderBottom: "1px solid #eee",
  },
  title: {
    marginBottom: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    color: "#fff",
  },
  titleText: {
    fontSize: "18px",
  },
  bar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountChanger: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px",
  },
  current: {
    margin: "0 10px",
  },
  total: {
    fontWeight: "bold",
    fontSize:"17px",
  },
  totalButton: {
    margin: "10px 0",
    textAlign: "left",
    fontSize:"18px",
    fontWeight: "bold",
  },
  removeButton:  {
    cursor: "pointer",
    float: "right",
  },
  msg: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
  }
}