import './components.scss';

const creatives: Array<object> = [
    {
        name: 'Dancers',
        img: '',
    },
    {
        name: 'Sound Engineer',
        img: '',
    },
    {
        name: 'Male Singer',
        img: '',
    },
    {
        name: 'DJs',
        img: '',
    },
    {
        name: 'Sound Engineer',
        img: '',
    },
    {
        name: 'DJs',
        img: '',
    },
    {
        name: 'Dancers',
        img: '',
    },
    {
        name: 'Male Singers',
        img: '',
    },
]

const Creative = () => {

    return (
        <section id="home__creatives">
            <h2>Top Creatives</h2>
            <div className='creatives'>
                {creatives.map((creative: object | any, index: number) => {
                    return (
                        <figure key={index}>
                            <img src={creative.img} alt={creative.name} />
                            <figcaption>{creative.name}</figcaption>
                        </figure>
                    )
                })}
            </div>
            <button>More Creatives</button>
        </section>
    )
}

export default Creative;