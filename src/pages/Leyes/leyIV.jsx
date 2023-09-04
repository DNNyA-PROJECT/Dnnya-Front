import React, { useState } from 'react';

class AccordionItem extends React.Component {
  render() {
    const { numero, textoAcordeon, isOpen } = this.props;
    const collapseId = `collapse${numero}`;

    // Reemplaza los saltos de línea \n con elementos <br />
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

function App() {
  const [isOpenAll, setIsOpenAll] = useState(false);

  const toggleAccordionAll = () => {
    setIsOpenAll(!isOpenAll);
  };

  return (
    <div className='' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }} >
      <div>


        <button className='btn register btn-lg'
          style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} onClick={toggleAccordionAll}>
          {isOpenAll ? 'Cerrar Todos' : 'Abrir Todos'}
        </button>

        <div className="accordion" id="accordionExample">
        <h2>LEY II – N.° 16</h2>
                <h4>(Antes Ley 3820) </h4>

                LEY DE PROTECCIÓN INTEGRAL DE LOS DERECHOS <br />
                DE NIÑOS, NIÑAS Y ADOLESCENTES <br />
                LIBRO I <br />
                PROTECCIÓN INTEGRAL DE LOS DERECHOS <br />
                TÍTULO I <br />
                DISPOSICIONES GENERALES <br />
                CAPÍTULO ÚNICO <br />
                FINALIDAD Y OBJETIVOS <br />
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
          <AccordionItem numero={33} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={34} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO II
          POLÍTICAS PÚBLICAS
          <AccordionItem numero={35} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO III
          MEDIDAS DE PROTECCIÓN DE DERECHOS
          <AccordionItem numero={36} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={37} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={38} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={39} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={40} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={41} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={42} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO IV
          DISEÑO ORGANIZACIONAL
          <AccordionItem numero={43} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CONSEJO PROVINCIAL DE GARANTÍAS DE LOS DERECHOS DE NIÑOS,
          NIÑAS, ADOLESCENTES Y LA FAMILIA
          <AccordionItem numero={44} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={45} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={46} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={47} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={48} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={49} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={50} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={51} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={52} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={53} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={54} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={55} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={56} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={57} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO V
          FONDO ESPECIAL
          <AccordionItem numero={58} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={59} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={60} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={61} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={62} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={63} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO VI
          ORGANIZACIONES DE LA SOCIEDAD CIVIL
          <AccordionItem numero={64} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO VII
          ORGANISMOS Y ORGANIZACIONES DE ATENCIÓN
          <AccordionItem numero={65} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={66} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          LIBRO II
          FUERO DE NIÑOS, NIÑAS, ADOLESCENTES Y LA FAMILIA
          TÍTULO I
          ÓRGANOS JURISDICCIONALES
          CAPÍTULO I
          DISPOSICIONES GENERALES
          <AccordionItem numero={67} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={68} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={69} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={70} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={71} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={72} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={73} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO II
          DERECHOS DE VÍCTIMAS Y TESTIGOS
          <AccordionItem numero={74} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={75} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={76} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          TÍTULO II
          JUSTICIA DE FAMILIA
          CAPÍTULO I
          COMPETENCIA
          <AccordionItem numero={77} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO II
          ETAPA PREJUDICIAL DE AVENIMIENTO
          <AccordionItem numero={78} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={79} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={80} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={81} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={82} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={83} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={84} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={85} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={86} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO III
          PROCEDIMIENTO JUDICIAL
          <AccordionItem numero={87} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={88} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          TÍTULO III
          JUSTICIA PENAL DE NIÑOS, NIÑAS Y ADOLESCENTES
          CAPÍTULO I
          COMPETENCIA
          <AccordionItem numero={89} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={90} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={91} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={92} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO II
          RESTRICCIÓN DE LA LIBERTAD
          <AccordionItem numero={93} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={94} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={95} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={96} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO III
          PROCEDIMIENTO PENAL
          <AccordionItem numero={97} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={98} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={99} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={100} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={101} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={102} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={103} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={104} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={105} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={106} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO IV
          MEDIDAS DE COERCIÓN PERSONAL
          <AccordionItem numero={107} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={108} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={109} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={110} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO V
          ACTOS PRELIMINARES
          <AccordionItem numero={111} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={112} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={113} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={114} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO VI
          AUDIENCIA DE DEBATE
          <AccordionItem numero={115} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={116} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={117} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={118} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          CAPÍTULO VII
          NIÑOS, NIÑAS O ADOLESCENTES INIMPUTABLES
          <AccordionItem numero={119} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={120} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={121} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={122} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={123} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
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
          <AccordionItem numero={125} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={126} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={127} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={128} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={129} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={130} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={131} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={132} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={133} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={134} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={135} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
          <AccordionItem numero={136} isOpen={isOpenAll} textoAcordeon="Texto personalizado para el artículo 2." />
        </div>
      </div>
    </div>
  );
}


export default App;
