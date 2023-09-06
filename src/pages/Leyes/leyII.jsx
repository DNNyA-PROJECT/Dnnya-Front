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

function leyII() {
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
            <h2>LEY II – N.° 16</h2>
            <h4>(Antes Ley 3820) </h4>
            <p> LEY DE PROTECCIÓN INTEGRAL DE LOS DERECHOS </p>
            <p> DE NIÑOS, NIÑAS Y ADOLESCENTES </p> 
            <p> LIBRO I </p>
            <p> PROTECCIÓN INTEGRAL DE LOS DERECHOS </p>
            <p> TÍTULO I   </p>
            <p>  DISPOSICIONES GENERALES </p>
            <p>  CAPÍTULO ÚNICO </p>
            <p> FINALIDAD Y OBJETIVOS </p>
          </div>


          <AccordionItem numero={1} isOpen={isOpenAll} textoAcordeon="Objeto. La presente ley tiene por finalidad garantizar el goce, ejercicio y la
                        protección integral de los derechos de niños, niñas y adolescentes en la provincia de
                        Misiones.
                        " />
          <AccordionItem numero={2} isOpen={isOpenAll} textoAcordeon="Aplicación legal. Los derechos y garantías enunciados en esta ley se
                        entienden como complementarios de los reconocidos en la Constitución Nacional,
                        Convención Internacional sobre los Derechos del Niño; las Reglas Mínimas de las
                        Naciones Unidas para la Administración de la Justicia de menores (Reglas de Beijing),
                        Resolución N.º 40/33 de la Asamblea General; las Reglas de las Naciones Unidas para la
                        protección de los menores privados de libertad, Resolución N.º 45/113 de la Asamblea
                        General y las Directrices de Naciones Unidas para la Prevención de la Delincuencia Juvenil
                        (Directrices de Riad); demás convenciones y tratados internacionales en los que el Estado
                        argentino sea parte; leyes nacionales y la Constitución de la Provincia de Misiones." />
          <AccordionItem numero={3} isOpen={isOpenAll} textoAcordeon="Concepto de niño, niña y adolescente. A los efectos de esta ley, se
                        considera niño o niña a toda persona hasta los dieciocho (18) años de edad, entendiéndose
                        como adolescencia la etapa de niñez comprendida entre los trece (13) y hasta los dieciocho
                        (18) años. En caso de duda se presume la edad de niño, niña y adolescente establecida en
                        esta ley y prevalece la condición de adolescente ante la de adulto y de niño, niña ante la de
                        adolescente, hasta tanto se pruebe lo contrario." />
          <AccordionItem numero={4} isOpen={isOpenAll} textoAcordeon="Interés superior. El interés superior de niños, niñas y adolescentes, es un
                        principio de interpretación y aplicación de esta ley, dirigido a asegurar el desarrollo integral
                        de los niños, niñas y adolescentes, así como el goce y ejercicio pleno y efectivo de sus
                        derechos y garantías. Es de obligatorio cumplimiento en la toma de todas las decisiones
                        concernientes a los niños, niñas y adolescentes.
                        Para determinar el interés superior del niño, niña y adolescente en una situación concreta se
                        debe apreciar lo siguiente: 
                        1) la opinión del niño, niña y adolescente;
                        2) la necesidad de equilibrio entre los derechos y garantías del niño, niña y adolescente y
                        sus deberes; 
                        3) la necesidad de equilibrio entre los derechos y garantías del niño, niña y adolescente y
                        las exigencias del bien común;
                        4) la necesidad de equilibrio entre los derechos y garantías del niño, niña y adolescente y
                        los derechos de las personas adultas;
                        5) la condición específica del niño, niña y adolescente, como personas.
                        En aplicación del interés superior del niño, niña y adolescente, cuando exista conflicto entre
                        los derechos e intereses de los niños, niñas y adolescentes frente a otros derechos e
                        intereses igualmente legítimos, prevalecen los primeros." />
          <AccordionItem numero={5} isOpen={isOpenAll} textoAcordeon="- Derechos fundamentales. El niño, niña y adolescente es titular de todos los
                        derechos y garantías fundamentales inherentes a su condición de persona y de la protección
                        jurídica y derechos específicos consagrados en esta ley. La Provincia promueve su
                        participación social y las máximas oportunidades para su pleno desarrollo físico, psíquico,
                        moral, espiritual y social, en condiciones de libertad, igualdad, dignidad y equidad." />
          <AccordionItem numero={6} isOpen={isOpenAll} textoAcordeon="Remoción de obstáculos. Es indelegable e imprescriptible la
                        responsabilidad de las áreas gubernamentales del Estado en la adopción de medidas
                        administrativas, legislativas y de otra índole para la plena satisfacción de los derechos de
                        los niños, niñas y adolescentes." />
          <AccordionItem numero={7} isOpen={isOpenAll} textoAcordeon="Efectivización de derechos. Es responsabilidad conjunta de la familia, la
                        sociedad y el Estado, asegurar a los niños, niñas y adolescentes con absoluta prioridad, la
                        efectivización de los derechos a la vida, la salud, la libertad, la identidad, la alimentación, la
                        educación, la vivienda, la cultura, a ser oídos y que sus opiniones sean tenidas en cuenta, a
                        recibir guía y orientación para ejercer los derechos reconocidos, a buscar y recibir
                        información, a no ser discriminados, a la recreación, al deporte, a la formación integral, a la
                        convivencia familiar y comunitaria. La familia procura su constitución como grupo
                        caracterizado por relaciones de respeto mutuo, equidad, igualdad, no discriminación por
                        razones de sexo en la asunción de los roles entre adultos y en relación a los niños, niñas y
                        adolescentes.
                        " />
          <AccordionItem numero={8} isOpen={isOpenAll} textoAcordeon="Garantía de prioridad. Los niños, niñas y adolescentes tienen prioridad en
                          la:
                          1) protección y auxilio cualquiera sea la circunstancia;
                          2) atención en los servicios públicos;
                          3) asignación de recursos públicos en el diseño, formulación y ejecución de políticas en las
                          áreas relacionadas con la efectivización y la protección de los derechos de niños, niñas,
                          adolescentes y la familia;
                          4) consideración y ponderación de las necesidades y problemáticas de la comunidad local a
                          la que pertenecen." />
          <AccordionItem numero={9} isOpen={isOpenAll} textoAcordeon="Principios básicos. El diseño de la política respecto a la infanciaadolescencia, se basa en el fortalecimiento de la familia y de las redes de solidaridad social,
                          implementando planes que facilitan el acceso a los bienes y servicios a toda la población
                          como efectiva práctica de la superación de las desigualdades y de la exclusión social,
                          promoviendo la protección de derechos mediante la implementación de un sistema que
                          garantice la eficiencia de los servicios de apoyo familiar y social.
                          " />
          <AccordionItem numero={10} isOpen={isOpenAll} textoAcordeon="Interpretación. En la interpretación y aplicación de la presente ley se tiene
                          en cuenta la condición del niño, niña y adolescente como sujeto titular de derechos y
                          deberes, contemplándose especialmente su condición de persona en desarrollo. El niño,
                          niña y adolescente tienen participación activa en la sociedad y no pueden ser considerados
                          objeto de socialización, control o prueba.
                          " />

          TÍTULO II
          DERECHOS FUNDAMENTALES Y GARANTÍAS
          CAPÍTULO ÚNICO
          DERECHOS. GARANTÍAS PROCESALES

          <AccordionItem numero={11} isOpen={isOpenAll} textoAcordeon=" Derecho a la vida, derecho a la salud, derecho a la libertad ambulatoria,
                dignidad, identidad y respeto. Los niños, niñas y adolescentes tienen derecho a la vida, a su
                disfrute y protección, a la seguridad y libertad ambulatoria. Tienen derecho a la salud desde
                una perspectiva integral. Derecho a la dignidad, identidad en todas sus dimensiones y fases,
                y a ser sujetos titulares de todos los derechos humanos, para lo cual se adoptan garantías" />
          <AccordionItem numero={12} isOpen={isOpenAll} textoAcordeon="Protección integral de la salud. El niño, niña y adolescente tiene derecho
                a la salud desde una perspectiva integral, a ese efecto el Estado provincial adopta medidas
                para:
                1) reducir la morbimortalidad;
                2) prevenir y combatir enfermedades y la malnutrición;
                3) garantizar al niño, niña y adolescente y a los miembros de la familia conviviente el
                acceso a la información de principios básicos de salud y nutrición, salud reproductiva, el
                derecho a la lactancia materna, la higiene, el saneamiento ambiental y todas las medidas de
                cuidado y prevención;
                4) asegurar la atención sanitaria preventiva, y el reconocimiento del derecho a la salud
                reproductiva planteando la salud como meta;
                5) proveer gratuitamente a los niños, niñas y adolescentes de familias de escasos recursos,
                atención médica, medicamentos, prótesis u otros elementos necesarios para su tratamiento y
                rehabilitación;
                6) garantizar la aplicación de los principios consagrados en esta ley en materia de
                prestaciones y seguimientos relativos a la salud mental;
                7) garantizar la atención de la salud a toda niña embarazada;
                8) vacunar gratuitamente según el esquema vigente;
                9) proporcionar condiciones dignas para que los padres o miembros de la familia ampliada
                responsable del cuidado del niño, niña o adolescente, permanezcan todo el tiempo durante
                el cual se prolongue la internación en establecimientos de salud;
                10) garantizar el derecho a niños y niñas a gozar de la lactancia materna, inclusive aquellos
                cuyas madres cumplen penas privativas de libertad, durante un período no menor de
                veinticuatro (24) meses consecutivos a partir del momento del nacimiento, sin que pueda
                separarse al niño o niña de su madre, y proporcionando lugares especiales para la
                comunicación entre madre e hijo" />
          <AccordionItem numero={13} isOpen={isOpenAll} textoAcordeon="Atención perinatal. Los establecimientos públicos y privados que realizan
                atención del embarazo, del parto y del recién nacido, están obligados a:
                1) conservar las historias clínicas individuales por el plazo de treinta (30) años;
                2) determinar pesquisas y terapéutica de enfermedades congénitas del metabolismo en el
                período neonatal, así como prestar orientación a los padres;
                3) proveer una declaración de nacimiento donde conste lo ocurrido en el parto y el
                desenvolvimiento del neonato;
                4) posibilitar la permanencia del neonato junto con la madre;
                5) ejecutar acciones planificadas y programadas, focalizadas hacia los grupos de mayor
                vulnerabilidad, para garantizar el adecuado seguimiento del embarazo, parto, puerperio de
                la madre;
                6) garantizar la atención de todas las enfermedades perinatales en el ámbito estatal y
                privado." />
          <AccordionItem numero={14} isOpen={isOpenAll} textoAcordeon="- Derecho a la identidad. El derecho del niño, niña y adolescente a la
                identidad comprende el derecho a una nacionalidad, a un nombre, a su cultura, a su lengua
                de origen, a su orientación sexual, a conocer la identidad de ambos progenitores y a las
                relaciones familiares sin injerencias ilícitas.
                En caso de privación ilegal de algunos o todos los elementos de la identidad, el Estado
                provincial presta asistencia y protección apropiadas para restablecer el derecho
                rápidamente" />
          <AccordionItem numero={15} isOpen={isOpenAll} textoAcordeon="Medidas de protección de identidad. Como medidas para efectivizar el
                derecho a la identidad, el Estado provincial debe:
                1) identificar al recién nacido mediante el procedimiento que establece la normativa
                vigente;
                2) inscribir al niño, niña o adolescente. En ningún caso la indocumentación de la madre o
                del padre es obstáculo para que se inscriba al recién nacido o las personas menores de
                dieciocho (18) años de edad;
                3) facilitar y colaborar para obtener información, la búsqueda o localización de los padres u
                otros familiares del niño, niña o adolescente, propiciando el reencuentro familiar" />
          <AccordionItem numero={16} isOpen={isOpenAll} textoAcordeon="Derecho a la integridad. Los niños, niñas y adolescentes tienen derecho a
                la integridad biopsicosocial, a la intimidad, a la privacidad, a la autonomía personal, social
                y jurídica; al respeto a sus valores, ideas o creencias y a sus espacios y objetos personales" />
          <AccordionItem numero={17} isOpen={isOpenAll} textoAcordeon="Derecho a la libertad ambulatoria. Todos los niños, niñas y adolescentes
                tienen derecho a la libertad ambulatoria sin más límites que los establecidos por ley. No
                pueden ser privados de ella ilegal o arbitrariamente.
                Por privación de libertad se entiende toda forma de detención o encarcelamiento, así como
                internación en un establecimiento público o privado del que no se permita salir al niño, niña
                o adolescente por su propia voluntad.
                La privación de libertad de niños, niñas y adolescentes se debe realizar de conformidad con
                la ley, por tiempo determinado y se aplicará como medida de último recurso por el período
                más breve que proceda.
                Todos los niños, niñas y adolescentes tienen derecho al control judicial de la privación de la
                libertad ambulatoria y al amparo de su libertad ambulatoria de conformidad con la ley.
                " />
          <AccordionItem numero={18} isOpen={isOpenAll} textoAcordeon="Derecho a ser oídos. El niño, niña y adolescente tienen derecho a ser
                oídos y a que sus opiniones sean tenidas en cuenta en cualquier ámbito, cuando se trata de
                sus intereses o al encontrarse involucrados en cuestiones o procedimientos relativos a sus
                derechos." />
          <AccordionItem numero={19} isOpen={isOpenAll} textoAcordeon="Derecho a la dignidad. Es responsabilidad de la familia, la sociedad y el
                Estado proteger la dignidad del niño, niña y adolescente como sujeto de derechos humanos,
                impidiendo que sean sometidos a trato violento, discriminatorio, vejatorio, humillante,
                intimidatorio, a prostitución, explotación sexual o a cualquier condición inhumana o
                degradante." />
          <AccordionItem numero={20} isOpen={isOpenAll} textoAcordeon=" Derecho a ser respetado. El respeto al niño, niña y adolescente consiste en
                brindarle comprensión, propiciar oportunidades para el despliegue de sus actividades,
                promover el desarrollo de sus potencialidades individuales, y garantizar el goce y ejercicio
                de sus derechos con el protagonismo activo inherente a las prácticas cívicas acordes con su
                edad y responsabilidades." />
          <AccordionItem numero={21} isOpen={isOpenAll} textoAcordeon="Derecho a la igualdad. No se admite discriminación ni segregación por
                razones o con pretexto de raza, etnia, sexo, género, edad, ideología, religión, opinión,
                nacionalidad, caracteres físicos, condición psicofísica, social, económica, creencias
                culturales o cualquier otra circunstancia que implica exclusión o menoscabo de los niños,
                niñas y adolescentes.
                " />
          <AccordionItem numero={22} isOpen={isOpenAll} textoAcordeon="Derecho a la convivencia familiar y comunitaria. El niño, niña y
                adolescente tienen derecho a ser criados y cuidados por sus padres y a permanecer en su
                grupo familiar de origen, en una convivencia sustentada en vínculos y relaciones de
                igualdad y equidad, afectivas y comunitarias.
                La convivencia dentro de otros grupos familiares es considerada en circunstancias
                excepcionales.
                El Estado respeta las responsabilidades de los padres, sin injerencias arbitrarias en la vida
                familiar.
                La carencia o insuficiencia de recursos materiales del padre, madre o responsable no
                constituye causa para la separación del niño, niña y adolescente de su grupo familiar. Es
                responsabilidad del Estado en esos casos incluir a los miembros de la familia y a falta de
                ella, de la familia ampliada y de la comunidad según la costumbre local, en programas de
                asistencia y orientación a la familia.
                " />
          <AccordionItem numero={23} isOpen={isOpenAll} textoAcordeon="Derecho a la educación. El derecho a la educación a través del sistema de
                enseñanza formal y acciones educativas no formales contribuye al afianzamiento de valores
                basados en el reconocimiento de los derechos humanos, la pluralidad cultural, la diversidad,
                el medio ambiente, los recursos naturales y los bienes sociales, preparando al niño, niña y
                adolescente para asumir como ciudadano las responsabilidades de su vida en una sociedad
                democrática.
                " />
          <AccordionItem numero={24} isOpen={isOpenAll} textoAcordeon="Derechos comprendidos. El derecho reconocido en el artículo anterior
                comprende los derechos a:
                1) ser respetado por parte de todos los integrantes de la comunidad educativa;
                2) ser oído con anterioridad a la aplicación de cualquier medida o sanción disciplinaria, las
                que únicamente pueden tomarse a través de normas y procedimientos legales y previamente
                establecidos;
                3) recurrir a instancias escolares superiores o extra educativas en caso de aplicación de
                sanciones;
                4) ser evaluado por sus desempeños y logros conforme a las normas y procedimientos
                aceptados previamente y a conocer u objetar criterios de evaluación, pudiendo recurrir a
                instancias escolares superiores;
                5) constituir y participar en organizaciones estudiantiles;
                6) conocer los derechos que le son reconocidos, las acciones para su ejercicio y defensa y
                contar con patrocinio profesional sin costo, en caso de carencia de recursos." />
          <AccordionItem numero={25} isOpen={isOpenAll} textoAcordeon="- Garantías mínimas educativas. Como medidas de acción positiva de
                efectividad de los derechos reconocidos en los artículos 23 y 24 de la presente, el Estado
                provincial garantiza:
                1) el acceso al conocimiento e información de los procedimientos para la construcción de
                las normativas de convivencia y su participación en la formulación;
                2) el diseño e implementación de lineamientos curriculares acordes con las necesidades del
                niño, niña y adolescente según su sexo y edad y que viabilicen el desarrollo máximo de las
                potencialidades individuales;
                3) la implementación de investigaciones, nuevas propuestas y tecnologías relativas a los
                diseños curriculares, con miras a dar respuesta a las necesidades de integración de la
                diversidad de la población infantil y adolescente en la educación común;
                4) la constitución de instancias escolares superiores o extra educativas para recurrir las
                sanciones dispuestas;
                5) el contralor del cumplimiento de las distintas funciones que ejercen cada uno de los
                organismos en sus competencias específicas. " />
          <AccordionItem numero={26} isOpen={isOpenAll} textoAcordeon="Derecho a la recreación, juego, deporte y descanso. El Estado adopta
                medidas que posibilitan el goce efectivo de los derechos a la recreación, al juego, al deporte
                y al descanso.
                " />
          <AccordionItem numero={27} isOpen={isOpenAll} textoAcordeon="Participación. El Estado provincial y los municipios que adhieren a la
                presente ley, facilitan y promueven la asignación de recursos para financiar planes,
                programas y proyectos culturales, recreativos y deportivos, impulsando iniciativas de
                diseño e implementación, que promueven el protagonismo de las organizaciones de la
                sociedad civil y del niño, niña y adolescente, integrando la participación de niños, niñas o
                adolescentes con discapacidades." />
          <AccordionItem numero={28} isOpen={isOpenAll} textoAcordeon="Erradicación del trabajo infantil. Es responsabilidad de los organismos
                del Estado diseñar e implementar políticas específicas de prevención y erradicación del
                trabajo infantil." />
          <AccordionItem numero={29} isOpen={isOpenAll} textoAcordeon="- Derecho a la protección contra la explotación. Es responsabilidad de los
                organismos del Estado diseñar e implementar políticas específicas para la prevención y
                erradicación de cualquier forma de explotación de los niños, niñas y adolescentes, realizada
                para solventar sus necesidades, contribuir al sostenimiento familiar o de otras personas
                adultas." />
          <AccordionItem numero={30} isOpen={isOpenAll} textoAcordeon="Derecho a la libre expresión, información y participación. Los niños,
                niñas y adolescentes tienen derecho a:
                1) informarse, expresarse y a que se tengan en cuenta sus opiniones;
                2) creer y profesar cultos religiosos;
                3) participar en la vida política;
                4) asociarse y celebrar reuniones;
                5) usar, transitar y permanecer en los espacios públicos.
                " />
          <AccordionItem numero={31} isOpen={isOpenAll} textoAcordeon="Garantías procesales. El Estado garantiza a los niños, niñas y
                adolescentes en todo proceso legal, los principios y garantías procesales reconocidos a las
                personas adultas y los inherentes a la protección complementaria de la que son sujetos
                titulares, en especial:
                1) a ser considerado inocente hasta tanto se demuestre su culpabilidad;
                2) al pleno y formal conocimiento del acto infractor que se le atribuye y de las garantías
                procesales con que cuenta. Todo ello debe ser explicado en forma suficiente, oportuna y
                adecuada al nivel cultural del niño, niña y adolescente;
                3) a la igualdad en la relación procesal, a cuyo efecto puede producir toda la prueba que
                resulta conducente para su defensa;
                4) a la asistencia técnica letrada especializada para la defensa de sus derechos,
                independientemente de la representación complementaria del artículo 103 del Código Civil
                y Comercial de la Nación;
                5) a tener participación activa en el proceso y a ser oído personalmente por las autoridades
                competentes administrativas y judiciales;
                6) a negarse a declarar, sin que ello implique presunción en su contra;
                7) a solicitar la presencia inmediata de los padres o responsables a partir de su aprehensión
                o detención y en cualquier etapa del procedimiento;
                8) a que sus padres, responsables o personas con quien el niño, niña y adolescente tenga
                trato afectivo, sean informados de inmediato y en un plazo máximo de una hora, en caso de
                aprehensión o detención, del lugar donde se encuentra, hecho que se le imputa, tribunal y
                organismo de prevención intervinientes;
                9) a preservar su intimidad." />
          <AccordionItem numero={32} isOpen={isOpenAll} textoAcordeon="Reserva de identidad. Ningún medio de comunicación social, público o
                privado, debe publicar o difundir informaciones que identifiquen o puedan dar lugar a la
                identificación de niños, niñas y adolescentes, víctimas o infractores de disposiciones
                penales o contravencionales, salvo las circunstancias de excepción prevista en el artículo
                72.
                " />
          TÍTULO III
          SISTEMA DE PROTECCIÓN INTEGRAL DE DERECHOS
          CAPÍTULO I
          DISPOSICIÓN GENERAL
          <AccordionItem numero={33} isOpen={isOpenAll} textoAcordeon="Concepto. A los fines de esta ley, se entiende por sistema de protección
            integral de derechos al conjunto de medidas, mecanismos y procedimientos articulados
            entre la familia, la comunidad y el Estado, tendientes a garantizar la efectividad del goce y
            ejercicio de los derechos del niño, niña y adolescente, reconociendo a la familia como
            primordial operador en la defensa, promoción y protección de tales derechos." />
          <AccordionItem numero={34} isOpen={isOpenAll} textoAcordeon="Principios generales. Las políticas públicas de protección integral de los
            derechos del niño, niña y adolescente, y la familia, se implementan mediante la
            concertación articulada transversalmente de acciones de la Provincia, los municipios que
            adhieren a la presente ley, con la participación de las organizaciones de la sociedad civil,
            promoviendo la amplia participación de los miembros de la comunidad, en especial de los
            niños, niñas y adolescentes, con la finalidad de lograr la vigencia y el goce pleno de los
            derechos y las garantías reconocidos en esta ley.
            A tal fin se promueve la descentralización en la atención de situaciones que pueden ser
            mejor resueltas por el municipio, con la participación de las organizaciones de la sociedad
            civil legalmente constituidas, privilegiando las realidades locales.
            " />
          CAPÍTULO II
          POLÍTICAS PÚBLICAS
          <AccordionItem numero={35} isOpen={isOpenAll} textoAcordeon="Ejes conceptuales. Las políticas públicas tienden a:
            1) fortalecer el rol de la familia como principal ejecutor de la efectivización de los derechos
            del niño, niña y adolescente;
            2) descentralizar los organismos de aplicación de los planes y programas específicos de las
            distintas políticas de protección integral de derechos, a fin de garantizar mayor autonomía,
            agilidad y eficiencia;
            3) diseñar, desarrollar, monitorear, articular y evaluar los planes, programas y proyectos
            específicos de las distintas áreas de salud, educación, vivienda, recreación, trabajo, deporte,
            cultura, seguridad pública y social, con criterios de integridad, transversalidad,
            intersectorialidad e interdisciplinariedad y participación activa de la comunidad;
            4) propiciar la constitución de organizaciones y organismos para la defensa de los derechos
            del niño, niña y adolescente que brindan asesoramiento y patrocinio jurídico gratuito,
            deduzcan denuncias o promuevan acciones ante tribunales, asesorías, fiscalías, defensorías,
            y asociaciones profesionales con las que se convenga la actuación en carácter de defensa
            técnica;
            5) propender a la formación de redes sociales que contribuyan a la optimización de los
            recursos existentes." />
          CAPÍTULO III
          MEDIDAS DE PROTECCIÓN DE DERECHOS
          <AccordionItem numero={36} isOpen={isOpenAll} textoAcordeon="- Definición. Las medidas de protección de derechos tienen como finalidad
            la preservación o restitución del goce y ejercicio de derechos amenazados o vulnerados y la
            reparación de sus consecuencias; pueden ser acordadas en forma aislada o conjuntamente;
            son limitadas en el tiempo y se mantienen mientras persistan las causas que dieron origen a
            la violación, amenaza o restricción.
            Sólo pueden ser acordadas con la participación del niño, niña o adolescente y demás partes
            interesadas, ante la violación, amenaza o restricción de los derechos del niño, niña y
            adolescente por acción u omisión del Estado, la comunidad o la familia.
            Se da prioridad a las medidas que tienen por finalidad la preservación de los vínculos
            familiares y el fortalecimiento de su rol en relación al niño, niña y adolescente.
            En ningún caso estas medidas pueden consistir en privación de la libertad.
            Las medidas adoptadas pueden ser sustituidas en cualquier momento por otras que
            garantizan de mejor forma el goce y ejercicio de los derechos." />
          <AccordionItem numero={37} isOpen={isOpenAll} textoAcordeon="Formas alternativas de convivencia. Cuando medie inexistencia o
            privación del grupo familiar de pertenencia, las medidas de protección consisten en la
            búsqueda e individualización de alternativas para que el niño, niña y adolescente conviva
            con personas vinculadas a él a través de líneas de parentesco, por consanguinidad o por
            afinidad, o con otros miembros de la familia ampliada o de la comunidad, según la
            costumbre local, teniendo en cuenta la opinión y los deseos del niño, niña y adolescente en
            todos los casos.
            Cualesquiera de esas formas alternativas de convivencia, instrumentadas con la
            intervención de las agencias de protección de derechos, configura una guarda provisoria
            que debe formalizarse con intervención del juez competente.
            La guarda formalizada ante el juez competente, debe efectuarse bajo constancia de que los
            padres o responsables, han sido informados de las responsabilidades que les competen con
            relación al niño, niña y adolescente, así como las condiciones en que la guarda va a
            ejercerse.
            Ninguna autoridad pública o privada, puede obstaculizar el pleno goce de los derechos de
            los niños, niñas y adolescentes, bajo pretexto de que la guarda provisoria no ha sido
            formalizada judicialmente." />
          <AccordionItem numero={38} isOpen={isOpenAll} textoAcordeon="Desjudicialización de la pobreza. Cuando la violación, amenaza o
            restricción de derechos se produce como consecuencia de necesidades básicas insatisfechas,
            carencias o dificultades materiales, económicas, laborales o de vivienda; las medidas de
            protección a aplicar, consisten en los planes, programas y proyectos sociales establecidos
            por las políticas públicas, que deben brindar orientación, ayuda y apoyo, incluso
            económico, con miras a la sustentación y fortalecimiento de los vínculos del grupo familiar
            responsable del desarrollo integral del niño, niña y adolescente." />
          <AccordionItem numero={39} isOpen={isOpenAll} textoAcordeon="Medida excepcional. Cuando un niño, niña o adolescente llega por
            cualquier circunstancia de vulneración de algunos de sus derechos a una institución pública
            o privada de atención o asistencia a la infancia, sus responsables deben informar en el
            término máximo de veinticuatro (24) horas o el primer día hábil inmediato posterior a las
            instancias administrativas provinciales o municipales que integran el sistema de protección
            integral de derechos de la presente ley, a fin de que articulen inmediatamente las medidas
            alternativas de convivencia familiar del artículo 37 de la presente." />
          <AccordionItem numero={40} isOpen={isOpenAll} textoAcordeon="Comunicación. Toda persona que tome conocimiento de la existencia de
            abuso físico, psíquico, sexual, explotación o cualquier trato que impida o menoscabe los
            derechos de un niño, niña y adolescente, debe informarlo inmediatamente a las instancias
            administrativas creadas por esta ley en los ámbitos provincial o municipal." />
          <AccordionItem numero={41} isOpen={isOpenAll} textoAcordeon="Medidas de protección de derechos. Investigada y comprobada la
            violación, amenaza o restricción de derechos, pueden implementarse, sin perjuicio de las
            demás mencionadas en el presente Capítulo, las siguientes medidas:
            1) guía, consejo y asistencia al niño, niña y adolescente, y la familia;
            2) apoyo para que el niño, niña y adolescente permanezca con su grupo familiar;
            3) asistencia integral a la embarazada, teniendo especialmente en cuenta la situación de
            quienes pretenden otorgar la guarda de su hijo con fines de adopción;
            4) instancia de conferencia del grupo familiar a los fines de la resolución de conflictos;
            5) apoyo para la inscripción y asistencia a establecimientos educativos, los que deben dar
            en su formación debida consideración a los deseos y opiniones del niño, niña y adolescente,
            y sus familias;
            6) promoción de espacios de participación en ámbitos comunitarios;
            7) asistencia para la realización de tratamientos médicos, psiquiátricos o de adicciones, en
            sistemas de internación o ambulatorios;
            8) permanencia temporal en ámbitos familiares alternativos dentro del Sistema de
            Acogimiento Familiar Alternativo, como medida excepcional, por el menor tiempo posible
            e impulsando mecanismos que permitan la más rápida revinculación con la familia de
            origen, nuclear o extensa, salvo que existan razones fundadas para que la medida se lleve a
            cabo en ámbitos familiares alternativos de entidades públicas o privadas.
            Las medidas enunciadas en este artículo deben ser acordadas originariamente en las
            instancias administrativas creadas en los ámbitos provincial o municipal con la debida
            participación del niño, niña y adolescente, y su familia, o aquellos a los que adhiere
            afectivamente. Las medidas previstas en los incisos 7), cuando no hubo acuerdo y 8) de este artículo,
            deben ser dispuestas con intervención de la autoridad judicial competente." />
          <AccordionItem numero={42} isOpen={isOpenAll} textoAcordeon="Exclusión. Verificada la situación de maltrato o abuso psíquico o físico
            por parte de los padres o responsables del niño, niña y adolescente, el juez puede, de
            acuerdo a la normativa vigente, determinar la exclusión del agresor de la vivienda común." />
          CAPÍTULO IV
          DISEÑO ORGANIZACIONAL
          <AccordionItem numero={43} isOpen={isOpenAll} textoAcordeon="Concepto. El diseño organizacional para la operativización y vigencia
            plena de derechos tiende hacia la constitución de áreas de desarrollo, regidas por los ejes
            establecidos en la presente ley.
            " />
          CONSEJO PROVINCIAL DE GARANTÍAS DE LOS DERECHOS DE NIÑOS,
          NIÑAS, ADOLESCENTES Y LA FAMILIA
          <AccordionItem numero={44} isOpen={isOpenAll} textoAcordeon="Creación. Créase el Consejo Provincial de Garantías de los Derechos de
            Niños, Niñas, Adolescentes y la Familia, como organismo intersectorial de articulación,
            deliberación, consulta y asesoramiento en políticas públicas de la niñez, la adolescencia y la
            familia, en el que convergen las áreas gubernamentales y no gubernamentales que tienen
            como finalidad la promoción y defensa de los derechos de niños, niñas, adolescentes y la
            familia." />
          <AccordionItem numero={45} isOpen={isOpenAll} textoAcordeon="Funciones. Son funciones del Consejo Provincial de Garantías de los
            Derechos de Niños, Niñas, Adolescentes y la Familia, las siguientes:
            1) dictar su reglamento interno;
            2) promover y articular transversalmente, en un espacio de deliberación y participación,
            acciones entre las distintas áreas del Estado y la sociedad civil para la efectivización de los
            derechos reconocidos en la presente ley, a fin de evitar omisiones y superposiciones;
            3) aconsejar, asesorar y proponer al Gobierno de la Provincia el diseño de las políticas y el
            presupuesto del área, procurando el logro de máximos consensos;
            4) promover la participación social de los niños, niñas y adolescentes para el ejercicio pleno
            de la ciudadanía;
            5) requerir la información necesaria para el cumplimiento de sus fines;
            6) promover gradualmente la constitución de consejos y agencias como instancias
            descentralizadas, en los ámbitos municipales, a través de convenios entre la provincia y los
            municipios que adhieren a la presente ley;
            7) promover el desarrollo de programas de fortalecimiento institucional de los organismos
            de los Ejecutivos provincial y municipales, para la gestión integral de las políticas del área;
            8) proponer la realización de estudios, relevamientos, diagnósticos situacionales y la
            creación de sistemas de información permanente sobre la materia específica, su evolución a
            nivel provincial y sobre el estado de avance en el cumplimiento de la Convención sobre los
            Derechos del Niño y los demás instrumentos contemplados en el artículo 2 de la presente;
            9) proponer anteproyectos legislativos específicos;
            10) propiciar la elaboración de materiales y documentos de promoción, información y
            difusión de los derechos;
            11) aconsejar el diseño de instrumentos de rápido relevamiento de información a nivel
            municipal para detectar situaciones que amenacen los derechos de niños, niñas y
            adolescentes, y la familia;
            12) requerir la información necesaria para el cumplimiento de sus fines;
            13) celebrar convenios con organizaciones internacionales, nacionales, provinciales y
            municipales para la implementación de las políticas sociales vinculadas a la temática." />
          <AccordionItem numero={46} isOpen={isOpenAll} textoAcordeon="Integración. El Consejo Provincial de Garantías de los Derechos de
            Niños, Niñas, Adolescentes y la Familia, se integra con:
            1) un (1) representante de máxima jerarquía de cada área de competencia vinculada a la
            temática de la niñez, la adolescencia y la familia, de los Ministerios de Desarrollo Social, la
            Mujer y la Juventud; Educación, Ciencia y Tecnología; Salud Pública; Gobierno; Hacienda,
            Finanzas, Obras y Servicios Públicos; y de la Secretaría de Estado de Cultura.
            2) un (1) representante por las municipalidades que adhieren a la presente ley, de cada una
            de las zonas en que a ese efecto se divide la Provincia;
            3) un (1) representante de las organizaciones no gubernamentales que desarrollan sus
            actividades a favor de la niñez y la adolescencia y reúnen los demás requisitos
            contemplados en el artículo 63 de la presente, por cada una de las zonas en que a ese efecto
            se divide la Provincia;
            4) un (1) representante de la Iglesia Católica;
            5) un (1) representante de las demás organizaciones religiosas;
            6) un (1) representante de organizaciones de jóvenes;
            7) un (1) representante de las comunidades indígenas;
            8) un (1) representante por las universidades." />
          <AccordionItem numero={47} isOpen={isOpenAll} textoAcordeon="Designación. Presidencia. Los miembros del Consejo determinados en el
            inciso 1) del artículo anterior, son designados por el Poder Ejecutivo. Los representantes
            contemplados en los incisos 2) a 8) del artículo anterior, lo son a propuesta de sus
            respectivas instituciones o entidades.
            El presidente del Consejo es designado por el Poder Ejecutivo, de entre los representantes
            contemplados en el inciso 1) del artículo anterior. Dura dos (2) años en sus funciones.
            Los miembros del Consejo no perciben remuneración adicional para el ejercicio de esta
            función." />
          <AccordionItem numero={48} isOpen={isOpenAll} textoAcordeon="- Requisitos. Para ser miembro del Consejo se requiere residencia en la
            Provincia no inferior a dos (2) años y acreditar idoneidad y versación en la temática.
            Los miembros representantes de las entidades contempladas en los incisos 2) a 8) del
            artículo 46 de la presente, deben renovar su representación cada dos (2) años.
            " />
          <AccordionItem numero={49} isOpen={isOpenAll} textoAcordeon="Organismo de articulación. El Ministerio de Desarrollo Social, la Mujer y
            la Juventud, es el organismo que tiene a su cargo la articulación de las áreas que
            constituyen el diseño organizacional del presente libro para la ejecución de los fines
            previstos en esta ley." />
          <AccordionItem numero={50} isOpen={isOpenAll} textoAcordeon="- Misiones y funciones. Son funciones del organismo de articulación:
            1) apoyar y supervisar la implementación de esta ley;
            2) articular transversalmente las políticas sociales de infancia, adolescencia y familia de
            todas las áreas de gobierno;
            3) acompañar el proceso de descentralización gradual municipal;
            4) diseñar y planificar conjuntamente con los organismos provinciales, locales y la
            participación de la comunidad, programas de prevención, asistencia y protección al niño,
            niña y adolescente, para garantizar su pleno desarrollo como personas, reconociendo a la
            familia como núcleo principal para su desenvolvimiento;
            5) planificar y diseñar programas y servicios alternativos a la institucionalización, a la que
            sólo puede recurrirse en forma excepcional, subsidiaria y por el lapso más breve posible,
            conjuntamente con los organismos provinciales y locales y la participación de la
            comunidad;
            6) realizar relevamientos, diagnósticos, investigaciones y crear instrumentos que permitan
            el monitoreo y evaluación de los planes, programas y proyectos que se implementan;
            7) celebrar convenios con universidades y otras instituciones educativas públicas y privadas
            y asociaciones profesionales;
            8) implementar mecanismos de acompañamiento, monitoreo y evaluación de las
            metodologías y actividades de las asociaciones no gubernamentales, con o sin fines de
            lucro, que desarrollan acciones dirigidas a la niñez, la adolescencia y la familia, a fin de
            lograr su coordinación con las políticas públicas;
            9) capacitar a los distintos responsables de la implementación de esta ley;
            10) asistir técnicamente a los consejos municipales de garantías de los derechos del niño,
            niña y adolescente, y la familia, y a las agencias de derechos de niños, niñas y adolescentes,
            y la familia;
            11) promover la coordinación y cooperación interinstitucional;
            12) evaluar periódicamente los programas que se implementan;
            13) proponer la elaboración de material de comunicación y documentación de difusión de
            derechos;
            14) mantener permanentemente acciones de cooperación interpoderes con el Poder
            Legislativo y Poder Judicial." />
          <AccordionItem numero={51} isOpen={isOpenAll} textoAcordeon="Consejos Municipales. Los municipios que adhieren a la presente ley,
            deben crear en forma individual o en conjunto con otros municipios de su región, como
            organismo especializado, un Consejo Municipal de Garantías de los Derechos del Niño,
            Niña y Adolescente, y la Familia, como ámbito comunitario público intersectorial de
            deliberación, en el que converjan las áreas gubernamentales y no gubernamentales que
            operan en la promoción y la defensa de los derechos del niño, niña y adolescente, y la
            familia.
            Los municipios deben procurar que en la integración de los consejos estén representados
            los órganos del Ejecutivo, organizaciones de la sociedad civil, grupos de jóvenes,
            comunidades religiosas y demás representantes de la comunidad.
            Los integrantes del Consejo no perciben remuneración por la función que ejercen en el
            mismo." />
          <AccordionItem numero={52} isOpen={isOpenAll} textoAcordeon="Funciones. Son funciones del Consejo Municipal:
            1) proponer representantes para integrar el Consejo Provincial;
            2) aconsejar y asesorar sobre las políticas del área privilegiando las características de la
            zona;
            3) articular acciones entre las áreas gubernamentales con competencia en la materia y con
            las organizaciones no gubernamentales, para la implementación de las políticas;
            4) convenir y aprobar con acuerdo del órgano legislativo municipal la ejecución de planes,
            programas y proyectos, con la Provincia;
            5) monitorear y evaluar los planes, programas y proyectos que se implementan y la
            asignación de los recursos;
            6) realizar informes de las acciones implementadas y planificación y cálculos
            presupuestarios;
            7) promover la integración de agencias de derechos de niños, niñas y adolescentes, y la
            familia." />
          <AccordionItem numero={53} isOpen={isOpenAll} textoAcordeon="Agencias de derechos. Los municipios que adhieren a la presente ley
            deben crear, en forma individual o en conjunto con otros municipios, como organismo
            descentralizado de los consejos, las agencias de derechos de niños, niñas y adolescentes, y
            la familia." />
          <AccordionItem numero={54} isOpen={isOpenAll} textoAcordeon="Acciones. Las agencias de derechos de niños, niñas y adolescentes, y la
            familia, implementan un sistema articulado transversalmente de garantía y efectivización de
            los derechos de niños, niñas y adolescentes, y la familia, mediante acciones adoptadas con
            criterios interdisciplinarios y participación de todos los sectores sociales." />
          <AccordionItem numero={55} isOpen={isOpenAll} textoAcordeon="Equipo técnico. Las agencias están integradas por un equipo técnico
            interdisciplinario, compuesto por distintas áreas profesionales vinculadas a la temática de la
            niñez y por promotores de derechos.
            Los miembros del equipo técnico son designados por el Consejo Municipal.
            " />
          <AccordionItem numero={56} isOpen={isOpenAll} textoAcordeon="Funciones generales. Son funciones de las agencias de derechos de niños,
            niñas y adolescentes, y la familia, las siguientes:
            1) fijar su estructura organizacional;
            2) difundir los principios de la Convención Internacional sobre los Derechos del Niño,
            promover y apoyar las acciones que promuevan dichos derechos;
            3) implementar las medidas de protección de derechos según lo establecido en los Capítulos
            III y VI del presente Título;
            4) brindar escucha a los reclamos e inquietudes formuladas por niños, niñas y adolescentes,
            y miembros de la familia, o por cualquier persona o entidad, con relación a los derechos
            garantizados en esta ley, canalizándolos ante los organismos competentes;
            5) brindar asesoramiento sin costo, ante situaciones de violación, amenaza o restricción de
            derechos ante instancias comunitarias de resolución alternativa de conflictos y patrocinio
            sin costo en caso de intervención judicial;
            6) dictaminar con relación al otorgamiento de ayuda económica a familias, para apoyar las
            acciones de fortalecimiento de los vínculos familiares, en las condiciones que los
            programas o proyectos lo determinan;
            7) llevar a cabo reuniones, entrevistas o encuentros con miembros del grupo familiar, de la
            familia ampliada o comunidad local;
            8) realizar averiguaciones, efectuar diagnósticos, evaluar daños, dimensionar consecuencias
            e impactos, brindar apoyo, orientación, contención, seguimiento y acompañamiento para
            que los niños, niñas y adolescentes mantengan o recuperen el disfrute y goce de sus
            derechos;
            9) llevar un registro de comunicaciones y confeccionar estadísticas de los reclamos que se
            le efectúan. Las estadísticas deben contener entre otras variables, las diferentes
            problemáticas, personas involucradas, circuitos, acciones llevadas a cabo y resultados de las
            mismas;
            10) informar los resultados de investigaciones, estadísticas y diagnósticos efectuados y las
            irregularidades detectadas ante el Consejo;
            11) recabar información y efectuar gestiones tendientes a verificar la existencia de
            incumplimientos a las normas de la presente ley;
            12) interponer acción judicial contra todo acto que vulnera o restringe los derechos de
            niños, niñas y adolescentes, y sus familias, así como también, aquellas que tienen por
            objeto la vigencia de principios, derechos y garantías asegurados por la presente ley;
            13) consultar y requerir copias de las actuaciones respectivas a fin de verificar el debido
            cumplimiento de las garantías procesales de niños, niñas y adolescentes, así como el
            respeto de su derecho a ser oídos en todo trámite administrativo o proceso judicial que los
            involucra o afecta;
            14) formular recomendaciones y sugerir modificaciones para el mejor funcionamiento de
            las áreas gubernamentales que prestan servicios públicos a niños, niñas y adolescentes, y a
            las familias;
            15) proponer las reformas legales que considera necesarias para la garantía de los derechos;
            16) procurar que los niños, niñas y adolescentes albergados por razones de urgencia, en
            forma transitoria, excepcional y subsidiaria y por el menor tiempo posible, en el Sistema de
            Acogimiento Familiar Alternativo o en sistemas públicos o privados, se revinculen con su
            grupo familiar o recuperen la convivencia con miembros de la familia ampliada o de la
            comunidad local, facilitando la reinserción y contención en su medio afectivo y social.
            " />
          <AccordionItem numero={57} isOpen={isOpenAll} textoAcordeon="Prueba preconstituida. En caso de formarse una causa judicial, toda la
            documental, informes, diagnósticos, pericias, evaluaciones y demás actividades
            extrajudiciales que realizan los equipos técnicos interdisciplinarios de las agencias, deben
            ser agregados a dicha causa como prueba preconstituida, a los efectos de su merituación por
            el juez, con el objeto de evitar reiteraciones innecesarias. Ello sin perjuicio de la facultad de
            la autoridad judicial competente para solicitar cualesquiera otras medidas." />
          CAPÍTULO V
          FONDO ESPECIAL
          <AccordionItem numero={58} isOpen={isOpenAll} textoAcordeon="Creación. Créase el Fondo Especial para la Garantía Integral de los
            Derechos de Niños, Niñas y Adolescentes, y la Familia, de carácter intangible, así como la
            cuenta especial del mismo nombre, la que debe abrirse en la banca que opere como agente
            financiero oficial de la Provincia.
            " />
          <AccordionItem numero={59} isOpen={isOpenAll} textoAcordeon="Destino. Sin perjuicio del presupuesto asignado a cada área del Estado,
            para la atención de su competencia específica, el Fondo Especial creado en el artículo
            anterior se destina especialmente a la planificación y ejecución de programas que
            garantizan la aplicación de las medidas establecidas en la presente ley" />
          <AccordionItem numero={60} isOpen={isOpenAll} textoAcordeon=" Integración. El Fondo Especial para la Garantía Integral de los Derechos
            de Niños, Niñas y Adolescentes, y la Familia, se integra con los siguientes recursos:
            1) partidas establecidas por el presupuesto general de gastos y recursos;
            2) los recursos provenientes de organismos provinciales, nacionales e internacionales;
            3) los ingresos que resultan de la administración de sus recursos;
            4) préstamos, legados, donaciones, contribuciones y aportes de personas humanas o
            jurídicas, públicas o privadas, internacionales, nacionales, provinciales y municipales;
            5) los intereses que se devenguen u originen con relación al depósito o inversión de
            recursos del Fondo;
            6) otros recursos y fondos especiales vigentes establecidos por normas específicas, con
            destino a la implementación de programas para la protección integral de los derechos de
            niños, niñas y adolescentes, y la familia, que administran los diversos organismos públicos
            en la proporción y en el modo que determina la reglamentación.
            " />
          <AccordionItem numero={61} isOpen={isOpenAll} textoAcordeon="Administración del Fondo Especial. El Poder Ejecutivo determina la
            dependencia de la Jurisdicción que tiene a su cargo la percepción, administración y
            disposición de los recursos que integran el Fondo Especial, la que debe periódicamente
            rendir cuentas a la citada autoridad, de la aplicación de los mismos, en la forma y
            condiciones que establece la reglamentación, sin perjuicio de las funciones específicas de
            los organismos de control de la Provincia.
            Asimismo, dicha dependencia debe elevar el plan de inversión del Fondo Especial para el
            ejercicio siguiente, el que, previa aprobación de la citada autoridad, es considerado al
            momento de la formación del Presupuesto General de la Provincia." />
          <AccordionItem numero={62} isOpen={isOpenAll} textoAcordeon="Autorización. Facúltase al Poder Ejecutivo a que, por vía reglamentaria,
            establezca los requisitos por los que se rige la administración y disposición del Fondo
            Especial a que se refiere el artículo 58 de la presente." />
          <AccordionItem numero={63} isOpen={isOpenAll} textoAcordeon="Conceptualización. A los efectos de la presente ley, se entiende por
            organizaciones de la sociedad civil aquéllas que reúnen los siguientes requisitos y
            condiciones:
            1) están legalmente constituidas;
            2) están inscriptas en el registro creado por Ley I – N.º 123 (Antes Ley 3785);
            3) promueven la efectivización y la defensa de los derechos de los niños, niñas y
            adolescentes, y la familia;
            4) desarrollan programas de estudio, investigación, prevención, promoción, atención,
            protección o cuidado de niños, niñas y adolescentes." />
          CAPÍTULO VI
          ORGANIZACIONES DE LA SOCIEDAD CIVIL
          <AccordionItem numero={64} isOpen={isOpenAll} textoAcordeon="Obligaciones. Los organismos estatales y las organizaciones de la
            sociedad civil que desarrollan o ejecutan programas o servicios de atención y en especial
            aquéllas en que permanecen niños, niñas y adolescentes, en cumplimiento de una medida
            excepcional implementada y supervisada por la autoridad competente, deben cumplir con la
            promoción y protección de los derechos y garantías que emanan de la Constitución
            Nacional, Convención Internacional sobre los Derechos del Niño, tratados internacionales
            en los que el Estado argentino sea parte; Constitución de la Provincia de Misiones; de esta
            ley, reglas y directrices que forman parte de la doctrina de protección integral de derechos y
            en especial:
            1) preservar la identidad e intimidad del niño, niña y adolescente y ofrecerle un ambiente de
            respeto y dignidad;
            2) preservar y promover el fortalecimiento de los vínculos familiares;
            3) sostener la unión de grupos de hermanos en todas las acciones que se planifican;
            4) asegurar atención personalizada y en pequeños grupos;
            5) asegurar instalaciones físicas en condiciones adecuadas de habitabilidad, higiene,
            salubridad y seguridad y garantizar la protección integral de la salud;
            6) asegurar la participación de los niños, niñas y adolescentes en la planificación y el
            cumplimiento de las normas de convivencia;
            7) posibilitar el desarrollo de actividades en sistemas mixtos;
            8) propiciar actividades educativas y culturales, formales y no formales en instituciones
            públicas o privadas de la comunidad de pertenencia;
            9) asegurar el apoyo para el egreso, coordinando permanentemente acciones con los
            consejos y agencias descentralizadas, a quienes se requiere en forma inmediata ante
            cualquier ingreso;
            10) ofrecer vestimenta y alimentación suficientes adecuadas a la edad de los niños, niñas y
            adolescentes atendidos;
            11) respetar el ejercicio pleno de todos los derechos que no son objeto de restricción por
            decisión administrativa o judicial expresa y fundada;
            12) asegurar la profesión de religión o culto a quienes lo requieren expresamente, de
            acuerdo a sus creencias;
            13) informar periódica y suficientemente a los niños, niñas y adolescentes, que permanecen
            en el lugar por orden judicial, sobre su situación legal;
            14) tramitar los documentos de identificación personal para aquellos que no los poseen;
            15) llevar legajos personales de cada niño, niña y adolescente, según la orientación de los
            equipos técnicos interdisciplinarios." />
          CAPÍTULO VII
          ORGANISMOS Y ORGANIZACIONES DE ATENCIÓN
          <AccordionItem numero={65} isOpen={isOpenAll} textoAcordeon="Deberes. Los organismos estatales y las organizaciones de la sociedad
            civil a las que se refiere el artículo 64 de la presente, deben requerir la inmediata
            intervención de los servicios de protección de derechos. Son supervisadas por la autoridad
            de aplicación.
            " />
          <AccordionItem numero={66} isOpen={isOpenAll} textoAcordeon="Sanciones. En caso de detectarse el incumplimiento por parte de los
            organismos y organizaciones de cualquiera de las obligaciones establecidas en el artículo
            64 de la presente, sin perjuicio de la responsabilidad civil o penal de sus responsables, se
            aplican las siguientes medidas:
            I – A los organismos estatales:
            a) advertencia;
            b) suspensión provisoria de sus directivos o responsables;
            c) cese temporario o definitivo en sus funciones de los directivos o responsables;
            d) cierre del establecimiento o intervención del programa.
            Las medidas son aplicadas por los organismos competentes de acuerdo a la normativa
            vigente.
            II – A las organizaciones de la sociedad civil:
            a) advertencia;
            b) suspensión total o parcial de la asignación de recursos públicos;
            c) intervención de establecimientos o suspensión del programa;
            d) cancelación de inscripción en el registro contemplado en el artículo 63 inciso 2) de la
            presente." />
          LIBRO II
          FUERO DE NIÑOS, NIÑAS, ADOLESCENTES Y LA FAMILIA
          TÍTULO I
          ÓRGANOS JURISDICCIONALES
          CAPÍTULO I
          DISPOSICIONES GENERALES
          <AccordionItem numero={67} isOpen={isOpenAll} textoAcordeon="- Creación. Créase el Fuero de Niños, Niñas, Adolescentes y la Familia, el
            que está integrado por:
            a) Cámaras de Apelaciones en lo Civil y Comercial;
            b) Juzgados de familia;
            c) Consejeros de familia;
            d) Tribunales penales de niños, niñas y adolescentes;
            e) Jueces penales de garantías de niños, niñas y adolescentes;
            f) Ministerio Público.
            " />
          <AccordionItem numero={68} isOpen={isOpenAll} textoAcordeon="- Consejeros de familia. Los consejeros de familia intervienen en la etapa
            prejudicial de avenimiento, de acuerdo al procedimiento que se establece en esta Ley. Sus
            titulares tienen igual jerarquía que los defensores oficiales. Deben ser abogados y
            mediadores, reunir los demás requisitos exigidos para ser defensores oficiales y ser
            designados mediante los mismos procedimientos. Ejercen las funciones inherentes al
            Ministerio Pupilar." />
          <AccordionItem numero={69} isOpen={isOpenAll} textoAcordeon="Defensa técnica. La defensa técnica de los derechos de niños, niñas y
            adolescentes, en todas las causas judiciales en que se adoptan decisiones que los afectan, es
            ejercida por los defensores oficiales con las atribuciones acordadas por la normativa legal
            vigente y las que se establecen en esta Ley." />
          <AccordionItem numero={70} isOpen={isOpenAll} textoAcordeon="Recusación. Los jueces del fuero de niños, niñas y adolescentes y la
            familia no pueden ser recusados sin expresión de causa." />
          <AccordionItem numero={71} isOpen={isOpenAll} textoAcordeon="- Idoneidad. Para la designación de magistrados y funcionarios del fuero
            son valoradas especialmente los antecedentes, idoneidad y capacitación específica en la
            materia." />
          <AccordionItem numero={72} isOpen={isOpenAll} textoAcordeon="- Carácter de las actuaciones. En todas las actuaciones ante la justicia de
            familia y en lo penal de niños, niñas y adolescentes, se preserva la intimidad del niño, niña
            o adolescente, en cuanto a la no difusión de su identificación ni circunstancias de la causa, a
            excepción de los casos en que el niño, niña o adolescente y su defensa técnica lo autoricen
            expresamente, en cuyo caso prima el principio de publicidad. Las actuaciones son secretas
            para cualquier persona que no sea el niño, niña o adolescente, las partes, la defensa y los
            funcionarios judiciales intervinientes.
            Esta garantía rige aún cuando el niño, niña o adolescente hubiera cumplido dieciocho (18)
            años de edad.
            " />
          <AccordionItem numero={73} isOpen={isOpenAll} textoAcordeon="- Agregación de prueba. En las actuaciones que se requieren en las causas
            que se tramitan ante el fuero creado por esta Ley, donde deben intervenir profesionales de
            distintas ciencias sociales, se está a lo dispuesto en el Artículo 57 de la presente.
            " />
          CAPÍTULO II
          DERECHOS DE VÍCTIMAS Y TESTIGOS
          <AccordionItem numero={74} isOpen={isOpenAll} textoAcordeon="Derecho de víctimas y testigos. A todo niño, niña o adolescente
            convocado por un órgano judicial en calidad de víctima o testigo, además de los derechos
            reconocidos en el Código Procesal Penal, debe garantizársele especialmente el pleno
            respeto de los siguientes derechos:
            a) al sufragio de los gastos de traslado para sí y sus padres, tutor o guardador al lugar donde
            la autoridad competente designe;
            b) a la protección de su integridad psico-física y moral y la de su familia;
            c) a ser informado sobre la naturaleza y resultado del acto procesal en el que participa;
            d) al acompañamiento, durante la sustanciación del acto, de sus padres, tutor, guardador,
            persona de su confianza o de algún miembro del equipo técnico interdisciplinario, si el
            menor de edad así lo solicita o se considera conveniente, a menos que ello perjudique el
            curso de la investigación o el normal desenvolvimiento del acto." />
          <AccordionItem numero={75} isOpen={isOpenAll} textoAcordeon="- Derechos complementarios. Sin perjuicio de lo establecido en el artículo
            precedente, el niño, niña o adolescente, víctima de delito y sus padres, tutor o guardador
            tienen derecho a:
            1) ser informados por la oficina correspondiente acerca de los derechos que les asisten,
            especialmente el de ejercer las acciones civiles pertinentes;
            2) ser informado sobre el estado de la causa y la situación del imputado;
            3) recibir orientación del equipo técnico interdisciplinario del fuero." />
          <AccordionItem numero={76} isOpen={isOpenAll} textoAcordeon="Información. Los derechos reconocidos en este Capítulo deben ser
            enunciados por la autoridad competente al momento de la primera presentación de la
            víctima o el testigo." />
          TÍTULO II
          JUSTICIA DE FAMILIA
          CAPÍTULO I
          COMPETENCIA
          <AccordionItem numero={77} isOpen={isOpenAll} textoAcordeon="Enunciación. Los juzgados de familia tienen competencia para entender
            en las siguientes causas:
            a) autorización supletoria para contraer matrimonio o por dispensa de edad y dispensa
            supletoria del artículo 1277 del Código Civil. Oposición a la celebración de matrimonio;
            b) inexistencia y nulidad de matrimonio;
            c) separación personal y divorcio vincular, exclusión del hogar conyugal y régimen de
            visitas;
            d) liquidación y partición de la sociedad conyugal, con excepción de la que se produzca por
            causa de muerte;
            e) separación judicial de bienes;
            f) acciones de estado relativas a la filiación;
            g) adopción, su nulidad y revocación;
            h) suspensión, privación, restitución de la patria potestad y toda cuestión relativa a su
            ejercicio;
            i) tenencia y guarda de niños, niñas y adolescentes y régimen de comunicación de los
            mismos con su familia;
            j) acciones relativas a la asistencia alimentaria;
            k) designación, suspensión y remoción del tutor y toda cuestión referente a la tutela;
            l) decisiones relativas a la situación jurídica de niños, niñas y adolescentes y a su grupo
            familiar, en los casos que sea necesaria la intervención judicial en las medidas de
            protección especial de derechos establecidos en esta Ley;
            m) emancipación de personas menores de edad por habilitación de edad y su revocación;
            n) autorización para gravar y disponer de bienes de niños, niñas y adolescentes;
            ñ) cuestiones relativas a inscripciones de nacimiento, nombre, estado civil y sus
            registraciones;
            o) declaración de incapacidad, inhabilitación, rehabilitación, internaciones previstas en la
            legislación civil y toda cuestión referente a la curatela;
            p) homologación de actas sobre cuestiones familiares;
            q) requerimientos interjurisdiccionales relacionados con la competencia del juzgado;
            r) toda cuestión patrimonial derivada de los asuntos de su competencia;
            s) litis expensas y toda causa conexa, incidentes, trámites auxiliares, preparatorios,
            cautelares y sus cancelaciones, tercerías, juicios accesorios y ejecutorios en relación a las
            materias enumeradas en el presente artículo.
            " />
          CAPÍTULO II
          ETAPA PREJUDICIAL DE AVENIMIENTO
          <AccordionItem numero={78} isOpen={isOpenAll} textoAcordeon="- Comparecencia. En forma previa a la interposición de las acciones
            previstas en los incisos a), j) y l) del artículo anterior y cuestiones relativas a la atribución
            del hogar conyugal y derivadas de uniones de hecho, los interesados deben comparecer en
            forma personal por ante el consejero de familia.
            " />
          <AccordionItem numero={79} isOpen={isOpenAll} textoAcordeon="- Funciones. Es función del consejero de familia orientar a las partes y
            procurar el avenimiento, teniendo en cuenta primordialmente el interés superior del niño,
            niña o adolescente y su familia." />
          <AccordionItem numero={80} isOpen={isOpenAll} textoAcordeon="Atribuciones. En cumplimiento de la función asignada en el artículo
            anterior el consejero de familia puede:
            a) convocar a las partes y a toda persona vinculada con el conflicto de que se trate;
            b) fijar audiencias;
            c) solicitar informes;
            d) requerir colaboración de las agencias de derechos de niños, niñas, adolescentes y la
            familia y, en su caso, la intervención de instituciones o personas especializadas.
            " />
          <AccordionItem numero={81} isOpen={isOpenAll} textoAcordeon="Trámite. El trámite en esta instancia es verbal y actuado" />
          <AccordionItem numero={82} isOpen={isOpenAll} textoAcordeon="Audiencia. Recibida la presentación, el consejero de familia convoca a
            una audiencia dentro de los diez (10) días siguientes, evaluando la urgencia del caso." />
          <AccordionItem numero={83} isOpen={isOpenAll} textoAcordeon="Actuaciones Reservadas. Las actuaciones ante el consejero de familia son
            reservadas, salvo para las partes y sus patrocinantes. No están sujetas a formalidad alguna.
            Aquéllas que consten por escrito no pueden ofrecerse ni utilizarse como prueba en
            procedimientos ulteriores, excepto lo dispuesto en el artículo 84 de la presente." />
          <AccordionItem numero={84} isOpen={isOpenAll} textoAcordeon="Acta. Si se logra el avenimiento, se labra un acta en la que constan los
            términos del acuerdo, elevándola para su homologación al Juzgado de Familia.
            Si no se logra el avenimiento o los interesados peticionan que se dé por concluida esta
            etapa, se labra acta, dejando constancia de los motivos que impidieron arribar a una
            solución.
            Es imprescindible el testimonio del acta para iniciar las actuaciones por ante el Juzgado de
            Familia." />
          <AccordionItem numero={85} isOpen={isOpenAll} textoAcordeon="Plazo. La etapa prejudicial no puede exceder de veinte (20) días contados
            a partir de la primera audiencia, salvo que, a criterio del consejero de familia o mediando
            petición fundada de los interesados, se resuelva su prórroga por igual término y siempre
            que las circunstancias del caso lo justifiquen.
            " />
          <AccordionItem numero={86} isOpen={isOpenAll} textoAcordeon="Gratuidad. Las actuaciones ante el consejero de familia son gratuitas,
            están exentas de tasa de justicia y cualquier otro aporte y requieren patrocinio letrado que
            es proporcionado por el Estado en caso de carencia de recursos.
            " />
          CAPÍTULO III
          PROCEDIMIENTO JUDICIAL
          <AccordionItem numero={87} isOpen={isOpenAll} textoAcordeon="Normas generales. En los juicios que se entablen en razón de la
            competencia establecida en el Artículo 77 de esta Ley, a excepción de procedimientos
            especiales determinados en la presente, se deben observar las disposiciones del Código
            Procesal Civil y Comercial de la Provincia de Misiones.
            La interposición de las acciones previstas en el inciso l) del Artículo 77 de la presente,
            tramitan según las normas del proceso sumarísimo.
            El niño, niña o adolescente y los miembros de la familia directamente vinculados son oídos
            personalmente por el juez." />
          <AccordionItem numero={88} isOpen={isOpenAll} textoAcordeon="Actuaciones con fines de adopción. En cualquier actuación con fines de
            adopción que se entable, debe hacerse constar la intervención de las instancias
            administrativas, que actúan en la implementación de planes, programas y proyectos para la
            preservación de los vínculos familiares.
            " />
          TÍTULO III
          JUSTICIA PENAL DE NIÑOS, NIÑAS Y ADOLESCENTES
          CAPÍTULO I
          COMPETENCIA
          <AccordionItem numero={89} isOpen={isOpenAll} textoAcordeon="Juez penal de garantías. El juez penal de garantías de niños, niñas y
            adolescentes es competente para ejercer el control de legalidad y legitimidad de la
            investigación dirigida por el agente fiscal, de los hechos calificados por la ley como delitos
            atribuidos a niños, niñas o adolescentes, respecto de los cuales el agente fiscal promovió la
            correspondiente acción penal, aunque aquellos alcancen la edad de dieciocho (18) años al
            tiempo de iniciación del proceso.
            " />
          <AccordionItem numero={90} isOpen={isOpenAll} textoAcordeon="Tribunal penal. El Tribunal penal de niños, niñas y adolescentes es
            competente para:
            a) el juzgamiento de los hechos calificados por la ley como delitos cometidos por
            adolescentes punibles. El juzgamiento comprende la declaración de responsabilidad o de
            irresponsabilidad penal y la imposición o no de pena;
            b) resolver, en grado de apelación, los recursos interpuestos contra resoluciones del juez
            penal de garantías de niños, niñas y adolescentes." />
          <AccordionItem numero={91} isOpen={isOpenAll} textoAcordeon="Agente fiscal. El agente fiscal, como titular exclusivo de la acción penal,
            tiene a su cargo la dirección de la investigación de los delitos que son de competencia del
            juzgado penal de garantías de niños, niñas y adolescentes. Actúa también en la etapa de
            plenario." />
          <AccordionItem numero={92} isOpen={isOpenAll} textoAcordeon="- Coparticipación. Cuando en relación a los mismos hechos penales se
            encuentren imputados conjuntamente niños, niñas o adolescentes, por una parte, y mayores
            de dieciocho (18) años, por la otra, son competentes, para la tramitación de las causas
            seguidas contra aquellos, los tribunales penales de niños, niñas y adolescentes.
            La sentencia de los tribunales penales de niños, niñas y adolescentes no puede ser, en
            ningún caso, más gravosa para el joven que la dictada por los jueces penales con
            competencia para personas de dieciocho (18) años o más. El incumplimiento de esta
            disposición es causal del recurso de casación o, si la sentencia estuviera firme, de revisión,
            aún de oficio.
            El tribunal que dicta sentencia en primer término remite copia de la misma al otro.
            " />
          CAPÍTULO II
          RESTRICCIÓN DE LA LIBERTAD
          <AccordionItem numero={93} isOpen={isOpenAll} textoAcordeon="Casos. La detención o aprehensión de un niño, niña y adolescente sin
          orden judicial sólo procede en los siguientes casos:
          a) cuando es sorprendido en flagrancia en la comisión de un hecho calificado por la ley
          como delito o mientras es perseguido por el ofendido o por el clamor público;
          b) cuando se fuga, estando legalmente detenido.
          La aprehensión o detención tiene lugar al sólo efecto de conducir al adolescente de
          inmediato ante el juez penal de garantías de niños, niñas y adolescentes para que resuelva
          sobre su situación." />
          <AccordionItem numero={94} isOpen={isOpenAll} textoAcordeon="Detención. Orden. Cuando haya sospecha fundada de la participación de
          un niño, niña o adolescente en un hecho delictivo cuya pena máxima supere los ocho (8)
          años de prisión, el juez penal de garantías de niños, niñas y adolescentes sólo puede ordenar
          su detención por acto fundado, bajo pena de nulidad" />
          <AccordionItem numero={95} isOpen={isOpenAll} textoAcordeon="Obligaciones. En caso de aprehensión, detención o arresto, debe
          informársele inmediatamente las causas de la medida, sus derechos y garantías, en especial
          el derecho a una defensa técnica; debe permitírsele la comunicación con sus padres, tutor,
          guardador, o persona de la familia ampliada, en ausencia de los demás. El incumplimiento
          de estas obligaciones acarrea la nulidad de todo lo actuado y hace pasible al responsable de
          las sanciones que corresponden.
          Las disposiciones contenidas en el párrafo anterior se aplican sin perjuicio de lo establecido
          en el artículo 31 de esta ley.
          " />
          <AccordionItem numero={96} isOpen={isOpenAll} textoAcordeon="Plazo perentorio. El juez penal de garantías de niños, niñas y adolescentes
          debe resolver respecto de la restricción o no de la libertad del niño, niña o adolescente en el
          plazo perentorio de veinticuatro (24) horas a contar desde su aprehensión, detención o
          arresto, previa vista al defensor y al agente fiscal." />
          CAPÍTULO III
          PROCEDIMIENTO PENAL
          <AccordionItem numero={97} isOpen={isOpenAll} textoAcordeon="- Instrucción. La instrucción es llevada a cabo por el agente fiscal de oficio
          o en virtud de una prevención, información policial o denuncia." />
          <AccordionItem numero={98} isOpen={isOpenAll} textoAcordeon="Funcionarios policiales. Los funcionarios policiales que toman
          conocimiento de la comisión de un delito de acción pública lo informan en forma inmediata
          y detallada al agente fiscal que practica la investigación preliminar de acuerdo a la
          normativa penal vigente.
          " />
          <AccordionItem numero={99} isOpen={isOpenAll} textoAcordeon="Actos irreproducibles. Cuando por la naturaleza o características del acto
          que sea necesario llevar a cabo éste deba considerarse definitivo e irreproducible, el agente
          fiscal requiere al juez penal de garantías de niños, niñas y adolescentes que lo lleve a cabo.
          Este dispone su realización si lo considera formalmente admisible, en caso contrario, el
          agente fiscal puede acudir ante el tribunal penal de niños, niñas y adolescentes, a fin de que
          dirima la cuestión. En todos los casos y bajo pena de nulidad, es obligatoria la notificación
          a la defensa técnica del adolescente.
          " />
          <AccordionItem numero={100} isOpen={isOpenAll} textoAcordeon="Actos urgentes. Los actos de urgente investigación, que por su
          naturaleza no admitan dilación, pueden ser practicados por el juez penal de garantías de
          niños, niñas y adolescentes.
          Finalizado el acto, éste debe remitir las actuaciones al agente fiscal y al defensor, dejando
          constancia detallada de los motivos que determinan la resolución." />
          <AccordionItem numero={101} isOpen={isOpenAll} textoAcordeon="Declaración. Durante el procedimiento, el imputado presta declaración
          ante el agente fiscal cuando él mismo lo pida, previa entrevista con su defensor, o cuando
          aquel funcionario lo ordena. Si el niño, niña o adolescente se encuentra detenido, el agente
          fiscal solicita al juez penal de garantías de niños, niñas y adolescentes la recepción de dicha
          declaración.
          En todos los casos, el niño, niña o adolescente cuenta bajo pena de nulidad, con la
          asistencia del defensor que designe. En caso de carecer de recursos económicos se le
          proporciona defensa técnica sin cargo. El defensor solicita al agente fiscal la realización de
          las medidas de prueba convenientes a la defensa de los intereses de su defendido. El agente
          fiscal las lleva a cabo si las considera pertinentes y útiles, debiendo dejar constancia
          fundada, bajo pena de nulidad, de su opinión contraria, a los efectos que ulteriormente
          correspondan.
          El agente fiscal debe investigar todos los hechos o circunstancias pertinentes y útiles a que
          se refiera el imputado." />
          <AccordionItem numero={102} isOpen={isOpenAll} textoAcordeon="Plazo. En el plazo de seis (6) días desde la declaración del imputado, el
          juez resuelve su situación procesal en los términos del ordenamiento adjetivo vigente en
          materia penal. La resolución es apelable.
          " />
          <AccordionItem numero={103} isOpen={isOpenAll} textoAcordeon="Requerimiento. Una vez que se encuentre firme la resolución prevista en
          el artículo anterior, si el agente fiscal estima que la investigación proporciona fundamento
          serio para el enjuiciamiento del imputado, requiere al juez penal de garantías de niños,
          niñas y adolescentes la elevación de la causa a juicio. Este requerimiento se formula por
          escrito y debe contener bajo pena de nulidad los datos personales del imputado, una
          relación clara y circunstanciada de los hechos, su calificación legal, una exposición sucinta
          de los motivos en que se funda y el ofrecimiento de la prueba de que intente valerse.
          " />
          <AccordionItem numero={104} isOpen={isOpenAll} textoAcordeon="Sobreseimiento, falta de mérito o archivo. Cuando el agente fiscal
          estima que no existe fundamento para solicitar la elevación a juicio, requiere que se dicte el
          sobreseimiento, todo ello en los términos previstos por el ordenamiento procesal penal
          vigente.
          " />
          <AccordionItem numero={105} isOpen={isOpenAll} textoAcordeon="Disconformidad. Si el juez no está de acuerdo con la solicitud del agente
          fiscal de sobreseimiento, se elevan los autos al superior inmediato del agente fiscal
          actuante. Si éste coincide con lo solicitado por el inferior, el juez resuelve en tal sentido. En
          caso contrario, el requerimiento es formulado por el agente fiscal que subroga al actuante." />
          <AccordionItem numero={106} isOpen={isOpenAll} textoAcordeon="Plazo. La instrucción debe practicarse en los plazos establecidos en la
          ley vigente. Si resulta insuficiente, el agente fiscal solicita prórroga a su superior inmediato,
          el que puede acordarla por un período igual por resolución fundada, según las causas de la
          demora y la naturaleza de la investigación.
          En casos de suma gravedad y de muy difícil investigación, la prórroga otorgada puede
          exceder excepcionalmente de dicho plazo, debiendo informarse tales circunstancias y sus
          procedimientos al juez competente." />
          CAPÍTULO IV
          MEDIDAS DE COERCIÓN PERSONAL
          <AccordionItem numero={107} isOpen={isOpenAll} textoAcordeon="Medidas. Promovida la investigación tendiente a la comprobación de un
          delito imputado a un niño, niña o adolescente e individualizado el mismo, en caso de
          mediar peligro de fuga o entorpecimiento de la investigación, el juez puede por auto
          fundado, bajo pena de nulidad, adoptar medidas de coerción personal, de carácter
          circunstancial y cautelar, dentro de las establecidas en la presente ley." />
          <AccordionItem numero={108} isOpen={isOpenAll} textoAcordeon="- Enumeración. Las medidas de coerción personal pueden consistir, con la
          siguiente prelación, en:
          a) obligación de concurrir periódicamente a la sede del tribunal o autoridad que se
          disponga, acompañado de sus padres, tutor o guardador;
          b) abstención de frecuentar determinados lugares y personas que estén relacionados con el
          hecho;
          c) arresto domiciliario supervisado;
          d) régimen de semilibertad o libertad asistida;
          e) privación de la libertad durante el proceso en establecimientos para niños, niñas y
          adolescentes, debiéndose observar las garantías establecidas en la presente ley.
          En todos los casos el juez fija la duración máxima de las medidas que se adoptan que no
          deben exceder de tres (3) meses. Pueden ser prorrogadas a su vencimiento por decisión
          fundada, previo dictamen del Ministerio Fiscal." />
          <AccordionItem numero={109} isOpen={isOpenAll} textoAcordeon=" Audiencia. El juez se expide con posterioridad a tomar conocimiento
          directo del niño, niña o adolescente, en audiencia a la que deben concurrir, bajo pena de
          nulidad, el imputado, su defensor, su representante legal y el agente fiscal." />
          <AccordionItem numero={110} isOpen={isOpenAll} textoAcordeon="- Recurribilidad. La resolución que ordena medidas de coerción personal
          es recurrible por las partes, en los términos del ordenamiento procesal penal vigente" />
          CAPÍTULO V
          ACTOS PRELIMINARES
          <AccordionItem numero={111} isOpen={isOpenAll} textoAcordeon="Examen de las actuaciones. El juez penal de garantías de niños, niñas y
          adolescentes ordena la notificación del requerimiento del agente fiscal al imputado y a su
          defensor, poniendo las actuaciones y los medios de prueba a disposición para su consulta,
          por el plazo de diez (10) días.
          " />
          <AccordionItem numero={112} isOpen={isOpenAll} textoAcordeon="Existencia de vicios. Excepciones. Ofrecimiento de pruebas. Dentro del
          plazo previsto en el artículo anterior, el imputado y su defensor pueden:
          a) señalar los vicios formales en que incurra el escrito de acusación requiriendo su
          corrección;
          b) deducir las excepciones y oposiciones relativas a las nulidades producidas durante la
          instrucción preliminar;
          c) ofrecer los medios de prueba que se estimen omitidos, requiriendo se ordene practicarlos.
          " />
          <AccordionItem numero={113} isOpen={isOpenAll} textoAcordeon="Admisión o rechazo de la prueba. Vencido el plazo, el juez admite los
          medios de prueba ofrecidos que considera pertinentes y útiles, ordenando que se practiquen
          las diligencias que razonablemente puedan presumirse que no puedan cumplimentarse en la
          audiencia de debate.
          " />
          <AccordionItem numero={114} isOpen={isOpenAll} textoAcordeon="Elevación. Transcurrido el término previsto en el artículo anterior sin
          que se ofrezcan nuevas pruebas o practicadas las mismas, el juez penal de garantías de
          niños, niñas y adolescentes eleva las actuaciones al tribunal penal de niños, niñas y
          adolescentes.
          " />
          CAPÍTULO VI
          AUDIENCIA DE DEBATE
          <AccordionItem numero={115} isOpen={isOpenAll} textoAcordeon="Designación de audiencia. Cumplidos los requisitos establecidos por la
          legislación vigente, el tribunal de juicio, señala audiencia de debate con intervención del
          agente fiscal, el defensor, el adolescente y sus padres, tutor o guardador, quienes, tras la
          lectura de los informes producidos, se expiden separadamente en ese orden." />
          <AccordionItem numero={116} isOpen={isOpenAll} textoAcordeon="Normas aplicables. A los fines de la realización de la audiencia de
          debate, son de aplicación las normas contenidas en el ordenamiento adjetivo penal vigente,
          en todo lo que sea pertinente y no se oponga a la presente ley, debiendo cumplirse con lo
          establecido respecto al secreto de las actuaciones, siempre que expresamente no autorice el
          imputado y su defensa técnica la publicidad.
          " />
          <AccordionItem numero={117} isOpen={isOpenAll} textoAcordeon="- Oportunidad y lectura de la sentencia. Cumplida la audiencia de debate,
          el tribunal penal de niños, niñas y adolescentes dicta sentencia en los términos de la
          legislación vigente.
          Cuando la complejidad del asunto o lo avanzado de la hora hagan necesario diferir la
          redacción de la sentencia, su lectura se efectúa, bajo pena de nulidad, en audiencia que se
          fija dentro de un plazo no mayor de tres (3) días.
          " />
          <AccordionItem numero={118} isOpen={isOpenAll} textoAcordeon="Juez de ejecución. En caso de aplicarse pena, el tribunal penal de niños,
          niñas y adolescentes es el juez de ejecución de la misma." />
          CAPÍTULO VII
          NIÑOS, NIÑAS O ADOLESCENTES INIMPUTABLES
          <AccordionItem numero={119} isOpen={isOpenAll} textoAcordeon="- Procedimiento. Comprobada la existencia de un hecho calificado por ley
          como delito y presumida la intervención de un niño o niña o adolescente inimputable, el
          agente fiscal eleva las actuaciones al juez penal de garantías de niños, niñas y adolescentes,
          expidiéndose sobre la existencia del hecho, calificación legal e intervención que le cupo en
          el mismo." />
          <AccordionItem numero={120} isOpen={isOpenAll} textoAcordeon="Garantías. El niño, niña o adolescente inimputable goza de todas las
          garantías establecidas en el artículo 31 de esta ley." />
          <AccordionItem numero={121} isOpen={isOpenAll} textoAcordeon="Audiencia. Recibidas las actuaciones, el juez ordena notificar al agente
          fiscal, al niño, niña o adolescente y a su defensor por el término de tres (3) días y convoca a
          una audiencia que se celebra en igual plazo.
          " />
          <AccordionItem numero={122} isOpen={isOpenAll} textoAcordeon="Sentencia. Cumplida la audiencia del artículo anterior, el juez dicta sin
          más trámite sentencia. En caso que la complejidad del asunto así lo requiera, puede
          diferirse su dictado hasta un plazo máximo de tres (3) días.
          En este último caso, cita a las partes y a su defensor a fin de notificar fehacientemente la
          resolución recaída.
          " />
          <AccordionItem numero={123} isOpen={isOpenAll} textoAcordeon="Recurribilidad. La resolución prevista en el presente capítulo es
          recurrible, debiendo expedirse el tribunal en el plazo de diez (10) días." />
          LIBRO III
          DISPOSICIONES FINALES
          TÍTULO ÚNICO
          DISPOSICIONES GENERALES
          CAPÍTULO ÚNICO
          DISPOSICIONES FINALES Y TRANSITORIAS
          <AccordionItem numero={124} isOpen={isOpenAll} textoAcordeon="Modificación artículos 24 y 25 – Ley XIV – N.º 3 (Antes Ley 2677).
                Modifícanse los artículos 24 y 25 del Código Procesal Penal - Ley XIV – N.º 3 (Antes Ley
                2677), los que quedan redactados de la siguiente manera:
                “ARTÍCULO 24: Los Tribunales en lo penal juzgan:
                1) en única instancia, de los delitos cuya competencia no se atribuya a otro tribunal;
                2) en única instancia, de las solicitudes de libertad condicional;
                3) de los recursos contra las resoluciones de los jueces de instrucción;
                4) de los recursos de queja por justicia retardada o denegada por los mismos;
                5) de las cuestiones de competencia suscitadas entre los jueces de instrucción.
                Los tribunales penales de niños, niñas y adolescentes juzgan:
                1) de los delitos cuya comisión se impute a niños, niñas o adolescentes que no hayan
                cumplido dieciocho (18) años al tiempo de suceder el hecho;
                2) de las solicitudes de libertad condicional;
                3) de los recursos contra las resoluciones de los jueces penales de garantías de niños, niñas
                y adolescentes;
                4) de los recursos de queja por justicia retardada o denegada por los mismos;
                5) de las cuestiones de competencia suscitadas entre los jueces penales de garantías de
                niños, niñas y adolescentes.”
                “ARTÍCULO 25: COMPETENCIA DE LOS JUECES DE INSTRUCCIÓN,
                CORRECCIONAL Y PENAL DE GARANTÍAS DE NIÑOS, NIÑAS Y
                ADOLESCENTES
                El juez de instrucción investiga los delitos de acción pública.
                El juez correccional tiene las siguientes atribuciones:
                1) juzgar en única instancia los delitos que la ley reprima con pena que no exceda los tres
                (3) años de prisión, multa e inhabilitación;
                2) juzgar en grado de apelación en los procesos sobre contravenciones policiales y
                municipales, en los casos y formas establecidas por la ley respectiva;
                3) juzgar en única instancia los homicidios culposos.
                El juez en lo penal de garantías de niños, niñas y adolescentes ejercerá el control de
                legalidad y de legitimidad constitucional de la investigación dirigida por el agente fiscal en
                relación a los hechos atribuidos a niñas, niñas o adolescentes que no hubieren cumplido
                dieciocho (18) años al tiempo de la comisión de ellos, cualquiera fuere la pena, de acuerdo
                con las disposiciones de la Ley de Protección Integral de los Derechos de Niños, Niñas y
                Adolescentes y las de éste código." />
          <AccordionItem numero={125} isOpen={isOpenAll} textoAcordeon="Modificación artículos 24 y 25 – Ley XIV – N.º 3 (Antes Ley 2677).
          Modifícanse los artículos 24 y 25 del Código Procesal Penal - Ley XIV – N.º 3 (Antes Ley
          2677), los que quedan redactados de la siguiente manera:
          “ARTÍCULO 24: Los Tribunales en lo penal juzgan:
          1) en única instancia, de los delitos cuya competencia no se atribuya a otro tribunal;
          2) en única instancia, de las solicitudes de libertad condicional;
          3) de los recursos contra las resoluciones de los jueces de instrucción;
          4) de los recursos de queja por justicia retardada o denegada por los mismos;
          5) de las cuestiones de competencia suscitadas entre los jueces de instrucción.
          Los tribunales penales de niños, niñas y adolescentes juzgan:
          1) de los delitos cuya comisión se impute a niños, niñas o adolescentes que no hayan
          cumplido dieciocho (18) años al tiempo de suceder el hecho;
          2) de las solicitudes de libertad condicional;
          3) de los recursos contra las resoluciones de los jueces penales de garantías de niños, niñas
          y adolescentes;
          4) de los recursos de queja por justicia retardada o denegada por los mismos;
          5) de las cuestiones de competencia suscitadas entre los jueces penales de garantías de
          niños, niñas y adolescentes.”
          “ARTÍCULO 25: COMPETENCIA DE LOS JUECES DE INSTRUCCIÓN,
          CORRECCIONAL Y PENAL DE GARANTÍAS DE NIÑOS, NIÑAS Y
          ADOLESCENTES
          El juez de instrucción investiga los delitos de acción pública.
          El juez correccional tiene las siguientes atribuciones:
          1) juzgar en única instancia los delitos que la ley reprima con pena que no exceda los tres
          (3) años de prisión, multa e inhabilitación;
          2) juzgar en grado de apelación en los procesos sobre contravenciones policiales y
          municipales, en los casos y formas establecidas por la ley respectiva;
          3) juzgar en única instancia los homicidios culposos.
          El juez en lo penal de garantías de niños, niñas y adolescentes ejercerá el control de
          legalidad y de legitimidad constitucional de la investigación dirigida por el agente fiscal en
          relación a los hechos atribuidos a niñas, niñas o adolescentes que no hubieren cumplido
          dieciocho (18) años al tiempo de la comisión de ellos, cualquiera fuere la pena, de acuerdo
          con las disposiciones de la Ley de Protección Integral de los Derechos de Niños, Niñas y
          Adolescentes y las de éste código.”
          " />
          <AccordionItem numero={126} isOpen={isOpenAll} textoAcordeon="Órganos judiciales. Creación. Créanse los siguientes órganos judiciales:
            a) En la Primera Circunscripción Judicial:
            Una (1) Consejería de Familia.
            Un (1) Tribunal Penal de Niños, Niñas y Adolescentes.
            b) En la Segunda Circunscripción Judicial:
            Un (1) Juzgado de Familia con una Secretaría Letrada.
            Una (1) Consejería de Familia.
            Un (1) Tribunal Penal de Niños, Niñas y Adolescentes.
            Una (1) Fiscalía.
            c) En la Tercera Circunscripción Judicial:
            Un (1) Juzgado de Familia con una Secretaría Letrada.
            Una (1) Consejería de Familia.
            Un (1) Tribunal Penal de Niños, Niñas y Adolescentes.
            Una (1) Fiscalía.
            d) En la Cuarta Circunscripción Judicial:
            Una (1) Consejería de Familia.
            ARTÍCULO 126.- Órganos judiciales. Transformación. Transfórmanse los siguientes
            órganos judiciales.
            a) En la Primera Circunscripción Judicial:
            El actual Juzgado en lo Correccional y de Menores N.°
            1 se transforma en Juzgado
            Correccional. El juez titular del mencionado juzgado se desempeñará como juez
            correccional.
            El actual Juzgado en lo Correccional y de Menores N.º
            2 se transforma en Juzgado Penal de
            Garantías de Niños, Niñas y Adolescentes. El juez titular del mencionado juzgado se
            desempeñará como juez penal de garantías de niños, niñas y adolescentes.
            Los agentes fiscales y defensores oficiales que actualmente se desempeñan ante el Juzgado
            en lo Correccional y de Menores N.°
            1, se desempeñarán ante el Juzgado Correccional y el
            agente fiscal y defensor oficial que actualmente se desempeña ante el Juzgado Correccional
            y de Menores N.°
            2, actúan ante el Juzgado Penal de Garantías de Niños, Niñas y
            Adolescentes, respectivamente.
            b) En la Segunda Circunscripción Judicial:
            El actual Juzgado en lo Correccional y de Menores N.°
            1 se denominará Juzgado
            Correccional y Penal de Garantías de Niños, Niñas y Adolescentes y será competente para
            entender en las causas atribuidas a los jueces correccionales y penales de garantías de
            niños, niñas y adolescentes.
            La actual Secretaría N.º
            1 del mencionado juzgado se denomina Secretaría Correccional y
            ante ella tramitarán las causas de competencia del juez correccional.
            La actual Secretaría N.º
            2 se denominará Secretaría Penal de Garantías de Niños, Niñas y
            Adolescentes y ante ella tramitarán las causas de competencia del juez penal de garantías de
            niños, niñas y adolescentes.
            c) En la Tercera Circunscripción Judicial:
            El actual Juzgado en lo Correccional y de Menores N.°
            1 se denominará Juzgado
            Correccional y Penal de Garantías de Niños, Niñas y Adolescentes y será competente para
            entender en las causas atribuidas a los jueces correccionales y penales de garantías de
            niños, niñas y adolescentes.
            La actual Secretaría N.º
            1 del mencionado juzgado se denominará Secretaría Correccional y
            ante ella tramitarán las causas de competencia del juez correccional.
            La actual Secretaría N.º
            2 se denominará Secretaría Penal de Garantías de Niños, Niñas y
            Adolescentes y ante ella tramitarán las causas de competencia del juez penal de garantías de
            niños, niñas y adolescentes.
            d) En la Cuarta Circunscripción Judicial:
            El actual Juzgado en lo Correccional y de Menores N.º
            1 se denominará Juzgado
            Correccional y Penal de Garantías de Niños, Niñas y Adolescentes y será competente para
            entender en las causas atribuidas a los jueces correccionales y penales de garantías de
            niños, niñas y adolescentes por el Código Procesal Penal.
            La actual Secretaría N.°
            1 del mencionado juzgado se denominará Secretaría Correccional y
            ante ella tramitarán las causas de competencia del juez correccional.
            La actual Secretaría N.º
            2 se denominará Secretaría Penal de Garantías de Niños, Niñas y
            Adolescentes y ante ella tramitarán las causas de competencia del juez penal de garantías de
            niños, niñas y adolescentes.
            Los actuales fiscal de fuero universal y defensor de fuero universal actuarán como agente
            fiscal y defensor de oficio ante el Juzgado de Instrucción N.°
            1 y el Juzgado Correccional y
            Penal de Garantías de Niños, Niñas y Adolescentes." />
          <AccordionItem numero={127} isOpen={isOpenAll} textoAcordeon="Disposición de transición en lo penal. Hasta tanto se creen y pongan en
            funcionamiento los tribunales penales de niños, niñas y adolescentes, el juzgamiento de los
            niños, niñas y adolescentes que no hubiesen cumplido dieciocho (18) años de edad al
            tiempo de la comisión del hecho que se les imputa, corresponde a los jueces penales de
            garantías de niños, niñas y adolescentes. Los tribunales penales de niños, niñas y
            adolescentes entienden en los recursos contra las decisiones de los jueces penales de
            garantías de niños, niñas y adolescentes y de las cuestiones de competencia suscitadas entre
            ellos." />
          <AccordionItem numero={128} isOpen={isOpenAll} textoAcordeon="Equipo técnico interdisciplinario. Los equipos técnicos
          interdisciplinarios de las agencias de derechos de niños, niñas, adolescentes y la familia
          brindan apoyo a la labor de los órganos judiciales en causas que involucren a niños, niñas o
          adolescentes, mediante la elaboración de diagnósticos, pericias e informes que éstos les
          requieran, en las condiciones de prestación del servicio que se convengan." />
          <AccordionItem numero={129} isOpen={isOpenAll} textoAcordeon="Adhesión. Invítase a los municipios a adherir a la presente ley,
          disponiendo en el ámbito de su competencia:
          a) la constitución de instancias administrativas similares a las creadas en esta ley;
          b) la creación de un fondo especial para la efectivización y protección integral de los
          derechos de niños, niñas, adolescentes y la familia." />
          <AccordionItem numero={130} isOpen={isOpenAll} textoAcordeon="Normas procedimentales. No son de aplicación las disposiciones
          contenidas en los artículos 234, 235, 236 y 237 del Código Procesal Civil y Comercial de la
          Provincia a los niños, niñas o adolescentes menores de dieciocho (18) años.
          En la investigación y juzgamiento de los hechos atribuidos a personas menores de
          dieciocho (18) años al tiempo de la comisión de ellos, se procede con arreglo a las
          disposiciones de la presente ley y complementariamente las normas comunes del Código
          Procesal Penal de la Provincia de Misiones.
          " />
          <AccordionItem numero={131} isOpen={isOpenAll} textoAcordeon="Derogación. Derógase el Capítulo II del Título II del Libro III del
          Código Procesal Penal de la Provincia de Misiones – Ley XIV – N.º 3 (Antes Ley 2677) y
          los artículos 62 y 64 de la Ley IV – N.º 15 (Antes Decreto Ley 1550/82)." />
          <AccordionItem numero={132} isOpen={isOpenAll} textoAcordeon="Normas de funcionamiento. El Superior Tribunal de Justicia determina
          la fecha en la cual los órganos jurisdiccionales creados en esta ley asumen la jurisdicción y
          competencia correspondiente, establece las normas de funcionamiento y procede a la
          distribución de tareas, turnos, personal y equipamiento indispensable para su eficaz
          funcionamiento.
          Las causas actualmente en trámite o que se inicien antes de que comiencen a funcionar los
          juzgados que se crean por la presente, continúan hasta su finalización en los juzgados de su
          radicación y se tramitan de acuerdo con las disposiciones procesales actualmente vigentes.
          " />
          <AccordionItem numero={133} isOpen={isOpenAll} textoAcordeon="Adecuaciones. Autorízase al Poder Ejecutivo a realizar las
          modificaciones, adecuaciones y reestructuraciones en el Presupuesto General de la
          Provincia a los fines de lo establecido en la presente ley." />
          <AccordionItem numero={134} isOpen={isOpenAll} textoAcordeon="Reglamentación. El Poder Ejecutivo reglamentará la presente ley y
          dictará las disposiciones necesarias para coordinar el funcionamiento del Consejo
          Provincial de Garantías de los Derechos de Niños, Niñas, Adolescentes y la Familia creado
          por la presente ley y el Consejo Multilateral de Políticas Sociales y Desarrollo Interior
          creado por el artículo 4 de la Ley I – N.º 112 (Antes Ley 3637), sus órganos ejecutivos y
          sus respectivas organizaciones locales, de manera de evitar la duplicación de organismos
          y/o funciones durante la coexistencia de ambos organismos.
          " />
          <AccordionItem numero={135} isOpen={isOpenAll} textoAcordeon="Suspéndase la vigencia de los Libros II y III de la presente ley, hasta
          tanto se dicte su reglamentación." />
          <AccordionItem numero={136} isOpen={isOpenAll} textoAcordeon="Comuníquese al Poder Ejecutivo." />
        </div>
      </div>
    </div>
  );
}


export default leyII;