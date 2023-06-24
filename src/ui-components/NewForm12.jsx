/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Home } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NewForm12(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    pass: "",
    auMNP: "",
    aucellup: "",
    aushinki: "",
    aukihen: "",
    uqMNP: "",
    uqrikoup: "",
    uqshinki: "",
    uqkihen: "",
    cyura: "",
    yuima: "",
    jigin: "",
    credit: "",
    Chrome: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [pass, setPass] = React.useState(initialValues.pass);
  const [auMNP, setAuMNP] = React.useState(initialValues.auMNP);
  const [aucellup, setAucellup] = React.useState(initialValues.aucellup);
  const [aushinki, setAushinki] = React.useState(initialValues.aushinki);
  const [aukihen, setAukihen] = React.useState(initialValues.aukihen);
  const [uqMNP, setUqMNP] = React.useState(initialValues.uqMNP);
  const [uqrikoup, setUqrikoup] = React.useState(initialValues.uqrikoup);
  const [uqshinki, setUqshinki] = React.useState(initialValues.uqshinki);
  const [uqkihen, setUqkihen] = React.useState(initialValues.uqkihen);
  const [cyura, setCyura] = React.useState(initialValues.cyura);
  const [yuima, setYuima] = React.useState(initialValues.yuima);
  const [jigin, setJigin] = React.useState(initialValues.jigin);
  const [credit, setCredit] = React.useState(initialValues.credit);
  const [Chrome, setChrome] = React.useState(initialValues.Chrome);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPass(initialValues.pass);
    setAuMNP(initialValues.auMNP);
    setAucellup(initialValues.aucellup);
    setAushinki(initialValues.aushinki);
    setAukihen(initialValues.aukihen);
    setUqMNP(initialValues.uqMNP);
    setUqrikoup(initialValues.uqrikoup);
    setUqshinki(initialValues.uqshinki);
    setUqkihen(initialValues.uqkihen);
    setCyura(initialValues.cyura);
    setYuima(initialValues.yuima);
    setJigin(initialValues.jigin);
    setCredit(initialValues.credit);
    setChrome(initialValues.Chrome);
    setErrors({});
  };
  const validations = {
    name: [],
    pass: [],
    auMNP: [],
    aucellup: [],
    aushinki: [],
    aukihen: [],
    uqMNP: [],
    uqrikoup: [],
    uqshinki: [],
    uqkihen: [],
    cyura: [],
    yuima: [],
    jigin: [],
    credit: [],
    Chrome: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          pass,
          auMNP,
          aucellup,
          aushinki,
          aukihen,
          uqMNP,
          uqrikoup,
          uqshinki,
          uqkihen,
          cyura,
          yuima,
          jigin,
          credit,
          Chrome,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Home(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewForm12")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Pass"
        isRequired={false}
        isReadOnly={false}
        value={pass}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              pass: value,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.pass ?? value;
          }
          if (errors.pass?.hasError) {
            runValidationTasks("pass", value);
          }
          setPass(value);
        }}
        onBlur={() => runValidationTasks("pass", pass)}
        errorMessage={errors.pass?.errorMessage}
        hasError={errors.pass?.hasError}
        {...getOverrideProps(overrides, "pass")}
      ></TextField>
      <TextField
        label="Au mnp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={auMNP}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP: value,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.auMNP ?? value;
          }
          if (errors.auMNP?.hasError) {
            runValidationTasks("auMNP", value);
          }
          setAuMNP(value);
        }}
        onBlur={() => runValidationTasks("auMNP", auMNP)}
        errorMessage={errors.auMNP?.errorMessage}
        hasError={errors.auMNP?.hasError}
        {...getOverrideProps(overrides, "auMNP")}
      ></TextField>
      <TextField
        label="Aucellup"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={aucellup}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup: value,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.aucellup ?? value;
          }
          if (errors.aucellup?.hasError) {
            runValidationTasks("aucellup", value);
          }
          setAucellup(value);
        }}
        onBlur={() => runValidationTasks("aucellup", aucellup)}
        errorMessage={errors.aucellup?.errorMessage}
        hasError={errors.aucellup?.hasError}
        {...getOverrideProps(overrides, "aucellup")}
      ></TextField>
      <TextField
        label="Aushinki"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={aushinki}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki: value,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.aushinki ?? value;
          }
          if (errors.aushinki?.hasError) {
            runValidationTasks("aushinki", value);
          }
          setAushinki(value);
        }}
        onBlur={() => runValidationTasks("aushinki", aushinki)}
        errorMessage={errors.aushinki?.errorMessage}
        hasError={errors.aushinki?.hasError}
        {...getOverrideProps(overrides, "aushinki")}
      ></TextField>
      <TextField
        label="Aukihen"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={aukihen}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen: value,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.aukihen ?? value;
          }
          if (errors.aukihen?.hasError) {
            runValidationTasks("aukihen", value);
          }
          setAukihen(value);
        }}
        onBlur={() => runValidationTasks("aukihen", aukihen)}
        errorMessage={errors.aukihen?.errorMessage}
        hasError={errors.aukihen?.hasError}
        {...getOverrideProps(overrides, "aukihen")}
      ></TextField>
      <TextField
        label="Uq mnp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={uqMNP}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP: value,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.uqMNP ?? value;
          }
          if (errors.uqMNP?.hasError) {
            runValidationTasks("uqMNP", value);
          }
          setUqMNP(value);
        }}
        onBlur={() => runValidationTasks("uqMNP", uqMNP)}
        errorMessage={errors.uqMNP?.errorMessage}
        hasError={errors.uqMNP?.hasError}
        {...getOverrideProps(overrides, "uqMNP")}
      ></TextField>
      <TextField
        label="Uqrikoup"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={uqrikoup}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup: value,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.uqrikoup ?? value;
          }
          if (errors.uqrikoup?.hasError) {
            runValidationTasks("uqrikoup", value);
          }
          setUqrikoup(value);
        }}
        onBlur={() => runValidationTasks("uqrikoup", uqrikoup)}
        errorMessage={errors.uqrikoup?.errorMessage}
        hasError={errors.uqrikoup?.hasError}
        {...getOverrideProps(overrides, "uqrikoup")}
      ></TextField>
      <TextField
        label="Uqshinki"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={uqshinki}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki: value,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.uqshinki ?? value;
          }
          if (errors.uqshinki?.hasError) {
            runValidationTasks("uqshinki", value);
          }
          setUqshinki(value);
        }}
        onBlur={() => runValidationTasks("uqshinki", uqshinki)}
        errorMessage={errors.uqshinki?.errorMessage}
        hasError={errors.uqshinki?.hasError}
        {...getOverrideProps(overrides, "uqshinki")}
      ></TextField>
      <TextField
        label="Uqkihen"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={uqkihen}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen: value,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.uqkihen ?? value;
          }
          if (errors.uqkihen?.hasError) {
            runValidationTasks("uqkihen", value);
          }
          setUqkihen(value);
        }}
        onBlur={() => runValidationTasks("uqkihen", uqkihen)}
        errorMessage={errors.uqkihen?.errorMessage}
        hasError={errors.uqkihen?.hasError}
        {...getOverrideProps(overrides, "uqkihen")}
      ></TextField>
      <TextField
        label="Cyura"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cyura}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura: value,
              yuima,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.cyura ?? value;
          }
          if (errors.cyura?.hasError) {
            runValidationTasks("cyura", value);
          }
          setCyura(value);
        }}
        onBlur={() => runValidationTasks("cyura", cyura)}
        errorMessage={errors.cyura?.errorMessage}
        hasError={errors.cyura?.hasError}
        {...getOverrideProps(overrides, "cyura")}
      ></TextField>
      <TextField
        label="Yuima"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yuima}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima: value,
              jigin,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.yuima ?? value;
          }
          if (errors.yuima?.hasError) {
            runValidationTasks("yuima", value);
          }
          setYuima(value);
        }}
        onBlur={() => runValidationTasks("yuima", yuima)}
        errorMessage={errors.yuima?.errorMessage}
        hasError={errors.yuima?.hasError}
        {...getOverrideProps(overrides, "yuima")}
      ></TextField>
      <TextField
        label="Jigin"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={jigin}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin: value,
              credit,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.jigin ?? value;
          }
          if (errors.jigin?.hasError) {
            runValidationTasks("jigin", value);
          }
          setJigin(value);
        }}
        onBlur={() => runValidationTasks("jigin", jigin)}
        errorMessage={errors.jigin?.errorMessage}
        hasError={errors.jigin?.hasError}
        {...getOverrideProps(overrides, "jigin")}
      ></TextField>
      <TextField
        label="Credit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={credit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit: value,
              Chrome,
            };
            const result = onChange(modelFields);
            value = result?.credit ?? value;
          }
          if (errors.credit?.hasError) {
            runValidationTasks("credit", value);
          }
          setCredit(value);
        }}
        onBlur={() => runValidationTasks("credit", credit)}
        errorMessage={errors.credit?.errorMessage}
        hasError={errors.credit?.hasError}
        {...getOverrideProps(overrides, "credit")}
      ></TextField>
      <TextField
        label="Chrome"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Chrome}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              pass,
              auMNP,
              aucellup,
              aushinki,
              aukihen,
              uqMNP,
              uqrikoup,
              uqshinki,
              uqkihen,
              cyura,
              yuima,
              jigin,
              credit,
              Chrome: value,
            };
            const result = onChange(modelFields);
            value = result?.Chrome ?? value;
          }
          if (errors.Chrome?.hasError) {
            runValidationTasks("Chrome", value);
          }
          setChrome(value);
        }}
        onBlur={() => runValidationTasks("Chrome", Chrome)}
        errorMessage={errors.Chrome?.errorMessage}
        hasError={errors.Chrome?.hasError}
        {...getOverrideProps(overrides, "Chrome")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
