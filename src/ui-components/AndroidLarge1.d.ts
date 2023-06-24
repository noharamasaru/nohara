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
    "\u5B9F\u7E3E\u7BA1\u7406"?: PrimitiveOverrideProps<TextProps>;
    "\u30E6\u30FC\u30B6\u30FC\u540D"?: PrimitiveOverrideProps<TextProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type AndroidLarge1Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    プロパティ1?: "\u30C7\u30D5\u30A9\u30EB\u30C8";
} & {
    overrides?: AndroidLarge1OverridesProps | undefined | null;
}>;
export default function AndroidLarge1(props: AndroidLarge1Props): React.ReactElement;
