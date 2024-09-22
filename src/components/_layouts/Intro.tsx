import TypingEffect from './TypeEffect';

const Intro: React.FC = () => {
    const i: string = 'Intro';

    return (
    <section className='intro-section'>
        <code className='code-left'>
            &lt;{i}&gt;
        </code>
        <div className='intro-content'>
            <div className='intro-info'>
                {<TypingEffect />}
            </div>
        </div>
        <code className='code-right'>
            &lt;/{i}&gt;
        </code>
    </section>);
}
export default Intro;