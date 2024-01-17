"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const PrivacyPolicy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <li className="max-md:w-full">
        <button onClick={onOpen}>Política de privacidad</button>
      </li>
      <Modal
        classNames={{
          body: "rounded-lg",
        }}
        size={"5xl"}
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
      >
        <ModalContent className=" max-h-[80%] overflow-y-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Política de Privacidad - MIMPRONTA
              </ModalHeader>
              <ModalBody className="[&>h6]:font-semibold">
                <p>
                  La protección de sus datos personales es muy importante para
                  el equipo de mimpronta. Nos comprometemos a asegurar que su
                  información personal se encuentre protegida y no se utilice de
                  forma indebida. Al facilitarnos su información personal y
                  utilizar nuestro sitio web, entendemos que ha leído y
                  comprendido los términos relacionados con la información de
                  protección de datos de carácter personal que se exponen. Usted
                  puede acceder al servicio mimpronta.com (el “Servicio”) a
                  través de nuestro sitio web{" "}
                  <a href="https://mimpronta.com/" className="text-blue-600">
                    https://mimpronta.com/
                  </a>{" "}
                  . Esta Política de privacidad rige el acceso al Servicio
                  mimpronta.com, independientemente de cómo acceda a él, y al
                  usar nuestros Servicios, usted acepta la recopilación,
                  transferencia, procesamiento, almacenamiento, divulgación y
                  otros usos descritos en esta Política de privacidad. Todas las
                  diferentes formas de datos, contenido e información que se
                  describen a continuación se denominan colectivamente
                  “información”.
                </p>
                <h6 >
                  1. La información que recopilamos y almacenamos
                </h6>
                <p>
                  Podemos recopilar y almacenar la siguiente información: <br />
                  Información que proporciona: cuando envía un formulario de
                  contacto, recopilamos cierta información personal, como su
                  nombre y apellido, país y dirección de correo electrónico. Si
                  está pagando algún servicio de mimpronta, recopilamos sus
                  datos de facturación, incluidos los detalles de la tarjeta y
                  la dirección de facturación. <br /> Datos de registro: cuando
                  utiliza el Servicio, registramos automáticamente la
                  información de su Dispositivo, su software y su actividad
                  utilizando los Servicios. Esto puede incluir la dirección del
                  Protocolo de Internet del dispositivo (“IP”), el tipo de
                  navegador, la información que busca en nuestro sitio web, las
                  preferencias locales, los números de identificación asociados
                  con sus dispositivos, su operador de telefonía móvil, sellos
                  de fecha y hora asociados con transacciones y otras
                  interacciones con el Servicio. <br /> Cookies: también
                  utilizamos “cookies” para recopilar información y mejorar
                  nuestros Servicios. Las cookies son archivos que se pueden
                  descargar en su equipo a través de las páginas web. Son
                  herramientas que tienen un papel esencial para la prestación
                  de numerosos servicios de la sociedad de la información. Entre
                  otros, permiten a una página web almacenar y recuperar
                  información sobre los hábitos de navegación de un usuario o de
                  su equipo y, dependiendo de la información obtenida, se pueden
                  utilizar para reconocer al usuario y mejorar el servicio
                  ofrecido. <br /> Podemos usar “cookies de ID de sesión” para
                  habilitar ciertas funciones del Servicio, para comprender
                  mejor cómo interactúa con el Servicio y para monitorear el uso
                  agregado y el enrutamiento del tráfico web en el Servicio.
                  Puede indicarle a su navegador, cambiando sus opciones, que
                  deje de aceptar cookies o que le solicite antes de aceptar una
                  cookie de los sitios web que visita. Sin embargo, si no acepta
                  las cookies, es posible que no pueda utilizar todos los
                  aspectos del Servicio.
                </p>
                <h6 >
                  2. Cómo usamos la información personal
                </h6>
                <div>
                  <p>
                    Información personal: durante el uso del Servicio, podemos
                    recopilar información personal que se puede utilizar para
                    contactarlo o identificarlo (“Información personal”). La
                    información personal se utiliza o se puede utilizar para:
                  </p>
                  <ul className="list-disc list-inside ml-4">
                    <li>proporcionar y mejorar nuestro Servicio,</li>
                    <li>administrar su uso del Servicio,</li>
                    <li>comprender mejor sus necesidades e intereses, </li>
                    <li>personalizar y mejorar su experiencia, </li>
                    <li>
                      Y para gestionar cualquier tipo de solicitud, sugerencia o
                      petición sobre nuestros servicios profesionales que nos
                      formulen las personas interesadas.
                    </li>
                  </ul>
                  <p>
                    Información de ubicación geográfica: al usar el servicio,
                    podemos usar la dirección de Protocolo de Internet (“IP”) de
                    su dispositivo para identificar su ubicación geográfica
                    aproximada. Podemos utilizar esta información para optimizar
                    su experiencia. Análisis: también recopilamos cierta
                    información (nosotros mismos o mediante servicios de
                    terceros) mediante el registro y las cookies, que a veces se
                    pueden correlacionar con la información personal. Utilizamos
                    esta información para los fines anteriores y para monitorear
                    y analizar el uso del Servicio, para la administración
                    técnica del Servicio, para aumentar la funcionalidad y
                    facilidad de uso de nuestro Servicio, y para verificar que
                    los usuarios tengan la autorización necesaria para que el
                    Servicio procese sus solicitudes. Esta información incluye
                    la fecha y hora de su visita, la fuente de su visita e
                    información demográfica, como su edad y sexo. A partir de la
                    fecha en que entró en vigencia esta política, utilizamos
                    Vercel Web Analytics.
                  </p>
                </div>

                <h6 >
                  3. Intercambio de información y divulgación
                </h6>
                <p>
                  Proveedores de servicios, socios comerciales y otros: podemos
                  utilizar ciertas empresas y terceras personas de confianza
                  para ayudarnos a proporcionar, analizar y mejorar el Servicio
                  (incluidos, entre otros, almacenamiento de datos, servicios de
                  mantenimiento, gestión de bases de datos, análisis web,
                  procesamiento de pagos, y mejora de las características del
                  Servicio). Estos terceros pueden tener acceso a su información
                  sólo con el fin de realizar estas tareas en nuestro nombre y
                  bajo obligaciones similares a las de esta Política de
                  privacidad. <br /> Aplicaciones de terceros: podemos compartir
                  su información con una aplicación de terceros con su
                  consentimiento, por ejemplo, cuando elige acceder a nuestros
                  Servicios a través de dicha aplicación. No somos responsables
                  de lo que esas partes hacen con su información, por lo que
                  debe asegurarse de confiar en la aplicación y que tiene una
                  política de privacidad aceptable para usted. <br />{" "}
                  Cumplimiento de las leyes y solicitudes de cumplimiento de la
                  ley; Protección de los derechos de mimpronta: podemos divulgar
                  a terceros ajenos a mimpronta.com el contenido y la
                  información sobre usted que recopilamos cuando creemos de
                  buena fe que la divulgación es razonablemente necesaria para
                  (a) cumplir con una ley, regulación u solicitud legal
                  obligatoria; (b) proteger la seguridad de cualquier persona de
                  la muerte o lesiones corporales graves; (c) evitar el fraude o
                  abuso de mimpronta.com o sus usuarios; o (d) para proteger los
                  derechos de propiedad de mimpronta.com. <br /> Transferencias
                  comerciales: si estamos involucrados en una fusión,
                  adquisición o venta de todos o una parte de nuestros activos,
                  su información puede transferirse como parte de esa
                  transacción, pero le notificaremos (por ejemplo, por correo
                  electrónico y/o un aviso destacado en nuestro sitio web) de
                  cualquier cambio en el control o uso de su información
                  personal o archivos, o si está sujeto a una política de
                  privacidad diferente. También le notificaremos las opciones
                  que pueda tener con respecto a la información. <br />{" "}
                  Información no privada o no personal: podemos divulgar su
                  información no privada, agregada o no personal, como las
                  estadísticas de uso de nuestro Servicio.
                </p>
                <h6 >4. Seguridad</h6>
                <p>
                  La seguridad de su información es importante para nosotros.
                  Seguimos estándares generalmente aceptados para proteger la
                  información que se nos envía, tanto durante la transmisión
                  como una vez que la recibimos. Sin embargo, ningún método de
                  transmisión o almacenamiento electrónico es 100% seguro. Por
                  lo tanto, no podemos garantizar su seguridad absoluta.
                </p>
                <h6 >
                  5. Derechos propiedad intelectual www.mimpronta.com
                </h6>
                <p>
                  MIMPRONTA es titular de todos los derechos de autor, propiedad
                  intelectual, industrial, «know how» y cuantos otros derechos
                  guardan relación con los contenidos del sitio web
                  www.mimpronta.com y los servicios ofertados en el mismo, así
                  como de los programas necesarios para su implementación y la
                  información relacionada. No se permite la reproducción,
                  publicación y/o uso no estrictamente privado de los
                  contenidos, totales o parciales, del sitio web
                  www.mimpronta.com sin el consentimiento previo y por escrito.
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
