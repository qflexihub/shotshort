import Input from "./Input";
import { useFormik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import Button from "./Button";
import { useIsMobile } from "@/utils/general";

const Form = () => {
  const isMobile = useIsMobile();
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      email: "",
      companyName: "",
      contactNumber: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      companyName: Yup.string().required("Company Name is required"),
      contactNumber: Yup.string().required("Contact Number is required"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      console.log("values", values);
    },
  });

  return (
    <>
      <FormContainer>
        <form name="getInTouch" onSubmit={handleSubmit}>
          <div className="mb-9">
            <Input
              name="fullName"
              type="text"
              value={values.fullName}
              label={"What is your full name"}
              placeholder={"Enter name here"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fullName && errors.fullName}
              errorMsg={errors.fullName}
            />
          </div>
          <div className="mb-9">
            <Input
              name="email"
              type="email"
              value={values.email}
              label={"What is your email address"}
              placeholder={"Enter email here"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              errorMsg={errors.email}
            />
          </div>
          <div className="mb-9">
            <Input
              name="companyName"
              type="text"
              value={values.companyName}
              label={"What is company name"}
              placeholder={"Enter here"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.companyName && errors.companyName}
              errorMsg={errors.companyName}
            />
          </div>
          <div className="mb-9">
            <Input
              name="contactNumber"
              type="text"
              value={values.contactNumber}
              label={"What is your contact number"}
              placeholder={"Enter number here"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.contactNumber && errors.contactNumber}
              errorMsg={errors.contactNumber}
            />
          </div>
          <div className="text-center">
            <Button
              value="Get in Touch"
              rightArrow
              width={isMobile ? "335px" : "362px"}
              height="60px"
            />
          </div>
        </form>
      </FormContainer>
    </>
  );
};
export default Form;

const FormContainer = styled.div``;
