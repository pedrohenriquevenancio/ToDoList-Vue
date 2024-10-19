import { reactive } from "vue";

type AcceptedThemes = "light" | "dark" | "barbie" | "jake";

interface Theme {
    type: AcceptedThemes;
}

export const theme = reactive<Theme>({
    type: "light",
})

export const setTheme = (type: AcceptedThemes) => theme.type = type;

export const getBackgroundColor = () => {
    switch (theme.type) {
        case "light":
            return "#f0f0f0";
        case "dark":
            return "#292F36";
        case "barbie":
            return "#FC60A8";
        case "jake":
            return "#ffcc99";
    }
}

export const getTextColor = () => {
    switch (theme.type) {
        case "light":
            return "#000";
        case "dark":
            return "#fff";
        case "barbie":
            return "#540D6E";
        case "jake":
            return "#172121";
    }
}

export const getButtonColor = () => {
    switch (theme.type) {
        case "light":
            return "text-[#f0f0f0]";
        case "dark":
            return "text-[#292F36]";
        case "barbie":
            return "text-[#FC60A8]";
        case "jake":
            return "text-[#ffcc99]";
    }
}

export const getNavBackgroundColor = () => {
    switch (theme.type) {
        case "light":
            return "#D5DFE5";
        case "dark":
            return "#000009";
        case "barbie":
            return "#F0F6F6";
        case "jake":
            return "#EDB458";
    }
}

export const getSideBarBackgroundColor = () => {
    switch (theme.type) {
        case "light":
            return "#D8DDDE";
        case "dark":
            return "#121420";
        case "barbie":
            return "#D9D9D9";
        case "jake":
            return "#172121";
    }
}