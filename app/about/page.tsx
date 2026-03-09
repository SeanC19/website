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
        </div>
    );
} 