import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    width: "80%",
    height: "60%",
    borderRadius: 30,
    padding: 15,
    elevation: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },

  title: {
    fontWeight: 800,
    fontSize: 30,
    color: "white",
  },

  boxInternal: {
    alignSelf: "center",
    marginTop: 20,
    padding: 5,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
    paddingTop: 12,
  },

  viewInput: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 45,
    height: 40,
    textAlign: "center",
    alignItems: "center",
    fontSize: 14,
    color: "#000",
    padding: 10,
  },

  iconInput: {
    marginLeft: 15,
    backgroundColor: "#ffffff",
    borderRadius: 45,
    height: 40,
    width: 40,
    padding: 8,
    elevation: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },

  city: {
    fontSize: 28,
    fontWeight: 600,
    marginTop: 15,
  },

  datePreview: {
    color: "#a8a8a8",
    fontSize: 15,
  },

  temp: {
    fontSize: 35,
    fontWeight: 600,
  },

  description: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 15,
  },

  info: {
    fontSize: 13,
    marginTop: 8,
  },

  footer: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "flex-end",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
    bottom: 15,
  },

  footerText: {
    color: "#dddddd",
    fontSize: 15,
  },
});
