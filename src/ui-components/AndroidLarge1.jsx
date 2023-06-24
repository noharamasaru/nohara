/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function AndroidLarge1(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: {
        "\u30D7\u30ED\u30D1\u30C6\u30A31": "\u30C7\u30D5\u30A9\u30EB\u30C8",
      },
      overrides: {
        "\u5B9F\u7E3E\u7BA1\u7406": {},
        "\u30E6\u30FC\u30B6\u30FC\u540D": {},
        "\u30D1\u30B9\u30EF\u30FC\u30C9": {},
        "Rectangle 17": {},
        "\u30ED\u30B0\u30A4\u30F3": {},
        "Rectangle 18": {},
        "Rectangle 19": {},
        AndroidLarge1: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="360px"
      height="800px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AndroidLarge1")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="77.45454406738281px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="396px"
        height="79px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 39.5px - 279.5px)"
        left="calc(50% - 198px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="実績管理"
        {...getOverrideProps(overrides, "\u5B9F\u7E3E\u7BA1\u7406")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="149px"
        height="43px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="305px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ユーザー名"
        {...getOverrideProps(overrides, "\u30E6\u30FC\u30B6\u30FC\u540D")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="435px"
        left="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="パスワード"
        {...getOverrideProps(overrides, "\u30D1\u30B9\u30EF\u30FC\u30C9")}
      ></Text>
      <View
        width="187px"
        height="77px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="589px"
        left="78px"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(11,121,250,0.99)"
        {...getOverrideProps(overrides, "Rectangle 17")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="43.568180084228516px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="606px"
        left="100px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログイン"
        {...getOverrideProps(overrides, "\u30ED\u30B0\u30A4\u30F3")}
      ></Text>
      <View
        width="252px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="369px"
        left="74px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 18")}
      ></View>
      <View
        width="252px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="499px"
        left="74px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
    </View>
  );
}
