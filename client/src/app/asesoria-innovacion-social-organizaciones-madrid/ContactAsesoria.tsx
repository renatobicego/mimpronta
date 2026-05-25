"use client";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import { object, string } from "yup";

interface MyFormValues {
  name: string;
  email: string;
  country: string;
  message: string;
}

const contactSchema = object({
  name: string().required().min(3),
  email: string().email().required(),
  country: string().required().min(3),
  message: string().required().min(3),
});

const ContactAsesoria = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    country: "",
    message: "",
  };

  return (
    <section className="relative flex flex-col gap-12 py-20 w-full overflow-hidden space-section">
      <div id="contacto" className="invisible -top-20 absolute"></div>
      <div className="z-10 flex flex-col gap-3">
        <h2 className="subtitle-size-2">
          ¿Necesitas asesoramiento en innovación social en tu organización?
        </h2>
        <p className="lg:w-3/4 3xl:w-2/3">
          Si tu organización quiere avanzar hacia modelos más responsables e
          innovadores, la asesoría en innovación social es una herramienta clave
          para generar impacto con sentido estratégico.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values, actions) => {
          try {
            await axios.post("/api/email", values);
            Swal.fire({
              text: "Solicitud de contacto enviada",
              icon: "success",
              showConfirmButton: false,
              timer: 1550,
              customClass: "font-title",
            });
            actions.resetForm();
          } catch (error) {
            Swal.fire({
              text: "Error en la solicitud. Por favor, contáctenos a través de nuestro email: ",
              icon: "error",
              customClass: "font-title",
            });
          }
          actions.setSubmitting(false);
        }}
        validationSchema={contactSchema}
      >
        {({ errors, isSubmitting }) => (
          <Form className="z-10 flex flex-col items-start gap-4 3xl:max-w-[60vw]">
            <div className="flex flex-wrap gap-4 w-full">
              <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-2/5">
                <Field
                  id="name"
                  name="name"
                  placeholder="Nombre y apellido"
                  className={`input ${errors.name && "border-red-600"}`}
                />
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className={`input ${errors.email && "border-red-600"}`}
                />
                <Field
                  id="country"
                  name="country"
                  placeholder="País"
                  className={`input ${errors.country && "border-red-600"}`}
                />
              </div>
              <Field
                className={`flex-1 input resize-none min-h-[180px] ${
                  errors.message && "border-red-600"
                }`}
                id="message"
                name="message"
                placeholder="Mensaje"
                as="textarea"
              />
            </div>
            <button
              aria-disabled={isSubmitting}
              type="submit"
              className="flex items-center self-start gap-2 mt-4 btn-primary-sm"
            >
              <svg
                className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
                  isSubmitting ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-55"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#E9E9E9"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="#1F1F1F"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              ¿Hablamos?
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactAsesoria;
