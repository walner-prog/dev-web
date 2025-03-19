import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
        <Image
          src='/home-4.png'
          priority
          width='800'
          height='800'
          alt='Avatar'
        />
        <div className='flex flex-col justify-center max-w-2xl'>
          <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
            Desarrollo de software con propósito: <br />
            <TypeAnimation
              sequence={[
                'creando soluciones',
                1000,
                'optimizando procesos',
                1000,
                'innovando con código',
                1000,
                'impulsando el futuro',
                1000
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              className='font-bold text-secondary'
            />
          </h1>

          <p className='w-full mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8'>
            Hola, soy Carlos Álvarez, Desarrollador de Software con experiencia
            en Frontend, Backend y bases de datos. Trabajo con JavaScript
            (React, Next, Vue), usando Tailwind CSS y Materialize para
            interfaces atractivas. En el backend, utilizo PHP (Laravel),
            Node.js, Express y C# (.NET), gestionando bases de datos como
            PostgreSQL, MySQL y MongoDB.
          </p>

          

          <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
            <a
              href='/projects'
              className='px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'
            >
              Ver proyectos
            </a>
            <a
              href='/contact'
              className='px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary'
            >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
