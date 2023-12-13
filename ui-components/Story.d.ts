/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoryOverridesProps = {
    Story?: PrimitiveOverrideProps<FlexProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    ReadTime?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StoryProps = React.PropsWithChildren<Partial<FlexProps> & {
    postModel?: any;
} & {
    overrides?: StoryOverridesProps | undefined | null;
}>;
export default function Story(props: StoryProps): React.ReactElement;
