/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Dailyreportdetails(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="256px"
      height="67px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Dailyreportdetails")}
      {...rest}
    >
      <Text
        fontFamily="Ricty Diminished"
        fontSize="64px"
        fontWeight="400"
        color="rgba(28,173,228,1)"
        lineHeight="67.19999694824219px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="日報詳細"
        {...getOverrideProps(overrides, "\u65E5\u5831\u8A73\u7D30")}
      ></Text>
    </View>
  );
}
