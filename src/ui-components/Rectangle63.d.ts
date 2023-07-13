/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Rectangle63OverridesProps = {
    Rectangle63?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 61"?: PrimitiveOverrideProps<ViewProps>;
    "\u4FDD\u5B58"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Rectangle63Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Rectangle63OverridesProps | undefined | null;
}>;
export default function Rectangle63(props: Rectangle63Props): React.ReactElement;
