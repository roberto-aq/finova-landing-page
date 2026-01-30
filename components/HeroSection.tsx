'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Image from 'next/image';
import { phoneMockup1, phoneMockup2, phoneMockup3 } from '@/assets';

export const HeroSection = () => {
  return (
    <section className='relative min-h-screen pt-24 pb-16 overflow-hidden gradient-hero'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none'>
        <div className='absolute top-20 right-20 size-72 rounded-full bg-primary/20 blur-3xl' />
        <div className='absolute bottom-40 right-40 size-96 rounded-full bg-primary/10 blur-3xl' />
      </div>

      <div className='container relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100dvh-120px)]'>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-center lg:text-left'
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground'
            >
              Toma el Control de Tu {''}
              <span className='text-gradient'>Futuro Financiero</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='section-description md:text-xl max-w-xl mx-auto lg:mx-0'
            >
              Gestiona tus finanzas con facilidad. Controla tus
              gastos, establece metas y alcanza la libertad financiera
              con nuestra app intuitiva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <Button variant={'coral'} size={'lg'} className='gap-2'>
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='size-4'
                >
                  <title>Google Play</title>
                  <path d='M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z' />
                </svg>
                Google Play
              </Button>
              <Button
                variant={'outline'}
                size={'lg'}
                className='gap-2 border-foreground/20 hover:bg-foreground hover:text-background'
              >
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='size-4'
                >
                  <title>Apple</title>
                  <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
                </svg>
                App Store
              </Button>
            </motion.div>
          </motion.div>

          <div className='relative h-125 md:h-150 lg:h-175'>
            {/*  */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 animate-float'
            >
              <Image
                src={phoneMockup1.src}
                alt='Aplicacion Finova 1'
                width={192}
                height={192}
                className='w-48 md:w-56 lg:w-64 drop-shadow-2xl'
              />
            </motion.div>
            {/*  */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 animate-float-delayed'
            >
              <Image
                src={phoneMockup2.src}
                alt='Aplicacion Finova 2'
                width={192}
                height={192}
                className='w-40 md:w-48 lg:w-52 opacity-90 drop-shadow-xl'
              />
            </motion.div>
            {/*  */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className='absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 animate-float-slow'
            >
              <Image
                src={phoneMockup1.src}
                alt='Aplicacion Finova 1'
                width={192}
                height={192}
                className='w-40 md:w-48 lg:w-52 opacity-90 drop-shadow-xl'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
