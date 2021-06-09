import styled from 'styled-components';
import Image from 'next/image';

const AboutStyles = styled.div`
    margin: 3rem auto;
    background-color: rgba(255, 255, 255, 0.9);
    height: auto;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1);
    padding-bottom: 3rem;
    padding: 3rem 4rem;
    .title {
        font-size: 3rem;
        text-align: center;
        font-weight: 500;
    }
    .info {
        font-size: 1.5rem;
    }
    .image {
        position: relative;
        margin: 3rem auto;
        width: 70%;
        height: 50rem;
    }
    @media all and (max-width: 600px) {
        margin: 1.5rem auto;
        padding: 2rem 2.5rem;
        .title {
            font-size: 2.5rem;
            text-align: center;
            font-weight: 500;
        }
        .info {
            font-size: 1.4rem;
        }
        .image {
            position: relative;
            margin: 3rem auto;
            width: 100%;
            height: 25rem;
        }
    }
`;

export default function About() {
    return (
        <AboutStyles>
            <p className="title">About Us</p>
            <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas suscipit nibh a justo lobortis facilisis. Cras
                fermentum libero purus, laoreet porttitor enim viverra et. Donec
                bibendum viverra tortor sit amet lobortis. Mauris elit libero,
                placerat a lectus sed, venenatis varius elit. Fusce hendrerit
                hendrerit elit, quis fermentum ipsum vestibulum in. Sed orci
                ligula, pharetra eu suscipit quis, vehicula vel arcu. Curabitur
                condimentum leo sit amet massa luctus, id hendrerit ex bibendum.
                Aliquam ullamcorper tortor non interdum tincidunt. In ultrices
                accumsan lorem, ac fermentum metus condimentum sed. Mauris mi
                felis, scelerisque eu luctus vel, imperdiet sed quam.
                Pellentesque id ex at enim egestas egestas et sed elit. Vivamus
                finibus ex justo, et aliquet lacus sodales eget. Suspendisse vel
                aliquet arcu. Donec placerat arcu ac tellus mattis tempus. Sed
                in quam tincidunt est interdum ultricies. Etiam eu quam
                condimentum nibh facilisis congue non sit amet lectus.
            </p>
            <p className="info">
                Quisque ultrices sem leo, nec tincidunt augue bibendum non.
                Curabitur aliquam ornare quam vel scelerisque. Donec sit amet
                elit luctus, varius diam ac, vehicula magna. Quisque quis ex
                efficitur, congue nulla in, elementum mi. Duis ac leo volutpat,
                vestibulum risus eu, mattis ipsum. Nullam tincidunt hendrerit
                libero in luctus. Suspendisse vitae massa sit amet lectus
                pellentesque tempor vel sed neque. In non fermentum ante. Donec
                eleifend ullamcorper mi nec rhoncus. Nullam in sagittis lectus.
                Cras congue rutrum magna. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="info">
                Duis semper dui quam, in bibendum ligula maximus eu. Morbi felis
                est, varius id euismod id, fringilla in eros. Duis eget dolor
                nisi. Maecenas consectetur consequat vulputate. Cras varius
                congue ipsum ut ultrices. Quisque bibendum tristique lacus vel
                euismod. Nulla et vestibulum sem. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam orci felis, volutpat at
                erat non, ultrices molestie lacus. Aenean a pellentesque dui.
            </p>
            <div className="image">
                <Image
                    src="/images/tike-mockup/about-shop.jpg"
                    alt="shop photo"
                    layout="fill"
                />
            </div>
        </AboutStyles>
    );
}
