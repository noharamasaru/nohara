/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm12InputValues = {
    name?: string;
    pass?: string;
    auMNP?: number;
    aucellup?: number;
    aushinki?: number;
    aukihen?: number;
    uqMNP?: number;
    uqrikoup?: number;
    uqshinki?: number;
    uqkihen?: number;
    cyura?: number;
    yuima?: number;
    jigin?: number;
    credit?: number;
    Chrome?: number;
};
export declare type NewForm12ValidationValues = {
    name?: ValidationFunction<string>;
    pass?: ValidationFunction<string>;
    auMNP?: ValidationFunction<number>;
    aucellup?: ValidationFunction<number>;
    aushinki?: ValidationFunction<number>;
    aukihen?: ValidationFunction<number>;
    uqMNP?: ValidationFunction<number>;
    uqrikoup?: ValidationFunction<number>;
    uqshinki?: ValidationFunction<number>;
    uqkihen?: ValidationFunction<number>;
    cyura?: ValidationFunction<number>;
    yuima?: ValidationFunction<number>;
    jigin?: ValidationFunction<number>;
    credit?: ValidationFunction<number>;
    Chrome?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm12OverridesProps = {
    NewForm12Grid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pass?: PrimitiveOverrideProps<TextFieldProps>;
    auMNP?: PrimitiveOverrideProps<TextFieldProps>;
    aucellup?: PrimitiveOverrideProps<TextFieldProps>;
    aushinki?: PrimitiveOverrideProps<TextFieldProps>;
    aukihen?: PrimitiveOverrideProps<TextFieldProps>;
    uqMNP?: PrimitiveOverrideProps<TextFieldProps>;
    uqrikoup?: PrimitiveOverrideProps<TextFieldProps>;
    uqshinki?: PrimitiveOverrideProps<TextFieldProps>;
    uqkihen?: PrimitiveOverrideProps<TextFieldProps>;
    cyura?: PrimitiveOverrideProps<TextFieldProps>;
    yuima?: PrimitiveOverrideProps<TextFieldProps>;
    jigin?: PrimitiveOverrideProps<TextFieldProps>;
    credit?: PrimitiveOverrideProps<TextFieldProps>;
    Chrome?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm12Props = React.PropsWithChildren<{
    overrides?: NewForm12OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm12InputValues) => NewForm12InputValues;
    onSuccess?: (fields: NewForm12InputValues) => void;
    onError?: (fields: NewForm12InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm12InputValues) => NewForm12InputValues;
    onValidate?: NewForm12ValidationValues;
} & React.CSSProperties>;
export default function NewForm12(props: NewForm12Props): React.ReactElement;
