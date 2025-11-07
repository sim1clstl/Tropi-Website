import React, { useState } from "react";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 text-xs rounded-full bg-tropi-foam text-tropi-deep border border-tropi-sea/20">{children}</span>
);

const Section = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="rounded-2xl border-2 border-[#CCE7E3] bg-white/80 p-4 shadow-sm">
    <div className="text-sm uppercase tracking-wide text-tropi-deep/70 mb-2">{title}</div>
    <div className="grid gap-3">{children}</div>
  </div>
);

const Block = ({ label, h = 120 }: { label: string; h?: number }) => (
  <div
    className="border-2 border-dashed border-[#BFE1DC] bg-[#F7FCFB] rounded-xl flex items-center justify-center text-gray-500 text-sm"
    style={{ height: h }}
  >
    {label}
  </div>
);

const CTA = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded-full bg-[#0081A7] text-white text-sm shadow hover:bg-[#006D77] active:scale-[0.99]"
  >
    {children}
  </button>
);

const NavItem = ({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 rounded-xl text-sm border transition-colors ${
      active ? "border-[#0081A7] text-[#006D77] bg-[#E6F4F1]" : "border-[#CCE7E3] text-gray-600 hover:border-[#9BD0C8]"
    }`}
  >
    {children}
  </button>
);

function Home({ openBooking }: { openBooking: () => void }) {
  return (
    <div className="grid gap-6">
      <Section title="Hero">
        <Block label="Ocean gradient hero: Headline + Subhead + Primary CTA (Book a Call) + Secondary (See Work)" h={200} />
        <div className="flex gap-3">
          <CTA onClick={openBooking}>Book a Call</CTA>
          <CTA>See Work</CTA>
        </div>
      </Section>
      <Section title="Service Cards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {["Social Media Management","Content Creation (on-location)","Performance Ads","Website Creation","Rebranding","Add-ons (UGC, Community)"].map((s) => (
            <Block key={s} label={`Card – ${s}`} h={100} />
          ))}
        </div>
      </Section>
      <Section title="Proof & Reel">
        <div className="grid md:grid-cols-3 gap-3">
          <Block label="Client logos marquee / KPIs" h={100} />
          <Block label="Showreel video (muted autoplay, captions)" h={100} />
          <Block label="Testimonials slider" h={100} />
        </div>
      </Section>
    </div>
  );
}

function Services() {
  return (
    <div className="grid gap-6">
      <Section title="Overview (Scrollytelling)">
        <Block label="Sticky sidebar of services + scroll narrative area" h={200} />
      </Section>
      <Section title="Service Detail Templates">
        <div className="grid md:grid-cols-2 gap-3">
          <Block label="Detail: Social Media Mgmt – scope, outcomes, timeline, add-ons" h={140} />
          <Block label="Detail: Content Creation – on-site shoots, scripting, edit, motion" h={140} />
          <Block label="Detail: Ads – channels, creative testing, dashboards" h={140} />
          <Block label="Detail: Web – CMS, SEO, speed, care plans" h={140} />
          <Block label="Detail: Rebranding – identity, styleguide, templates" h={140} />
          <Block label="Related case studies strip & inquiry CTA" h={140} />
        </div>
      </Section>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="grid gap-6">
      <Section title="Filters">
        <div className="flex gap-2 flex-wrap">
          {"Industry, Platform, Objective".split(", ").map((f) => (<Pill key={f}>{f}</Pill>))}
        </div>
      </Section>
      <Section title="Work Grid">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (<Block key={i} label={`Case Tile #${i + 1}`} h={120} />))}
        </div>
      </Section>
      <Section title="Case Study Template">
        <Block label="Problem → Approach → Creative → Metrics → Testimonial layout" h={180} />
      </Section>
    </div>
  );
}

function Pricing() {
  return (
    <div className="grid gap-6">
      <Section title="Plans">
        <div className="grid md:grid-cols-3 gap-3">
          {["Starter","Growth","Scale"].map((tier) => (
            <div key={tier} className="border-2 border-[#CCE7E3] rounded-2xl p-4 bg-[#F7FCFB]">
              <div className="text-lg font-semibold text-tropi-deep mb-2">{tier}</div>
              <div className="text-xs mb-2 text-gray-500">Monthly/Annual toggle</div>
              <div className="grid gap-2 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-tropi-sea/30" /> Feature {i + 1}
                  </div>
                ))}
              </div>
              <CTA>Choose {tier}</CTA>
            </div>
          ))}
        </div>
      </Section>
      <Section title="FAQ">
        <Block label="Accordion with top buyer questions" h={140} />
      </Section>
    </div>
  );
}

function Book({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="grid gap-6">
      <Section title="Scheduler">
        <Block label="Embedded scheduler (Asia/Manila default)" h={180} />
      </Section>
      <Section title="Intake Form">
        <Block label="Goal, timeline, budget range, platforms" h={160} />
        <div className="flex gap-3"><CTA onClick={onSubmit}>Submit</CTA><CTA>Cancel</CTA></div>
      </Section>
    </div>
  );
}

function Portal() {
  const [tab, setTab] = useState<string>("Dashboard");
  return (
    <div className="grid gap-4">
      <div className="flex gap-2 flex-wrap">
        {["Dashboard", "Approvals", "Reports", "Files", "Invoices", "Support"].map((t) => (
          <NavItem key={t} active={tab === t} onClick={() => setTab(t)}>{t}</NavItem>
        ))}
      </div>

      {tab === "Dashboard" && (
        <div className="grid md:grid-cols-3 gap-3">
          <Block label="Project milestones feed" h={120} />
          <Block label="This Week in Numbers (KPIs)" h={120} />
          <Block label="Next approvals due" h={120} />
        </div>
      )}
      {tab === "Approvals" && (
        <div className="grid gap-3">
          <Block label="Kanban – Draft / Review / Approved / Scheduled" h={180} />
          <Block label="Asset viewer with version history + comments" h={160} />
        </div>
      )}
      {tab === "Reports" && (
        <div className="grid md:grid-cols-2 gap-3">
          <Block label="Performance charts (reach, CTR, ROAS)" h={160} />
          <Block label="Attribution summary + download PDF" h={160} />
        </div>
      )}
      {tab === "Files" && <Block label="Deliverables / brand kit / contracts" h={180} />}
      {tab === "Invoices" && <Block label="Invoice list + pay buttons" h={160} />}
      {tab === "Support" && <Block label="Ticket list + chat history" h={160} />}
    </div>
  );
}

function About() {
  return (
    <div className="grid gap-6">
      <Section title="Palawan Story">
        <Block label="Origin story, sustainable shoots, local pride visuals" h={160} />
      </Section>
      <Section title="Team">
        <div className="grid md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (<Block key={i} label={`Team card #${i + 1}`} h={120} />))}
        </div>
      </Section>
    </div>
  );
}

function Blog() {
  return (
    <div className="grid gap-6">
      <Section title="Featured">
        <Block label="Hero article with image and excerpt" h={160} />
      </Section>
      <Section title="Grid">
        <div className="grid md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (<Block key={i} label={`Post tile #${i + 1}`} h={120} />))}
        </div>
      </Section>
    </div>
  );
}

function Contact() {
  return (
    <div className="grid gap-6">
      <Section title="Smart Form">
        <Block label="Name, email, message, project type; WhatsApp/FB deep links" h={180} />
      </Section>
      <Section title="Map">
        <Block label="Interactive map – Palawan base" h={140} />
      </Section>
    </div>
  );
}

export default function TropiWireframes() {
  const pages = ["Home","Services","Portfolio","Pricing","Book a Call","Client Portal","About","Blog","Contact"];
  const [page, setPage] = useState<string>("Home");
  const [showBookingNotice, setShowBookingNotice] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-[100dvh] text-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="font-extrabold tracking-tight text-lg text-[#006D77]">Tropi Solutions</div>
          <div className="text-xs text-gray-600 hidden md:block">Palawan • Social-first growth</div>
          <div className="ml-auto flex items-center gap-2">
            {pages.map((p) => (<NavItem key={p} active={page === p} onClick={() => setPage(p)}>{p}</NavItem>))}
            <CTA onClick={() => setShowBookingNotice(true)}>Book a Call</CTA>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 grid gap-6">
        {page === "Home" && <Home openBooking={() => setShowBookingNotice(true)} />}
        {page === "Services" && <Services />}
        {page === "Portfolio" && <Portfolio />}
        {page === "Pricing" && <Pricing />}
        {page === "Book a Call" && <Book onSubmit={() => setShowBookingNotice(true)} />}
        {page === "Client Portal" && <Portal />}
        {page === "About" && <About />}
        {page === "Blog" && <Blog />}
        {page === "Contact" && <Contact />}
      </main>

      <button
        onClick={() => setShowChat((v) => !v)}
        className="fixed bottom-5 right-5 rounded-full border-2 border-[#0081A7] bg-white/95 px-4 py-3 shadow-lg hover:shadow-xl text-[#006D77]"
        aria-label="Toggle Chat"
      >
        ChatGPT Assistant
      </button>

      {showChat && (
        <div className="fixed bottom-20 right-5 w-80 rounded-2xl border-2 border-[#CCE7E3] bg-white shadow-xl overflow-hidden">
          <div className="px-3 py-2 border-b text-sm font-semibold text-tropi-deep">Assistant</div>
          <div className="p-3 text-sm text-gray-600">
            <div className="mb-2">Modes: Lead Concierge • Support • Ideas</div>
            <div className="border-2 border-dashed border-[#BFE1DC] bg-[#F7FCFB] rounded-xl flex items-center justify-center text-gray-500 text-sm h-32">
              Message list (placeholder)
            </div>
            <div className="mt-2 border rounded-xl p-2 text-gray-400">Type a message…</div>
          </div>
        </div>
      )}

      {showBookingNotice && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 border-2 border-[#CCE7E3] shadow-2xl">
            <div className="text-base font-semibold mb-2 text-tropi-deep">Booking Flow (Wireframe)</div>
            <p className="text-sm text-gray-600 mb-4">
              Here we’ll embed Calendly/Cal.com (Asia/Manila default), capture UTM, and send auto‑confirmations. Tropi styling will carry through with sea/sun accents. This is a placeholder modal.
            </p>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setShowBookingNotice(false)} className="px-4 py-2 rounded-full bg-[#0081A7] text-white text-sm shadow hover:bg-[#006D77]">Close</button>
            </div>
          </div>
        </div>
      )}

      <footer className="max-w-6xl mx-auto px-4 py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Tropi Solutions — Wireframe Prototype · Sea & Sun palette
      </footer>
    </div>
  );
}