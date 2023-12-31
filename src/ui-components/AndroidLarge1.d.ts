/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AndroidLarge1OverridesProps = {
    AndroidLarge1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 65"?: PrimitiveOverrideProps<ViewProps>;
    "Android Large - 1/"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 62"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 61"?: PrimitiveOverrideProps<ViewProps>;
    "\u4FDD\u5B58"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 69"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 70"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 71"?: PrimitiveOverrideProps<ViewProps>;
    "\u5B9F\u7E3E\u7BA1\u7406"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AndroidLarge1Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: AndroidLarge1OverridesProps | undefined | null;
}>;
export default function AndroidLarge1(props: AndroidLarge1Props): React.ReactElement;
