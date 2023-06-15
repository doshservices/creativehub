import './components.scss';
import { FC } from 'react';

interface prop {
    onClick: any;
    className: string
}

const top: Array<string> = ["Ballet Dancer", "Sugar Mixer", "Songwriters", "Sound Engineer", "Male Singer", "Beat Makers", "Beat Makers", "Designers", "Artists"]

export const ExploreDropdown: FC<prop> = ({ onClick, className }) => {
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
            <section className="alphabetically"></section>
        </div>
    )
}