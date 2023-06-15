import './components.scss';
import { FC } from 'react';

interface prop {
    onClick: any;
    className?: string
}

const top: Array<string> = ["Ballet Dancer", "Sugar Mixer", "Songwriters", "Sound Engineer", "Male Singer", "Beat Makers", "Designers", "Artists"]

export const ExploreDropdown: FC<prop> = ({ className }) => {
    return (
        <div className={`explore__dropdown ${className}`}>
            <section className="top">
                <h3>Top Creatives</h3>
                <div>
                    {top.map((tops: any, index: number) => {
                        return (
                            <p key={index}>{tops}</p>
                        )
                    })}
                </div>
            </section>
            <section className="alphabetically">
                <h3>Alphabetically</h3>
                <div>
                    <h4>A</h4>
                    <p>Afrobeat Dancer</p>
                    <p>Afrobeat Dancer</p>
                    <h4>B</h4>
                    <p>Ballet Dancer</p>
                    <p>Beat Maker</p>
                    <p>Beat Maker</p>
                    <h4>C</h4>
                    <p>Coffee Maker</p>
                </div>
            </section>
        </div>
    )
}