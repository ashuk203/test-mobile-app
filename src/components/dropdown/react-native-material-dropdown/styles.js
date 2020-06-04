import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  accessory: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center"
  },

  triangle: {
    width: 8,
    height: 8,
    transform: [
      {
        translateY: -4
      },
      {
        rotate: "45deg"
      }
    ]
  },

  triangleContainer: {
    width: 12,
    height: 6,
    overflow: "hidden",
    alignItems: "center",

    backgroundColor: "transparent" /* XXX: Required */
  },

  overlay: {
    ...StyleSheet.absoluteFillObject
  },

  picker: {
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    borderRadius: 2,

    position: "absolute",

    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: "rgba(0, 0, 0, 1.0)",
        shadowOpacity: 0.54,
        shadowOffset: { width: 0, height: 2 }
      },

      android: {
        elevation: 2
      }
    })
  },

  item: {
    textAlign: "left"
  },

  scroll: {
    flex: 1,
    borderRadius: 2,
    margin: 10
  },

  scrollContainer: {
    // paddingVertical: 0
  },
  searchSection: {
    // flex: 1,
    flexDirection: "row-reverse"
    // justifyContent: "center",
    // alignItems: "center"
    // backgroundColor: "#fff"
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    // paddingTop: 10,
    // paddingRight: 10,
    // paddingBottom: 10,
    paddingLeft: 0
    // backgroundColor: "#fff",
    // color: "#424242"
  }
});
