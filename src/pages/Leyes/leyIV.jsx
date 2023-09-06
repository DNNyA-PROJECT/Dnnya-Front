import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class AccordionItem extends React.Component {
  render() {
    const { numero, textoAcordeon, isOpen } = this.props;
    const collapseId = `collapse${numero}`;

    const textoConSaltosDeLinea = textoAcordeon.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

    return (
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls={collapseId}
          >
            ARTÍCULO {numero}.
          </button>
        </h2>
        <div
          id={collapseId}
          className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {textoConSaltosDeLinea}
          </div>
        </div>
      </div>
    );
  }
}

function leyIV() {
  const [isOpenAll, setIsOpenAll] = useState(false);

  const toggleAccordionAll = () => {
    setIsOpenAll(!isOpenAll);
  };

  return (
    <div className='' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }} >
      <div>

        <div className='pt-1 d-flex justify-content-evenly'>
          <button className='btn left btn-lg'
            style={{ backgroundColor: window.themeColors.buttonColor, }}>
            <Link to="/" style={{ color: window.themeColors.footerColorText }}> <h4>Regresar a Inicio</h4> </Link>
          </button>

          <button className='btn rigth btn-lg'
            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} onClick={toggleAccordionAll}>
            {isOpenAll ? 'Cerrar Todos Los Articulos' : 'Abrir Todos Los Articulos'}
          </button>
        </div>

        <div className="accordion" id="accordionExample">
          <div className='d-flex flex-column align-items-center '>
            <h2>LEY IV – N.° 52</h2>
            <h4>LEY DEL DEFENSOR DE LOS DERECHOS DE NIÑOS, NIÑAS Y ADOLESCENTES</h4>
            <p>CAPÍTULO I</p>
            <p>DEFENSOR DE LOS DERECHOS DE NIÑOS, NIÑAS Y ADOLESCENTES</p> 
          </div>


          <AccordionItem numero={1} isOpen={isOpenAll} textoAcordeon="Créase la figura del Defensor de los Derechos de Niños, Niñas y
          Adolescentes, en el ámbito de la Provincia de Misiones, quien tiene a su cargo velar por la
          protección y concientización de sus derechos consagrados en la Constitución Nacional y
          Provincial, la Convención Internacional sobre los Derechos del Niño y las leyes nacionales
          y provinciales." />
          <AccordionItem numero={2} isOpen={isOpenAll} textoAcordeon="Son funciones del Defensor de los Derechos de Niños, Niñas y
          Adolescentes:
          1) proteger los intereses difusos o colectivos relativos a los niños, niñas y adolescentes;
          2) interponer acciones para la protección de los derechos de los niños, niñas y adolescentes
          en cualquier juicio, instancia o tribunal;
          3) velar por el efectivo respeto a los derechos y garantías legales asegurados a los niños,
          niñas y adolescentes y promover medidas judiciales y extrajudiciales del caso. Para ello
          puede tomar las declaraciones del reclamante, entenderse directamente con la persona o
          autoridad reclamada y efectuar recomendaciones con miras a la mejoría de los servicios
          públicos y privados de atención de los niños, niñas y adolescentes, determinando un plazo
          para su adecuación;
          4) implementar sanciones por infracciones cometidas contra las normas de protección de
          los niños, niñas y adolescentes, sin perjuicio de la responsabilidad civil y penal del
          infractor, cuando corresponda;
          5) supervisar a las entidades públicas y privadas dedicadas a la atención de los niños, niñas
          y adolescentes, albergándolos en forma transitoria o permanente, desarrollando programas
          de atención a los mismos, debiendo denunciar ante las autoridades competentes cualquier
          irregularidad que amenace o vulnere los derechos de los niños, niñas y adolescentes;
          6) requerir de los organismos públicos o privados para el desempeño de sus funciones, en
          caso de ser necesario, el apoyo de la fuerza pública, servicios médicos y educativos;
          7) proporcionar asesoramiento de cualquier índole a los niños, niñas y adolescentes y a sus
          familias;
          8) asesorar a los niños, niñas y adolescentes y a sus familias sobre los recursos públicos,
          privados y comunitarios, para la solución de su problemática;
          9) intervenir y asesorar en la instancia de mediación o conciliación;
          10) recibir todo tipo de reclamo formulado por los niños, niñas y adolescentes o cualquier
          denuncia que se efectúe con relación a los niños, niñas y adolescentes, en forma personal o
          mediante un servicio telefónico gratuito y permanente y dar solución rápida al
          requerimiento; y
          11) gestionar, administrar y monitorear el Registro Único de Niños, Niñas y Adolescentes
          Institucionalizados, a los fines de la ejecución de las medidas de protección de niños, niñas
          y adolescentes en la Provincia de Misiones, de conformidad a las facultades, funciones y
          responsabilidades establecidas en la presente Ley." />
          <AccordionItem numero={3} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes es propuesto
          por una comisión constituida al efecto, designado y removido por la Cámara de
          Representantes. La comisión está conformada por diez (10) miembros con la siguiente
          composición y representación: un (1) integrante del Consejo Multilateral de Políticas
          Sociales y Desarrollo Interior y un (1) integrante del Consejo Provincial de Discapacidad
          en representación del Poder Ejecutivo; dos (2) magistrados del fuero judicial afines a la
          materia en representación del Poder Judicial; dos (2) diputados en representación del Poder
          Legislativo, uno (1) por la mayoría y otro por la minoría; dos (2) docentes, uno (1) por el
          sector de la educación pública y uno (1) por el sector de la educación pública de gestión
          privada, ambos con acreditada formación y experiencia en el trabajo con la niñez y en
          representación del Consejo General de Educación y del Ministerio de Cultura, Educación, Ciencia y Tecnología; un (1) profesor con amplia y acreditada especialización académica
          en la materia en representación del nivel universitario; un (1) representante de una
          Organización no Gubernamental de reconocida trayectoria en el trabajo, protección y
          defensa de los derechos de los niños, niñas y adolescentes en la Provincia, que será
          seleccionado conforme el procedimiento que por vía reglamentaria se establezca.
          La comisión tiene a su cargo la evaluación para la designación del postulante mediante un
          concurso público de antecedentes y oposición. La decisión de esta comisión se adopta por
          el voto de las dos terceras (2/3) partes de sus miembros. Emitida la resolución por la
          comisión, debe ser puesta a consideración del pleno, el que aprueba con mayoría simple de
          los votos. Dentro del plazo de treinta (30) días la Cámara de Representantes toma
          juramento al Defensor de los Derechos de Niños, Niñas y Adolescentes." />
          <AccordionItem numero={4} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes ejerce su
          función junto a dos (2) defensores adjuntos designados conforme el procedimiento
          establecido en el Artículo 3, quienes deben auxiliar al Defensor en el ejercicio de sus
          funciones con las facultades de reemplazo establecidas en el Artículo 13.
                    ." />
          <AccordionItem numero={5} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes y los
          defensores adjuntos deben reunir los siguientes requisitos:
          1) ser argentino;
          2) haber cumplido treinta (30) años de edad;
          3) acreditar idoneidad y especialización en la defensa y protección activa de los derechos
          de los niños, niñas y adolescentes y familia." />
          <AccordionItem numero={6} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes y los
          defensores adjuntos duran en sus funciones cinco (5) años, pudiendo ser reelectos por una
          sola vez" />
          <AccordionItem numero={7} isOpen={isOpenAll} textoAcordeon="El cargo de Defensor de los Derechos de Niños, Niñas y Adolescentes y de
            los defensores adjuntos son incompatibles con el desempeño de cualquier otra actividad
            pública, comercial o profesional a excepción de la docencia, estando vedada la actividad
            política partidaria.
            " />
          <AccordionItem numero={8} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes y los
          defensores adjuntos perciben idéntica remuneración que la prevista para el Defensor Oficial
          del Poder Judicial de la Provincia." />
          <AccordionItem numero={9} isOpen={isOpenAll} textoAcordeon="Autorízase al Poder Ejecutivo Provincial a realizar las adecuaciones
          presupuestarias necesarias para solventar los gastos del funcionamiento administrativo del
          Defensor de los Derechos de Niños, Niñas y Adolescentes a los efectos de dar
          cumplimiento a la presente Ley." />
          <AccordionItem numero={10} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes debe
            informar anualmente a la Cámara de Representantes, la labor realizada antes del 1º de mayo
            de cada año.
            Cuando la gravedad o urgencia de los hechos lo aconsejan puede presentar un informe
            especial. Los informes anuales y especiales son publicados en el Boletín Oficial, en los
            Diarios de Sesiones y en Internet.
                                      " />

          <AccordionItem numero={11} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes debe dar
            cuenta en su informe anual de las denuncias presentadas y del resultado de la investigación.
            En ningún caso el informe debe contener los datos personales que permitan la pública
            identificación de los denunciantes y de los niños, niñas y adolescentes involucrados.
            El informe debe contener un anexo con la rendición de cuentas del presupuesto del
            organismo en el período que corresponda.
            " />
          <AccordionItem numero={12} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes determina
            en forma exclusiva los casos a los que dé curso; las presentaciones son gratuitas y la
            participación de gestores e intermediarios está prohibida." />
            <AccordionItem numero={13} isOpen={isOpenAll} textoAcordeon="El Defensor de los Derechos de Niños, Niñas y Adolescentes cesa en sus
            funciones por las siguientes causas:
            1) por renuncia;
            2) por vencimiento del plazo de su mandato;
            3) por incapacidad sobreviniente o muerte;
            4) por haber sido condenado mediante sentencia firme por delito doloso;
            5) por notoria negligencia en el cumplimiento de los deberes del cargo o por incurrir en la
            situación de incompatibilidad prevista por esta Ley.
            El Defensor adjunto reemplaza al Defensor de los Derechos de Niños, Niñas y
            Adolescentes en forma provisoria en caso de cese, muerte, suspensión o imposibilidad
            temporal, en el orden que son designados, promoviéndose en el más breve plazo la
            designación de un nuevo titular en la forma establecida en el Artículo 3." />
          <AccordionItem numero={14} isOpen={isOpenAll} textoAcordeon="Todas las entidades, organismos, personas humanas y jurídicas, de orden
            público o privado, están obligadas a prestar colaboración a los requerimientos del Defensor
            de los Derechos de Niños, Niñas y Adolescentes con carácter preferente y expedito.
            Todo aquel que desobedece u obstaculiza el ejercicio de las funciones previstas en los
            artículos precedentes incurre en los delitos y responsabilidades determinados en el Código
            Penal. El Defensor de los Derechos de Niños, Niñas y Adolescentes debe dar traslado de
            los antecedentes respectivos a la Fiscalía de Estado para el ejercicio de las acciones
            pertinentes. Puede requerir la intervención de la justicia para obtener la remisión de la
            documentación que le fue negada por cualquier organismo, institución o sus agentes." />
          <AccordionItem numero={15} isOpen={isOpenAll} textoAcordeon="Comprobada la veracidad de la denuncia o reclamo, el Defensor de los
            Derechos de Niños, Niñas y Adolescentes debe:
            1) promover y proteger los derechos de los niños, niñas y adolescentes mediante acciones y
            recomendaciones ante las instancias públicas competentes, a fin de garantizar el goce y el
            ejercicio de los mismos;
            2) denunciar las irregularidades verificadas ante los organismos pertinentes quienes deben
            comunicar al Defensor de los Derechos de Niños, Niñas y Adolescentes el resultado de las
            investigaciones realizadas;
            3) formular recomendaciones o propuestas a los organismos públicos o privados respecto a
            cuestiones inherentes a su función;
            4) informar a la opinión pública y a los denunciantes el resultado de las investigaciones y
            acciones realizadas. A tal efecto debe establecerse un espacio en los medios masivos de
            comunicación." />
                          CAPÍTULO II
          REGISTRO ÚNICO DE NIÑOS, NIÑAS Y ADOLESCENTES
          INSTITUCIONALIZADOS
          <AccordionItem numero={16} isOpen={isOpenAll} textoAcordeon="Créase el Registro Único de Niños, Niñas y Adolescentes
            Institucionalizados -RUNNAI-, el cual está a cargo del Defensor de los Derechos de Niños,
            Niñas y Adolescentes." />
          <AccordionItem numero={17} isOpen={isOpenAll} textoAcordeon="El RUNNAI se conforma con los datos de todas las personas menores de
            dieciocho (18) años de edad, con determinación de alojamiento en instituciones y/u
            organismos y/o entes cualquiera sea la denominación o naturaleza jurídica, que implique la
            separación de los niños, niñas y adolescentes de su familia o privación de su derecho a la
            convivencia familiar de origen, en función de la necesidad de garantizar los derechos a la
            identidad, integridad, protección, salud, y los demás derechos que se encuentran afectados
            en cada caso.
            El RUNNAI tiene como objetivos centralizar, sistematizar y garantizar el cruzamiento de
            información de toda la Provincia, en una base de datos sobre niños, niñas y adolescentes
            que en consideración a la protección de sus derechos, se encuentran institucionalizados, por
            diferentes motivos y en contextos distintos a los familiares o fuera de su familia de origen." />
          <AccordionItem numero={18} isOpen={isOpenAll} textoAcordeon="El RUNNAI contempla un sistema informático de recolección única y
            centralizada de la información de las medidas de protección excepcional tomadas por todas
            las personas con autoridad para hacerlo en todo el territorio de la Provincia de Misiones, en
            el que se establece de manera coordinada los mecanismos técnicos legales requeridos para
            la conformación del citado Registro." />
          <AccordionItem numero={19} isOpen={isOpenAll} textoAcordeon="El RUNNAI contiene información suministrada por los diferentes
            organismos, instituciones o personas, resguardada de conformidad a lo establecido en el
            Artículo 43 párrafo tercero de la Constitución Nacional y la Ley Nacional N.° 25.326 de
            Protección de los Datos Personales.
            La misma puede suministrarse a requerimiento de los niños, niñas y adolescentes, cuando
            éstos cuenten con la madurez necesaria y suficiente que le permita conocer y aceptar las
            vicisitudes por las que atravesaron o atraviesan su vida, su trayecto y su historia personal
            y/o cuando alcancen la mayoría de edad.
            Para casos extremos y especiales, a requerimiento de sus familiares y/o descendientes
            debidamente acreditado el vínculo, a fin de garantizar el derecho a la intimidad, a la
            identidad y a la confidencialidad de todo dato que signifique conocer la historia personal y
            de la vida de cada uno de los niños, niñas y adolescentes.
            " />
          <AccordionItem numero={20} isOpen={isOpenAll} textoAcordeon="En todos los casos, y sin perjuicio de otros que puedan resultar relevantes,
            el RUNNAI debe contener legajos individuales donde consten los siguientes datos:
            1) nombre completo, documento nacional de identidad, lugar y fecha de nacimiento y
            último domicilio de los niños, niñas y adolescentes;
            2) carátula de actuaciones judiciales o administrativas, si existen, datos de la familia de
            origen, lugares de cuidados alternativos o familia extensa y causas que determinaron la
            intervención judicial e institucionalización y/o alojamiento dispuesto;
            3) ficha de salud, según lo dispuesto por el Ministerio de Salud Pública de la Provincia de
            Misiones, donde los niños, niñas y adolescentes en situación de vulnerabilidad son asistidos
            semanalmente. Esta ficha debe contener informes actualizados mensualmente del
            psicólogo, trabajador social, psicopedagogo, psiquiatra y otros profesionales para el caso de
            que exista la necesidad de tratamientos prolongados, y si los niños, niñas y adolescentes
            son portadores de enfermedades crónicas físicas o psíquicas de tratamiento y medicación
            periódica; y
            4) ficha escolar, con datos semestrales del desempeño escolar del niño, con los respectivos
            informes del docente, psicopedagogo y otro profesional de la institución, si se requiere
            seguimiento específico, y el historial de las distintas instituciones escolares que acogieron o
            acogen a los niños, niñas y adolescentes.
            " />
          <AccordionItem numero={21} isOpen={isOpenAll} textoAcordeon="Para garantizar la inscripción de los niños, niñas y adolescentes en el
            RUNNAI y su posterior seguimiento y monitoreo, se llevan a cabo las siguientes acciones:
            1) en el caso que los niños, niñas y adolescentes no cuenten con documento nacional de
            identidad, el juez que interviene de oficio debe solicitar la inmediata gestión de
            documentación tendiente a efectivizar la inscripción de los niños, niñas y adolescentes, para
            poder acceder así a su identidad, así como la condición de existencia legal que resguarde su
            integridad física y jurídica;
            2) si al momento de incorporarse los niños, niñas y adolescentes al sistema de protección
            del Estado por orden judicial, se encuentran en estado de salud crítico, o sean víctima de
            algún tipo de violencia o explotación laboral, sexual, física o de otra índole, el organismo
            de salud debe proveer todos los medios y servicios necesarios a fin de garantizar su
            estabilidad psicofísica y emocional, resguardando todo material biológico e imágenes que
            pueden oficiar de pruebas;
            3) para el caso en que el alojamiento de niños, niñas y adolescentes resulte consecuencia de
            solicitud del padre, madre, hermano y/o adulto con responsabilidad parental, el instituto que
            lo reciba debe incorporar los datos personales de los adultos autorizantes y la
            documentación que acredita dicha circunstancia, bajo apercibimiento de las sanciones
            establecidas en el Código Penal, poniendo tal situación en conocimiento de las autoridades
            pertinentes y solicitando intervención judicial, en un plazo máximo de cuarenta y ocho (48)
            horas; y
            4) en caso de que haya modificación en la institución de destino de niños, niñas y
            adolescentes de que se trate por orden de la autoridad competente, los plazos, la nueva
            modalidad, lugar de alojamiento, las condiciones y demás requerimientos deben
            efectivizarse y comunicarse de conformidad a lo establecido en el Artículo 20. 
                " />
          <AccordionItem numero={22} isOpen={isOpenAll} textoAcordeon="Para garantizar la inscripción de los niños, niñas y adolescentes en el
          RUNNAI y su posterior seguimiento y monitoreo, se llevan a cabo las siguientes acciones:
          1) en el caso que los niños, niñas y adolescentes no cuenten con documento nacional de
          identidad, el juez que interviene de oficio debe solicitar la inmediata gestión de
          documentación tendiente a efectivizar la inscripción de los niños, niñas y adolescentes, para
          poder acceder así a su identidad, así como la condición de existencia legal que resguarde su
          integridad física y jurídica;
          2) si al momento de incorporarse los niños, niñas y adolescentes al sistema de protección
          del Estado por orden judicial, se encuentran en estado de salud crítico, o sean víctima de
          algún tipo de violencia o explotación laboral, sexual, física o de otra índole, el organismo
          de salud debe proveer todos los medios y servicios necesarios a fin de garantizar su
          estabilidad psicofísica y emocional, resguardando todo material biológico e imágenes que
          pueden oficiar de pruebas;
          3) para el caso en que el alojamiento de niños, niñas y adolescentes resulte consecuencia de
          solicitud del padre, madre, hermano y/o adulto con responsabilidad parental, el instituto que
          lo reciba debe incorporar los datos personales de los adultos autorizantes y la
          documentación que acredita dicha circunstancia, bajo apercibimiento de las sanciones
          establecidas en el Código Penal, poniendo tal situación en conocimiento de las autoridades
          pertinentes y solicitando intervención judicial, en un plazo máximo de cuarenta y ocho (48)
          horas; y
          4) en caso de que haya modificación en la institución de destino de niños, niñas y
          adolescentes de que se trate por orden de la autoridad competente, los plazos, la nueva
          modalidad, lugar de alojamiento, las condiciones y demás requerimientos deben
          efectivizarse y comunicarse de conformidad a lo establecido en el Artículo 20. 
                " />
          <AccordionItem numero={23} isOpen={isOpenAll} textoAcordeon="Créase un Fondo Especial para la implementación del RUNNAI que está
          integrado por los siguientes recursos:
          1) las sumas que del presupuesto general de la Provincia se asignan anualmente al Fondo
          Especial;
          2) los recursos específicos provenientes de organismos provinciales, nacionales e
          internacionales; y
          3) préstamos, legados, donaciones, contribuciones y aportes de personas de existencia
          humana o jurídica, públicas o privadas, internacionales, nacionales, provinciales y
          municipales a través de la firma de convenios específicos.
                " />
          <AccordionItem numero={24} isOpen={isOpenAll} textoAcordeon="El Poder Ejecutivo reglamentará la presente Ley." />
          <AccordionItem numero={25} isOpen={isOpenAll} textoAcordeon="- - Comuníquese al Poder Ejecutivo. " />
        </div>
      </div>
    </div>
  );
}


export default leyIV;