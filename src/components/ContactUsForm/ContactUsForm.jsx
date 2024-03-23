import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

import discord from "../../images/form/discord.svg";
import mask from "../../images/form/mask.svg";

const ContactUsForm = () => {
  const initialValues = {
    discord: "",
    address: "",
  };

  const validationSchema = Yup.object({
    discord: Yup.string().required("Wrong discord"),
    address: Yup.string().required("Wrong ADDRESS"),
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, resetForm }
  ) => {
    setSubmitting(true);
    try {
      console.log("Form values:", values);
      setStatus({ success: true });
      resetForm();
      setSubmissionStatus("success");
    } catch (error) {
      console.error(error);
      setStatus({ error: "Submission failed!" });
      setSubmissionStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleFieldClick = () => {
    if (submissionStatus === "success") {
      setSubmissionStatus(null);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form
          className={classNames(
            "w-full flex flex-col gap-y-4 mt-[16px]",
            "md:w-[248px]md:mt-[24px]",
            "xl:w-[397px] xl:mt-[80px] xl:gap-y-6"
          )}
        >
          {submissionStatus === "success" && (
            <div className={classNames("text-green-500", "xl:text-2xl")}>
              Form successfully submitted!
            </div>
          )}
          <div className={classNames("relative flex")}>
            <label
              className={classNames(
                "h-full w-12 p-2.5 bg-stone-900 rounded-tl-lg rounded-bl-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex",
                "md:h-[48px] md:w-[48px]",
                "xl:h-[64px] xl:w-[64px]"
              )}
            >
              <img className="w-[24px] h-[24px]" src={discord} alt="discord" />
            </label>
            <Field
              type="text"
              name="discord"
              placeholder="@username"
              disabled={isSubmitting}
              className={`w-full text-white pl-[24px] bg-opacity-25 text-opacity-25 border uppercase border-stone-900 bg-stone-900 rounded-br-lg text-xs xl:rounded-br-xl  focus:border-red-900 xl:text-base ${
                errors.discord && touched.discord ? "border-red-500" : ""
              }`}
              onClick={handleFieldClick}
            />
            {errors.discord && touched.discord && (
              <div
                className={classNames(
                  "absolute right-0 bottom-[-13px] text-[10px] font-normal font-messina-sans-mono uppercase leading-3  text-accent text-rose-500",
                  "xl:bottom-[-18px] xl:text-xs"
                )}
              >
                {errors.discord}
              </div>
            )}
          </div>

          <div className={classNames("relative flex")}>
            <label
              className={classNames(
                "h-full w-12 p-2.5 bg-stone-900 rounded-tl-lg rounded-bl-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex",
                "md:h-[48px] md:w-[48px]",
                "xl:h-[64px] xl:w-[64px]"
              )}
            >
              <img className={classNames("w-6 h-6")} src={mask} alt="mask" />
            </label>
            <Field
              type="text"
              name="address"
              placeholder="Wallet address"
              disabled={isSubmitting}
              className={`w-full text-white pl-[24px] bg-opacity-25 text-opacity-25 border uppercase border-stone-900 bg-stone-900 rounded-br-lg text-xs xl:rounded-br-xl  focus:border-red-900 xl:text-base ${
                errors.address && touched.address ? "border-red-500" : ""
              }`}
              onClick={handleFieldClick}
            />
            {errors.address && touched.address && (
              <div
                className={classNames(
                  "absolute right-0 bottom-[-13px] text-[10px] font-normal font-messina-sans-mono uppercase leading-3 text-red-500",
                  "xl:text-xs xl:bottom-[-18px]"
                )}
              >
                {errors.address}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={classNames(
              "h-[41px] px-[107px] pt-2.5 pb-3 bg-rose-500 rounded-lg backdrop-blur-md justify-center items-center gap-2.5 inline-flex",
              "md:h-[41px]",
              "xl:h-[70px]"
            )}
          >
            <span
              className={classNames(
                "text-white text-base hover:text-black font-black font-right-grotesk leading-[19px] uppercase",
                "xl:text-[28px] xl:leading-[34px]"
              )}
            >
              {isSubmitting ? "Submitting..." : "Mint"}
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
