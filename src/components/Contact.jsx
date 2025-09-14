import resume from "../assets/KelvinOkochaResume.pdf";
function Contact () {
    return (
        <>
            <h1 id="contact" className="text-white font-wix font-bold text-7xl">CONTACT</h1>
            <h3 className="text-white mt-5">Currently available for career opportunities! Shoot me an email at:{" "}
            <a href="mailto:kelvinokocha777@gmail.com" className="underline font-bold">kelvinokocha777@gmail.com</a></h3>
            <h3 className="text-white font-bold underline"><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></h3>
        </>
    );
}
export default Contact;