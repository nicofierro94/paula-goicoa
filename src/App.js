//190.64.98.104
import { useState } from 'react'
import logo from './assets/img/paula/logo.png'
import author from './assets/img/paula/author.png'
// import background from './assets/img/bg-hero.jpg'
// import background from './assets/img/paula/alexander-pemberton-skLqGtLrYKc-unsplash.jpg'
// import background from './assets/img/paula/pro-church-media-2DTE3ePfnD8-unsplash.jpg'
// import background from './assets/img/paula/rivage-OV44gxH71DU-unsplash.jpg'
// import background from './assets/img/paula/ron-mcclenny-9yI8eQ9mdvY-unsplash.jpg'
import background from './assets/img/paula/samantha-gades-gKjLLN1T8HQ-unsplash.jpg'
// import background from './assets/img/paula/unseen-studio-s9CC2SKySJM-unsplash.jpg'
// import close from './assets/img/icon-close.svg'
import map from './assets/img/paula/map3.png'
import './assets/styles/main.min.css'

function App() {
  // const [mobileMenu, setMobileMenu] = useState();
  const [igHover, setIgHover] = useState(false);
  return (
    <div id="main" class="relative">
      <div x-data="{
                      triggerNavItem(id) {
                          $scroll(id)
                      },
                      triggerMobileNavItem(id) {
                          mobileMenu = false;
                          this.triggerNavItem(id)
                      }
                  }">

        <div class="w-full z-50 top-0 py-3 sm:py-5  absolute">
          <div class="container flex items-center justify-between">
            <div>
              <a href="/">
                <img src={logo} class="w-24 lg:w-48" alt="logo" />
              </a>
            </div>

            {/* menu-desktop */}
            <div class="hidden lg:block">
              <ul class="flex items-center">

                <li class="group pl-6">
                  <span onClick={() => {
                    // window.location.href = "/#quien-soy"
                    const element = document.getElementById("quien-soy");
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                    class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-black">
                    ¿Quién soy?
                  </span>
                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>

                <li class="group pl-6">
                  <span onClick={() => {
                    // window.location.href = "/#atencion-personalizada"
                    const element = document.getElementById("atencion-personalizada");
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                    class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-black">
                    Atención personalizada
                  </span>
                  <span
                    class="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>

                <li class="group pl-6">
                  <span onClick={() => {
                    // window.location.href = "/#consultorio"
                    const element = document.getElementById("consultorio");
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                    class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-black">
                    Consultorio
                  </span>
                  <span class="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
              </ul>

            </div>
            {/* <div class="block lg:hidden">
              <button onClick={() => setMobileMenu(true)}>
                <i class="bx bx-menu text-4xl text-black"></i>
              </button>
            </div> */}
          </div>
        </div>
        {/* menu-mobile */}
        {/* <div class={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden ${mobileMenu && 'opacity-100 pointer-events-auto'}`}>
          <div class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button class="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
              <img src={close} class="h-10 w-auto" alt="" />
            </button>

            <ul class="mt-8 flex flex-col">

              <li class="py-2">
                <span onClick={() => { window.location.href = "/#quien-soy" }}
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  ¿Quién soy?
                </span>
              </li>

              <li class="py-2">
                <span onClick={() => { window.location.href = "/#atencion-personalizada" }}
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Atención personalizada
                </span>
              </li>

              <li class="py-2">
                <span onClick={() => { window.location.href = "/#consultorio" }}
                  class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  Consultorio
                </span>
              </li>

            </ul>
          </div>
        </div> */}

        {/* cover */}
        <div>
          <div class="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: `url(${background})` }}>
            {/* styles="background-image: url(./assets/img/bg-hero.jpg)"> */}
            <div class="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat" />

            <div class="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div class="flex flex-col items-center justify-center lg:flex-row">
                <div class="rounded-full border-8 border-primary shadow-xl">
                  <img
                    src={author}
                    class="h-48 rounded-full sm:h-56"
                    alt="author"
                  />
                </div>
                <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 class="text-center font-header text-4xl text-black sm:text-left sm:text-5xl md:text-6xl">
                    Hola soy Paula Goicoa
                  </h1>
                  <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p class="font-body text-lg uppercase text-white">Contactame</p>
                      <div class="hidden sm:block">
                        <i class="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      {/* <a href="/">
                        <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                      </a>
                      <a href="/" class="pl-4">
                        <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                      </a>
                      <a href="/" class="pl-4">
                        <i class="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                      </a>
                      <a href="/" class="pl-4">
                        <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                      </a> */}
                      <a href="https://www.instagram.com/psi.p.goicoa/" target='_blank' class="flex pl-4" onMouseEnter={() => setIgHover(true)} onMouseLeave={() => setIgHover(false)}>
                        <i class={`bx bxl-instagram text-2xl text-white hover:text-yellow ${igHover && 'text-yellow'}`}></i>
                        <span className={`ml-2 text-xl text-white ${igHover && 'underline'}`}>psi.p.goicoa</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* first-block */}
        <div class="bg-grey-50" id="quien-soy">
          <div class="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            {/* <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left"> */}
            <div class="w-full text-center lg:text-left">
              <h2
                class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              >
                ¿Quien soy?
              </h2>
              <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                ¡Hola! Soy Paula Goicoa, Licenciada en Psicología graduada de la Universidad de la República.
              </h4>
              <p class="pt-6 font-body leading-relaxed text-grey-20">
                Trabajo desde la Terapia Cognitivo Conductual Comportamental (TCC) donde me esfuerzo por aplicar las últimas investigaciones y técnicas para brindar las mejores herramientas a mis pacientes.
                A lo largo de mi carrera, he buscado constantemente oportunidades de formación continua, participando en diversos cursos y diplomados para mantenerme actualizada en el campo de la psicología. Actualmente, me encuentro realizando una maestría en terapia cognitivo conductual, lo que me permite profundizar aún más en mi conocimiento y habilidades en esta área. Además, estoy cursando un posgrado en diseño y desarrollo en planes sociales para personas drogodependientes.
                Además, cuento con un diplomado específico en Trastorno del Espectro Autista, lo que me ha proporcionado una comprensión más profunda de este trastorno y cómo abordarlo en la práctica clínica. Mis cursos adicionales abarcan una amplia gama de temas, incluida la orientación vocacional y ocupacional para adolescentes y adultos, el tratamiento del uso problemático de sustancias psicoactivas, así como la evaluación clínica y el manejo de trastornos de la conducta alimentaria. También he recibido formación en la evaluación clínica del trastorno por déficit de atención e hiperactividad (TDAH) y otras dificultades relacionadas.
                Además de mi formación académica, cuento con experiencia laboral tanto en clínicas como en consultorios privados, donde he trabajado con niños, adolescentes y adultos. Esta experiencia me ha permitido aplicar mis conocimientos teóricos en entornos prácticos y trabajar con una amplia variedad de pacientes en diferentes contextos.
                Mi objetivo es ofrecer un enfoque comprensivo y personalizado para cada uno de mis pacientes, utilizando las mejores prácticas y técnicas respaldadas por la evidencia en el campo de la psicología cognitivo conductual.
              </p>
            </div>
          </div>
        </div>

        {/* second-block */}
        <div class="bg-grey-50" id="atencion-personalizada">
          <div class="container flex flex-col items-center pt-16 md:pt-20 lg:flex-row">
            <h2 class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Atención personalizada
            </h2>
          </div>
          <div class="container flex flex-col py-16 md:py-20 lg:flex-row">
            <div class="w-full text-center lg:text-left" style={{ marginRight: '1.25rem' }}>
              <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Niños
              </h4>
              <p class="pt-6 font-body leading-relaxed text-grey-20">
                En mi práctica de terapia cognitivo conductual, tengo experiencia trabajando con niños, un aspecto fundamental de mi enfoque terapéutico. Al trabajar con niños, mi objetivo es crear un ambiente seguro y de confianza donde puedan expresarse libremente.
                Utilizo técnicas y estrategias diseñadas específicamente para niños, adaptadas a su nivel de desarrollo cognitivo y emocional. Esto puede incluir juegos, actividades creativas, cuentos, dibujos y técnicas de juego terapéutico que les ayuden a comprender y manejar sus emociones, pensamientos y comportamientos de manera efectiva.
                Además, trabajo de cerca con los padres o tutores para brindarles orientación y apoyo en el manejo de las dificultades que enfrenta su hijo. Juntos, colaboramos en la implementación de estrategias y técnicas en el hogar para promover un ambiente familiar más saludable y favorable al crecimiento emocional y conductual del niño.
                Mi objetivo es no solo brindar herramientas a los niños,  superar sus dificultades actuales, sino también dotarlos de herramientas y habilidades que les sirvan a lo largo de su vida para enfrentar desafíos futuros de manera positiva y resiliente.
              </p>
            </div>
            <div class="w-full text-center lg:text-left" style={{ marginRight: '1.25rem' }}>
              <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Adolecentes
              </h4>
              <p class="pt-6 font-body leading-relaxed text-grey-20">
                La adolescencia es una etapa de gran cambio y crecimiento, pero también puede ser un momento de desafíos y dificultades. En mi práctica de terapia cognitivo conductual, tengo una amplia experiencia trabajando con adolescentes, reconociendo y abordando las complejidades únicas que enfrentan durante esta etapa crucial de desarrollo.
                Entiendo que los adolescentes pueden enfrentarse a una variedad de dificultades, desde la ansiedad y la depresión hasta los conflictos familiares y las dificultades academicas. Mi enfoque se centra en proporcionar un espacio seguro y de apoyo donde los adolescentes puedan explorar sus pensamientos, emociones y comportamientos, y desarrollar estrategias efectivas para afrontar los desafíos que enfrentan.
                Utilizo técnicas de terapia cognitivo conductual adaptadas a las necesidades y preferencias de cada adolescente, fomentando la autoexploración, la reflexión y el desarrollo de habilidades prácticas para afrontar el estrés, la presión y las dificultades interpersonales.
                Además, reconozco la importancia de involucrar a los padres o tutores en el proceso terapéutico, colaborando estrechamente con ellos para brindarles apoyo y orientación en el manejo de las dificultades de sus hijos adolescentes, así como en la promoción de una comunicación abierta y un ambiente familiar positivo.
                Mi objetivo es brindar herramientas a los adolescentes a desarrollar una mayor autoconciencia, autoestima y habilidades de afrontamiento, para que puedan navegar con éxito los desafíos de la adolescencia y construir una base sólida para un bienestar emocional duradero
              </p>
            </div>
            <div class="w-full text-center lg:text-left">
              <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Adultos
              </h4>
              <p class="pt-6 font-body leading-relaxed text-grey-20">
                El  trabajo con adultos desde (TCC) para ayudarlos a superar una amplia gama de desafíos emocionales y conductuales. Desde la ansiedad y la depresión hasta el estrés laboral y las dificultades en las relaciones, mi enfoque se centra en proporcionar un espacio seguro y de apoyo donde los adultos puedan explorar sus pensamientos, emociones y comportamientos de una manera comprensiva y orientada a la acción.
                Utilizo técnicas probadas de TCC para identificar y cambiar patrones de pensamiento y comportamiento que puedan estar contribuyendo a sus problemas. A través de la colaboración y la enseñanza de habilidades prácticas, ayudo a los adultos a desarrollar estrategias efectivas para afrontar el estrés, manejar las emociones difíciles y mejorar la calidad de sus vidas.
                Además, reconozco la importancia de abordar los factores contextuales y ambientales que pueden influir en la salud mental de los adultos, como el entorno laboral, las relaciones interpersonales y los hábitos de vida. Trabajo de cerca con mis pacientes para identificar y abordar estos factores, ayudándoles a construir un estilo de vida más equilibrado y satisfactorio.
                Ya sea que estén buscando superar un desafío específico o simplemente deseen mejorar su bienestar emocional y calidad de vida en general, estoy comprometida a proporcionar un enfoque personalizado y basado en la evidencia para ayudar a mis pacientes a alcanzar sus metas y vivir una vida más plena y significativa
              </p>
            </div>
          </div>
        </div>

        {/* contacto */}
        <div class="container py-16 md:py-20" id="consultorio">
          <div class="flex flex-col pt-16 lg:flex-row">
            <div
              class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
            >
              <div class="flex items-center">
                <i class="bx bx-phone text-2xl text-grey-40"></i>
                <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  Mi Teléfono
                </p>
              </div>
              <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                (+598) 92 580 082
              </p>
            </div>
            <div
              class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
            >
              <div class="flex items-center">
                <i class="bx bx-envelope text-2xl text-grey-40"></i>
                <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  Mi correo
                </p>
              </div>
              <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                pgoicoa@gmail.com
              </p>
            </div>
            <div
              class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
            >
              <div class="flex items-center">
                <i class="bx bx-map text-2xl text-grey-40"></i>
                <p class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  Consultorio
                </p>
              </div>
              <p class="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                Bv. Gral. Artigas 4407, 11800 Montevideo, Uruguay
              </p>
            </div>
          </div>
        </div>

        {/* map */}
        <div class="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96" style={{ backgroundBlendMode: 'hue', backgroundImage: `linear-gradient(rgb(221, 194, 209), rgb(221, 194, 209)), url(${map})` }} />

      </div>
      <div className="bg-primary">
        <div class="container flex flex-col justify-between py-6 sm:flex-row">
          <p class="text-center font-body text-black md:text-left">
            © Copyright 2024, Jinkanna
          </p>
          <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="https://www.instagram.com/psi.p.goicoa/" class="pl-4">
              <i class="bx bxl-instagram text-2xl text-black hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
