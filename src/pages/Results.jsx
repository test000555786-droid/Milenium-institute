import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Trophy, Star } from 'lucide-react'
import { resultsData } from '../data/index'
import SectionHeader from '../components/common/SectionHeader'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'framer-motion'

function StatBig({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className="text-center bg-white rounded-3xl shadow-card border border-slate-100 p-8">
      <p className="text-4xl md:text-5xl font-bold font-display text-primary-700 mb-2">
        {inView ? <CountUp end={stat.value} duration={2.5} decimals={stat.decimals || 0} suffix={stat.suffix} /> : '0'}
      </p>
      <p className="text-slate-500 text-sm">{stat.label}</p>
    </div>
  )
}

const medals = ['🥇', '🥈', '🥉']

export default function Results() {
  return (
    <>
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/hero-results.png')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10 text-center">
          <FadeIn>
            <Trophy size={48} className="text-yellow-400 mx-auto mb-4 drop-shadow-md" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Hall of Fame</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Consistent top performance year after year. Meet the students who made us proud in recent board exams.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {resultsData.stats.map(s => <StatBig key={s.label} stat={s} />)}
          </div>

          <SectionHeader eyebrow="Hall of Fame" title="Our Star Achievers" subtitle="Celebrating students who made us proud with outstanding board results." />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resultsData.toppers.map((t, i) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`group relative rounded-3xl border transition-all duration-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col h-full ${i < 3 ? 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200' : 'bg-white border-slate-100 shadow-card'}`}
                >
                  <div className="p-6 relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex flex-col gap-3">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-sm bg-slate-50">
                          <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-xl font-display leading-tight">{t.name}</h3>
                          <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">{medals[i] || '⭐'} Top Achiever</p>
                        </div>
                      </div>
                      <div className="bg-primary-50 rounded-2xl px-4 py-2 border border-primary-100 shadow-sm">
                        <span className="text-2xl font-bold text-primary-700 font-display shadow-sm">{t.percentage}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="badge bg-primary-50 text-primary-700 border border-primary-100 text-xs px-3 py-1 rounded-full">{t.class}</span>
                      <span className="badge bg-teal-50 text-teal-700 border border-teal-100 text-xs px-3 py-1 rounded-full">{t.subject}</span>
                      <span className="badge bg-slate-50 text-slate-600 border border-slate-200 text-xs px-3 py-1 rounded-full">{t.year}</span>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="pt-4 mt-4 border-t border-slate-100/80">
                          <p className="text-sm font-bold text-slate-800 mb-1">{t.tagline}</p>
                          <p className="text-xs text-slate-500 font-medium">{t.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Ratings section */}
          <FadeIn>
            <div className="rounded-4xl bg-white border border-slate-100 shadow-soft p-10 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-4xl font-bold text-slate-900 font-display mb-2">4.9 / 5</p>
              <p className="text-slate-500 mb-6">Based on 149+ Google reviews and 172 Justdial votes</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="bg-slate-50 rounded-2xl px-6 py-3 border border-slate-100">
                  <p className="font-bold text-slate-900">⭐ 4.9</p>
                  <p className="text-xs text-slate-400 mt-0.5">Google · 149 reviews</p>
                </div>
                <div className="bg-slate-50 rounded-2xl px-6 py-3 border border-slate-100">
                  <p className="font-bold text-slate-900">⭐ 4.9</p>
                  <p className="text-xs text-slate-400 mt-0.5">Justdial · 172 votes</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
