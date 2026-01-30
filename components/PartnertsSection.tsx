'use client';

import { partners } from '@/data/data';
import { motion } from 'framer-motion';

export const PartnertsSection = () => {
  return (
    <section className='py-16 bg-muted/50'>
      <div className='container'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center text-sm text-muted-foreground mb-10'
        >
          Empresas líderes confían en nosotros a nivel mundial
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center items-center gap-8 md:gap-16'
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className='text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors'
            >
              {partner.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
