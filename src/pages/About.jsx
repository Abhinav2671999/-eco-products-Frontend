import { motion } from 'framer-motion';
import { Compass, Sparkles, Users, Award, Leaf, Heart } from 'lucide-react';
import { SectionHeader } from '../components/Section';

const values = [
  {
    icon: Compass,
    title: 'Mission',
    text: 'Replace single-use plastic and styrofoam in food service with bagasse tableware that businesses are happy to put on the table.',
  },
  {
    icon: Sparkles,
    title: 'Vision',
    text: 'A future where every plate, bowl and meal tray returns to the earth in 90 days — with no compromise for the kitchens that serve them.',
  },
  {
    icon: Heart,
    title: 'Values',
    text: 'Honesty over greenwashing. Performance over price wars. Patience over shortcuts.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'A messy takeaway lunch',
    text: 'Our founder watches a curry leak through a styrofoam plate at a wedding and decides there has to be a better way.',
  },
  {
    year: '2022',
    title: 'First bagasse moulds',
    text: 'We tool up our first set of plate, bowl and tray moulds in partnership with a sugarcane mill in Maharashtra.',
  },
  {
    year: '2024',
    title: '500 kitchens, no plastic',
    text: 'Verdara now supplies cafés, cloud kitchens and caterers across India — and joins the global B-Corp community.',
  },
  {
    year: '2026',
    title: 'A leafier shelf',
    text: 'Today we ship 20+ bagasse tableware SKUs nationwide, with new compostable cutlery and lids on the way.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="container-px max-shell py-20 sm:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                <Leaf size={14} className="text-brand-600" />
                About Verdara
              </span>
              <h1 className="heading-display mt-6 text-5xl leading-tight sm:text-6xl lg:text-7xl">
                Bagasse tableware,{' '}
                <span className="bg-gradient-to-tr from-brand-700 to-brand-300 bg-clip-text text-transparent">
                  built for real kitchens.
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg leading-relaxed text-ink-600"
            >
              We make plates, bowls and meal trays that ask very little of the
              planet, and offer a great deal back to the kitchens that serve them.
              This is the team, the timeline and the thinking behind everything you
              see on the shelf.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-px max-shell py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] shadow-card"
          >
            <img
              src="/about.jpeg"
              alt="Bagasse plates and bowls in use"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">The story</span>
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              From one stubborn idea to a quietly nationwide kitchen partner.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600">
              <p>
                We didn't set out to build a brand. We set out to fix a frustration —
                that almost every meal served outside the home in India came on
                styrofoam or plastic that lived for fifteen minutes and then
                centuries.
              </p>
              <p>
                Six years in, that frustration has turned into a deliberate
                catalogue of bagasse plates, bowls and meal trays — pressed in
                partnership with sugarcane mills, tested in real cafés and cloud
                kitchens, priced to actually replace plastic at scale.
              </p>
              <p>
                We grow slowly on purpose. Patience, it turns out, is its own
                sustainability strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values cards */}
      <section id="mission" className="container-px max-shell py-16 sm:py-24">
        <SectionHeader
          eyebrow="What we stand for"
          title="Three quiet rules we don't break."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface group relative overflow-hidden p-7 transition-shadow hover:shadow-glow"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-100/70 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                  <v.icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {v.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-px max-shell py-16 sm:py-24">
        <SectionHeader
          eyebrow="Timeline"
          title="A few green milestones."
          description="Slow company, slow growth, slow earth-warming. We're patient about all three."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-200 via-brand-400 to-brand-100 md:left-1/2 md:block" />
          <ul className="space-y-10">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${
                  i % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'
                }`}
              >
                <div className="card-surface relative p-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                    {t.year}
                  </span>
                  <h4 className="mt-3 font-display text-xl font-bold text-ink-900">
                    {t.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {t.text}
                  </p>
                </div>
                <div className="hidden items-center justify-center md:flex">
                  <span className="h-3 w-3 rounded-full bg-brand-600 shadow-glow ring-4 ring-brand-100" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="container-px max-shell py-16 sm:py-24">
        <div className="grid items-center gap-10 rounded-[2rem] border border-brand-200/60 bg-gradient-to-br from-brand-50 to-white p-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow">
              <Users size={14} className="text-brand-600" />
              The team
            </span>
            <h2 className="heading-display mt-5 text-3xl sm:text-4xl">
              A small studio. A growing list of kitchens.
            </h2>
            <p className="mt-4 text-ink-600">
              We're a tiny, distributed team of designers, food-service operators
              and supply-chain folks — connected by a shared belief that the best
              eco product is the one a chef actually wants to use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, k: '4.9★', v: 'Customer rating' },
              { icon: Leaf, k: '12 M+', v: 'Plastic plates replaced' },
              { icon: Heart, k: '500+', v: 'Partner kitchens' },
              { icon: Sparkles, k: 'B-Corp', v: 'Certified 2024' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-soft backdrop-blur"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <s.icon size={18} />
                </span>
                <p className="mt-3 font-display text-2xl font-extrabold text-ink-900">
                  {s.k}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-500">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
