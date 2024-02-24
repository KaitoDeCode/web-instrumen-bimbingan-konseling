import { Metadata } from "next";

export const metadata = (title: string): Metadata => {
    return {
        title: `Si Insting/${title}`,
    };
};
