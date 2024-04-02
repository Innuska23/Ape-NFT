import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

import discord from "../../images/form/discord.svg";
import mask from "../../images/form/mask.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const saveFormDataToLocalStorage = (values) => {
  localStorage.setItem("formData", JSON.stringify(values));
};

const ContactUsForm = () => {
  const [initialValues, setInitialValues] = useState({
    discord: "",
    address: "",
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setInitialValues(JSON.parse(storedFormData));
    }
  }, []);

  const validationSchema = Yup.object({
    discord: Yup.string()
      .required("Wrong discord")
      .matches(/^@[A-Za-z]{8}$/, "Wrong discord, be 8 characters and start @"),
    address: Yup.string()
      .required("Wrong ADDRESS")
      .matches(/^[A-Za-z0-9]{19}$/, "Wrong ADDRESS, 19 characters"),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, resetForm }
  ) => {
    setSubmitting(true);
    try {
      console.log("Form values:", values);
      saveFormDataToLocalStorage(values);
      setStatus({ success: true });
      resetForm();
      toast.success("Form successfully submitted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
      setStatus({ error: "Submission failed!" });
      toast.error("Form submission failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setSubmitting(false);
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
            "md:w-[248px] md:mt-[24px]",
            "xl:w-[397px] xl:mt-[40px] xl:gap-y-6"
          )}
        >
          <div className={classNames("relative flex")}>
            <label
              className={classNames(
                "h-full w-12 p-2.5 bg-stone-900 rounded-tl-lg",
                "rounded-bl-lg backdrop-blur-md justify-center items-center",
                "gap-2.5 inline-flex",
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
              className={classNames(
                "w-full pl-[24px] bg-opacity-25 placeholder:opacity-25",
                "border rounded-tr-lg uppercase  bg-stone-900 ",
                "rounded-br-lg text-xs xl:rounded-br-xl xl:text-base xl:rounded-tr-xl",
                "outline-none",
                {
                  "text-white border-stone-900": !(
                    errors.discord && touched.discord
                  ),
                  "border-rose-500 text-my-custom-color":
                    errors.discord && touched.discord,
                }
              )}
            />
            {errors.discord && touched.discord && (
              <div
                className={classNames(
                  "absolute right-0 bottom-[-13px] text-[10px] font-normal",
                  "font-messina-sans-mono uppercase leading-3 text-accent text-rose-500",
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
                "h-full w-12 p-2.5 bg-stone-900 rounded-tl-lg rounded-bl-lg",
                "backdrop-blur-md justify-center items-center gap-2.5 inline-flex",
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
              className={classNames(
                "w-full pl-[24px] bg-opacity-25 placeholder:opacity-25",
                "border uppercase bg-stone-900 ",
                "rounded-br-lg rounded-tr-lg text-xs",
                "xl:rounded-br-xl xl:text-base xl:rounded-tr-xl",
                "outline-none",
                {
                  "text-white border-stone-900": !(
                    errors.address && touched.address
                  ),
                  "border-rose-500 text-my-custom-color":
                    errors.address && touched.address,
                }
              )}
            />
            {errors.address && touched.address && (
              <div
                className={classNames(
                  "absolute right-0 bottom-[-13px] text-[10px]",
                  "font-normal font-messina-sans-mono uppercase leading-3 text-rose-500",
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
              "h-[41px] px-[107px] pt-2.5 pb-3 ",
              "justify-center items-center gap-2.5 inline-flex",
              "bg-rose-500 rounded-lg backdrop-blur-md",
              "md:h-[41px]",
              "xl:h-[70px]"
            )}
          >
            <span
              className={classNames(
                " font-black font-right-grotesk leading-[19px]",
                "text-white text-base hover:text-black uppercase",
                "transition-colors duration-300",
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
