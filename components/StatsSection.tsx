'use client';

import { animate, motion } from 'framer-motion';
import { TitleSection } from './TitleSection';
import { stats } from '@/data/data';
import { cn } from '@/lib/utils';
import { Star, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}
const Counter = ({
  from,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
}: CounterProps) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controlls = animate(from, to, {
      duration,
      onUpdate: v => setValue(Math.floor(v)),
    });

    return () => controlls.stop();
  }, [from, to, duration]);

  return (
    <span>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section
      id='stats'
      className='section-padding bg-foreground text-background scroll-mt-24'
    >
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='section-header-wrapper'
        >
          <TitleSection title='Millones Confían en Nosotros' />
          <p className='mt-6 text-lg text-background/70'>
            Nuestros números hablan por sí solos. Únete a la creciente
            comunidad de usuarios que confían en Finova.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className='bg-background/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-background/10 hover:bg-background/10 transition-all hover:-translate-y-1 group'
            >
              <div
                className={cn(
                  'size-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform',
                  stat.bgColor
                )}
              >
                <stat.icon className={cn('size-7', stat.color)} />
              </div>

              <motion.p
                className='text-4xl md:text-5xl font-bold text-background mb-2'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.isDecimal ? (
                  <span>
                    {stat.value}
                    {stat.suffix}
                  </span>
                ) : (
                  <Counter
                    from={0}
                    to={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </motion.p>

              <p className='text-background/60 text-sm md:text-base'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Etiquetas de Confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className='mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12'
        >
          {/* 1 */}
          <div className='flex items-center gap-3'>
            <div className='size-12 rounded-full bg-primary/20 flex items-center justify-center'>
              <Star className='size-6 text-primary fill-primary' />
            </div>

            <div>
              <p className='font-semibold text-background'>
                Mejor Valorada
              </p>
              <p className='text-sm text-background/60'>
                App Store y Play Store
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className='flex items-center gap-3'>
            <div className='size-12 rounded-full bg-green-500/20 flex items-center justify-center'>
              <TrendingUp className='size-6 text-green-500 fill-green-500' />
            </div>

            <div>
              <p className='font-semibold text-background'>
                Crecimiento Rápido
              </p>
              <p className='text-sm text-background/60'>
                50% de Crecimiento Anual
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className='flex items-center gap-3'>
            <div className='size-12 rounded-full bg-blue-500/20 flex items-center justify-center'>
              <Users className='size-6 text-blue-500 fill-blue-500' />
            </div>

            <div>
              <p className='font-semibold text-background'>
                Comunidad
              </p>
              <p className='text-sm text-background/60'>
                Base de Usuarios Activos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
