import './style.scss';
import bb from '../assets/bb.svg';
import bt from '../assets/bt.svg';

interface types {
    className: string;
    heading: string;
    btnContent: string;
}

export const User = (props: types) => {
    return (
        <section className={`${props.className} user`}>
            <div className='overlay'>
                <button>
                    <img className='bt' src={bt} alt="" />
                    <img className='bb' src={bb} alt="" />
                    {props.btnContent}
                </button>
                <h2>{props.heading}</h2>
                <div>
                    <button>1</button>
                    <span></span>
                    <button>2</button>
                    <span></span>
                    <button>3</button>
                </div>
            </div>
        </section>
    )
}