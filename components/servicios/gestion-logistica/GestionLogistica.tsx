"use client";

import Clients from "./Clients";
import ContactSection from "./ContactSection";
import Hero from "./Hero";
import Process from "./Process";
import ValueProposition from "./ValueProposition";




export default function GestionLogistica() {
    return (
        <div>
            <Hero />
            <Process />
            <ContactSection />
            <ValueProposition />
            <Clients />

        </div>
    );
}