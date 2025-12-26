
export const ProcessSteps = () => {
    const steps = [
        {
            number: "1",
            title: "Análise",
            description: "Entendemos profundamente seu processo atual."
        },
        {
            number: "2",
            title: "Criação",
            description: "Desenvolvemos o agente de IA ideal."
        },
        {
            number: "3",
            title: "Integração",
            description: "Conectamos com todos os seus sistemas."
        },
        {
            number: "4",
            title: "Go Live",
            description: "Sua automação em plena operação imediata."
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-12 text-center">Como funciona</h2>

                <div className="relative space-y-12 pl-4">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-blue-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 items-start relative">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 border-4 border-white ${index === 3 ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-blue-500 border-blue-100'}`}>
                                {step.number}
                            </div>
                            <div className="pt-2">
                                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
