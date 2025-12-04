// PrakashPortfolio.jsx
// Single-file React component (default export).
// Tailwind CSS + shadcn/ui compatible. Paste into a React app (Create React App / Vite + Tailwind).
// How to use:
// 1. Create a project (recommended):
//    npx create-vite@latest prakash-portfolio --template react
//    cd prakash-portfolio
//    npm install
// 2. Install Tailwind (follow Tailwind + Vite/CRA setup). Or use existing Tailwind project.
// 3. Replace App.jsx content with this file or import the component into your app.
// 4. Run: npm run dev (Vite) or npm start (CRA). Build: npm run build.
// 5. To deploy to GitHub Pages: build and push the 'dist' or 'build' output to gh-pages branch or use GitHub Actions.

import React from "react";

export default function PrakashPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">PV</div>
          <div>
            <h1 className="text-xl font-bold">Prakash V</h1>
            <p className="text-sm text-gray-600">Freelance Video Editor • PUBG Streamer • Cricketer</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#skills" className="hover:text-green-600">Skills</a>
          <a href="#projects" className="hover:text-green-600">Projects</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
          <div className="lg:flex-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hey, I'm <span className="text-green-600">Prakash Vardhanapu</span></h2>
            <p className="mt-4 text-lg text-gray-700">I make engaging Instagram reels and videos, stream PUBG on YouTube, and play cricket. I combine clean editing, fast delivery, and storytelling to grow audience reach — I once achieved <strong>7M views</strong> on a single reel and reached up to <strong>10M people</strong>.</p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700">See Projects</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-50">Contact Me</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Top Reel Views</p>
                <p className="text-xl font-bold">7M</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Channel Reach</p>
                <p className="text-xl font-bold">10M</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Experience</p>
                <p className="text-xl font-bold">Freelance • Video Editing</p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/3">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">Profile Image Placeholder</div>
              <p className="mt-4 text-sm text-gray-600">Profile picture, quick bio, and a link to resume or download.</p>
              <div className="mt-4 flex gap-3">
                <a href="#" className="text-sm">YouTube</a>
                <a href="#" className="text-sm">Instagram</a>
                <a href="#" className="text-sm">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="mt-4 text-gray-700">I'm a B.Tech graduate, a freelance video editor focused on short-form social content, and a PUBG streamer on YouTube. I blend technical editing skills with a creative eye to produce content that performs well on social platforms. Outside editing I play cricket competitively.</p>

            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• B.Tech Graduate</li>
              <li>• Video Editing for Instagram</li>
              <li>• Stream PUBG on YouTube</li>
              <li>• Cricket Player</li>
              <li>• Experience at Amazon (ML Data Associate)</li>
              <li>• Strong analytics & problem-solving</li>
            </ul>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold">Key Highlights</h4>
              <ol className="mt-4 text-gray-700 list-decimal list-inside">
                <li>7M views on a single Instagram reel</li>
                <li>10M reach across campaigns</li>
                <li>Freelance video editing — quick turnaround</li>
                <li>Streaming experience: regular PUBG streams on YouTube</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard title="Video Editing" items={["Premiere Pro","Final Cut Pro","DaVinci Resolve","Reels & Shorts"]} />
            <SkillCard title="Motion & VFX" items={["After Effects","Motion Graphics","Transitions"]} />
            <SkillCard title="Streaming" items={["OBS","Stream overlays","YouTube setup"]} />
            <SkillCard title="Content Strategy" items={["Short form growth","Hook writing","Thumbnails"]} />
            <SkillCard title="Data & Tools" items={["Excel","Analytics","Scripting"]} />
            <SkillCard title="General" items={["Teamwork","Fast delivery","Client communication"]} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold">Select Projects</h3>
        <p className="text-gray-600 mt-2">A few highlights showcasing video work, streams, and content that drove reach.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Viral Instagram Reel"
            desc="A short-form reel that hit 7M views and increased engagement by 4x. Rapid edits, clean cuts, and optimized captions."
            tags={["Reels","Viral","Editing"]}
          />

          <ProjectCard
            title="YouTube PUBG Stream Highlights"
            desc="Curated highlight reels from live streams, repackaged for short-form and YouTube Shorts."
            tags={["Streaming","Shorts","Clips"]}
          />

          <ProjectCard
            title="Brand Promo Video"
            desc="A branded promo video for a small business — script to finish, including color grade and sound mix."
            tags={["Brand","Promo","Color Grade"]}
          />

          <ProjectCard
            title="Cricket Training Montage"
            desc="Highlight reel showcasing cricket skills and match clips for social recruitment and personal branding."
            tags={["Sports","Cricket","Highlights"]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Work with me</h3>
          <p className="text-gray-600 mt-2">Available for freelance editing, streaming collaborations, and content strategy. Fill the form or use the email link below.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold">Contact Details</h4>
              <p className="mt-2 text-sm text-gray-700">Email: <a href="mailto:prakash@example.com" className="text-green-600">prakash@example.com</a> (replace with your real email)</p>
              <p className="mt-1 text-sm text-gray-700">Location: Andhra Pradesh, India</p>

              <div className="mt-4 flex gap-3 text-sm">
                <a href="#" className="hover:underline">YouTube</a>
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">GitHub</a>
              </div>
            </div>

            <form className="p-6 bg-white border rounded-lg shadow-sm" onSubmit={(e)=>{e.preventDefault(); alert('This form uses mailto: replace with your endpoint.');}}>
              <label className="block text-sm font-medium text-gray-700">Your name</label>
              <input required className="mt-1 block w-full border-gray-200 rounded-md p-2" />

              <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
              <input required type="email" className="mt-1 block w-full border-gray-200 rounded-md p-2" />

              <label className="block text-sm font-medium text-gray-700 mt-4">Message</label>
              <textarea required rows={4} className="mt-1 block w-full border-gray-200 rounded-md p-2" />

              <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">Send message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Prakash V — Built with ❤️</p>
          <div className="flex gap-3 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


// --------------------
// Helper components below (kept inside the same file for single-file usage)
function SkillCard({ title, items }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="font-semibold">{title}</h4>
      <ul className="mt-2 text-sm text-gray-600">
        {items.map((it, i) => (
          <li key={i}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, desc, tags = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">Thumbnail</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((t, i) => (
          <span key={i} className="text-xs border px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  );
}
