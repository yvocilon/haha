import { useRef, useEffect } from "react";

interface Props {
    items: ReadonlyArray<string>;
}

enum Direction {
    Up = "up",
    Down = "down",
}

export default function AnimatedList({ items }: Props) {
    const timer = useRef(null);
    const direction = useRef(Direction.Down);
    const itemCount = items.length;
    const index = useRef(null);

    function up() {
        index.current++;
        direction.current = Direction.Up;
        document.documentElement.style.setProperty("--index", index.current);
    }

    function down() {
        index.current--;
        direction.current = Direction.Down;
        document.documentElement.style.setProperty("--index", index.current);
    }

    useEffect(
        function AnimatedListEffect() {
            if (timer.current) {
                clearInterval(timer.current);
            }

            if (index.current === null) {
                index.current = parseInt(
                    getComputedStyle(document.documentElement).getPropertyValue(
                        "--index"
                    ),
                    10
                );
            }

            timer.current = setInterval(function onInterval() {
                if (direction.current === Direction.Down) {
                    if (index.current <= 1 - itemCount) {
                        up();
                    } else {
                        down();
                    }
                } else {
                    if (index.current >= 0) {
                        down();
                    } else {
                        up();
                    }
                }
            }, 1500);
        },
        [JSON.stringify(items)]
    );

    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <style jsx>{`
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0 1ch;
                    height: var(--height);
                    overflow: hidden;
                    display: inline-block;
                }

                li {
                    transition-duration: var(--transition-duration);
                    transition-property: transform;
                    padding: 0;
                    margin: 0;
                    height: var(--height);
                    line-height: var(--height);
                    text-align: center;
                    transform: translateY(calc(var(--index) * var(--height)));
                    font-size: var(--font-size);
                }
            `}</style>
        </>
    );
}
