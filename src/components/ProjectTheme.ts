import type { ThemeConfig } from "antd";

// The page background is a fixed dark color (globals.css) regardless of OS color
// scheme, so bare AntD Typography sitting directly on it needs a forced light
// theme — same pattern as CertificateTitle.tsx. Only apply this where content
// isn't already sitting on a Card's own light surface (Statistic/Card keep the
// default dark-on-light text). Tag keeps its own light chip surface even inside
// this wrap, so its text color is pinned back to AntD's normal dark default.
export const lightOnDarkTheme: ThemeConfig = {
    token: { colorText: "white", colorTextSecondary: "#a1a1aa" },
    components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

export const projectAccentColors = {
    before: "#ffcc00",
    after: "#16abff",
    effort: "#54d6ff",
    success: "#0071ff",
};
