import About from "@/components/About"; 

export default function ContactPage() { 
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="mt-8">
                <About 
                    title="Contact Me" 
                    description="Feel free to reach out to me!"
                    technologies="N/A"
                    link="N/A"
                    screenshot="N/A"
                />
            </div>
        </div>
    );
} 