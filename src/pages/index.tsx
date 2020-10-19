import AnimatedList from "../components/animated-list/AnimatedList";

export default function Page() {
    return (
        <>
            <div className="wrapper">
                <h1>
                    Freelance
                    <AnimatedList
                        items={[
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "React Native",
                            "Electron",
                            "Next.js",
                            "C#",
                        ]}
                    />
                    Developer
                </h1>
            </div>

            <style jsx>{`
                h1 {
                    margin: 0;
                    font-size: var(--font-size);
                    padding: 0;
                    height: var(--height);
                    display: block;
                    display: flex;
                    align-items: center;
                }

                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                }

                @media (max-width: 1200px) {
                    h1 {
                        flex-direction: column;
                        height: auto;
                        align-items: flex-start;
                    }

                    div {
                        align-items: flex-start;
                        justify-content: flex-start;
                    }
                }
            `}</style>
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

                :root {
                    --index: 0;
                    --height: 6rem;
                    --transition-duration: 0.5s;
                    --font-size: 5rem;
                }

                html,
                body,
                #__next {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    font-family: "Roboto", sans-serif;
                    background-color: #202124;
                    color: white;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>
    );
}
