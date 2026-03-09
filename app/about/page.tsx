import About from "@/components/About"; 

export default function AboutPage() { 
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">About</h1>
            <div className="mt-8">
                <About 
                    title="About Me" 
                    description="I am a passionate developer with experience in various technologies."
                    technologies="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
            </div>
            <a
                href="/website-files/Resume (Spring 2026) -Sean Conley .pdf"
                target="_blank"
                className="border px-4 py-2 rounded"
                >
                Download My Latest Resume
            </a>
            <a
                href="/website-files/Foundry and AIP Builder Foundations Quiz.pdf"
                target="_blank"
                className="border px-4 py-2 rounded"
                >
                Download Foundry and AIP Builder Foundations Certificate
            </a>
            <a
                href="/website-files/Introduction to Foundry and AIP.pdf"
                target="_blank"
                className="border px-4 py-2 rounded"
                >
                Download Introduction to Foundry and AIP Certificate
            </a>
            <a
                href="/website-files/CompTIA Security+ ce certificate.pdf"
                target="_blank"
                className="border px-4 py-2 rounded"
                >
                Download CompTIA Security+ Certificate
            </a>
        </div>
    );
} 