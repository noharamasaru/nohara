/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Jisseki(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="396px"
      height="79px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Jisseki")}
      {...rest}
    >
      <View
        width="396px"
        height="79px"
        {...getOverrideProps(overrides, "jisseki")}
      ></View>
    </View>
  );
}
