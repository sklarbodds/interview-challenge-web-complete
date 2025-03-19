import { JSXElementConstructor, ReactElement } from "react";

export interface GenericProps {
    children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}
