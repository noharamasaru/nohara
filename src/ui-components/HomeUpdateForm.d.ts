/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HomeUpdateFormInputValues = {
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
export declare type HomeUpdateFormValidationValues = {
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
export declare type HomeUpdateFormOverridesProps = {
    HomeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type HomeUpdateFormProps = React.PropsWithChildren<{
    overrides?: HomeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    home?: Home;
    onSubmit?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onSuccess?: (fields: HomeUpdateFormInputValues) => void;
    onError?: (fields: HomeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HomeUpdateFormInputValues) => HomeUpdateFormInputValues;
    onValidate?: HomeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HomeUpdateForm(props: HomeUpdateFormProps): React.ReactElement;
