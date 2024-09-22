import myImage from '../../assets/myself.png';

const workStatus: string = 'Customer Service Executive';
const companyTitle: string = 'Ufone 4G, PTCL Group';
const i: string = 'AboutMe';
const AboutMe: React.FC = () => {
    return (
        <section className='about-me-section'>
            <code className='code-left'>&lt;{i}&gt; </code>
            <div className='about-me-content'>
                <div className='profile'>
                    <img src={myImage} alt='Waleed Ali Sarwar' />
                <p>
                    I'm a <span className="lettercase"> Full-stack Developer</span> with a passion for developing software solutions. I have experience in developing applications using <span className='lettercase'>.NET Core</span>. I have not a solid big tech background in software development, but I'm always looking to learn new technologies and improve my skills. I'm currently working as a <span className='lettercase'>{workStatus}</span> at <span className='lettercase'>{companyTitle}</span>, and I'm also pursuing a Bachelor's of Science in <span className="lettercase">Bioinformatics</span> from the <span className="lettercase"> Virtual University of Pakistan</span>.
                </p>
                </div>
            </div>
            <code className='code-right'>
            &lt;/{i}&gt;
        </code>
        </section>
    );
}
export default AboutMe;