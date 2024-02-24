import { Metadata } from "next";

export const setTitle = (title: string): Metadata => {
    return {
        title: `Si Insting/${title}`,
    };
};
