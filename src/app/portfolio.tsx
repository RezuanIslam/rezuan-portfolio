// Portfolio Website for Rezuan Islam
// Using React + Tailwind CSS + shadcn/ui for design
// All content and layout based on Rezuan's academic and professional profile

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <img
          src="/images/profile-headshot.png"
          alt="Rezuan Islam"
          className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400"
        />
        <h1 className="text-4xl font-bold mt-4">Rezuan Islam</h1>
        <p className="text-cyan-400 text-lg mt-2">
          Cybersecurity & Digital Forensics Enthusiast
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:rezuanislamratul@gmail.com"><Mail /></a>
          <a href="https://www.linkedin.com/in/rezuan-islam" target="_blank"><Linkedin /></a>
          <a href="https://github.com/RezuanIslam" target="_blank"><Github /></a>
          <a href="tel:+447466003434"><Phone /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-cyan-500 inline-block">About Me</h2>
        <p className="text-lg leading-relaxed">
          MSc student in Cybersecurity & Digital Forensics at University of Wales Trinity Saint David, with a BSc in Computer Science & Engineering from AIUB. Experienced Research Assistant skilled in digital evidence collection, ethical hacking, AI-integrated security, and forensic reporting. Passionate about bridging cybersecurity and AI for secure digital futures.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-900 px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card><CardContent>Network Security, Threat Analysis, Ethical Hacking</CardContent></Card>
          <Card><CardContent>Python, Bash, PowerShell, Automation</CardContent></Card>
          <Card><CardContent>Autopsy, FTK Imager, Wireshark, Kali Linux Tools</CardContent></Card>
          <Card><CardContent>Linux, Windows Forensics, TCP/IP, IDS/IPS</CardContent></Card>
          <Card><CardContent>MITRE ATT&CK, ISO 27001, Incident Response</CardContent></Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-cyan-500 inline-block">Projects</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Dawn – NASA Global Nominee</h3>
              <p>Anomaly detection, LLM recommendations, IoT automation. NASA Space Apps 2024 nominee. <a className="text-cyan-400 underline" href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/eternity1/?tab=details">View on NASA</a></p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Harmony – Therap JavaFest</h3>
              <p>Smart irrigation system with AI-based fertilizer recommendation using IoT sensors.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-900 px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Experience</h2>
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold">Research Assistant – AIUB</h3>
            <p>Worked on computer vision and deep learning projects. Tasks included literature reviews, dataset curation, model training, and team collaboration.</p>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-cyan-500 inline-block">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card><CardContent>ISC² Certified in Cybersecurity (CC)</CardContent></Card>
          <Card><CardContent>Microsoft Azure AI Fundamentals (AI-900)</CardContent></Card>
          <Card><CardContent>Cisco IT Essentials</CardContent></Card>
          <Card><CardContent>Introduction to Data Analytics – Simplilearn</CardContent></Card>
        </div>
      </section>

      {/* Volunteer Work */}
      <section className="bg-gray-800 px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Volunteer Work</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Volunteer at ESAB – AIUB Unit Face</li>
          <li>Volunteer at Volunteer for Bangladesh – VBD</li>
          <li>Rover Scout at Bangladesh Scouts</li>
          <li>Member of AIUB Community of Engineering Students (ACES)</li>
        </ul>
      </section>

      {/* Meet Me Section */}
      <section className="px-6 md:px-16 py-12 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Meet Me</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img src="/images/photo-sit.jpg" alt="Rezuan sitting" className="rounded-lg shadow-lg w-64" />
          <img src="/images/photo-stand.jpg" alt="Rezuan standing" className="rounded-lg shadow-lg w-64" />
        </div>
        <p className="mt-6 text-lg italic text-gray-300">“Securing the digital world with purpose, precision, and a passion for learning.”</p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 px-6 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Get in Touch</h2>
        <p>Email: rezuanislamratul@gmail.com | WhatsApp: +44 7466 003434</p>
      </section>
    </div>
  );
}
// (React code inserted here - see canvas)
