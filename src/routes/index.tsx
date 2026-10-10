import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Monitor, Code2, PenTool, ShoppingCart, RefreshCw, ShieldCheck, Smartphone, Zap, Sparkles, Menu, X, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import logoName from '@/assets/webfound-logo-name.png';
import logoSymbol from '@/assets/webfound-logo-symbol.png';
import laptop from '@/assets/agency-laptop.jpg';
import { projects } from '@/lib/projects';
import { whatsappUrl } from '@/lib/agency-config';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'WebFound — Modern Websites for Ambitious Businesses' },
  { name: 'description', content: 'WebFound designs and develops modern websites, thoughtful interfaces, and custom digital solutions. Explore our services and design concepts.' },
  { property: 'og:title', content: 'WebFound — Modern Websites for Ambitious Businesses' },
  { property: 'og:description', content: 'Website design, full-stack development, UI/UX, and e-commerce. Get your business online with WebFound.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Index,
});
const services = [
 { icon: Monitor, title: 'Website Design', description: 'Modern, purposeful websites that put your business in its best light.', color: 'bg-accent text-primary' },
 { icon: Code2, title: 'Full-Stack Development', description: 'Custom digital solutions, thoughtfully built from front to back.', color: 'bg-blue-surface text-brand-blue' },
 { icon: PenTool, title: 'UI/UX Design', description: 'Intuitive interfaces that make every interaction feel effortless.', color: 'bg-secondary text-foreground' },
 { icon: ShoppingCart, title: 'E-commerce Development', description: 'Seamless online stores that turn browsing into a better buying experience.', color: 'bg-sage-surface text-sage' },
 { icon: RefreshCw, title: 'Website Redesign', description: 'A fresh perspective on your website, built for what comes next.', color: 'bg-amber-surface text-amber' },
];
const steps = [
 ['Discover', 'We get to know your business, your goals, and your audience.'],
 ['Design', 'Thoughtful visuals and intuitive experiences, shaped around your brand.'],
 ['Develop', 'We bring the design to life with clean, reliable development.'],
 ['Launch & Support', 'A smooth launch, with a clear path for your next steps.'],
];
function Brand() { return <a href="#home" className="brand" aria-label="WebFound home"><img src={logoSymbol} className="brand-symbol" alt="" width={36} height={32}/><img src={logoName} className="brand-name" alt="WebFound" width={150} height={30}/></a>; }
function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [bookingOpen, setBookingOpen] = useState(false);
 const [selected, setSelected] = useState<number | null>(null);
 const project = selected === null ? null : projects[selected];
 function BookButton({ className = '', ink = false }: { className?: string; ink?: boolean }) {
  return whatsappUrl ? <Button variant={ink ? 'ink' : 'agency'} asChild className={className}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book a Call <ArrowUpRight/></a></Button> : <Button variant={ink ? 'ink' : 'agency'} onClick={() => setBookingOpen(true)} className={className}>Book a Call <ArrowUpRight/></Button>;
 }
 return <>
  <div id="home" className="announcement"><Sparkles size={13}/><span>Good design. Thoughtful development. Your next chapter.</span><a href="#contact">Let’s talk <ArrowRight size={12}/></a></div>
  <header className="header"><div className="container-wide header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation"><a href="#home" className="active">Home</a><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Our Process</a><a href="#contact">Contact</a></nav><BookButton className="header-cta" ink/><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[['Home','home'],['Services','services'],['Work','work'],['Our Process','process'],['Contact','contact']].map(([name,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{name}</a>)}</nav>}</header>
  <main>
   <section className="hero" aria-labelledby="hero-title"><div className="container-wide hero-inner"><div className="hero-copy"><span className="eyebrow">Your vision. Our craft.</span><h1 id="hero-title">Modern Websites<br/>for <span>Ambitious<br/>Businesses.</span></h1><p className="hero-description">We design and build websites, interfaces, and custom digital solutions that bring your business to life online.</p><div className="hero-actions"><Button variant="agency" asChild><a href="#work">View Work <ArrowRight/></a></Button><Button variant="agencyOutline" onClick={() => whatsappUrl ? window.open(whatsappUrl, '_blank', 'noopener,noreferrer') : setBookingOpen(true)}><MessageCircle/> Book a Call</Button></div><div className="hero-features">{[[ShieldCheck,'Strategy-led','design'],[Code2,'Custom-built','development'],[Smartphone,'Made for every','screen'],[Zap,'Fast & thoughtfully','optimized']].map(([Icon,line1,line2]) => { const FeatureIcon = Icon as typeof Zap; return <div className="hero-feature" key={String(line1)}><FeatureIcon/><span>{String(line1)}<br/>{String(line2)}</span></div>; })}</div></div><div className="hero-visual"><img src={laptop} alt="Original digital design concept displayed on a laptop and phone" width={1536} height={1024}/><div className="visual-label"><span/> Thoughtful design. Across every screen.</div></div></div></section>
   <section id="services" className="section container-wide"><div className="section-header"><div><span className="eyebrow">What we do</span><h2>End-to-end digital solutions.</h2></div><a className="section-link" href="#contact">Let’s build together <ArrowRight size={14}/></a></div><div className="services-grid">{services.map(({icon:Icon,title,description,color}) => <article className="service-card" key={title}><div className={`service-icon ${color}`}><Icon/></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>
   <section id="work" className="section work-section"><div className="container-wide"><div className="section-header"><div><span className="eyebrow">A glimpse of what’s possible</span><h2>Ideas made tangible.</h2></div><span className="section-link text-muted-foreground">Selected design concepts</span></div><div className="work-grid">{projects.map((p,i) => <article className="project-card" key={p.title}><div className="project-preview"><img src={p.image} alt={p.title + ' concept imagery'} width={1024} height={640} loading="lazy"/><span className="concept-label">Design concept</span><div className="preview-copy"><small>{p.category}</small><h3>{p.headline}</h3></div></div><div className="project-info"><div><span>{p.category}</span><h3>{p.title}</h3><p>{p.type}</p></div><Button variant="ghost" size="icon" aria-label={`View ${p.title} concept`} onClick={() => setSelected(i)}><ArrowUpRight/></Button></div></article>)}</div></div></section>
   <section id="process" className="section container-wide"><div className="section-header"><div><span className="eyebrow">From the first hello to launch</span><h2>Simple. Collaborative. Considered.</h2></div></div><div className="process-grid">{steps.map(([title,description],i) => <div className="process-step" key={title}><span className="step-number">0{i+1}</span><div><h3>{title}</h3><p>{description}</p></div>{i < 3 && <ArrowRight className="step-arrow" size={16}/>}</div>)}</div></section>
   <section id="contact" className="container-wide cta-wrap"><div className="cta"><div><span className="eyebrow">Let’s build something meaningful</span><h2>Your next chapter starts online.</h2><p>A website that feels like your business. An experience that works for your audience.</p></div><div className="cta-actions"><BookButton/><Button variant="agencyOutline" className="cta-outline" asChild><a href="#work">Explore Our Work <ArrowRight/></a></Button></div></div></section>
  </main>
  <footer className="footer"><div className="container-wide"><div className="footer-grid"><div className="footer-brand"><Brand/><p className="footer-tagline">Get Your Business Online.</p><p className="footer-note mt-4">Thoughtful design. Reliable development.<br/>Built around your business.</p></div><div><h3>Explore</h3><div className="footer-links"><a href="#home">Home</a><a href="#services">Services</a><a href="#work">Our Work</a><a href="#process">Our Process</a><a href="#contact">Contact</a></div></div><div><h3>Our Services</h3><div className="footer-links">{services.map(s => <a href="#services" key={s.title}>{s.title}</a>)}</div></div><div><h3>Have a project in mind?</h3><p className="footer-note">Let’s talk about what’s next<br/>for your business.</p><Button variant="link" className="p-0 h-auto text-xs" onClick={() => whatsappUrl ? window.open(whatsappUrl, '_blank', 'noopener,noreferrer') : setBookingOpen(true)}>Start a conversation <ArrowUpRight/></Button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} WebFound. All rights reserved.</span><span>Design with purpose. Develop with care.</span></div></div></footer>
  <Dialog open={bookingOpen} onOpenChange={setBookingOpen}><DialogContent><DialogHeader><DialogTitle>Let’s talk about your project.</DialogTitle><DialogDescription>WhatsApp booking will be available once WebFound’s business number has been added.</DialogDescription></DialogHeader><p className="text-sm text-muted-foreground">Our contact details are coming soon. In the meantime, explore the design concepts and services.</p><Button variant="agency" onClick={() => setBookingOpen(false)}>Got it <Check/></Button></DialogContent></Dialog>
  <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="sm:max-w-2xl">{project && <><DialogHeader><span className="eyebrow">Design concept · Not a client project</span><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.description}</DialogDescription></DialogHeader><img className="dialog-image" src={project.image} alt={project.title} width={1024} height={640}/><p className="text-xs text-muted-foreground">{project.focus}</p><Button variant="agency" onClick={() => {setSelected(null); setBookingOpen(true);}}>Discuss a similar project <ArrowUpRight/></Button></>}</DialogContent></Dialog>
 </>;
}
