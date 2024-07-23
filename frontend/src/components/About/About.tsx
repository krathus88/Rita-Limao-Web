import aboutImg from "@images/about-img-1.webp";
import { Zoom, Fade } from "@mui/material";

export function About() {
    return (
        <article className="container" id="AboutArticle">
            <h2 className="text-center pb-3 fw-bold">About Me</h2>
            <p className="fs-5">
                Hello, my name is Rita Limão (aka “Lemon” in English). I am Portuguese
                living in London, England with a creative will to grow and thrive in the
                film industry.
            </p>
            <div className="d-flex ">
                <figure className=" text-center">
                    <Zoom in={true} timeout={500}>
                        <img className="rounded" src={aboutImg} width="325" />
                    </Zoom>
                    <Fade in={true} timeout={1250}>
                        <figcaption>Hey, that’s me.</figcaption>
                    </Fade>
                </figure>
                <div>
                    <p className="fs-5">
                        I like to work! I enjoy the feeling of creating and being
                        involved in projects.
                    </p>
                    <p className="fs-5">
                        I worked mostly on student films and assisted as freelance in
                        music videos. On the spare time I also create content for
                        several social media accounts.
                    </p>
                    <p className="fs-5">
                        I started my work and connections at University of Hertfordshire
                        in Hatfield, UK. I am now ready to move by myself and the quote
                        “learning by doing” fits me perfectly.
                    </p>
                </div>
            </div>

            <p className="fs-5">
                If I don’t know something I ask and I research about it. I learned how
                to work efficiently both on the field and in front of my computer and I
                am pretty comfortable with my approach so far as it led me to where I am
                now.
            </p>
            <p className="fs-5">
                Feel free to contact me. I would love to work and collaborate with you
                as I am sure we would find something great to create!
            </p>
        </article>
    );
}
