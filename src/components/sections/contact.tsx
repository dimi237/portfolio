import { GithubIcon } from "components/icons/github";
import { LinkedinIcon } from "components/icons/linkedin";
import { ReeditIcon } from "components/icons/reedit";
import { XIcon } from "components/icons/x";
import { SocialItem } from "components/social-item";

const CONTACT_EMAIL = "contact@dimitrisigne.me";
const CONTACT_PHONE = "+237 698 949 789 / +237 682 820 667";
const LINKEDIN_URL = "https://linkedin.com/in/yourprofile";
const GITHUB_URL = "https://github.com/yourprofile";
const X_URL = "https://x.com/yourprofile";
const REEDIT_URL = "https://reedit.com/yourprofile";
const socials = [
    { icon: <LinkedinIcon />, url: LINKEDIN_URL, label: "LinkedIn" },
    { icon: <GithubIcon />, url: GITHUB_URL, label: "GitHub" },
    { icon: <ReeditIcon />, url: REEDIT_URL, label: "Reedit" },
    { icon: <XIcon />, url: X_URL, label: "X" },
]

export default function ContactSection() {
    return (
        <section className="flex flex-col md:flex-row items-center text-black gap-20">
            <div className="flex-1 flex flex-col justify-center max-w-[500px]">
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border rounded px-4 py-2 ring focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded px-4 py-2 ring focus:outline-none"
                        required
                    />
                    <textarea
                        placeholder="How can I help you?"
                        className="border rounded px-4 py-2 h-24 resize-none focus:outline-none ring"
                        required
                    />
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <button
                            type="submit"
                            className="text-white px-6 py-3 rounded font-semibold bg-black transition h-[48px]"
                        >
                            Get in touch
                        </button>
                        {socials.map((social) => <SocialItem label={social.label} link={social.url} icon={social.icon} key={social.label} />)}
                    </div>
                </form>
            </div>
            <div className="flex-1 flex flex-col justify-center rounded-lg gap-4">

                <span className='text-display font-extrabold'>
                    Let's  <span className='text-outlined font-extrabold'>talk</span> for something special
                </span>
                <p className="text-medium font-regular text-zinc-500">
                    Whether you have a question, a project idea, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations!
                </p>

                <a href={`mailto:${CONTACT_EMAIL}`}>
                    <h3 className="font-semibold">{CONTACT_EMAIL}</h3>
                </a>
                <a href={`tel:${CONTACT_PHONE}`} >
                    <h3 className="font-semibold">{CONTACT_PHONE}</h3>
                </a>
            </div>
        </section>
    );
}