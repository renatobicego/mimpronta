import React from "react";

export const metadata = {
  title: "Política de Cookies | Mimpronta",
  description: "Política de cookies de Mimpronta - Micaela Gerbeno",
};

const PoliticaCookies = () => {
  return (
    <main className="bg-white my-[14vh] px-6 md:px-12 lg:px-24 min-h-screen !font-text">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-bold text-negro text-4xl md:text-5xl">
          Política de Cookies
        </h1>

        <div className="space-y-6 text-negro leading-relaxed">
          <p>
            El equipo de Mimpronta, le quiere recordar que con el uso y
            navegación de esta web usted ha adquirido la condición de usuario y
            por tanto, avisamos que si prosigue su navegación por este sitio web
            sin haber configurado los navegadores para impedir la instalación de
            las cookies, estará prestando su consentimiento para el empleo de
            las cookies, en aplicación de términos incluidos en el artículo 22.2
            de la Ley 34/2002 de Servicios de la Sociedad de la Información y
            Comercio Electrónico.
          </p>

          <h2 className="mt-8 mb-4 font-bold text-2xl">
            ¿QUÉ SON LAS COOKIES?
          </h2>
          <p>
            Una cookie es un archivo que se descarga en el ordenador o
            dispositivo del usuario al acceder a una página web con el objeto de
            permitir almacenar y recuperar información sobre los hábitos de
            navegación del usuario o de su equipo.
          </p>
          <p>
            Las cookies, no sólo van en beneficio de las empresas, sino que
            también permiten establecer niveles de protección y seguridad,
            recopilar datos estadísticos y normalmente anónimos; así como
            realizar publicidad adaptadas a los intereses de los usuarios.
          </p>

          <h2 className="mt-8 mb-4 font-bold text-2xl">TIPOS DE COOKIES</h2>
          <p>
            Las cookies pueden clasificarse en atención a distintos
            funcionamientos y parámetros, algunas de las clasificaciones más
            usuales son estas:
          </p>

          <h3 className="mt-6 mb-3 font-bold text-xl">Cookies exentas</h3>
          <p>
            Son las cookies sobre las que legalmente no es necesario informar u
            obtener el consentimiento para su uso. Se trata de cookies que
            permiten la comunicación entre el equipo del usuario y la red, así
            como las que estrictamente prestan un servicio expresamente
            solicitado por el usuario.
          </p>

          <h3 className="mt-6 mb-3 font-bold text-xl">
            En atención a su finalidad:
          </h3>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              <strong>Analíticas:</strong> recogen información del uso que se
              realiza del sitio web.
            </li>
            <li>
              <strong>Sociales:</strong> son aquellas necesarias para redes
              sociales externas.
            </li>
            <li>
              <strong>Afiliados:</strong> permiten hacer un seguimiento de las
              visitas procedentes de otras webs con las que el sitio web
              establece un contrato de afiliación.
            </li>
            <li>
              <strong>Publicidad y comportamentales:</strong> recogen
              información sobre las preferencias y elecciones personales del
              usuario.
            </li>
            <li>
              <strong>Técnicas y funcionales:</strong> son las estrictamente
              necesarias para el uso del sitio web y para la prestación del
              servicio contratado.
            </li>
          </ul>

          <h3 className="mt-6 mb-3 font-bold text-xl">Por su gestión:</h3>
          <ul className="space-y-2 pl-6 list-disc">
            <li>
              <strong>Cookies propias:</strong> Son aquéllas que se envían al
              equipo terminal del usuario desde un equipo o dominio gestionado
              por el propio editor y desde el que se presta el servicio
              solicitado por el usuario.
            </li>
            <li>
              <strong>Cookies de tercero:</strong> Son aquéllas que se envían al
              equipo terminal del usuario desde un equipo o dominio que no es
              gestionado por el editor, sino por otra entidad que trata los
              datos obtenidos a través de las cookies.
            </li>
          </ul>

          <h2 className="mt-8 mb-4 font-bold text-2xl">
            ¿QUÉ COOKIES UTILIZAMOS?
          </h2>
          <p>
            En Mimpronta utilizamos únicamente cookies de análisis, técnicas y
            de personalización, que nos permiten la analítica sistemática de
            nuestra web y flujos de entrada de manera anónima, así como la
            mejora de la experiencia del usuario en nuestra web. Usamos cookies
            propias y cookies de terceros.
          </p>

          <h3 className="mt-6 mb-3 font-bold text-xl">Cookies de Análisis:</h3>
          <p>
            La mayoría de las cookies de análisis son propiedad de Google
            Analytics y Google Adwords, nos permiten analizar y adaptar la web a
            los comportamientos derivados del tráfico, con datos estadísticos
            absolutamente abstractos para Mimpronta.
          </p>
          <p>
            Si desean más información sobre la política de cookies, pueden
            hacerlo en el siguiente enlace:{" "}
            <a
              href="https://policies.google.com/privacy?hl=en"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h2 className="mt-8 mb-4 font-bold text-2xl">
            DESACTIVACIÓN DE COOKIES
          </h2>
          <p>
            Las cookies pueden ser deshabilitadas, borradas y desactivadas,
            según el navegador utilizado.
          </p>
          <p>
            También, existe la posibilidad de desactivar las cookies de Google
            Analytics, instalando el complemento siguiente:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout/?hl=es"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://tools.google.com/dlpage/gaoptout/?hl=es
            </a>
          </p>

          <h2 className="mt-8 mb-4 font-bold text-2xl">
            EXENCIONES DE RESPONSABILIDAD
          </h2>
          <p>
            En Mimpronta no nos podemos y no nos hacemos responsables del
            contenido, ni de la veracidad, ni de la actualización de las
            políticas de privacidad que puedan tener los terceros mencionados en
            esta política de cookies.
          </p>
          <p>
            Son los navegadores web los encargados de almacenar las cookies y,
            es desde estos sitios desde donde debe efectuar su derecho a
            eliminación o desactivación de las mismas, por tanto, no podemos
            garantizar el correcto comportamiento.
          </p>

          <h2 className="mt-8 mb-4 font-bold text-2xl">
            DERECHO A MODIFICAR LA POLÍTICA DE COOKIES
          </h2>
          <p>
            Mimpronta se guarda todos los derechos a modificar su política de
            privacidad sin el previo aviso de la misma.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PoliticaCookies;
