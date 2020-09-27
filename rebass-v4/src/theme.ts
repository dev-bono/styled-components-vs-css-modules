export const COLORS = {
  transparent: "transparent",
  white: "#ffffff",
  black1: "#000000",
  black2: "#333333",
  grey1: "#555555",
  grey2: "#777777",
  grey3: "#999999",
  grey4: "#bbbbbb",
  grey5: "#dddddd",
  grey6: "#444444",
  lightGrey1: "#d8d8d8",
  lightGrey2: "#e8e8e8",
  lightGrey3: "#f2f2f2",
  lightGrey4: "#f6f6f6",
  lightGrey5: "#f9f9f9",
  yellow1: "#eed201",
  yellow2: "#efd101",
  yellow3: "#ffb921",
  yellow4: "#fff1c4",
  yellow5: "#eed811",
  red1: "#ff2f2f",
  red2: "#ff4e4e",
  red3: "#da5333",
  red4: "#f86071",
  blue1: "#1c68ff",
  blue2: "#4167b2",
  blue3: "#33b",
  pink: "lightpink",
  green: "lightgreen",
  orange: "orange",
  lightYellow: "lightyellow",
};
export type ColorVariant = keyof typeof COLORS;

export type ButtonVariant =
  | "transparent1_black1"
  | "transparent2_lightGrey2"
  | "transparent_yellow1"
  | "transparent_yellow2"
  | "black1_white"
  | "black1_red2"
  | "black1_orange"
  | "lightGrey1_black2"
  | "lightGrey3_blue3"
  | "lightGrey3_white"
  | "white_lightGrey1"
  | "white_black2"
  | "white_lightGrey2"
  | "red4_blue2"
  | "yellow1_blue2"
  | "yellow1_black2"
  | "yellow1_lightGrey3"
  | "yellow1_green"
  | "yellow3_black2"
  | "pink_lightGrey04"
  | "green_transparent"
  | "red3_transparent"
  | "red4_transparent"
  | "pink_green"
  | "blue1_ligthGrey2"
  | "blue2_ligthGrey1"
  | "blue3_ligthGrey3"
  | "blue4_ligthGrey3";

interface IButtonProps {
  backgroundColor: string;
  border: string;
  borderRadius: string;
}

const BUTTONS: { [key in ButtonVariant]: IButtonProps } = {
  transparent1_black1: {
    backgroundColor: "transparent",
    border: `solid 1px ${COLORS.black1}`,
    borderRadius: "4px",
  },
  transparent2_lightGrey2: {
    backgroundColor: "transparent",
    border: `solid 1px ${COLORS.lightGrey2}`,
    borderRadius: "5px",
  },
  transparent_yellow1: {
    backgroundColor: "transparent",
    border: `solid 1px ${COLORS.yellow1}`,
    borderRadius: "5px",
  },
  transparent_yellow2: {
    backgroundColor: "transparent",
    border: `solid 1px ${COLORS.yellow2}`,
    borderRadius: "10px",
  },
  black1_white: {
    backgroundColor: "black1",
    border: `solid 1px ${COLORS.white}`,
    borderRadius: "2px",
  },
  black1_red2: {
    backgroundColor: "black1",
    border: `solid 1px ${COLORS.red2}`,
    borderRadius: "8px",
  },
  black1_orange: {
    backgroundColor: "black1",
    border: `solid 1px ${COLORS.orange}`,
    borderRadius: "24px",
  },
  lightGrey1_black2: {
    backgroundColor: "lightGrey1",
    border: `solid 1px ${COLORS.black2}`,
    borderRadius: "3px",
  },
  lightGrey3_blue3: {
    backgroundColor: "lightGrey3",
    border: `solid 1px ${COLORS.blue3}`,
    borderRadius: "4px",
  },
  lightGrey3_white: {
    backgroundColor: "lightGrey3",
    border: `solid 1px ${COLORS.white}`,
    borderRadius: "5px",
  },
  white_lightGrey1: {
    backgroundColor: "white",
    border: `solid 1px ${COLORS.lightGrey2}`,
    borderRadius: "5px",
  },
  white_black2: {
    backgroundColor: "white",
    border: `solid 1px ${COLORS.black2}`,
    borderRadius: "5px",
  },
  white_lightGrey2: {
    backgroundColor: "white",
    border: `solid 1px ${COLORS.lightGrey2}`,
    borderRadius: "6px",
  },
  red4_blue2: {
    backgroundColor: "red4",
    border: `solid 1px ${COLORS.blue2}`,
    borderRadius: "8px",
  },
  yellow1_blue2: {
    backgroundColor: "yellow1",
    border: `solid 1px ${COLORS.blue2}`,
    borderRadius: "6px",
  },
  yellow1_black2: {
    backgroundColor: "yellow1",
    border: `solid 1px ${COLORS.black2}`,
    borderRadius: "4px",
  },
  yellow1_lightGrey3: {
    backgroundColor: "yellow1",
    border: `solid 1px ${COLORS.lightGrey3}`,
    borderRadius: "12px",
  },
  yellow1_green: {
    backgroundColor: "yellow1",
    border: `solid 1px ${COLORS.green}`,
    borderRadius: "3px",
  },
  yellow3_black2: {
    backgroundColor: "yellow3",
    border: `solid 1px ${COLORS.black2}`,
    borderRadius: "3px",
  },
  pink_lightGrey04: {
    backgroundColor: "pink",
    border: `solid 1px ${COLORS.lightGrey4}`,
    borderRadius: "4px",
  },
  green_transparent: {
    backgroundColor: "green",
    border: `solid 1px ${COLORS.transparent}`,
    borderRadius: "5px",
  },
  red3_transparent: {
    backgroundColor: "red3",
    border: `solid 1px ${COLORS.transparent}`,
    borderRadius: "2px",
  },
  red4_transparent: {
    backgroundColor: "red4",
    border: `solid 1px ${COLORS.transparent}`,
    borderRadius: "4px",
  },
  pink_green: {
    backgroundColor: "pink",
    border: `solid 1px ${COLORS.green}`,
    borderRadius: "4px",
  },
  blue1_ligthGrey2: {
    backgroundColor: "blue1",
    border: `solid 1px ${COLORS.lightGrey2}`,
    borderRadius: "8px",
  },
  blue2_ligthGrey1: {
    backgroundColor: "blue2",
    border: `solid 1px ${COLORS.lightGrey1}`,
    borderRadius: "6px",
  },
  blue3_ligthGrey3: {
    backgroundColor: "blue3",
    border: `solid 1px ${COLORS.lightGrey3}`,
    borderRadius: "2px",
  },
  blue4_ligthGrey3: {
    backgroundColor: "blue4",
    border: `solid 1px ${COLORS.lightGrey3}`,
    borderRadius: "8px",
  },
};

const theme = { colors: COLORS, buttons: BUTTONS };

export default theme;
