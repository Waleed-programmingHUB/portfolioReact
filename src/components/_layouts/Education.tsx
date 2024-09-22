

const Education: React.FC = () => {
    const i: string = 'Education';

    return (
    <section className='intro-section'>
        <code className='code-left'>
            &lt;{i}&gt;
        </code>
        <div className='intro-content'>
            <div className='intro-info'>
                <h2>Education</h2>
                <p>
                    I'm currently pursuing a Bachelor's of Science in <span className="lettercase">Bioinformatics</span> from the <span className="lettercase"> Virtual University of Pakistan</span>.
                </p>
            </div>
            </div>
        <code className='code-right'>
            &lt;/{i}&gt;
        </code>
    </section>);
}
export default Education;