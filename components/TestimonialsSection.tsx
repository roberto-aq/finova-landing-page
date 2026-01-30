'use client';

import { motion } from 'framer-motion';
import { TitleSection } from './TitleSection';
import { testimonials } from '@/data/data';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TestimonialsSection = () => {
  return (
    <section
      id='testimonials'
      className='section-padding bg-muted/30 scroll-mt-24'
    >
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='section-header-wrapper'
        >
          <TitleSection title='Lo Que Dicen Nuestros Usuarios' />
          <p className='section-description'>
            Únete a miles de usuarios satisfechos que han transformado
            su vida financiera con Finova.
          </p>
        </motion.div>

        {/* Testimonials GRID */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-all hover:-translate-y-1'
            >
              {/* Header */}
              <div className='flex items-center gap-3 mb-6'>
                <div className='size-12 rounded-full icon-container-base'>
                  <span className='text-sm font-semibold'>
                    {testimonial.avatar}
                  </span>
                </div>

                <div>
                  <p className='font-semibold text-foreground'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.date}
                  </p>
                </div>
              </div>

              {/* Calificacion o Estrellas */}
              <div className='flex gap-1 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='size-4 fill-primary text-primary'
                  />
                ))}
              </div>

              {/* Contenido del testimonio */}
              <p className='text-muted-foreground leading-relaxed'>
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='flex justify-center gap-2 mt-12'
        >
          {[0, 1, 2].map(v => (
            <div
              key={v}
              className={cn(
                'size-3 rounded-full transition-colors',
                v === 0 ? 'bg-primary' : 'bg-border'
              )}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
