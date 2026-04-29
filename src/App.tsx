import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Plus, 
  Pause,
  MessageSquare,
  Zap,
  Lock,
  Layers,
  Check,
  Calendar
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm";
  const variants: any = {
    primary: "bg-black text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-black border border-neutral-200 hover:border-black shadow-sm",
    ghost: "bg-transparent text-neutral-600 hover:text-black",
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ children, className = '' }: any) => (
  <span className={`px-3 py-1 rounded-full bg-white/80 border border-neutral-100 text-[10px] font-semibold tracking-wider uppercase text-neutral-600 ${className}`}>
    {children}
  </span>
);

const Navbar = ({ onOpenMenu }: any) => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
    <div className="pointer-events-auto">
      <h1 className="text-xl font-bold tracking-tighter flex items-center gap-1">
        <span>whenever</span>
        <span className="text-[10px] align-top">®</span>
      </h1>
    </div>
    <div className="pointer-events-auto">
      <button 
        onClick={onOpenMenu}
        className="bg-white/90 backdrop-blur-md border border-neutral-200 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-neutral-50 transition-colors shadow-sm"
      >
        Menu <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  </nav>
);

const FullMenu = ({ isOpen, onClose }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed inset-0 z-[60] bg-[#f2f2f2]/95 backdrop-blur-xl p-6 flex flex-col items-center justify-center"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-white border border-neutral-200 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
        >
          Close <ChevronDown className="w-3 h-3 rotate-180" />
        </button>
        
        <div className="flex flex-col gap-6 text-center">
          {[
            { label: 'Home', id: 'home' },
            { label: 'How it works', id: 'how-it-works' },
            { label: 'Features', id: 'features' },
            { label: 'Pricing', id: 'pricing' },
          ].map((item) => (
            <motion.a 
              key={item.label}
              whileHover={{ scale: 1.1 }}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-6xl font-bold tracking-tight hover:italic transition-all"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
        
        <div className="mt-20">
          <p className="text-xs text-neutral-400 font-medium tracking-widest uppercase">© 2025 WHENEVER®</p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Hero = () => {
  const categories = ['Digital Graphics', 'UX Design', 'Pitch Decks', 'Web Design'];
  
  return (
    <section id="home" className="relative min-h-screen pt-40 px-6 overflow-hidden">
      {/* Abstract Background Blob */}
      <div className="absolute top-0 right-0 w-[70vw] h-full pointer-events-none -z-10 overflow-visible">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-10%] w-[100%] h-[120%] whenever-gradient opacity-60 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <Badge key={cat}>{cat}</Badge>
          ))}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mb-8"
        >
          World-class design <span className="font-serif italic font-normal">whenever</span> you need it.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-500 text-lg md:text-xl max-w-sm mb-10 leading-relaxed font-medium"
        >
          A monthly design subscription for startups, creators, and teams who need work done without the wait.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            See Pricing
          </Button>
          
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-neutral-100 p-2 pr-6 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm bg-neutral-200">
              <img src="https://picsum.photos/seed/user1/100/100" alt="Intro call" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-[11px] font-bold">Book a 15-min intro call</p>
              <p className="text-[10px] text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span> Available now
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ClientLogos = () => (
  <section className="py-20 border-t border-neutral-200/50">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-10">Trusted by the biggest brands worldwide</p>
      <div className="flex flex-wrap items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {['MILANO', 'Amsterdam', 'venice.', 'theo', 'ob', 'MILANO', 'Amsterdam'].map((brand, i) => (
          <span key={i} className="text-xl font-black tracking-tighter hover:opacity-100 transition-opacity">
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      title: 'Subscribe',
      desc: 'Pick a plan and get started right away. No calls, no setup, just design on demand.',
      price: '$2,995',
      badge: 'Popular',
      color: 'bg-white',
    },
    {
      title: 'Request',
      desc: 'Submit any design task you need. Landing pages, product visuals, brand assets, and more.',
      icon: <Layers className="w-10 h-10" />,
      color: 'bg-white',
    },
    {
      title: 'Receive',
      desc: 'Your design is delivered in a few business days. Simple, fast, and ready to use.',
      icon: <Calendar className="w-10 h-10" />,
      color: 'bg-white',
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-neutral-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge>How it works</Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6">
            Welcome to the <span className="font-serif italic font-normal">better</span> way of getting design done.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[32px] ${step.color} shadow-sm border border-neutral-100 flex flex-col h-full`}
            >
              <div className="mb-10 min-h-[160px] flex items-center justify-center bg-neutral-50/50 rounded-2xl relative overflow-hidden">
                {step.price ? (
                  <div className="text-center">
                    <p className="text-[10px] font-bold mb-2">whenever®</p>
                    <p className="text-4xl font-bold tracking-tighter">{step.price}<span className="text-sm font-medium text-neutral-400">/month</span></p>
                    {step.badge && <Badge className="absolute mt-1 top-4 right-4">{step.badge}</Badge>}
                    <Button variant="primary" className="mt-6 scale-90">Join today</Button>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center p-8">
                     <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shadow-xl rotate-[-5deg]">
                       <span className="font-serif italic text-3xl">w</span>
                     </div>
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-neutral-500 font-medium text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UserCircles = () => {
  const images = Array.from({ length: 11 }).map((_, i) => `https://picsum.photos/seed/user${i + 20}/100/100`);
  
  return (
    <section className="py-32 px-6 overflow-hidden bg-[#f2f2f2] relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {/* Arched Avatars */}
          {images.map((src, i) => {
            const angle = (i / (images.length - 1)) * Math.PI - Math.PI;
            const radiusX = 400;
            const radiusY = 200;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-neutral-200"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
              >
                <img src={src} alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            );
          })}
          
          <div className="text-center z-10 max-w-xl">
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
               100+ clients getting <span className="font-serif italic font-normal">better</span> design, faster.
             </h2>
             <div className="inline-flex items-center gap-3 bg-white shadow-xl p-2 pr-6 rounded-full border border-neutral-100">
               <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                 <img src="https://picsum.photos/seed/user1/100/100" alt="Intro call" referrerPolicy="no-referrer" />
               </div>
               <div className="text-left">
                 <p className="text-[11px] font-bold">Book a 15-min intro call</p>
                 <p className="text-[10px] text-green-500 font-medium">Available now</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioGallery = () => {
  const projects = [
    { id: 1, bg: 'bg-neutral-900', color: 'text-orange-500' },
    { id: 2, bg: 'bg-blue-900', color: 'text-blue-300' },
    { id: 3, bg: 'bg-purple-900', color: 'text-pink-300' },
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className={`min-w-[85vw] md:min-w-[45vw] h-[550px] rounded-[48px] ${project.bg} snap-center flex flex-col justify-between p-12 overflow-hidden relative group`}
          >
            <div className="z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-xs">
              <div className="w-10 h-10 bg-black/20 rounded-full mb-4" />
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                Example content for demo purposes only. This represents a case study or project completed for a client.
              </p>
              <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-all">
                <span className="text-[10px] font-bold uppercase tracking-widest">View project</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
               <div className={`w-[80%] h-[80%] rounded-[100px] blur-[120px] ${project.color.replace('text', 'bg')}`} />
            </div>
            
            <div className="z-10">
               <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Example content for demo purposes only.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const list = [
    { title: 'Simple design queue', desc: 'Track tasks easily in Notion.', icon: <Pause className="w-6 h-6" /> },
    { title: 'One price, always', desc: 'Flat monthly rate, no surprises.', icon: <MessageSquare className="w-6 h-6" /> },
    { title: 'Quick turnaround', desc: 'Most requests done in a few days.', icon: <Zap className="w-6 h-6" /> },
    { title: 'High-quality every time', desc: 'Senior designer, nothing less.', icon: <Check className="w-6 h-6" /> },
    { title: 'You\'re in control', desc: 'Change or pause your plan anytime.', icon: <Layers className="w-6 h-6" /> },
    { title: '100 percent yours', desc: 'Custom work, fully owned by you.', icon: <Lock className="w-6 h-6" /> },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge>Features</Badge>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6">
            Everything you need <br /> and <span className="font-serif italic font-normal">nothing</span> you don't.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [extraTask, setExtraTask] = useState(false);
  
  return (
    <section id="pricing" className="py-32 px-6 bg-neutral-100/50">
      <div className="max-w-5xl mx-auto bg-neutral-900 rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
        <div className="md:w-1/2 relative bg-neutral-800 flex items-center justify-center p-4">
           {/* Mini Gallery mockup */}
           <div className="flex flex-col gap-4 w-full h-full opacity-40 p-4">
             <div className="h-1/2 bg-blue-500/20 rounded-3xl border border-white/5" />
             <div className="h-1/2 bg-purple-500/20 rounded-3xl border border-white/5" />
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest text-center px-10">Example content for demo purposes only.</p>
           </div>
        </div>
        
        <div className="md:w-1/2 p-12 text-white">
          <div className="flex justify-between items-start mb-10">
             <div>
               <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-1">whenever®</h1>
               <p className="text-neutral-500 text-[10px] mt-4 font-bold uppercase tracking-wider max-w-[200px]">
                 Submit any design task you need. Landing pages, product visuals, brand assets, and more.
               </p>
             </div>
             <div className="text-right">
                <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider">Additional Active Task</p>
                <p className="text-neutral-400 text-[10px] mb-2">+$995</p>
                <div 
                  onClick={() => setExtraTask(!extraTask)}
                  className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${extraTask ? 'bg-white' : 'bg-neutral-700'}`}
                >
                  <motion.div 
                    animate={{ x: extraTask ? 24 : 0 }}
                    className={`w-4 h-4 rounded-full ${extraTask ? 'bg-black' : 'bg-white'}`} 
                  />
                </div>
             </div>
          </div>
          
          <div className="mb-10">
            <p className="text-5xl font-bold tracking-tighter">
              ${(2995 + (extraTask ? 995 : 0)).toLocaleString()}<span className="text-sm font-medium text-neutral-500 ml-1">/month</span>
            </p>
          </div>
          
          <div className="space-y-4 mb-10">
            {[
              'Unlimited design requests',
              'One active task at a time',
              'Delivered in a few business days',
              'Source files included',
              'Cancel or pause anytime'
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-xs font-semibold">
                <div className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400">
                  <Plus className="w-3 h-3" />
                </div>
                {item}
              </div>
            ))}
          </div>
          
          <Button className="w-full bg-white text-black hover:bg-neutral-200 h-14 text-lg">Join today</Button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: 'Maya Kim', role: 'Head of Product, Haptik', text: 'Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.' },
    { name: 'Tina Zhang', role: 'Creative Director, Octave', text: 'The quality of design is top-tier and the process is frictionless. Whenever feels like cheating in the best way.' },
    { name: 'Jared Cole', role: 'Startup Founder, Nimbus Systems', text: 'No meetings, no delays, no drama. Just smart design delivered when we needed it. I can\'t recommend Whenever enough.' }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <Badge>Testimonials</Badge>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-center mt-6 mb-20 italic">
          Turns out, people like <br /> getting things done.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-[32px] bg-white border border-neutral-100 shadow-sm relative group">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                   <img src={`https://picsum.photos/seed/face${i}/100/100`} alt={t.name} referrerPolicy="no-referrer" />
                 </div>
                 <div>
                   <p className="font-bold">{t.name}</p>
                   <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{t.role}</p>
                 </div>
              </div>
              <p className="text-neutral-500 font-medium text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="absolute top-10 right-10 text-neutral-100 group-hover:text-neutral-200 transition-colors">
                <MessageSquare className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'How many design requests can I submit?', a: 'As many as you like! We work through them one by one. Once a task is completed, we move on to the next one in your queue.' },
    { q: 'What kind of design work is included?', a: 'UI/UX Design, Branding, Pitch Decks, Web Design, Social Graphics, App Design, and more.' },
    { q: 'How fast will I receive my designs?', a: 'Most requests are delivered within 48-72 hours. More complex requests may take longer.' },
    { q: 'Can I pause my subscription?', a: 'Yes, anytime. Only pay for what you use. We billing cycles are 31 days. If you use 10 days and pause, you have 21 days left to use whenever you want.' },
    { q: 'What if I need development too?', a: 'We offer development as a separate add-on service. Most design requests are implemented in Webflow or Framer.' },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-[48px] p-12 shadow-sm border border-neutral-100">
        <Badge>FAQs</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-6 mb-10">
          Frequently <br /> Asked <span className="font-serif italic font-normal">Questions</span>
        </h2>
        
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-1">Email</p>
            <p className="font-bold">hello@whenever.com</p>
          </div>
          <Button variant="primary">Get in touch</Button>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className={`p-6 bg-neutral-50 rounded-3xl border border-transparent transition-all ${openIndex === i ? 'bg-neutral-100 border-neutral-200' : 'hover:bg-neutral-100'}`}>
                <div className="flex items-center justify-between">
                   <p className="text-sm font-bold">{faq.q}</p>
                   <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-all ${openIndex === i ? 'rotate-45' : ''}`}>
                     <Plus className="w-4 h-4" />
                   </div>
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-neutral-500 font-medium leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-32 px-6 bg-black text-white rounded-t-[60px]">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div>
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-1 mb-12">
            <span>whenever</span>
            <span className="text-[10px] align-top">®</span>
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
            Design <span className="font-serif italic font-normal">doesn't</span> need to be complicated.
          </h2>
          <p className="text-neutral-500 font-medium max-w-sm mb-12 text-lg">
            Book a quick call and get a clear look at how Whenever works, what's included, and whether it fits your pace.
          </p>
          <Button variant="secondary" className="bg-white text-black h-14 px-10 text-lg">See Pricing</Button>
        </div>
        
        <div className="bg-neutral-900 border border-white/5 rounded-[40px] p-10 overflow-hidden relative shadow-inner">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
            <p className="font-bold uppercase tracking-widest text-xs text-neutral-400">May 2026</p>
            <div className="flex gap-4">
              <ChevronDown className="w-5 h-5 rotate-90 text-neutral-500 cursor-pointer hover:text-white" />
              <ChevronDown className="w-5 h-5 -rotate-90 text-neutral-500 cursor-pointer hover:text-white" />
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center mb-10">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => (
              <div key={d} className="text-[9px] font-bold text-neutral-600 pb-4">{d}</div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isSelected = day === 6;
              const isPast = day < 6;
              return (
                <div 
                  key={i} 
                  className={`
                    py-4 text-xs font-bold rounded-2xl transition-all
                    ${isSelected ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'text-neutral-400 hover:bg-white/10 hover:text-white'}
                    ${isPast ? 'opacity-10 pointer-events-none' : 'cursor-pointer'}
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-between items-center bg-black/50 p-6 rounded-2xl border border-white/5">
            <div>
              <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider mb-1">Wed 06</p>
              <p className="text-xl font-bold">11:45am</p>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] text-neutral-400 font-bold tracking-widest flex gap-4">
              <span className="text-white">12h</span>
              <span>24h</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">© 2025 WHENEVER. CREATED BY HAMZA EHSAN.</p>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
           {['Thank You', 'Privacy Policy', 'Terms of Service'].map(link => (
             <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
           ))}
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="bg-[#f2f2f2] selection:bg-purple-200 selection:text-purple-900">
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <FullMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main>
        <Hero />
        <ClientLogos />
        <HowItWorks />
        <UserCircles />
        <PortfolioGallery />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
